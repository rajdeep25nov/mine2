
"use client"; // Required for useTheme hook

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, CodeXml, Sun, Moon, Award as AwardIcon } from 'lucide-react'; // Added AwardIcon for potential use
import { useTheme } from '@/components/theme-provider'; // Import useTheme
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certifications' }, // Added Certifications link
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // Render a placeholder or null while waiting for mount to avoid hydration mismatch
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group transition-default hover:opacity-80">
            <CodeXml className="h-6 w-6 text-primary transition-default group-hover:text-accent group-hover:rotate-[-5deg]" />
            <span className="text-xl font-semibold text-foreground transition-default group-hover:text-accent">Rajdeep Jaiswal</span>
          </Link>
          <div className="flex items-center space-x-2">
             {/* Placeholder for theme toggle */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group transition-default hover:opacity-80">
          <CodeXml className="h-6 w-6 text-primary transition-default group-hover:text-accent group-hover:rotate-[-5deg]" />
          <span className="text-xl font-semibold text-foreground transition-default group-hover:text-accent">Rajdeep Jaiswal</span>
        </Link>

        <div className="flex items-center space-x-2">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                   <Link href="/" className="flex items-center gap-2 mb-4 group">
                      <CodeXml className="h-6 w-6 text-primary transition-default group-hover:text-accent group-hover:rotate-[-5deg]" />
                      <span className="text-xl font-semibold text-foreground transition-default group-hover:text-accent">Rajdeep Jaiswal</span>
                   </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-md py-2 transition-default"
                    >
                      {/* Optionally add icons to mobile nav items if desired */}
                      {/* {item.label === 'Certifications' && <AwardIcon className="h-5 w-5" />} */}
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
