import React from "react";

const Setting = () => {
  return (
    <div>
      <div
        className="w-64 bg-zinc-800 fixed z-50 right-0 top-5 rounded-md drop-shadow shadow text-sm flex flex-col items-start overflow-hidden border border-zinc-700 slideDownAndFade divide-y divide-zinc-700"
        style={{ marginRight: "1rem", marginTop: "2rem" }}
      >
        <div className="px-4 py-2 bg-zinc-700 bg-opacity-50 w-full">
          <div className="flex items-center">
            <div className="rounded-full h-7 flex-shrink-0 w-7 flex items-center justify-center bg-zinc-800 mr-2">
              <p>G</p>
            </div>
            <span className="font-medium truncate">gsdaulat@gmail.com</span>
          </div>
        </div>
        <a
          className="w-full px-4 py-2 hover:bg-zinc-700 flex justify-center"
          href="/account"
        >
          Account
        </a>
        <button className="w-full px-4 py-2 hover:bg-zinc-700 ">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Setting;
