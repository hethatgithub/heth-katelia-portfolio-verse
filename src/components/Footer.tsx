import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hethatgithub',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/heth-katelia-',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:hskatelia@gmail.com',
      label: 'Email'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'hskatelia@gmail.com',
      href: 'mailto:hskatelia@gmail.com'
    },
    {
      icon: Phone,
      text: '+91 9082745259',
      href: 'tel:+919082745259'
    },
    {
      icon: MapPin,
      text: 'Mumbai, India',
      href: '#'
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-xl">HK</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Heth Katelia</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer & Data Analyst</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate about building scalable applications and creating insightful data visualizations. 
              Transforming ideas into digital solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-smooth" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground">
                Available for freelance opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Heth Katelia. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Built with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;