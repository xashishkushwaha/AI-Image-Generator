import React, { useState, useEffect } from "react";

//IMPORT ICON
import {
  HomeLogo,
  Search,
  Image,
  Filter,
  FaHeart,
  FaInstagram,
  AiOutlineYoutube,
  BsCameraReelsFill,
  FaRegHeart,
  Magic,
} from "../Components/SVG/index";

//INTERNAL IMPORT
import {
  Header,
  GetStarted,
  ImageCard,
  SingleImage,
  ApertImageCard,
  Notic,
  Button,
} from "../Components/index";
import reelImage from "../data/reel.json";
import instagramImage from "../data/instagram.json";
import youTubeImage from "../data/youtube.json";
import customImage from "../data/custom.json";

const index = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [category, setCategory] = useState("Reel");

  const [array, setArray] = useState();
  const [imageDetails, setImageDetails] = useState();

  const changeCategory = (category) => {
    if (category == "Reel") {
      setArray(reelImage);
    } else if (category == "Instagram") {
      setArray(instagramImage);
    }
    if (category == "Youtube") {
      setArray(youTubeImage);
    }
  };

  useEffect(() => {
    setArray(reelImage);
  }, []);

  return (
    <div>
      <Header />
      <div className="mb-[56px] sm:mb-0 sm:mt-[56px]">
        <div className="flex flex-col">
          <GetStarted />
          <div className="w-screen overflow-x-hidden flex flex-col items-center py-4 mt-16">
            <a href="/">
              <HomeLogo />
            </a>
            <a className="cursor-pointer " href="/aperture">
              <p className="mt-2 text-xs text-indigo-300 active:scale-95 text-center font-medium shadow-sm hover:shadow-md bg-indigo-300 bg-opacity-5 hover:bg-opacity-10 border border-indigo-300 border-opacity-10 hover:border-opacity-20 transition-all rounded-md px-6 py-2">
                AI Image 10.5 is here!
              </p>
            </a>
            <div className="flex items-center w-full max-w-[600px] md:ml-[48px] mt-8 px-4 pl-5 md:px-5">
              <div className="w-full">
                <div className="w-full flex items-center relative">
                  <Search />
                  <input
                    id="main-search"
                    autoComplete="off"
                    className="bg-zinc-700 flex-1 pl-12 pr-12 rounded-full text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700"
                    placeholder="Search for an image"
                    defaultValue=""
                  />
                  <button
                    className="text-base absolute right-2 hover:bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-full"
                    data-state="closed"
                  >
                    <Image />
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    openFilter ? setOpenFilter(false) : setOpenFilter(true)
                  }
                  className="ml-2 h-10 w-10 rounded-full cursor-pointer flex items-center justify-center  bg-transparent hover:bg-zinc-900"
                >
                  <Filter />
                </button>
              </div>
            </div>
            <div
              className="flex w-full max-w-[600px] md:ml-[48px] px-4 pl-5 md:px-5"
              style={{ position: "relative" }}
            />
            {openFilter && <Notic />}

            <div className=" mb-8 flex flex-col items-center">
              <div className="flex space-x-2">
                <button className="w-32 sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800">
                  Search
                </button>
                <a href="/aperture">
                  <button className="w-32 sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 border border-gray-700 hover:bg-zinc-700">
                    Generate
                  </button>
                </a>
              </div>
            </div>
            <div className="flex space-x-2 px-2">
              <Button
                icon={<BsCameraReelsFill />}
                name={"Reel"}
                handleClick={() => changeCategory("Reel")}
                category={category}
              />
              <Button
                icon={<AiOutlineYoutube />}
                name={"YouTube"}
                handleClick={() => changeCategory("Youtube")}
                category={category}
              />
              <Button
                icon={<FaInstagram />}
                name={"Instagram"}
                handleClick={() => changeCategory("Instagram")}
                category={category}
              />
            </div>

            <div className="mt-2">&nbsp;</div>
            <div className="mt-3 relative px-2 md:px-7 w-full">
              <div
                role="grid"
                className="active:outline-none focus:outline-none overflow-hidden new-css-style-box"
                tabIndex={0}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <>
                  {array?.map((item, index) => (
                    <ImageCard
                      index={index}
                      item={item}
                      setImageDetails={setImageDetails}
                    />
                  ))}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
      {imageDetails && (
        <SingleImage
          imageDetails={imageDetails}
          setImageDetails={setImageDetails}
        />
      )}
    </div>
  );
};

export default index;
