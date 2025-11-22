import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  badge: 'Front-End' | 'Back-End';
  demoUrl?: string;
  githubUrl?: string;
  status?: 'Em Desenvolvimento' | 'Concluído';
}

const ProjectCard = ({
  title,
  description,
  image,
  badge,
  demoUrl,
  githubUrl,
  status = 'Concluído',
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-heading text-foreground">{title}</h3>
          <Badge
            variant={badge === 'Front-End' ? 'default' : 'secondary'}
            className={badge === 'Front-End' ? 'bg-primary/20 text-primary' : ''}
          >
            {badge}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {status === 'Em Desenvolvimento' && (
          <Badge variant="outline" className="text-xs">
            Em Desenvolvimento
          </Badge>
        )}

        <div className="flex gap-3 pt-2">
          {demoUrl && (
            <Button
              asChild
              size="sm"
              className="btn-gold flex-1"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Ver Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Código
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
