import React from "react";
import {FaCamera} from "react-icons/fa";
import {useState} from "react";
import ContextMenu from "./ContextMenu.jsx";

function Avatar({type, image,setImage}) {

  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({x:0, y:0});
  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({x:e.pageX, y:e.pageY});
    setIsContextMenuVisible(true);
  }
  const contextMenuOptions = [
    {name: "Take Photo",callback: ()=> {}},
    {name: "Choose from File",callback: ()=> {}},
    {name: "Upload Photo",callback: ()=> {}},
    {name: "Remove Photo",callback: ()=> {}},
  ];
  return <>
  <div className="felx items-center justify-center">
    {
      type === "sm" && (
      <div className="relative h-10 w-10">
        <img src = {image} alt="avatar" className="rounded-full" />
      </div>
    )}
    
    {
      type === "lg" && (
      <div className="relative h-14 w-14">
        <img src = {image} alt="avatar" className="rounded-full"  />
      </div>
    )}
     {
      type === "xl" && (
        <div className="relative cursor-pointer"
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
        >
          <div className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${hover?"visible":"hidden"}`}style={{ backgroundColor: '#080808', opacity: 0.6 }} 
          onClick={e=> showContextMenu(e)} id = "context-opener"  
          >
            <FaCamera className="text-2xl" id = "context-opener" onClick={e=> showContextMenu(e)}  />
            <span onClick={e=> showContextMenu(e)}id = "context-opener"  >Change Photo</span>
          </div>
          <div className="h-60 w-60 ">
            <img src = {image} alt="avatar" className="rounded-full"  />
          </div>
        </div>
    )}
  
  </div>
  {isContextMenuVisible && (<ContextMenu
    options={contextMenuOptions}
    cordinates={contextMenuPosition}
    contextMenu={isContextMenuVisible}
    setContextMenu={setIsContextMenuVisible}
    />)}
  </>;
}

export default Avatar;
