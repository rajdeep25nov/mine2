
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Icons were previously imported but are no longer used as per user request.
// import { ExternalLink, Github, Laptop } from "lucide-react";
// Image component is no longer used.
// import Image from 'next/image';
import Link from 'next/link';

// Updated Project Data with Rajdeep Jaiswal's projects including live links and repos
const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Evaluation Tool",
    description: "AI-driven web app using Google Gemini API & Streamlit to optimize resumes for ATS, generate interview questions, and create cover letters.",
    tags: ["Python", "Streamlit", "Google Gemini API", "NLP", "AI/ML"],
    liveUrl: "https://resumescorer.streamlit.app/",
    repoUrl: "https://github.com/rajdeep25nov/resumescorer.git",
  },
  {
    id: 2,
    title: "Weather Forecasting Application",
    description: "MERN stack application fetching real-time weather data via third-party APIs, deployed on Azure Web App Services with 99.9% uptime.",
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "Azure", "API Integration"],
    liveUrl: "https://storystreamer.azurewebsites.net/", // Corrected live URL as per user request
    repoUrl: "#", // Add repo URL if available later
  },
  {
    id: 3,
    title: "Campus Connect",
    description: "Dynamic web application (HTML, CSS, JS) hosted on Azure Web App, featuring Conversational AI for content sharing and document management.",
    tags: ["HTML", "CSS", "JavaScript", "Azure", "Conversational AI"],
    liveUrl: "https://custudentszone.z29.web.core.windows.net/",
    repoUrl: "https://github.com/rajdeep25nov/custudentszone.git",
  },
   {
    id: 4,
    title: "Story Streamer AI",
    description: "Story generation web application using ASP.NET Core and Azure OpenAI, allowing users to create customizable narratives. Deployed on Azure with CI/CD.",
    tags: ["ASP.NET Core", ".NET", "Azure OpenAI", "Azure", "CI/CD", "AI/ML"],
    liveUrl: "https://storystreamer.azurewebsites.net/",
    repoUrl: "#", // Add repo URL if available later
  },
  {
    id: 5,
    title: "Text Tuner Application",
    description: "Full-Stack React JS application for text transformation (capitalization, case conversion, space removal, summaries). Includes reading time calculation. Deployed on Azure with CI/CD pipelines.",
    tags: ["React.js", "UI/UX", "Web Development", "Azure", "CI/CD"],
    liveUrl: "https://texttuner.azurewebsites.net/",
    repoUrl: "#", // No repo link provided
  },
  {
    id: 6,
    title: "ImageScribe",
    description: "ImageScrib is a smart web application that enables users to upload images and receive AI-generated captions and descriptive insights, powered by Gemini AI API. To enhance accessibility, the app also includes a text-to-speech feature that audibly narrates the generated descriptions. Built with Next.js, Tailwind CSS, and Firebase Studio, ImageScrib delivers a seamless and responsive user experience. ",
    tags: ["Next.js", "Tailwind CSS", "Firebase Studio", "Microsoft Azure", "Local Git", "Gemini AI API", "Text-to-Speech API", "AI/ML"],
    liveUrl: "https://imagecap.azurewebsites.net/", // Updated live URL
    repoUrl: "#", // Add repo URL if available
  },
  {
    id: 7,
    title: "Power BI Sales Performance Dashboard",
    description: "Power BI dashboard for sales performance analysis with state-wise and quarterly filters. Features multiple KPIs, various charts (Bar, Donut, Line), and slicers for data-driven insights. Tracks AOV (₹120.90K), Profit (₹37K), Sales (₹438K). Leverages DAX and data modeling.",
    tags: ["Power BI", "DAX", "Data Modeling", "Data Visualization", "Business Intelligence", "Dashboarding"],
    liveUrl: "#",
    repoUrl: "https://github.com/rajdeep25nov/Ecommerce-Sales-Dashboard-Power-BI.git",
  },
  {
    id: 8,
    title: "Credit Card Financial Dashboard",
    description: "Dynamic Power BI dashboard using SQL data to monitor credit card operations, KPIs (approval rates, avg spend), and customer behavior. Features DAX measures and automated workflows.",
    tags: ["Power BI", "SQL", "DAX", "Data Visualization", "Business Intelligence", "Dashboarding"],
    liveUrl: "#",
    repoUrl: "https://github.com/rajdeep25nov/Credit-Card-PowerBI-Dashboard.git",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 animate-fade-in"> {/* Fade-in animation */}
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl transition-default hover:text-accent cursor-default">My Projects</h1> {/* Hover effect */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto transition-default hover:text-foreground cursor-default"> {/* Hover effect */}
          Here are some of the projects I've worked on. Explore them to see my skills in action.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
             key={project.id}
             className="group flex flex-col overflow-hidden transition-default hover:shadow-xl hover:scale-[1.03] hover:border-primary/50" // Enhanced hover effect
             style={{ animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.1}s forwards`, opacity: 0 }} // Staggered animation
           >
            {/* Project Image removed */}
            <CardHeader className="pt-6"> {/* Added padding top to header */}
              <CardTitle className="text-2xl text-primary transition-default group-hover:text-accent">{project.title}</CardTitle> {/* Hover effect */}
              <CardDescription className="text-sm text-muted-foreground transition-default group-hover:text-foreground h-24 overflow-y-auto">{project.description}</CardDescription> {/* Hover effect, added height and scroll */}
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-4 space-y-4"> {/* Adjusted padding top */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium transition-default group-hover:bg-primary/80 group-hover:text-primary-foreground cursor-default"> {/* Hover effect */}
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-muted/50 flex justify-end gap-2 border-t">
              {/* Icons removed as requested, only show buttons */}
              {project.liveUrl && project.liveUrl !== "#" && (
                 <Link href={project.liveUrl} target="_blank">
                   <Button variant="outline" size="sm" className="transition-default hover:scale-105 hover:bg-accent/10 hover:border-accent"> {/* Enhanced hover effect */}
                     Live Demo
                   </Button>
                 </Link>
              )}
              {project.repoUrl && project.repoUrl !== "#" && (
                <Link href={project.repoUrl} target="_blank">
                  <Button variant="secondary" size="sm" className="transition-default hover:scale-105 hover:bg-primary/10 hover:border-primary/50"> {/* Enhanced hover effect */}
                    View Code
                  </Button>
                </Link>
              )}
               {/* Placeholder icon for projects with no links was removed in previous step */}
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
