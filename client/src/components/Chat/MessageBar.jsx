import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useStateProvider } from "@/context/StateContext";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import { reducerCases } from "@/context/constants";


function MessageBar() {
  const [{userInfo,currentChatUser,socket},dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const sendMessage = async() => {
    // alert(message);
     try{
      console.log("Sending message:", { to: currentChatUser?.id, from: userInfo?.id, message });
      const {data} = await axios.post(ADD_MESSAGE_ROUTE,{
        to: currentChatUser?.id,
        from: userInfo?.id,
        message,
      });
      socket.current.emit("send-msg",{message:data.message, to: currentChatUser?.id, from: userInfo?.id});
      dispatch({
        type:reducerCases.ADD_MESSAGE,
        newMessage:{
          ...data.message,
        },
        fromSelf:true,
      });
      setMessage("");
     }
     catch(err){
      console.log(err)
     }
  };

  return (<div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
    <>
    <div className="flex gap-6">
      <BsEmojiSmile className="text-xl cursor-pointer text-panel-header-icon" title="Emoji"/>
      <ImAttachment className="text-xl cursor-pointer text-panel-header-icon" title="Attach File"/>
    </div>
    <div className=" w-full rounded-lg h-10 flex items-center">
      <input type="text" placeholder="Type a message" className="bg-input-background text-sm text-white h-10 rounded-lg px-5 py-4 focus:outline-none w-full"
      value={message} onChange={(e) => setMessage(e.target.value)} 
      />
    </div>
    <div className="flex w-10 items-center justify-center">
      <button>
        <MdSend className="text-xl cursor-pointer text-panel-header-icon" title="Send message" onClick={sendMessage}/>
        {/* <FaMicrophone className="text-xl cursor-pointer text-panel-header-icon" title="Record"/> */}
      </button>
    </div>
    </>
  </div>);
}

export default MessageBar;
