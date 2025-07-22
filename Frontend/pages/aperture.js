import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import {
  Header,
  GetStarted,
  ImageCard,
  Slider,
  SingleImage,
  ApertImageCard,
  Subscription,
  Prompt,
  PromptInput,
} from "../Components/index";
import apertureImage from "../data/aperture.json";

const apertuer = () => {
  const [openImage, setOpenImage] = useState(false);
  const [imageDetails, setImageDetails] = useState();

  //MODEL V3
  const [promptV3, setPromptV3] = useState({
    prompt: "",
    negativePrompt: "",
    size: "",
    quality: "hd",
    n: 1,
    style: "",
  });

  //MODEL V2
  const [promptV2, setPromptV2] = useState({
    prompt: "",
    negativePrompt: "",
    size: "",
    n: 0,
  });

  return (
    <div>
      <Header />
      <div class="mb-[56px] sm:mb-0 sm:mt-[56px]">
        <GetStarted />
        <div>
          <div class="w-screen overflow-x-hidden">
            <div class="flex justify-center w-full mt-8 sm:mt-4 md:mt-10">
              <div class="px-2 md:px-10 lg:px-16 flex items-center flex-col max-w-[1300px] w-full">
                {/* //PART 1 */}
                <div className="w-full flex flex-col-reverse md:flex-row">
                  <Prompt
                    promptV3={promptV3}
                    setPromptV3={setPromptV3}
                    promptV2={promptV2}
                    setPromptV2={setPromptV2}
                  />
                  <PromptInput
                    promptV3={promptV3}
                    setPromptV3={setPromptV3}
                    promptV2={promptV2}
                    setPromptV2={setPromptV2}
                  />
                </div>
                {/* //PART 2 */}
                <div
                  class="items-center w-full max-w-[800px] mt-8 px-4 pl-5 md:px-5"
                  style={{ minHeight: "1px", position: "relative" }}
                >
                  <div></div>
                </div>
                {/* //PART 3 */}
                <Subscription />
              </div>
            </div>

            {/* //BODY */}
            <div className="flex items-cener justify-center w-full">
              <div className="flex w-full flex-col-reverse max-w-[1400px] pb-32 px-2 sm:px-8">
                <div
                  role="list"
                  className="active:outline-none focus:outline-none"
                  tabIndex={0}
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "100%",
                    height: "994px",
                    maxHeight: "994px",
                  }}
                >
                  <div
                    role="listitem"
                    style={{
                      width: "100%",
                      position: "absolute",
                      writingMode: "horizontal-tb",
                    }}
                  >
                    <div className="mb-10">
                      <div className="flex flex-wrap justify-center flex-1 w-full items-center">
                        {apertureImage?.map((item, index) => (
                          <ApertImageCard
                            index={index}
                            item={item}
                            setImageDetails={setImageDetails}
                          />
                        ))}
                      </div>
                      <div className="px-4 text-sm text-zinc-100 w-full flex items-center justify-center mt-2">
                        <div className="opacity-80 hover:opacity-100 transition-all cursor-pointer group">
                          <div title="Load in editor">
                            create a programming lab with hacker character and
                            focus from the back add text like
                            @theblockchaincoders programming lab
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {imageDetails && (
        <SingleImage
          imageDetails={imageDetails}
          setImageDetails={setImageDetails}
        />
      )}
    </div>
  );
};

export default apertuer;
