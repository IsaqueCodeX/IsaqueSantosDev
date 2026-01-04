import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2026 Isaque Santos. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/IsaqueCodeX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
