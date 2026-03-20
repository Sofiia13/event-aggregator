"use client";

import { EventsList } from "./EventsList";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

type Props = {
  children?: React.ReactNode;
  title: string;
  bgColor?: string;
  bgImage?: string;
};

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  bgColor,
  bgImage,
}) => {
  return (
    <div
      className={`m-0 p-0 ${bgColor ? "" : "bg-background"}`}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div
        className="relative h-150 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10">
          <Header>
            <Navigation />
          </Header>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[min(100%-2rem,900px)] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <main className="text-foreground container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Найближчі події у Львові</h2>

        <EventsList />
      </main>
      {children}
    </div>
  );
};
