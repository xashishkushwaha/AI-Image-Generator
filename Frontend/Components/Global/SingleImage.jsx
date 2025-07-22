import React, { useState } from "react";

//INTERNAL IMPORT
import {
  Close,
  Copy,
  Link,
  LinkFollow,
  Magic2,
  ArrowRight,
  ArrowLeft,
  ArrowRight2,
  Download,
  FaHeart,
  FaRegHeart,
} from "../SVG/index";

const SingleImage = ({ setImageDetails, imageDetails }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      className="singleImage-width fixed inset-0 w-screen h-screen overflow-hidden px-16 py-4 flex justify-center z-40 sm:z-50 bg-zinc-900 bg-opacity-80"
      style={{
        overscrollBehavior: "contain",
        minHeight: "-webkit-fill-available",
      }}
    >
      <div
        onClick={() => setImageDetails("")}
        className="absolute top-0 left-0 cursor-pointer h-12 w-12 flex items-center justify-center text-4xl drop-shadow"
      >
        <Close />
      </div>
      <div className="single-scroll flex flex-col bg-zinc-800 drop-shadow-xl overflow-hidden rounded-xl border border-zinc-700 box-content  ">
        <div className="flex w-full h-full self-stretch flex-col md:flex-row pb-16 md:pb-0 md:pt-0 flex-1 ">
          <div
            className=" w-full flex-shrink-0 overflow-hidden text-base px-5 flex flex-col h-auto "
            style={{ height: "fit-content", width: 400 }}
          >
            <div className="mt-6 px-4 py-3 bg-zinc-700 rounded-xl shadow bg-opacity-50 font-light flex flex-col space-y-5">
              <p>
                <a className="bg-red-500 bg-opacity-0 rounded hover:bg-opacity-40 cursor-pointer ">
                  A pomeranian puppy in a soldier costume and armed A pomeranian
                  puppy in a soldier costume and armed A pomeranian puppy in a
                  soldier costume and armed A pomeranian puppy in a soldier
                  costume and armed
                </a>
              </p>
              <div className="flex text-xs font-light">
                <div className="flex flex-1 flex-row space-x-2 mr-2">
                  <div className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center  shadow px-2.5 py-2 w-fit-content">
                    <Copy />
                    Copy prompt
                  </div>
                  <div className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center  shadow px-2.5 py-2 w-fit-content">
                    <Link />
                    Copy URL
                  </div>
                </div>
                <a
                  href="/prompt/752cadb5-c3db-4c01-b54e-b53be2332fb1"
                  target="_blank"
                  className="text-sm w-12 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center rounded-md shadow px-3 "
                >
                  <LinkFollow />
                </a>
              </div>
            </div>
            <div className="flex space-x-2 px-2">
              <div className="text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800 drop-shadow items-center justify-center px-2.5 py-2.5 w-fit-content active:scale-95 transition-all">
                <Magic2 />
                Open in editor
              </div>
              <button className="text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-zinc-700 via-zinc-700 to-zinc-700 drop-shadow items-center justify-center px-2.5 py-2 w-fit-content">
                Explore this style
                <ArrowRight />
              </button>
            </div>
            <div className="md:mt-6 mt-4 opacity-80 ml-2 grid grid-cols-2 gap-2 md:flex flex-wrap md:flex-col md:space-x-0 md:space-y-1 h-auto pb-32 sm:pb-8">
              <div>
                <div className="text-xs opacity-50">Model</div>
                <div className="text-sm">Lexica Aperture v4</div>
              </div>
              <div>
                <div className="text-xs opacity-50">Dimensions</div>
                <div className="text-sm">832 × 1152</div>
              </div>
            </div>
          </div>
          <div
            className="w-full md:h-full flex flex-col  "
            style={{ order: 0 }}
          >
            <div className="flex mx-auto mt-[20px]">
              <button className="h-full w-14 text-5xl flex items-center justify-center opacity-10">
                <ArrowLeft />
              </button>
              <div className="relative">
                <div
                  className="absolute top-2 right-2 z-30"
                  onClick={() => (like ? setLike(false) : setLike(true))}
                >
                  <button className="bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 flex items-center justify-center pointer-events-auto cursor-pointer active:scale-90 transition-all rounded-lg text-lg h-11 w-11">
                    <div
                      className="scale-50"
                      style={{
                        fontSize: "2.5rem",
                      }}
                    >
                      {like ? <FaHeart /> : <FaRegHeart />}
                    </div>
                  </button>
                </div>
                <img
                  alt=""
                  className="absolute top-0 left-0 z-10"
                  src={imageDetails.image}
                  className="singleImage-new"
                />
                <img
                  alt=""
                  className="relative z-20 new-hide-image"
                  src={imageDetails.image}
                  style={{
                    width: "330.056px",
                    height: "457px",
                    maxWidth: "none",
                  }}
                />
                <div className="absolute bottom-2 right-2 space-y-2 flex flex-col items-end z-30">
                  <a
                    href="https://lexica.art/download/full_webp/a156ce58-a46e-42f2-957e-aaaa5b810af1"
                    className="bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-lg h-10 w-10 rounded-lg"
                  >
                    <Download />
                  </a>
                </div>
              </div>
              <button className="h-full w-14 text-5xl flex items-center justify-center opacity-80 hover:opacity-100 cursor-pointer">
                <ArrowRight2 />
              </button>
            </div>
            <div className="flex space-x-2 items-center justify-center overflow-hidden w-full flex-wrap mt-4 md:mt-[10px] md:px-2">
              <div
                className="relative"
                style={{ height: 50, width: "36.1111px", marginBottom: 6 }}
              >
                <img
                  alt=""
                  className="select-none cursor-pointer opacity-100"
                  src="https://image.lexica.art/sm2_webp/a156ce58-a46e-42f2-957e-aaaa5b810af1"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    backgroundColor: "black",
                  }}
                />
                <div className="hidden">
                  <img
                    src="https://image.lexica.art/full_webp/a156ce58-a46e-42f2-957e-aaaa5b810af1"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="relative"
                style={{ height: 50, width: "36.1111px", marginBottom: 6 }}
              >
                <img
                  alt=""
                  className="select-none cursor-pointer opacity-40"
                  src="https://image.lexica.art/sm2_webp/cbcc306f-884c-4971-8c9a-5b22e10a0def"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    backgroundColor: "black",
                  }}
                />
                <div className="hidden">
                  <img
                    src="https://image.lexica.art/full_webp/cbcc306f-884c-4971-8c9a-5b22e10a0def"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="relative"
                style={{ height: 50, width: "36.1111px", marginBottom: 6 }}
              >
                <img
                  alt=""
                  className="select-none cursor-pointer opacity-40"
                  src="https://image.lexica.art/sm2_webp/d4a6484c-b8c1-46f7-8f3a-33864537e6e9"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    backgroundColor: "black",
                  }}
                />
                <div className="hidden">
                  <img
                    src="https://image.lexica.art/full_webp/d4a6484c-b8c1-46f7-8f3a-33864537e6e9"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="relative"
                style={{ height: 50, width: "36.1111px", marginBottom: 6 }}
              >
                <img
                  alt=""
                  className="select-none cursor-pointer opacity-40"
                  src="https://image.lexica.art/sm2_webp/8f8d72e0-bc31-45e4-98f8-b510e44d69a3"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    backgroundColor: "black",
                  }}
                />
                <div className="hidden">
                  <img
                    src="https://image.lexica.art/full_webp/8f8d72e0-bc31-45e4-98f8-b510e44d69a3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
