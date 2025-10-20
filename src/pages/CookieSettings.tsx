import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Cookie, Settings, Shield, BarChart3, Users } from 'lucide-react';

export default function CookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Necessary Cookies',
      description: 'Essential cookies that enable basic website functionality and security features. These cannot be disabled.',
      required: true,
      examples: ['Session management', 'Security tokens', 'Form submissions'],
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      required: false,
      examples: ['Page views', 'User behavior', 'Performance metrics'],
    },
    {
      id: 'marketing',
      icon: Users,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      required: false,
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
    },
    {
      id: 'preferences',
      icon: Settings,
      title: 'Preference Cookies',
      description: 'Remember your choices and preferences to provide a personalized experience.',
      required: false,
      examples: ['Language settings', 'Theme preferences', 'Customized content'],
    },
  ];

  const handleToggle = (cookieType: string) => {
    if (cookieType === 'necessary') return; // Can't disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof prev]
    }));
  };

  const handleSavePreferences = () => {
    // In a real implementation, you would save these preferences to localStorage
    // and update your cookie consent system
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    
    // Show success message (you could use a toast here)
    alert('Cookie preferences saved successfully!');
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    alert('All cookies accepted!');
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    alert('Only necessary cookies accepted.');
  };

  return (
    <PageLayout title="Cookie Settings">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Cookie className="h-10 w-10 text-primary" />
                Cookie Settings
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your cookie preferences and privacy settings
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">About Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can control which cookies you accept using the settings below. Please note that 
                  disabling certain cookies may affect the functionality of our website.
                </p>
              </Card>

              {/* Cookie Types */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Cookie Preferences</h2>
                <div className="space-y-4">
                  {cookieTypes.map((cookieType) => {
                    const Icon = cookieType.icon;
                    const isEnabled = cookiePreferences[cookieType.id as keyof typeof cookiePreferences];
                    
                    return (
                      <Card key={cookieType.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex-shrink-0">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold">{cookieType.title}</h3>
                                {cookieType.required && (
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                {cookieType.description}
                              </p>
                              <div className="text-xs text-muted-foreground">
                                <strong>Examples:</strong> {cookieType.examples.join(', ')}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <Switch
                              checked={isEnabled}
                              onCheckedChange={() => handleToggle(cookieType.id)}
                              disabled={cookieType.required}
                            />
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-semibold mb-4">Save Your Preferences</h2>
                <p className="text-muted-foreground mb-6">
                  Choose your preferred cookie settings and save them to customize your experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleSavePreferences} className="flex-1">
                    Save Preferences
                  </Button>
                  <Button onClick={handleAcceptAll} variant="outline" className="flex-1">
                    Accept All Cookies
                  </Button>
                  <Button onClick={handleRejectAll} variant="outline" className="flex-1">
                    Reject All (Necessary Only)
                  </Button>
                </div>
              </Card>

              {/* Additional Information */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">More Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How to Manage Cookies in Your Browser</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You can also control cookies directly through your browser settings:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                      <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm text-muted-foreground">
                      If you have questions about our cookie policy or need help with your preferences, 
                      please contact us at{' '}
                      <a href="mailto:privacy@intelliwave.com" className="text-primary hover:underline">
                        privacy@intelliwave.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Last Updated */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
