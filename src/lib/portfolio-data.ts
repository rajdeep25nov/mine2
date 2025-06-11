
import { Code, Cloud, LineChart, Users, Terminal, Cog, Briefcase, Award, GraduationCap, Calendar, Trophy, ExternalLink } from "lucide-react";
import { format } from 'date-fns';

// Personal Information and Portfolio Data
export const personalInfo = {
  name: "RAJDEEP JAISWAL",
  titleParts: [
    { role: "Software Engineer", icon: Code },
    { role: "DevOps", icon: Cloud },
    { role: "Data Analyst", icon: LineChart },
  ],
  title: "Software Engineer | DevOps | Data Analyst",
  bio: "Highly motivated Computer Science Engineering graduate with experience in network engineering, DevOps, and data analysis through internships at DRDO and Mackinlay Enterprises. Proficient in Python, C++, SQL, cloud platforms (AWS, Azure), DevOps tools (Docker, Kubernetes, CI/CD), and data visualization tools (Tableau, Looker Studio). Proven ability to implement technical solutions, optimize systems, and collaborate effectively in cross-functional teams.",
  contact: {
    email: "rajdeepjaiswal25nov@gmail.com",
    github: "https://github.com/rajdeep25nov",
    linkedin: "https://www.linkedin.com/in/rajdeepjaiswal25nov/",
  },
  imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHgsj1Mt7bcig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728984890609?e=1752105600&v=beta&t=rF8YXGZ2l585wGjODH5s_9xggwCO3KbBBXufsg7adX0",
  imageHint: "professional headshot rajdeep jaiswal",
  skillsCategorized: [
    {
      category: "Programming & Core CS",
      icon: Code,
      skills: ["Python", "C++", "SQL", "OPPs", "Data Structure", "Algorithms", "Operating System", "DBMS"],
    },
    {
      category: "Data Analytics & Visualization",
      icon: LineChart,
      skills: ["Excel", "Tableau", "Looker Studio", "Matplotlib", "Pandas", "Sheets", "Power BI"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Microsoft Azure", "AWS", "CI/CD Pipelines", "Docker", "Kubernetes"],
    },
    {
      category: "Development Tools",
      icon: Terminal,
      skills: ["Git", "GitHub", "Slack", "VS Code"],
    },
    {
      category: "Professional Skills",
      icon: Users,
      skills: ["Cross-functional Teamwork", "Documentation", "Stakeholder Engagement", "Problem Solving", "Time Management", "Ethical Judgement", "Adaptability"],
    }
  ],
  internships: [
    {
      company: "Defence Research and Development Organization (DRDO)",
      role: "Network Engineer Intern",
      duration: "Jul 2024",
      description: "• Implemented a TCP/IP socket-based communication system for Software Defined Radios, resulting in a 50% boost in performance and a 25% increase in connectivity range.\n• Integrated advanced frequency hopping techniques, improving data security by 40% and preventing unauthorized access and communication.\n• Tuned SDR configurations and communication protocols to optimize performance and reliability, enhancing long-range communication efficiency by 35%.",
      location: "Dehradun, India",
      link: "https://drive.google.com/file/d/1UhRMiCHVzNgSWncGaCrIXTR7Umtmt4BE/view?usp=drive_link",
    },
    {
      company: "Mackinlay Enterprises",
      role: "DevOps Engineer Intern",
      duration: "May 2024 - Jun 2024",
      description: "• Deployed and managed full-stack MERN applications on dedicated servers, achieving 99.9% uptime and high availability.\n• Designed CI/CD pipelines, reducing deployment times by 30% and enhancing development workflows.\n• Utilized AWS EC2 and S3 for scalable cloud infrastructure solutions, optimizing application performance and reliability.\n• Set up monitoring and logging solutions to ensure application stability, enabling faster identification and resolution of issues.\n• Configured monitoring and alerting systems, resolving 90% of critical issues within 30 minutes, leading to a 20% improvement in customer satisfaction ratings.",
      location: "Remote/Online",
      link: "https://drive.google.com/file/d/1d_iLd05Zeps_N_f-Ka96VGh9CO6YmwfD/view?usp=sharing",
    },
    {
       company: "Defence Research and Development Organization (DRDO)",
       role: "Data Analytics Intern",
       duration: "May 2023 - Jun 2023",
       description: "• Leveraged Python (Matplotlib, Pandas) to analyse and visualize extensive flight data, improving data extraction efficiency by 40% over manual methods.\n• Developed a 3D flight path animation tool for roll, yaw, and pitch visualization, enhancing trajectory analysis accuracy by 35% over previous static models.\n• Automated data processing workflows, reducing manual intervention by 30% and saving 12 hours of analyst time per week.",
       location: "Dehradun, India",
       link: "https://drive.google.com/file/d/1sf4DB5b1p-e1HNhR99KPcx1Gph1rd-lz/view?usp=sharing",
     },
  ],
  certificationsAchievements: [
    {
      title: "Google Cloud Data Analytics",
      issuer: "Google",
      date: "2025-01-01",
      type: "certification",
      link: "https://www.credly.com/badges/f2cd5713-11f3-4c37-9a39-4314d4acda1a/public_url",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2023-05-01",
      type: "certification",
      link: "https://learn.microsoft.com/en-us/users/rajdeepjaiswal-3091/credentials/2c3a17c3fcc4c348?ref=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      title: "Power Platform Fundamentals (PL-900)",
      issuer: "Microsoft",
      date: "2023-05-01",
      type: "certification",
      link: "https://learn.microsoft.com/en-us/users/rajdeepjaiswal-3091/credentials/fb7f38200450c219?ref=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      title: "Google Ads",
      issuer: "Google",
      date: "2025-04-12",
      type: "certification",
      link: "https://skillshop.credential.net/profile/rajdeepjaiswal443037/wallet",
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon",
      date: "2024-02-01",
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/D3G99EJKKM68?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof",
    },
    {
      title: "Angular",
      issuer: "Infosys Springboard",
      date: "2022-10-14",
      type: "certification",
      link: "https://drive.google.com/file/d/1lekR7Fim-JcTH26OEimMLDg4LZyPl7-K/view?usp=sharing",
    },
    {
      title: "TypeScript Essentials",
      issuer: "Infosys Springboard",
      date: "2022-10-14",
      type: "certification",
      link: "https://drive.google.com/file/d/1XCoEMKfKxBq3eDOEQhS62d49YYdMCEXJ/view?usp=sharing",
    },
    {
      title: "Cyber Security Tools & Cyber Attack",
      issuer: "IBM (Coursera)",
      date: "2022-04-01",
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/44BGCTMA66QZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      title: "NoSQL, Big Data, and Spark Foundations",
      issuer: "IBM (Coursera)",
      date: "2023-03-01",
      type: "certification",
      link: "https://drive.google.com/file/d/1mt-9s-hJWer7LeSrA1YShV1WaC0UdX0N/view?usp=sharing",
    },
    {
      title: "Computer Vision for Engineering and Science",
      issuer: "MathWorks (Coursera)",
      date: "2023-12-02",
      type: "certification",
      link: "https://coursera.org/share/224df4f64183c338bc7d6f002f3c0ea0",
    },
    {
      title: "7th Place - Toy Hackathon 2021",
      issuer: "Government of India (15,000 participants)",
      date: "2021",
      type: "achievement",
    },
    {
      title: "Microsoft Learn Student Ambassador (Beta)",
      issuer: "Microsoft Global",
      date: undefined,
      type: "achievement",
    },
    {
      title: "Founder - CU STUDENTS ZONE CLUB",
      issuer: "Chandigarh University (1500+ members)",
      date: undefined,
      type: "achievement",
    },
    {
      title: "Founder - MICROSOFT DEVELOPERS’ COMMUNITY",
      issuer: "Chandigarh University",
      date: undefined,
      type: "achievement",
    },
  ],
  education: [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering (B.E) in Computer Science Engineering",
      duration: "2020 - 2024",
      gpa: "7.40/10",
      details: "Mohali, Punjab, India. Relevant coursework: OPPs, Data Structure, Algorithms, Operating System, DBMS.",
      link: "https://drive.google.com/file/d/13bLmWKDrOHwIqOCaOMdSiZ67D9KEzdTc/view?usp=sharing",
    },
  ],
};

export const formatDateSafe = (dateString: string | undefined) => {
  if (!dateString) return null;
  try {
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      const date = new Date(dateString + 'T00:00:00');
      return format(date, 'MMM yyyy');
    }
     if (/^\d{2}\/\d{4}$/.test(dateString)) {
        const [month, year] = dateString.split('/');
        const date = new Date(parseInt(year), parseInt(month) - 1, 1);
        return format(date, 'MMM yyyy');
     }
    if (/^\d{4}$/.test(dateString)) {
       return dateString;
    }
    return dateString;
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return dateString;
  }
};
