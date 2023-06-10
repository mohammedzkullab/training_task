/* eslint-disable @next/next/no-img-element */
"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Tabs from "../Tabs";
import { useEffect, useState } from "react";
import { categories } from "../Tabs/types";
import useGetUser from "./useGetUser";

export default function HomeWrapper() {
  const data = useGetUser();

  const [categories, setCategories] = useState<categories>({
    Photos: {
      id: 1,
      images: [],
    },
    Likes: {
      id: 2,
      images: [],
    },
  });

  useEffect(() => {
    setCategories({
      Photos: {
        id: 1,
        images: data?.images_list,
      },
      Likes: {
        id: 2,
        images: data?.images_list.slice(1, 3),
      },
    });
  }, [data]);

  return (
    <>
      <div className="relative w-full min-h-full ">
        <div className="bg-gray-800 ">
          <header className="">
            <div className="px-4 mx-auto max-w-7xl max-h-[300px] sm:px-6 lg:px-8">
              <img
                width={400}
                height={200}
                className="w-full max-h-[300px]"
                src={data && data?.images_list[0]}
                alt="photo"
              />
            </div>
          </header>
        </div>
        <section className="">
          <section className="relative z-50 mx-auto -mt-32 max-w-7xl">
            <div className="px-4 pb-12 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <img
                    width={400}
                    height={400}
                    className="w-40 h-40 rounded-full"
                    src={data && data?.photo}
                    alt="image"
                  />
                  <h2 className="text-lg font-bold">{data?.name}</h2>
                  <p className="font-medium text-gray-600">hacker</p>
                  <p className="flex items-center gap-2 font-medium text-gray-600">
                    <MapPinIcon className="w-4 h-4 text-gray-600" /> germany,
                    borosia
                  </p>
                  <div className="flex gap-4 mt-2">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold">
                        {data?.followers}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        followers
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold">{data?.follow}</span>
                      <span className="text-sm font-medium text-gray-600">
                        following
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold">{data?.likes}</span>
                      <span className="text-sm font-medium text-gray-600">
                        Likes
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <button className="px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-opacity-90">
                      Edit profile
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-opacity-90">
                      Add friend
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex justify-center w-full">
            <Tabs categories={categories} />
          </section>
        </section>
      </div>
    </>
  );
}
