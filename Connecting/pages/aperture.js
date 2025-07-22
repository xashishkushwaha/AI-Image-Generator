import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import axios from "axios";
import Cookies from "js-cookie";

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
  Button,
  AIProcessing,
} from "../Components/index";
import {
  BsCameraReelsFill,
  AiOutlineYoutube,
  FaInstagram,
} from "../Components/SVG/index.js";
import apertureImage from "../data/aperture.json";

import {
  IMAGE_GENERATOR_V3,
  IMAGE_GENERATOR_V2,
  CHECK_AUTH,
  GET_USER_AI_IMAGES,
} from "../Utils/index";

const apertuer = () => {
  const [openImage, setOpenImage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [activeModel, setActiveModel] = useState();
  const [error, setError] = useState();
  const [reCall, setReCall] = useState(0);

  const [category, setCategory] = useState("Youtube");
  const [singleID, setSingleID] = useState();

  const [activeUser, setActiveUser] = useState();
  const [allAIImages, setAllAIImages] = useState();

  //V3
  const [V3_1024x1024, setV3_1024x1024] = useState();
  const [V3_1792x1024, setV3_1792x1024] = useState();
  const [V3_1024x1792, setV3_1024x1792] = useState();
  //V2
  const [V2_256x256, setV2_256x256] = useState();
  const [V2_512x512, setV2_512x512] = useState();
  const [V2_1024x1024, setV2_1024x1024] = useState();

  ///MODEL V3
  const [promptV3, setPromptV3] = useState({
    prompt: "",
    negativePrompt: "",
    size: "1024x1024",
    style: "vivid",
  });

  //MODEL V2
  const [promptV2, setPromptV2] = useState({
    prompt: "",
    negativePrompt: "",
    size: "256x256",
    n: 3,
  });

  console.log(promptV2);

  useEffect(() => {
    var value = localStorage.getItem("ACTIVE_MODEL");
    if (value) {
      setActiveModel(value);
      console.log(value);
    }
  }, [activeModel]);

  const CLICK_V3 = async (promptV3) => {
    try {
      setLoader(true);
      const response = await IMAGE_GENERATOR_V3(promptV3);
      if (response == "Data Missing") {
        setError(response);
        setLoader(false);
      } else if (response.status == 201) {
        setLoader(false);
        setSingleID(response.data.post._id);
      }
    } catch (error) {
      const errorMessage =
        error.message || "An unexpected error occurred (OpenAI)";
      setLoader(false);
      console.log(error);
      setError(errorMessage);
    }
  };

  const CLICK_V2 = async (promptV2) => {
    try {
      setLoader(true);
      const response = await IMAGE_GENERATOR_V2(promptV2);
      if (response == "Data Missing") {
        setError(response);
        setLoader(false);
      } else if (response.status == 201) {
        setLoader(false);
        setSingleID(response.data.post._id);
      }
    } catch (error) {
      const errorMessage =
        error.message || "An unexpected error occurred (OpenAI)";
      setLoader(false);
      console.log(error);
      setError(errorMessage);
    }
  };
  //

  const changeCategory = (category) => {
    const model = localStorage.getItem("ACTIVE_MODEL");

    if (model === "AI Image Art Dall-e-v2") {
      if (category === "Reel") {
        setAllAIImages(V2_256x256);
        setCategory("Reel");
      } else if (category === "Instagram") {
        setAllAIImages(V2_512x512);
        setCategory("Instagram");
      } else if (category === "Youtube") {
        setAllAIImages(V2_1024x1024);
        setCategory("Youtube");
      }
    } else {
      if (category === "Reel") {
        setAllAIImages(V3_1024x1792);
        setCategory("Reel");
      } else if (category === "Instagram") {
        setAllAIImages(V3_1024x1024);
        setCategory("Instagram");
      } else if (category === "Youtube") {
        setAllAIImages(V3_1792x1024);
        setCategory("Youtube");
      }
    }
  };

  const CALLING_ALL_POSTS = async () => {
    try {
      const storedCookieValue = Cookies.get("token");

      if (storedCookieValue) {
        const user = await CHECK_AUTH();
        setActiveUser(user);

        const response = await GET_USER_AI_IMAGES(user?._id);

        const V2_256x256Temp = [];
        const V2_512x512Temp = [];
        const V2_1024x1024Temp = [];
        const V3_1024x1024Temp = [];
        const V3_1792x1024Temp = [];
        const V3_1024x1792Temp = [];

        response.forEach((el) => {
          if (el.aiModel === "AI Image Art Dall-e-v2") {
            if (el.size === "256x256") {
              V2_256x256Temp.push(el);
            } else if (el.size === "512x512") {
              V2_512x512Temp.push(el);
            } else if (el.size === "1024x1024") {
              V2_1024x1024Temp.push(el);
            }
          } else if (el.aiModel === "AI Image Art Dall-e-v3") {
            if (el.size === "1024x1024") {
              V3_1024x1024Temp.push(el);
            } else if (el.size === "1792x1024") {
              V3_1792x1024Temp.push(el);
            } else if (el.size === "1024x1792") {
              V3_1024x1792Temp.push(el);
            }
          }
        });

        setV2_256x256(V2_256x256Temp);
        setV2_512x512(V2_512x512Temp);
        setV2_1024x1024(V2_1024x1024Temp);
        setV3_1024x1024(V3_1024x1024Temp);
        setV3_1792x1024(V3_1792x1024Temp);
        setV3_1024x1792(V3_1024x1792Temp);

        const model = localStorage.getItem("ACTIVE_MODEL");

        if (model === "AI Image Art Dall-e-v2") {
          setAllAIImages(V2_256x256Temp);
        } else {
          setAllAIImages(V3_1792x1024Temp);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CALLING_ALL_POSTS();
  }, []);

  const arrayRender = [...(allAIImages?.reverse() || [])];

  return (
    <div>
      <Header />
      <div class="mb-[56px] sm:mb-0 sm:mt-[56px]">
        <GetStarted activeUser={activeUser} />
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
                    loader={loader}
                    error={error}
                    activeUser={activeUser}
                    generateFunction={() =>
                      activeModel == "AI Image Art Dall-e-v3"
                        ? CLICK_V3(promptV3)
                        : CLICK_V2(promptV2)
                    }
                  />
                  <PromptInput
                    promptV3={promptV3}
                    setPromptV3={setPromptV3}
                    promptV2={promptV2}
                    setPromptV2={setPromptV2}
                    activeModel={activeModel}
                    setActiveModel={setActiveModel}
                    setReCall={setReCall}
                    reCall={setReCall}
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
                <Subscription activeUser={activeUser} />
              </div>
            </div>

            {/* //BODY */}
          
          </div>
        </div>
      </div>{" "}
      {singleID && (
        <SingleImage singleID={singleID} setSingleID={setSingleID} />
      )}
      {loader && <AIProcessing />}
    </div>
  );
};

export default apertuer;
