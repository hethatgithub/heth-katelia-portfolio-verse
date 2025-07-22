import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hethatgithub',
      label: 'GitHub',
      username: 'hethatgithub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/heth-katelia-',
      label: 'LinkedIn',
      username: 'heth-katelia-'
    },
    {
      icon: Mail,
      href: 'mailto:hskatelia@gmail.com',
      label: 'Email',
      username: 'hskatelia@gmail.com'
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.label} className="group relative">
              <Button
                variant="outline"
                size="sm"
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth shadow-soft hover:shadow-hover"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-hover">
                  <div className="flex items-center space-x-2">
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                  <div className="text-xs opacity-80 mt-1">{link.username}</div>
                  {/* Arrow */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;