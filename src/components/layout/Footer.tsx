import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated with Rajdeep Jaiswal's actual links
  const socialLinks = [
    { href: 'mailto:rajdeepjaiswal25nov@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://github.com/rajdeep25nov', icon: Github, label: 'GitHub', target: '_blank' }, // Updated handle
    { href: 'https://www.linkedin.com/in/rajdeepjaiswal25nov/', icon: Linkedin, label: 'LinkedIn', target: '_blank' }, // Verified handle
  ];

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Rajdeep Jaiswal. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target={link.target || '_self'} aria-label={link.label}>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/20 transition-default transform hover:scale-110 hover:rotate-[-5deg]"> {/* Enhanced hover effect */}
                <link.icon className="h-5 w-5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
