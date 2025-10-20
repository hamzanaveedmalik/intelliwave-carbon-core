import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';

interface ApplicationFormProps {
  trigger?: React.ReactNode;
  position?: string;
}

const positions = [
  'Senior Cloud Architect',
  'AI/ML Engineer',
  'Solutions Architect',
  'Business Development Executive',
];

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const ApplicationForm = ({
  trigger,
  position,
}: ApplicationFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [captchaReady, setCaptchaReady] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: position || '',
    resumeLink: '',
    coverLetter: '',
  });

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src =
        'https://www.google.com/recaptcha/api.js?render=6LfxVKQqAAAAAKVi9iYALGW8Hn4y--XqIaDInuSx';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setCaptchaReady(true);
      };
      document.body.appendChild(script);
    };

    if (!document.querySelector('script[src*="google.com/recaptcha"]')) {
      loadRecaptcha();
    } else {
      setCaptchaReady(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.resumeLink) {
      toast({
        title: 'Resume link required',
        description: 'Please provide a link to your resume.',
        variant: 'destructive',
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(formData.resumeLink);
    } catch {
      toast({
        title: 'Invalid URL',
        description:
          'Please provide a valid resume link (e.g., Google Drive, Dropbox, LinkedIn).',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const submitData = new FormData();
      submitData.append('access_key', '7329d1f3-33f5-4ea7-ba08-54949569f867');
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('position', formData.position);
      submitData.append('resumeLink', formData.resumeLink);
      submitData.append('coverLetter', formData.coverLetter);

      // Add reCAPTCHA token if available (optional)
      if (captchaReady && window.grecaptcha) {
        try {
          const token = await window.grecaptcha.execute(
            '6LfxVKQqAAAAAKVi9iYALGW8Hn4y--XqIaDInuSx',
            {
              action: 'submit',
            }
          );
          submitData.append('g-recaptcha-response', token);
          console.log('reCAPTCHA token added');
        } catch (captchaError) {
          console.warn(
            'reCAPTCHA error (continuing without it):',
            captchaError
          );
        }
      }

      submitData.append(
        'subject',
        `Job Application: ${formData.position} - ${formData.name}`
      );

      console.log('Submitting to Web3Forms...');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();
      console.log('Web3Forms response:', data);

      if (data.success) {
        toast({
          title: 'Application submitted!',
          description:
            "Thank you for applying. We'll review your application and get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          resumeLink: '',
          coverLetter: '',
        });
        setOpen(false);
      } else {
        // Show the actual error from Web3Forms
        const errorMsg = data.message || 'Failed to submit application';
        console.error('Web3Forms error response:', data);
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to submit application. Please check console for details.';
      toast({
        title: 'Submission Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Apply Now</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Submit Your Application
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for this position. We'll review
            your application and contact you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">
                Position <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.position}
                onValueChange={(value) =>
                  setFormData({ ...formData, position: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                  {positions.map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resumeLink">
              Resume / CV Link <span className="text-destructive">*</span>
            </Label>
            <p className="text-sm text-muted-foreground">
              Provide a link to your resume (Google Drive, Dropbox, LinkedIn,
              personal website, etc.)
            </p>
            <Input
              id="resumeLink"
              name="resumeLink"
              type="url"
              placeholder="https://drive.google.com/file/..."
              value={formData.resumeLink}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              💡 Tip: Make sure your link is publicly accessible or set to
              "Anyone with the link can view"
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
            <p className="text-sm text-muted-foreground">
              Tell us why you're a great fit for this position
            </p>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="I am excited to apply for this position because..."
              className="min-h-[150px] resize-none"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>
                Protected by reCAPTCHA. This form is secured against spam and
                bots.
              </span>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
