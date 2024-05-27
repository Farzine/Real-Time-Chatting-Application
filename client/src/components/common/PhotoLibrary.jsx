import React from "react";
import {IoClose} from "react-icons/io5";


function PhotoLibrary({hidePhotoLibrary, setImage}) {
  const images =[
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",  
  ]
  return <div className="fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center">
    <div className="h-max w-max bg-gray-700 gap-6 rounded-md p-4">
      <div className="pt-1 pe-1 cursor-pointer flex items-end justify-end" onClick={()=>hidePhotoLibrary(false) }>
        <IoClose className="h-5 w-5 cursor-pointer"/>
      </div>
      <div className="grid grid-cols-3 justify-center items-center gap-16 p-20 w-full">
        {
          images.map((image, index) => {
            return <div key={index} className="h-20 w-20 relative cursor-pointer" onClick={()=>{setImage(images[index]); hidePhotoLibrary(false)}}>
              <div className="h-25 w-25 cursor-pointer">
              <img src={image} alt="avatar" />
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>;
}

export default PhotoLibrary;
