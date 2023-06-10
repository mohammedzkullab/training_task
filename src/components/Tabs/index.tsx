"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { classNames } from "@/utils";
import { categories } from "./types";

export default function Tabs({ categories }: categories | any) {
  return (
    <div className="w-full max-w-6xl px-2 py-4 transition-all sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
          {Object.keys(categories)?.map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.keys(categories)?.map((category: string, idx: number) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 "
              >
                {categories[category]?.images?.map(
                  (image: string, idx: number) => (
                    <li key={idx} className="relative cursor-pointer">
                      <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <Image
                          src={image && image}
                          width={500}
                          height={500}
                          alt="photo"
                          className="cursor-pointer object-cover w-full h-[400px] pointer-events-none group-hover:opacity-75"
                        />
                      </div>
                    </li>
                  )
                )}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
