
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Calendar, Trophy, ExternalLink } from "lucide-react";
import Link from 'next/link';
import { personalInfo, formatDateSafe } from '@/lib/portfolio-data';

export default function CertificationsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl transition-default hover:text-accent cursor-default">
          My Certifications & Awards
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-default hover:text-foreground cursor-default">
          A collection of my professional certifications and notable achievements.
        </p>
      </section>

      {personalInfo.certificationsAchievements && personalInfo.certificationsAchievements.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.certificationsAchievements.map((item, index) => (
            <div key={index} className="h-full">
              {item.link ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card
                    className="flex flex-col h-full transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.02] group relative"
                    style={{ animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.05}s forwards`, opacity: 0 }}
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
                      <CardContent className="flex items-center justify-end text-sm text-muted-foreground pt-0 pb-4 px-4 transition-default group-hover:text-foreground mt-auto">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        {formatDateSafe(item.date)}
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ) : (
                <Card
                  className="flex flex-col h-full transition-default hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] hover:border-primary/70 hover:scale-[1.02] group"
                  style={{ animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.05}s forwards`, opacity: 0 }}
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
                    <CardContent className="flex items-center justify-end text-sm text-muted-foreground pt-0 pb-4 px-4 transition-default group-hover:text-foreground mt-auto">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {formatDateSafe(item.date)}
                    </CardContent>
                  )}
                </Card>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
