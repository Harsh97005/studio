
'use client';

import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronDown } from 'lucide-react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-primary"
  >
    <path d="M19.52,2.33L19.52,2.33c-1.22-0.45-2.54,0.08-3.3,1.13L13.8,6.86c0.35,0.84,0.48,1.75,0.42,2.65 c-0.12,1.8-0.95,3.42-2.22,4.55c-1.3,1.15-3,1.8-4.78,1.79c-0.2,0-0.4-0.01-0.59-0.03c-1.12-0.12-2.18-0.58-3.08-1.3 c-0.2-0.16-0.48-0.08-0.59,0.15l-0.5,1.01c-0.12,0.24-0.03,0.54,0.2,0.68c1.39,0.85,2.99,1.3,4.64,1.3c2.58,0,4.99-1.12,6.66-2.99 c1.79-2,2.83-4.6,2.83-7.3c0-0.2,0-0.39-0.01-0.59c-0.03-0.8-0.19-1.58-0.46-2.33l3.23-3.66C21.47,4.3,20.93,2.85,19.52,2.33z" />
    <path d="M12.52,9.75c-0.11-1.21-0.61-2.34-1.42-3.23L9.18,8.28c0.26,0.29,0.45,0.64,0.57,1.01c0.06,0.18,0.24,0.29,0.43,0.29h1.93 C12.35,9.58,12.51,9.66,12.52,9.75z" />
  </svg>
);


export default function LandingPage() {
  const features = [
    {
      title: 'Wiki',
      image: 'https://placehold.co/400x300.png',
      hint: 'knowledge base'
    },
    {
      title: 'Planner',
      image: 'https://placehold.co/400x300.png',
      hint: 'to-do list'
    },
    {
      title: 'Docs',
      image: 'https://placehold.co/400x300.png',
      hint: 'document editor'
    },
    {
      title: 'Class notes',
      image: 'https://placehold.co/400x300.png',
      hint: 'lecture notes'
    },
    {
      title: 'Research',
      image: 'https://placehold.co/400x300.png',
      hint: 'research papers'
    },
     {
      title: 'Project Management',
      image: 'https://placehold.co/400x300.png',
      hint: 'project board'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo />
          <span className="text-2xl font-bold">JodNotes</span>
        </Link>
        <nav className="ml-10 hidden lg:flex gap-6 items-center">
          <Link href="#" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Why JodNotes?
          </Link>
          <Link href="#" className="flex items-center gap-1 text-sm font-medium hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Explore <ChevronDown className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Plans
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Enterprise
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login" prefetch={false}>
              Log in
            </Link>
          </Button>
          <Button variant="outline" className="hidden sm:inline-flex">
            Download
          </Button>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Start for free
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-32 xl:py-40">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Remember everything and tackle any project with your notes, tasks, and schedule all in one place.
              </h1>
              <Button size="lg" className="h-12 px-10 text-base">
                 <Link href="/signup">Get JodNotes free</Link>
              </Button>
              <div className="mt-4">
                <Link href="/login" className="text-sm underline hover:text-primary">
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                      <Card className="h-[300px]">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-full gap-4">
                           <h3 className="text-xl font-semibold">{feature.title}</h3>
                           <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-lg" data-ai-hint={feature.hint}/>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
