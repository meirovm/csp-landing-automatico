import React from "react";
import "../app/globals.css";

type Testimonial = {
  id: number;
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lorem Inc.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Lorem Corp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-12">
      <h2 className="mb-20 text-5xl text-white">
        Hear from Our Satisfied Users
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="mb-10 flex h-full flex-col justify-between text-left text-lg italic text-zinc-400"
          >
            <p className="mb-0">"{testimonial.text}"</p>
            <div className="relative flex items-end not-italic text-white">
              <span className="border-t-2 border-blue-500 text-zinc-400">
                {testimonial.name}
              </span>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
