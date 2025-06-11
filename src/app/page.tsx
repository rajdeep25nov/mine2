
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, FileText, Briefcase, Award, GraduationCap, Calendar, Trophy, ExternalLink, Brain, Database, Cloud, Terminal, Cog, Palette, Users, Code, Cpu, Network, LineChart } from "lucide-react";
import Link from 'next/link';
import { personalInfo, formatDateSafe } from '@/lib/portfolio-data'; // Updated import

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 md:flex-row md:text-left md:gap-12 pt-12 pb-8 animate-fade-in">
        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary shadow-lg transition-default hover:scale-105 hover:shadow-[0_0_15px_3px_hsl(var(--primary)/0.6)] hover:border-primary">
          <AvatarImage
             src={personalInfo.imageUrl}
             alt={personalInfo.name}
             className="object-cover"
             data-ai-hint={personalInfo.imageHint}
             />
          <AvatarFallback>{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] bg-clip-text text-transparent animate-textShine">
            {personalInfo.name}
          </h1>
           <div className="text-xl text-muted-foreground transition-default hover:text-foreground cursor-default flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1">
            {personalInfo.titleParts.map((part, index) => (
              <span key={index} className="flex items-center whitespace-nowrap">
                {part.icon && <part.icon className="mr-2 h-5 w-5 text-accent" />}
                {part.role}
                {index < personalInfo.titleParts.length - 1 && <span className="mx-2 hidden sm:inline">|</span>}
              </span>
            ))}
          </div>
          <p className="max-w-xl text-accent bg-card p-4 rounded-md border border-border/50 shadow-md font-mono text-sm leading-relaxed transition-default hover:shadow-[0_0_10px_1px_hsl(var(--accent)/0.4)] cursor-default">
            {personalInfo.bio}
          </p>
           <div className="flex justify-center md:justify-start space-x-3 pt-4">
             {personalInfo.contact.email && (
                 <Link href={`mailto:${personalInfo.contact.email}`} aria-label="Email">
                   <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-default transform hover:scale-110 hover:rotate-[-5deg]">
                     <Mail className="h-6 w-6" />
                   </Button>
                 </Link>
               )}
              {personalInfo.contact.github && (
                  <Link href={personalInfo.contact.github} target="_blank" aria-label="GitHub">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-default transform hover:scale-110 hover:rotate-[-5deg]">
                      <Github className="h-6 w-6" />
                    </Button>
                 </Link>
               )}
               {personalInfo.contact.linkedin && (
                   <Link href={personalInfo.contact.linkedin} target="_blank" aria-label="LinkedIn">
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-default transform hover:scale-110 hover:rotate-[-5deg]">
                        <Linkedin className="h-6 w-6" />
                     </Button>
                   </Link>
               )}
           </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
             <Link href="/projects">
               <Button className="transition-default hover:scale-105 hover:shadow-[0_0_10px_2px_hsl(var(--primary)/0.5)]">
                 View My Work
               </Button>
             </Link>
          </div>
        </div>
      </section>

      <Separator className="animate-fade-in [animation-delay:0.2s]" />

       {personalInfo.skillsCategorized && personalInfo.skillsCategorized.length > 0 && (
        <>
         <section className="space-y-10 animate-fade-in [animation-delay:0.4s]">
           <h2 className="text-3xl font-semibold text-center text-primary transition-default hover:text-accent cursor-default flex items-center justify-center gap-2 group">
             <Cog className="h-7 w-7 transition-default group-hover:animate-spin" /> Skills
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {personalInfo.skillsCategorized.map((category, catIndex) => (
               <Card
                 key={category.category}
                 className="transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.02] group"
                 style={{ animation: `fadeIn 0.5s ease-out ${0.5 + catIndex * 0.1}s forwards`, opacity: 0 }}
               >
                 <CardHeader className="flex-row items-center gap-3 pb-3">
                   {category.icon && (
                     <div className="p-2 bg-primary/10 rounded-full transition-default group-hover:bg-primary/20">
                       <category.icon className="h-6 w-6 text-primary transition-default group-hover:text-accent group-hover:scale-110" />
                     </div>
                   )}
                   <CardTitle className="text-xl text-primary transition-default group-hover:text-accent">{category.category}</CardTitle>
                 </CardHeader>
                 <CardContent className="pt-2">
                   <div className="flex flex-wrap gap-2">
                     {category.skills.map((skill, skillIndex) => (
                       <div
                         key={skill}
                         className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium shadow-sm transition-default hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_8px_1px_hsl(var(--primary)/0.3)] hover:scale-110 cursor-default"
                         style={{ animation: `fadeIn 0.3s ease-out ${0.6 + catIndex * 0.1 + skillIndex * 0.02}s forwards`, opacity: 0 }}
                       >
                         {skill}
                       </div>
                     ))}
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         </section>
         <Separator className="animate-fade-in [animation-delay:0.6s]" />
       </>
      )}


      {personalInfo.internships && personalInfo.internships.length > 0 && (
         <>
          <section className="space-y-8 animate-fade-in [animation-delay:0.8s]">
            <h2 className="text-3xl font-semibold text-center text-primary flex items-center justify-center gap-2 transition-default hover:text-accent cursor-default group">
              <Briefcase className="h-7 w-7 transition-default group-hover:rotate-[-5deg]" /> Experience
            </h2>
            <div className="space-y-6">
              {personalInfo.internships.map((job, index) => (
                job.link ? (
                  <Link key={index} href={job.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card
                      className="transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.01] group relative"
                      style={{ animation: `fadeIn 0.5s ease-out ${0.9 + index * 0.1}s forwards`, opacity: 0 }}
                    >
                      <ExternalLink className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-accent" />
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <CardTitle className="text-xl text-primary transition-default group-hover:text-accent">{job.role}</CardTitle>
                          <span className="text-sm text-muted-foreground">{job.duration}</span>
                        </div>
                        <CardDescription className="text-base text-foreground/90 pt-1 transition-default group-hover:text-foreground">
                          <>
                            {job.company}
                            {job.location && ` - ${job.location}`}
                          </>
                        </CardDescription>
                      </CardHeader>
                      {job.description && (
                        <CardContent>
                            {job.description.includes('\n•') ? (
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4 transition-default group-hover:text-foreground/90">
                                {job.description.split('\n•').map((item, i) => item.trim() && <li key={i}>{item.replace(/^•\s*/, '').trim()}</li>)}
                              </ul>
                            ) : (
                              <p className="text-muted-foreground transition-default group-hover:text-foreground/90">{job.description}</p>
                            )}
                        </CardContent>
                      )}
                    </Card>
                  </Link>
                ) : (
                  <Card
                    key={index}
                    className="transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.01] group"
                    style={{ animation: `fadeIn 0.5s ease-out ${0.9 + index * 0.1}s forwards`, opacity: 0 }}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <CardTitle className="text-xl text-primary transition-default group-hover:text-accent">{job.role}</CardTitle>
                        <span className="text-sm text-muted-foreground">{job.duration}</span>
                      </div>
                      <CardDescription className="text-base text-foreground/90 pt-1 transition-default group-hover:text-foreground">
                        <>
                          {job.company}
                          {job.location && ` - ${job.location}`}
                        </>
                      </CardDescription>
                    </CardHeader>
                    {job.description && (
                      <CardContent>
                          {job.description.includes('\n•') ? (
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4 transition-default group-hover:text-foreground/90">
                              {job.description.split('\n•').map((item, i) => item.trim() && <li key={i}>{item.replace(/^•\s*/, '').trim()}</li>)}
                            </ul>
                          ) : (
                            <p className="text-muted-foreground transition-default group-hover:text-foreground/90">{job.description}</p>
                          )}
                      </CardContent>
                    )}
                  </Card>
                )
              ))}
            </div>
          </section>
          <Separator className="animate-fade-in [animation-delay:1.0s]" />
        </>
       )}


      {personalInfo.certificationsAchievements && personalInfo.certificationsAchievements.length > 0 && (
        <>
          <section className="space-y-8 animate-fade-in [animation-delay:1.2s]">
            <h2 className="text-3xl font-semibold text-center text-primary flex items-center justify-center gap-2 transition-default hover:text-accent cursor-default group">
              <Award className="h-7 w-7 transition-default group-hover:rotate-[5deg]" /> Certifications & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalInfo.certificationsAchievements.map((item, index) => (
                <div key={index}>
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <Card
                        className="flex flex-col h-full transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.02] group relative"
                        style={{ animation: `fadeIn 0.5s ease-out ${1.3 + index * 0.05}s forwards`, opacity: 0 }}
                      >
                        <ExternalLink className="absolute top-3 right-3 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-accent" />
                        <CardHeader className="flex-row items-start gap-4 pb-4 flex-grow">
                           <div className={`p-2 rounded-full transition-default ${item.type === 'certification' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
                             {item.type === 'certification'
                               ? <Award className="h-6 w-6 text-primary transition-default group-hover:scale-110 group-hover:text-accent" />
                               : <Trophy className="h-6 w-6 text-accent transition-default group-hover:scale-110" />
                             }
                           </div>
                           <div className="flex-1 space-y-1">
                             <CardTitle className="text-lg leading-tight transition-default group-hover:text-primary">{item.title}</CardTitle>
                             {item.issuer && <CardDescription className="text-sm pt-0 transition-default group-hover:text-muted-foreground">{item.issuer}</CardDescription>}
                           </div>
                        </CardHeader>
                        {formatDateSafe(item.date) && (
                          <CardContent className="flex items-center justify-end text-sm text-muted-foreground pt-0 pb-4 px-4 transition-default group-hover:text-foreground">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            {formatDateSafe(item.date)}
                          </CardContent>
                        )}
                      </Card>
                    </Link>
                  ) : (
                    <Card
                      className="flex flex-col h-full transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.02] group"
                      style={{ animation: `fadeIn 0.5s ease-out ${1.3 + index * 0.05}s forwards`, opacity: 0 }}
                    >
                      <CardHeader className="flex-row items-start gap-4 pb-4 flex-grow">
                        <div className={`p-2 rounded-full transition-default ${item.type === 'certification' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
                          {item.type === 'certification'
                            ? <Award className="h-6 w-6 text-primary transition-default group-hover:scale-110 group-hover:text-accent" />
                            : <Trophy className="h-6 w-6 text-accent transition-default group-hover:scale-110" />
                          }
                        </div>
                        <div className="flex-1 space-y-1">
                          <CardTitle className="text-lg leading-tight transition-default group-hover:text-primary">{item.title}</CardTitle>
                          {item.issuer && <CardDescription className="text-sm pt-0 transition-default group-hover:text-muted-foreground">{item.issuer}</CardDescription>}
                        </div>
                      </CardHeader>
                      {formatDateSafe(item.date) && (
                        <CardContent className="flex items-center justify-end text-sm text-muted-foreground pt-0 pb-4 px-4 transition-default group-hover:text-foreground">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {formatDateSafe(item.date)}
                        </CardContent>
                      )}
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </section>
          <Separator className="animate-fade-in [animation-delay:1.4s]" />
        </>
      )}


       {personalInfo.education && personalInfo.education.length > 0 && (
         <>
          <section className="space-y-8 animate-fade-in [animation-delay:1.6s]">
            <h2 className="text-3xl font-semibold text-center text-primary flex items-center justify-center gap-2 transition-default hover:text-accent cursor-default group">
              <GraduationCap className="h-7 w-7 transition-default group-hover:animate-bounce" /> Education
            </h2>
            <div className="space-y-6">
              {personalInfo.education.map((edu, index) => (
                edu.link ? (
                  <Link key={index} href={edu.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card
                      className="transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.01] group relative"
                      style={{ animation: `fadeIn 0.5s ease-out ${1.7 + index * 0.1}s forwards`, opacity: 0 }}
                    >
                      <ExternalLink className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-accent" />
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <CardTitle className="text-xl text-primary transition-default group-hover:text-accent">{edu.degree}</CardTitle>
                          <span className="text-sm text-muted-foreground">{edu.duration}</span>
                        </div>
                        <CardDescription className="text-base text-foreground/90 pt-1 transition-default group-hover:text-foreground">{edu.institution}</CardDescription>
                        {edu.gpa && <p className="text-sm text-muted-foreground pt-1 transition-default group-hover:text-foreground/90">CGPA: {edu.gpa}</p>}
                      </CardHeader>
                      {edu.details && (
                       <CardContent>
                         <p className="text-muted-foreground transition-default group-hover:text-foreground/90">{edu.details}</p>
                       </CardContent>
                       )}
                    </Card>
                  </Link>
                ) : (
                  <Card
                    key={index}
                    className="transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.01] group"
                    style={{ animation: `fadeIn 0.5s ease-out ${1.7 + index * 0.1}s forwards`, opacity: 0 }}
                   >
                     <CardHeader>
                       <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                         <CardTitle className="text-xl text-primary transition-default group-hover:text-accent">{edu.degree}</CardTitle>
                         <span className="text-sm text-muted-foreground">{edu.duration}</span>
                       </div>
                       <CardDescription className="text-base text-foreground/90 pt-1 transition-default group-hover:text-foreground">{edu.institution}</CardDescription>
                       {edu.gpa && <p className="text-sm text-muted-foreground pt-1 transition-default group-hover:text-foreground/90">CGPA: {edu.gpa}</p>}
                     </CardHeader>
                     {edu.details && (
                      <CardContent>
                        <p className="text-muted-foreground transition-default group-hover:text-foreground/90">{edu.details}</p>
                      </CardContent>
                      )}
                   </Card>
                )
              ))}
            </div>
          </section>
          <Separator className="animate-fade-in [animation-delay:1.8s]" />
         </>
        )}


      <section className="text-center space-y-6 py-8 animate-fade-in [animation-delay:2.0s]">
        <h2 className="text-3xl font-semibold text-primary transition-default hover:text-accent cursor-default">Get In Touch</h2>
        <p className="text-muted-foreground max-w-lg mx-auto transition-default hover:text-foreground cursor-default">
          Feel free to reach out via email or connect with me using the links above.
        </p>
      </section>
    </div>
  );
}
