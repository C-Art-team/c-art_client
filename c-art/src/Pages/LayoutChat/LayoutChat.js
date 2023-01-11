import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ForumChat from "../GroupChat/groupchat";
import Groups from "../Groups/Groups";

function LayoutChat() {
  const { tag } = useParams();
  return (
    <div className="flex pt-5 ">
      <div className=" w-1/3 h-screen">
        <Groups />
      </div>
      <div className=" w-2/3 h-full">
        {tag ? (
          <ForumChat />
        ) : (
          <>
            <div className="w-1/6 h-full p-6 rounded-t-xl justify">
              <p className="text-6xl">JOIN OUR NETWORKING</p>
            </div>
            <p className="text-md w-1/2 ml-4">
              Click any group beside and feel free to contributes
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LayoutChat;
