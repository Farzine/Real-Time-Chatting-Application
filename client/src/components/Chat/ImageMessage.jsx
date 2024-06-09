import React from "react";
import { useStateProvider } from "@/context/StateContext"; 
import { HOST } from "@/utils/ApiRoutes";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";


function ImageMessage({ message}) {
  const [{userInfo,currentChatUser}] = useStateProvider();
  return <div className={`p-1 rounded-lg`} style={{
    backgroundColor: message.senderId === currentChatUser.id ? "#242D34" : "#092E4C",
  }}>
    <div className="relative">
      <img src={`${HOST}/${message.message}`} alt="image" className="rounded-lg" height={300} width={300}/>
      <div className="absolute bottom-1 right-1 flex  items-end gap-1">
        <span className=" text-bubble-meta text-[11px] pt-1 min-w-fit">
          {calculateTime(message.createdAt)}
        </span>
        <span className=" text-bubble-meta">
          {
            message.senderId === userInfo.id && <MessageStatus messageStatus = {message.messageStatus}/>
          }
        </span>
      </div>
    </div>
  </div>;
}

export default ImageMessage;
