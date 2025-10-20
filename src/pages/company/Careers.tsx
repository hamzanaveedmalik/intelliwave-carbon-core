import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export default function Careers() {
  const openings = [
    {
      title: 'Senior Cloud Architect',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'New York, NY / Remote',
      type: 'Full-time',
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Solutions Architect',
      department: 'Consulting',
      location: 'Boston, MA',
      type: 'Full-time',
    },
  ];

  return (
    <PageLayout title="Careers at Intelliwave">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a team of passionate technologists building the future of
              enterprise technology. We offer competitive compensation, flexible
              work arrangements, and opportunities for professional growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <ContactForm
                      formspreeId="mjkazjpv"
                      trigger={<Button variant="outline">Apply Now</Button>}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-accent rounded-sm p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💼 Competitive Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Health insurance, 401(k) matching, unlimited PTO, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🏠 Remote-First Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Work from anywhere with flexible hours and work-life balance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  📚 Professional Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Training budgets, certifications, and conference attendance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Clear career paths and leadership development programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
