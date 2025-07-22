import React from "react";

const Prompt = ({ promptV3, setPromptV3, promptV2, setPromptV2 }) => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex justify-between text-xs px-2 pb-1 mt-6 md:mt-0">
        <p className="opacity-40">Describe your image</p>
      </div>
      <div className="relative z-10 shadow bg-zinc-700 bg-opacity-60 border-x border-t border-zinc-700 rounded-xl">
        <textarea
          className="block resize-none bg-transparent overflow-y-hidden w-full rounded-xl leading-relaxed text-sm pl-4 pr-7 pt-2.5 pb-10 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 rounded-b-xl border-b-0"
          placeholder="A cute mouse pilot wearing aviator goggles, unreal engine render, 8k"
          style={{ height: "96px !important" }}
          onChange={(e) => (
            setPromptV3({ ...promptV3, prompt: e.target.value }),
            setPromptV2({ ...promptV2, prompt: e.target.value })
          )}
        />
        <div className="border border-transparent">
          <div className="-mt-[31px] px-[10px] pb-[7px] w-full">
            <div
              className="flex flex-wrap gap-1"
              style={{ position: "relative" }}
            />
          </div>
          <div style={{ position: "relative" }} />
        </div>
      </div>
      <p className="opacity-40 text-xs pl-2 pb-1 mt-4">Negative prompt</p>
      <textarea
        className="block resize-none shadow overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50"
        placeholder="black and white, monochrome"
        style={{ height: "45px !important" }}
        onChange={(e) => (
          setPromptV3({ ...promptV3, negativePrompt: e.target.value }),
          setPromptV2({ ...promptV2, negativePrompt: e.target.value })
        )}
      />
      <div className="w-full flex items-center justify-center md:justify-end mt-4 space-x-4">
        <div onClick={() => {}} className="transition-all" id="generate-button">
          <button className="text-sm bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800 rounded-full drop-shadow text-md px-8 py-2  transition-all  opacity-70 cursor-default">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
