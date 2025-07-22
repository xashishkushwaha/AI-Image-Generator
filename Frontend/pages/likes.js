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
  Slider,
  SingleImage,
  ApertImageCard,
  Button,
} from "../Components/index";
import reelImage from "../data/reel.json";
import instagramImage from "../data/instagram.json";
import youTubeImage from "../data/youtube.json";
import customImage from "../data/custom.json";

const likes = () => {
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
            <div className="text-7xl mb-12 font-logo font-bold mt-0">Likes</div>
            <div className="flex space-x-2 px-2">
              <div
                onClick={() => changeCategory("Reel")}
                className="text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800 drop-shadow items-center justify-center px-2.5 py-2.5 w-fit-content active:scale-95 transition-all"
              >
                <BsCameraReelsFill /> &nbsp;&nbsp; Reel
              </div>
              <Button
                icon={<AiOutlineYoutube />}
                name={"YouTube"}
                handleClick={() => changeCategory("Youtube")}
              />
              <Button
                icon={<FaInstagram />}
                name={"Instagram"}
                handleClick={() => changeCategory("Instagram")}
              />
            </div>
            <div className="mt-2">&nbsp;</div>
            {/* //CATEGORY */}
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

export default likes;
