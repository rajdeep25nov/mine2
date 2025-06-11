
import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Corrected import
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider

const inter = Inter({
  variable: '--font-inter', // Corrected variable name
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({ // Corrected import and instantiation
  variable: '--font-roboto-mono', // Corrected variable name
  subsets: ['latin'],
  weight: ['400', '700'], // Added weights for mono
});

export const metadata: Metadata = {
  title: 'Rajdeep Jaiswal - Portfolio', // Updated Title
  description: 'Portfolio showcasing projects, skills, and experience of Rajdeep Jaiswal, a Software Engineer, DevOps enthusiast, and Data Analyst.', // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className={`antialiased font-sans bg-background text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster /> {/* Add Toaster for notifications */}
        </ThemeProvider>
      </body>
    </html>
  );
}
