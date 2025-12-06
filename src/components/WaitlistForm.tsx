import { useState } from 'react';
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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WaitlistFormProps {
  trigger?: React.ReactNode;
  formspreeId?: string;
}

export const WaitlistForm = ({
  trigger,
  formspreeId = 'YOUR_FORMSPREE_ID',
}: WaitlistFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    storeName: '',
    storeUrl: '',
    productCount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Intelliwave Chat Waitlist Signup',
          _template: 'box',
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description:
            "You're on the waitlist! We'll notify you when Intelliwave Chat launches. Check your email for confirmation.",
        });
        setFormData({
          email: '',
          storeName: '',
          storeUrl: '',
          productCount: '',
        });
        setOpen(false);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to join waitlist. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <DialogTitle className="text-2xl font-bold">
              Join the Intelliwave Chat Waitlist
            </DialogTitle>
          </div>
          <DialogDescription>
            Get early access and 50% off your first 3 months when we launch.
            We'll notify you as soon as Intelliwave Chat is available.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-muted-foreground">
              We'll send launch updates and your early access discount here
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name (Optional)</Label>
            <Input
              id="storeName"
              name="storeName"
              placeholder="My Shopify Store"
              value={formData.storeName}
              onChange={handleChange}
            />
            <p className="text-xs text-muted-foreground">
              Help us understand who's interested
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeUrl">Store URL (Optional)</Label>
            <Input
              id="storeUrl"
              name="storeUrl"
              type="url"
              placeholder="https://yourstore.myshopify.com"
              value={formData.storeUrl}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productCount">Number of Products (Optional)</Label>
            <Select
              value={formData.productCount}
              onValueChange={(value) =>
                handleSelectChange('productCount', value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10-100">10 - 100 products</SelectItem>
                <SelectItem value="100-500">100 - 500 products</SelectItem>
                <SelectItem value="500-1000">500 - 1,000 products</SelectItem>
                <SelectItem value="1000-5000">1,000 - 5,000 products</SelectItem>
                <SelectItem value="5000-10000">5,000 - 10,000 products</SelectItem>
                <SelectItem value="10000+">10,000+ products</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-1">
              🎉 Early Access Benefits
            </p>
            <ul className="text-xs text-purple-800 dark:text-purple-200 space-y-1">
              <li>• 50% off your first 3 months</li>
              <li>• Launch notification 1 week before public release</li>
              <li>• Priority support during beta</li>
            </ul>
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
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By joining, you agree to receive launch updates. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};




