import { ArrowRight, Github, Linkedin, Download, Code, Database, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable business insights'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Creating interactive dashboards and data visualizations'
    }
  ];

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '8.45/10', label: 'Academic SGPA' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/30"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated greeting */}
            <div className="fade-in-up">
              <p className="text-lg sm:text-xl text-primary font-medium mb-4">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Heth Katelia
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
                Full Stack Developer & Data Analyst
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Passionate about building scalable applications and creating insightful data visualizations. 
                Based in Mumbai, India, transforming ideas into digital solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-left flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4 hover-lift"
                asChild
              >
                <a href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 hover-lift"
                asChild
              >
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="fade-in-right flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="hover-lift" asChild>
                <a 
                  href="https://github.com/hethatgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover-lift" asChild>
                <a 
                  href="https://linkedin.com/in/heth-katelia-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover-lift">
                <Download className="h-5 w-5 mr-2" />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-soft hover-lift hover:shadow-hover transition-smooth">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;