import React from "react";

type Props = {
  img?: string;
  title?: string;
  content?: string;
};

export default function CategoryCard({ img, content, title }: Props) {
  return (
    <div className="group relative h-80 w-full cursor-pointer rounded-xl">
      <img
        alt={`project-card-img-${title}`}
        src={img}
        className="absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity group-hover:opacity-90"
      />
      <div className="absolute inset-0 rounded-xl bg-black/30"></div>
      <div className="absolute right-0 top-0 w-fit text-end">
        <div className="flex h-full w-full flex-col p-4">
          <h3 className="w-full text-2xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="absolute bottom-2 px-4">
        <div className="translate-y-8 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-base font-medium text-white">{content}</p>
        </div>
      </div>
    </div>
  );
}
