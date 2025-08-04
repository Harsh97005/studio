import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Book, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Book className="h-6 w-6" />
          <span className="sr-only">NoteShare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium hover:underline underline-offset-4"
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
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Collaborative Note-Taking for Students
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    NoteShare is the ultimate platform for college students to share and discover study notes, powered by AI to help you learn smarter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link
                      href="/signup"
                      prefetch={false}
                    >
                      Get Started
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
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                data-ai-hint="students collaborating"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                   <Zap className="w-8 h-8 text-accent"/>
                   <h3 className="text-xl font-bold">AI Summarization</h3>
                </div>
                <p className="text-muted-foreground">
                  Instantly generate concise summaries of long notes to quickly grasp key concepts.
                </p>
              </div>
              <div className="grid gap-1">
                 <div className="flex items-center gap-2">
                   <Zap className="w-8 h-8 text-accent"/>
                   <h3 className="text-xl font-bold">Categorized Subjects</h3>
                </div>
                <p className="text-muted-foreground">
                  Organize your notes by subjects and college year, making it easy to find what you need.
                </p>
              </div>
              <div className="grid gap-1">
                 <div className="flex items-center gap-2">
                   <Zap className="w-8 h-8 text-accent"/>
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
