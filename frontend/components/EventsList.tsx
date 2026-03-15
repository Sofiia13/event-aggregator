import { mockEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {mockEvents.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          category={event.category}
          image={event.image}
        />
      ))}
    </div>
  );
};
