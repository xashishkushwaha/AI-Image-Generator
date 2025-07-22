import React, { useState, useEffect } from "react";
//IMPORT ICON
import {
  HomeLogo,
  AILogo,
  Search,
  Image,
  Filter,
  FaHeart,
  FaInstagram,
  AiOutlineYoutube,
  BsCameraReelsFill,
  FaRegHeart,
  Magic,
  Dimensions,
} from "../SVG/index";
import { ActiveModel, FastSlow } from "../index";

///https://platform.openai.com/docs/api-reference/images/create

const PromptInput = ({
  promptV3,
  setPromptV3,
  promptV2,
  setPromptV2,
  activeModel,
  setActiveModel,
  setReCall,
  reCall,
}) => {
  const [openCustomSize, setOpenCustomSize] = useState(false);
  const [rangeValue, setRangeValue] = useState(3);

  //V3 MODEAL
  const [v3Style, setV3Style] = useState("vivid");
  const [AISizeStyleV3, setAISizeStyleV3] = useState("1024x1024");
  const [AISizeStyleV2, setAISizeStyleV2] = useState("256x256");

  const handleRangeChange = (event) => {
    setPromptV2({ ...promptV2, n: event.target.value });
    setRangeValue(event.target.value);
  };

  const changeModel = (model) => {
    setActiveModel(model);
    localStorage.setItem("ACTIVE_MODEL", model);
    setReCall(reCall + 1);
  };

  return (
    <div className="w-full mt-[20px] ml-0 md:ml-8 md:max-w-[300px]">
      <div className="relative border border-zinc-700 rounded-lg  shadow-md">
        <div className="px-5 py-4 pb-5">
          <div className="mb-4 text-xs opacity-40 select-none">
            {activeModel}
          </div>
          <div className="flex space-x-2 px-2">
            <div
              onClick={() => changeModel("AI Image Art Dall-e-v3")}
              className={`text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t drop-shadow items-center justify-center px-2.5 ${
                activeModel == "AI Image Art Dall-e-v3"
                  ? "py-2.5 w-fit-content active:scale-95 transition-all from-indigo-900 via-indigo-900 to-indigo-800"
                  : "from-zinc-700 via-zinc-700 to-zinc-700  py-2 w-fit-content"
              }`}
            >
              <AILogo /> &nbsp;&nbsp;Dall-e-V3
            </div>
            <div
              onClick={() => changeModel("AI Image Art Dall-e-v2")}
              className={`text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t drop-shadow items-center justify-center px-2.5 ${
                activeModel == "AI Image Art Dall-e-v2"
                  ? "py-2.5 w-fit-content active:scale-95 transition-all from-indigo-900 via-indigo-900 to-indigo-800"
                  : "from-zinc-700 via-zinc-700 to-zinc-700  py-2 w-fit-content"
              }`}
            >
              <AILogo /> &nbsp;&nbsp;Dall-e-V2
            </div>
          </div>

          {/* ///2 */}
          {activeModel == "AI Image Art Dall-e-v2" && (
            <>
              <label
                htmlFor="levelRange"
                class="slider"
                style={{
                  width: "100%",
                  marginTop: "1.5rem",
                }}
              >
                <input
                  type="range"
                  className="level"
                  id="levelRange"
                  min="1"
                  max="5"
                  value={rangeValue}
                  onChange={handleRangeChange}
                />
              </label>
              <div class="mt-1">
                <div class="select-none opacity-50 text-xs flex items-center justify-start mb-3">
                  <Dimensions />
                  <p>Quentity: {rangeValue} </p>
                </div>
              </div>
            </>
          )}

          {activeModel == "AI Image Art Dall-e-v2" ? (
            <ActiveModel
              activeModel={activeModel}
              size1="256x256"
              size2="512x512"
              size3="1024x1024"
              updateState={setPromptV2}
              value={promptV2}
              addClass={AISizeStyleV2}
              updateClass={setAISizeStyleV2}
            />
          ) : (
            <ActiveModel
              activeModel={activeModel}
              size1="1024x1024"
              size2="1792x1024"
              size3="1024x1792"
              updateState={setPromptV3}
              value={promptV3}
              v3Style={v3Style}
              setV3Style={setV3Style}
              addClass={AISizeStyleV3}
              updateClass={setAISizeStyleV3}
            />
          )}

          <FastSlow />
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
