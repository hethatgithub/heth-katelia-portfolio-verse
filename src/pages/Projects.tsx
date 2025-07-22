import { ExternalLink, Github, Eye, Code, Database, Shield, Smartphone, Globe, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'RM Onboarding System',
      description: 'A comprehensive platform to streamline Relationship Manager onboarding with OTP login, location-based client mapping, and interactive dashboard insights for better client management.',
      image: '/placeholder.svg',
      category: 'Full Stack',
      icon: Code,
      technologies: ['Angular', 'Spring Boot', 'JWT', 'Microservices', 'MySQL', 'TypeScript'],
      features: [
        'OTP-based authentication system',
        'Location-based client mapping',
        'Interactive dashboard with analytics',
        'Microservices architecture',
        'Real-time data synchronization'
      ],
      links: {
        github: 'https://github.com/hethatgithub',
        live: null
      },
      status: 'Completed',
      timeline: '3 months'
    },
    {
      title: 'Global Sales Report Dashboard',
      description: 'An interactive Power BI dashboard analyzing sales performance across multiple regions and time periods, providing executive-level insights for strategic decision making.',
      image: '/placeholder.svg',
      category: 'Data Analytics',
      icon: BarChart3,
      technologies: ['Power BI', 'DAX', 'SQL Server', 'Excel', 'ETL', 'Data Modeling'],
      features: [
        'Multi-dimensional sales analysis',
        'Interactive regional performance maps',
        'Time-series trend analysis',
        'KPI tracking and alerts',
        'Automated report generation'
      ],
      links: {
        github: null,
        live: 'https://app.powerbi.com/view?r=example'
      },
      status: 'Completed',
      timeline: '6 weeks'
    },
    {
      title: 'Help Flare',
      description: 'Mobile application concept designed to support disaster-affected areas with location-based issue reporting, emergency resource allocation, and real-time communication features.',
      image: '/placeholder.svg',
      category: 'Mobile App',
      icon: Smartphone,
      technologies: ['React Native', 'Maps API', 'Firebase', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time location tracking',
        'Emergency issue reporting',
        'Resource allocation system',
        'Multi-language support',
        'Offline mode capability'
      ],
      links: {
        github: 'https://github.com/hethatgithub',
        live: null
      },
      status: 'In Development',
      timeline: '4 months'
    },
    {
      title: 'Securing Health Records with Neural Networks',
      description: 'Advanced security system that encrypts patient health records and detects anomalies using deep learning algorithms to ensure data privacy and integrity.',
      image: '/placeholder.svg',
      category: 'AI/ML Security',
      icon: Shield,
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn'],
      features: [
        'Neural network-based encryption',
        'Anomaly detection algorithms',
        'HIPAA compliance measures',
        'Real-time threat monitoring',
        'Data integrity verification'
      ],
      links: {
        github: 'https://github.com/hethatgithub',
        live: null
      },
      status: 'Completed',
      timeline: '5 months'
    },
    {
      title: 'Net Guard Probe',
      description: 'Network forensics tool developed for detecting and analyzing flood-based attacks using Kali Linux and Python, providing comprehensive network security monitoring.',
      image: '/placeholder.svg',
      category: 'Cybersecurity',
      icon: Shield,
      technologies: ['Python', 'Kali Linux', 'Wireshark', 'Scapy', 'Network Analysis', 'Bash'],
      features: [
        'Real-time network monitoring',
        'Flood attack detection',
        'Traffic analysis and reporting',
        'Automated threat response',
        'Comprehensive logging system'
      ],
      links: {
        github: 'https://github.com/hethatgithub',
        live: null
      },
      status: 'Completed',
      timeline: '2 months'
    },
    {
      title: 'Inventory Management System',
      description: 'Desktop application built with Python and Tkinter featuring an intuitive user interface for managing product inventory, tracking stock levels, and generating reports.',
      image: '/placeholder.svg',
      category: 'Desktop App',
      icon: Database,
      technologies: ['Python', 'Tkinter', 'SQLite', 'Pandas', 'Matplotlib', 'ReportLab'],
      features: [
        'Product catalog management',
        'Stock level tracking',
        'Automated reorder alerts',
        'Sales and inventory reports',
        'Barcode scanning support'
      ],
      links: {
        github: 'https://github.com/hethatgithub',
        live: null
      },
      status: 'Completed',
      timeline: '6 weeks'
    }
  ];

  const categories = ['All', 'Full Stack', 'Data Analytics', 'Mobile App', 'AI/ML Security', 'Cybersecurity', 'Desktop App'];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise through real-world projects. From full-stack applications 
            to data analytics dashboards, each project demonstrates my commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-soft hover-lift hover:shadow-hover transition-smooth overflow-hidden">
                <div className="relative">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/50" />
                  </div>
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                    }`}
                    variant="secondary"
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-muted-foreground italic">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 gap-2 pt-2 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Timeline:</span>
                      <span className="text-xs font-medium text-foreground">{project.timeline}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover-lift text-xs"
                        asChild
                      >
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {project.links.live ? (
                      <Button 
                        className="flex-1 btn-primary hover-lift text-xs"
                        asChild
                      >
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Live
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="flex-1 text-xs"
                        disabled
                      >
                        <Eye className="mr-2 h-3 w-3" />
                        Demo Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4 hover-lift" asChild>
              <a href="/contact">
                Start a Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift" asChild>
              <a 
                href="https://github.com/hethatgithub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;