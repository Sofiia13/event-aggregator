import type { EventCategory } from "@/data/eventTypes";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  category: EventCategory;
};

export const EventCard = ({
  title,
  date,
  location,
  category,
}: EventCardProps) => {
  const styles: Record<EventCategory, string> = {
    Музика: "bg-purple-100 border-l-4 border-purple-500 rounded-lg",
    Спорт: "bg-green-100 border-l-4 border-green-500 rounded-lg",
    "Мистецтво та театр":
      "bg-red-100 border-dashed border-2 border-red-500 rounded-ticket",
    Фестивалі: "bg-yellow-100 border-l-4 border-yellow-500 rounded-lg",
    Технології: "bg-blue-100 border-l-4 border-blue-500 rounded-lg",
  };

  return (
    <div className={`p-6 shadow-md ${styles[category]}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{date}</p>
      <p className="text-gray-700">{location}</p>
    </div>
  );
};
