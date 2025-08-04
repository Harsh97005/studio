
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Book, Zap, Rocket, BrainCircuit, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Book className="h-6 w-6 text-primary" />
          <span className="sr-only">NoteShare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">Welcome to</div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    NoteShare
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The ultimate platform for college students to share and discover study notes, powered by AI to help you learn smarter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link
                      href="/signup"
                      prefetch={false}
                    >
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href="/login"
                      prefetch={false}
                    >
                      Login
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-2xl shadow-primary/20"
                data-ai-hint="students collaborating"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Learn Faster, Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NoteShare provides powerful tools to enhance your study sessions. From AI-powered summaries to seamless collaboration.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 text-center p-6 rounded-lg transition-all border border-transparent hover:border-primary/50 hover:bg-card hover:shadow-lg hover:-translate-y-2">
                 <div className="flex flex-col items-center gap-2">
                   <div className="p-3 bg-accent/10 rounded-full">
                     <BrainCircuit className="w-10 h-10 text-accent"/>
                   </div>
                   <h3 className="text-xl font-bold">AI Summarization</h3>
                </div>
                <p className="text-muted-foreground">
                  Instantly generate concise summaries of long notes to quickly grasp key concepts.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-lg transition-all border border-transparent hover:border-primary/50 hover:bg-card hover:shadow-lg hover:-translate-y-2">
                 <div className="flex flex-col items-center gap-2">
                   <div className="p-3 bg-accent/10 rounded-full">
                     <Rocket className="w-10 h-10 text-accent"/>
                   </div>
                   <h3 className="text-xl font-bold">Categorized Subjects</h3>
                </div>
                <p className="text-muted-foreground">
                  Organize your notes by subjects and college year, making it easy to find what you need.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-lg transition-all border border-transparent hover:border-primary/50 hover:bg-card hover:shadow-lg hover:-translate-y-2">
                 <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Zap className="w-10 h-10 text-accent"/>
                    </div>
                   <h3 className="text-xl font-bold">Easy Exporting</h3>
                </div>
                <p className="text-muted-foreground">
                  Export your notes to PDF for offline access and easy printing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 NoteShare. All rights reserved.</p>
      </footer>
    </div>
  );
}
