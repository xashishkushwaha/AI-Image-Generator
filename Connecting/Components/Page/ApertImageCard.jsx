import React from "react";

///INTERNAL IMPORT
import { ImgSearch, Share, Download, Delete, FaRegHeart } from "../SVG/index";

const DOMAI_URL = process.env.NEXT_PUBLIC_DOMAIN_URL;

const ApertImageCard = ({ item, index, setSingleID }) => {
  return (
    <div
      onClick={() => setSingleID(item?._id)}
      className={`flex flex-col group   md:w-1/2 my-1.5 ${
        index % 2 === 0 ? "md:pl-16" : "md:pr-16"
      }`}
    >
      <div className="flex-1 flex flex-col items-center justify-center mx-1.5">
        <div>
          <div id="menu-container" />
          <div className="block relative group select-none cursor-zoom-in mb-4 sm:mb-0 rounded-sm md:rounded-lg shadow-lg transition-opacity duration-500 rounded-lg">
            <div
              className="absolute inset-0 z-10 block text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none line-clamp px-2 pb-2 text-sm px-2"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 0%)",
              }}
            />
            <div className="top-0 left-0 absolute p-1.5 w-full flex z-10 opacity-0 group-hover:opacity-100 text-zinc-100 justify-between  transition-opacity px-2 mb-1 text-sm">
              <div className="no-expand-image flex flex-col space-y-2">
                <a className="no-expand-image bg-zinc-900 bg-opacity-80 hover:bg-opacity-100 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-90 h-10 w-10 rounded-lg text-lg">
                  <ImgSearch />
                </a>
                <button
                  className="no-expand-image bg-zinc-900 bg-opacity-80 hover:bg-opacity-100 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-90 h-10 w-10 rounded-lg text-lg"
                  data-state="closed"
                >
                  <Share />
                </button>
                <a
                  href="https://lexica.art/download/full_jpg/d3714e56-60b3-48df-92b3-4861dd6f1b63"
                  download="create a programming lab with hacker character and.webp"
                  title="Download"
                  className="max-lg:absolute -top-0.5 left-14"
                  data-state="closed"
                >
                  <button className="no-expand-image bg-zinc-900 bg-opacity-80 hover:bg-opacity-100 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-90 h-10 w-10 rounded-lg text-lg">
                    <Download />
                  </button>
                </a>
              </div>
              <div className="no-expand-image flex flex-col space-y-1">
                <button className="bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 flex items-center justify-center pointer-events-auto cursor-pointer active:scale-90 transition-all rounded-lg text-lg h-10 w-10">
                  <div
                    className="scale-50"
                    style={{
                      fontSize: "2.1rem",
                    }}
                  >
                    <FaRegHeart />
                  </div>
                </button>
                <button
                  className="no-expand-image bg-zinc-900 bg-opacity-80 hover:bg-opacity-100 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-90 h-10 w-10 rounded-lg text-lg"
                  data-state="closed"
                >
                  <Delete />
                </button>
              </div>
            </div>
            <img
              alt=""
              width={1152}
              height={768}
              src={`${DOMAI_URL}${item?.images[0]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApertImageCard;
