import React from "react";
import Avatar from "../common/Avatar";

function ChatLIstItem({data, isContactPage = false}) {
  return (
  <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`}>
    <div className="min-w-fit px-5 pt-3 pb-1">
     <Avatar type="lg" image={data?.profilePicture}/> 
    </div>
    <div className="flex-col min-h-full flex justify-center mt-3 pr-2 w-full">
    <div className="flex justify-between">
      <div>
        <span className="text-white">{data?.name}</span>
      </div>
    </div>
    <div className="flex border-b border-conversation-border pb-2 pt-1 p3-2">
    <div className="flex justify-between w-full">
    <span className="text-secondary line-clamp-1 text-sm">{data?.about || "\u00A0"}</span>
    </div>
    </div>
    </div>
  </div>);
}

export default ChatLIstItem;
