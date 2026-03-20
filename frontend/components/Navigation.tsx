"use client";

import Link from "next/link";
import { eventTypes } from "@/data/eventTypes";

export const Navigation = () => {
  return (
    <nav>
      <div className="px-4 py-3 flex justify-end gap-6">
        <div className="flex gap-6">
          {eventTypes.map((type) => (
            <Link
              key={type.name}
              href={type.endpoint}
              className="text-white px-3 py-2 rounded hover:opacity-80 transition-opacity"
            >
              {type.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
