import { mockEvents } from "@/data/events";
import { eventTypes } from "@/data/eventTypes";
import { EventCard } from "./EventCard";

export const EventsList = () => {
  const eventColorByCategory = Object.fromEntries(
    eventTypes.map((type) => [type.name, type.color]),
  );

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
          color={eventColorByCategory[event.category]}
        />
      ))}
    </div>
  );
};
