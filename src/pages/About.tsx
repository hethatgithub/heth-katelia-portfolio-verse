import { GraduationCap, Award, Code2, Database, Globe, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Engineering',
      institution: 'KJ Somaiya Institute of Technology',
      grade: 'SGPA: 8.45/10',
      year: '2021 - 2025',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Ruia College',
      grade: '91%',
      year: '2019 - 2021',
      icon: GraduationCap
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Rosary High School',
      grade: '86%',
      year: '2019',
      icon: GraduationCap
    }
  ];

  const skills = [
    { category: 'Programming Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'], icon: Code2 },
    { category: 'Web Development', items: ['Angular', 'React', 'Spring Boot', 'HTML5', 'CSS3', 'REST APIs'], icon: Globe },
    { category: 'Data & Analytics', items: ['Power BI', 'Excel', 'Data Visualization', 'Business Intelligence'], icon: Database },
    { category: 'Tools & Technologies', items: ['Git', 'Linux', 'Microservices', 'JWT', 'Docker'], icon: Shield }
  ];

  const certifications = [
    'Cybersecurity Fundamentals',
    'Machine Learning with Python',
    'Ethical Hacking Essentials',
    'Advanced Data Analytics',
    'Cloud Computing Basics',
    'Agile Development Practices'
  ];

  const achievements = [
    'Developed 15+ full-stack applications with modern tech stack',
    'Created comprehensive BI dashboards for data-driven decision making',
    'Implemented secure authentication systems using JWT and microservices',
    'Led academic projects with focus on real-world problem solving',
    'Maintained 8.45/10 SGPA throughout engineering coursework',
    'Active contributor to open-source projects on GitHub'
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate Full Stack Developer and Data Analyst based in Mumbai, India. With expertise in 
              modern web technologies and data analytics, I specialize in building scalable applications and 
              creating insightful dashboards that drive business value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology is driven by curiosity and a commitment to continuous learning. 
              I believe in writing clean, efficient code and transforming complex data into actionable insights.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-soft hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                          <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{item.year}</span>
                        </div>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          {item.grade}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-soft hover-lift transition-smooth">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span>{skillGroup.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Certifications
            </h2>
            <Card className="gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <CheckCircle className="h-6 w-6 text-primary mr-3" />
              Key Achievements
            </h2>
            <Card className="gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;