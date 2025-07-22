import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hskatelia@gmail.com',
      href: 'mailto:hskatelia@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9082745259',
      href: 'tel:+919082745259',
      description: 'Available Mon-Fri, 9AM-6PM IST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      href: '#',
      description: 'Available for remote work worldwide'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      username: '@hethatgithub',
      href: 'https://github.com/hethatgithub',
      description: 'Check out my code repositories'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      username: '@heth-katelia-742617281',
      href: 'https://www.linkedin.com/in/heth-katelia-742617281',
      description: 'Connect with me professionally'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quick Response',
      description: 'I typically respond within 24 hours'
    },
    {
      icon: User,
      title: 'Personal Attention',
      description: 'Direct communication with me, no middlemen'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Available for calls across different time zones'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project or have a question? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send me a message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="resize-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-primary hover-lift"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-smooth">
                        <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-smooth group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-smooth">
                        <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.username}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Why Contact Me */}
            <Card className="gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Why work with me?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <section className="mt-20">
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Prefer a quick call?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Sometimes a conversation is more efficient than emails. I'm available for 
                quick calls to discuss your project requirements and timeline.
              </p>
              <Button size="lg" className="btn-primary hover-lift" asChild>
                <a href="tel:+919082745259">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;