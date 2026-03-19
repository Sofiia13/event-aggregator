"use client";

import { useRef, useState } from "react";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  color?: string;
};

export const EventCard = ({
  title,
  date,
  location,
  category,
  image,
  color,
}: EventCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={divRef}
      className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
      style={color ? { backgroundColor: color } : undefined}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-96 h-56 object-cover object-top"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-mal text-gray-700">
          {date} | {location} | {category}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-foreground rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
