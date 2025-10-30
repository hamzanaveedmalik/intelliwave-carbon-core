import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  status: 'demo' | 'concept' | 'sample';
}

export const PortfolioCard = ({
  title,
  description,
  techStack,
  imageUrl,
  demoUrl,
  status,
}: PortfolioCardProps) => {
  const statusLabels = {
    demo: 'Live Demo',
    concept: 'Concept',
    sample: 'Sample',
  };

  const statusColors = {
    demo: 'bg-green-100 text-green-800',
    concept: 'bg-blue-100 text-blue-800',
    sample: 'bg-purple-100 text-purple-800',
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} - Professional Web Development Project by Intelliwave`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={() => demoUrl && window.open(demoUrl, '_blank')}
        >
          {demoUrl ? 'View Demo' : 'Coming Soon'}
          {demoUrl && <ExternalLink className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </Card>
  );
};
