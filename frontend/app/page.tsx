import { Button } from "@/components/Button";
import { EventsList } from "@/components/EventsList";
import { Header } from "@/components/Header";
import { eventTypes } from "@/data/eventTypes";

export default function Home() {
  return (
    <div className="m-0 p-0 bg-background">
      <div
        className="relative h-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/lviv-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10">
          <Header />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[min(100%-2rem,900px)] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white">Знайди свою подію</h1>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {eventTypes.map((type) => (
              <Button
                key={type.name}
                endpoint={type.endpoint}
                className="rounded-lg whitespace-nowrap"
              >
                {type.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <main className="text-foreground container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Найближчі події у Львові</h2>

        <EventsList />
      </main>
    </div>
  );
}
