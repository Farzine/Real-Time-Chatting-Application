import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";

function MessageBar() {
  return (<div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
    <>
    <div className="flex gap-6">
      <BsEmojiSmile className="text-xl cursor-pointer text-panel-header-icon" title="Emoji"/>
      <ImAttachment className="text-xl cursor-pointer text-panel-header-icon" title="Attach File"/>
    </div>
    <div className=" w-full rounded-lg h-10 flex items-center">
      <input type="text" placeholder="Type a message" className="bg-input-background text-sm text-white h-10 rounded-lg px-5 py-4 focus:outline-none w-full"/>
    </div>
    <div className="flex w-10 items-center justify-center">
      <button>
        <MdSend className="text-xl cursor-pointer text-panel-header-icon" title="Send message"/>
        {/* <FaMicrophone className="text-xl cursor-pointer text-panel-header-icon" title="Record"/> */}
      </button>
    </div>
    </>
  </div>);
}

export default MessageBar;
