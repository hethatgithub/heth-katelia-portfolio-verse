import { Code, Database, Globe, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      subtitle: 'Full-stack applications with modern technologies',
      description: 'Building scalable, responsive web applications using cutting-edge technologies like Angular, React, Spring Boot, and Java. From concept to deployment, I deliver robust solutions.',
      features: [
        'Responsive Design & UI/UX',
        'RESTful API Development',
        'Database Design & Integration',
        'Authentication & Security',
        'Performance Optimization',
        'Testing & Quality Assurance'
      ],
      technologies: ['Angular', 'React', 'Spring Boot', 'Java', 'TypeScript', 'HTML5/CSS3'],
      price: 'Starting at ₹25,000',
      timeline: '2-6 weeks'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      subtitle: 'Transform data into actionable insights',
      description: 'Creating comprehensive dashboards and data visualizations using Power BI, Python, and Excel. Turn your raw data into meaningful business intelligence.',
      features: [
        'Interactive Dashboards',
        'Data Visualization',
        'Business Intelligence Reports',
        'KPI Tracking & Monitoring',
        'Data Modeling & ETL',
        'Automated Reporting'
      ],
      technologies: ['Power BI', 'Python', 'Excel', 'SQL', 'Tableau', 'DAX'],
      price: 'Starting at ₹15,000',
      timeline: '1-3 weeks'
    },
    {
      icon: Globe,
      title: 'API Integration & Automation',
      subtitle: 'Connect systems and automate workflows',
      description: 'Developing REST APIs and automating business processes with Python scripting. Seamlessly integrate different systems and improve operational efficiency.',
      features: [
        'REST API Development',
        'Third-party Integrations',
        'Workflow Automation',
        'Data Synchronization',
        'Process Optimization',
        'System Integration'
      ],
      technologies: ['Python', 'REST APIs', 'Microservices', 'Docker', 'AWS', 'Git'],
      price: 'Starting at ₹20,000',
      timeline: '1-4 weeks'
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      subtitle: 'Protect and monitor your digital assets',
      description: 'Implementing security best practices including network forensics, health record encryption, and cyber simulation projects to safeguard your applications.',
      features: [
        'Security Audits & Assessment',
        'Network Forensics',
        'Data Encryption',
        'Penetration Testing',
        'Security Monitoring',
        'Compliance Solutions'
      ],
      technologies: ['Kali Linux', 'Python', 'JWT', 'SSL/TLS', 'Cybersecurity Tools'],
      price: 'Starting at ₹30,000',
      timeline: '2-5 weeks'
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'Building your solution with regular updates and rigorous testing'
    },
    {
      icon: Zap,
      title: 'Deployment & Support',
      description: 'Launching your project and providing ongoing maintenance support'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive digital solutions combining technical expertise with creative problem-solving. 
            From web development to data analytics, I help businesses achieve their digital transformation goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-soft hover-lift hover:shadow-hover transition-smooth">
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-semibold text-foreground">{service.timeline}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full btn-primary hover-lift" 
                    asChild
                  >
                    <a href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <section className="bg-secondary/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How I Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My streamlined process ensures efficient delivery and exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-8"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 hover-lift" asChild>
              <a href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift" asChild>
              <a href="/projects">
                View Portfolio
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;