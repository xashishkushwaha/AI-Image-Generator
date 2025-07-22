import React from "react";

const Subscription = () => {
  return (
    <div
      class="flex flex-col w-full flex-1 items-center justify-center"
      style={{ position: "relative" }}
    >
      <div class="max-w-[800px]">
        <div class="my-4 mb-8 text-sm bg-indigo-800 relative border-l-4 border-l-indigo-500 bg-opacity-10 rounded-lg border border-indigo-900 border-opacity-50 shadow-md py-2 items-center w-full px-4">
          <p class="font-medium text-sm mt-1">Subscription required</p>
          <p class="mt-2 text-sm">
            <span>
              It looks like you don't have an active subscription. To unlock the
              the image generator, please consider subscribing to a paid plan.
            </span>
          </p>
          <a href="/account">
            <button class="mt-4 mb-2 text-sm px-4 py-2 bg-gradient-to-t from-indigo-700 via-indigo-700 to-indigo-600 rounded-md drop-shadow text-md shadow active:scale-95 transition-all hover:brightness-110">
              View plans
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
