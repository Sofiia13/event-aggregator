import { mockEvents } from "@/data/events";
import { eventTypes, type EventCategory } from "@/data/eventTypes";
import { EventCard } from "./EventCard";

type Props = {
  category?: EventCategory;
};

export const EventsList = ({ category }: Props) => {
  const eventColorByCategory = Object.fromEntries(
    eventTypes.map((type) => [type.name, type.color]),
  );

  const filteredEvents = category
    ? mockEvents.filter((event) => event.category === category)
    : mockEvents;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {filteredEvents.map((event) => (
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
