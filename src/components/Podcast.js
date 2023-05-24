import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { useProductList } from "../hooks/useProductList";

function Podcast() {
  const productList = useProductList();

  return (
    <div className="block px-5 lg:px-10 xl:px-15 bg-gray-500 bg-gradient-to-tl from-gray-300 to-gray-100 rounded-2xl py-10">
      <div className="lg:flex lg:flex-row justify-between items-center px-5 lg:py-20">
        <div className="mb-20 mt-40 font-sans mx-auto lg:mx-0 max-w-md lg:max-w-lg">
          <div className="text-3xl mb-2 lg:mb-7 lg:text-5xl">Podcast</div>
          <div className="capitalize lg:mb-10 lg:text-2xl">
            bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
            yüzden en iyi şekilde .
          </div>
          <div className="text-xs lg:text-base text-gray-400 mt-3 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </div>
          <div className="text-gray-400 mt-20 lg:mt-40 lg:text-base">
            SPOTİFAY
          </div>
        </div>
        <div
          className="grid grid-cols-4 grid-rows-3 gap-2 lg:ml-10"
          style={{ minWidth: "40vw", minHeight: "40vw", maxHeight: "40vw" }}
        >
          {firstGallery.map((item) => (
            <div className={["bg-black", item.className].join(" ")}>
              <Image
                src={productList.find((p) => p.id == item.id)?.url}
                alt=""
                width={1640}
                height={820}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-around flex-wrap mx-auto">
        {secondGallery.map((id) => (
          <Card item={productList.find((p) => p.id == id)?.url} />
        ))}
      </div>
    </div>
  );
}

export default Podcast;

export const firstGallery = [
  { id: 7 },
  { id: 8, className: "row-span-2" },
  { id: 9, className: "col-span-2" },
  { id: 10, className: "row-span-2" },
  { id: 6, className: "" },
  { id: 6, className: "" },
  { id: 7 },
  { id: 11, className: "col-span-2" },
];

export const secondGallery = [12, 13, 14, 15];
