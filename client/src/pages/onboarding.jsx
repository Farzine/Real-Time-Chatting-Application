import React from "react";
import { useStateProvider } from "../context/StateContext.jsx";
import { useState } from "react";
import Input from "@/components/common/Input.jsx";
import Avatar from "@/components/common/Avatar.jsx";


function onboarding() {

  const [{userInfo}] = useStateProvider();
  const [name, setName] = useState(userInfo?.name ||"");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");

  return (
  <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center ">
    <div className="flex items-center justify-center gap-2">
      <img src="/Whisper.png" alt="Whisper_app_logo" width="200" height="200" />
      <span className="text-7xl ">Whisper</span>
    </div>
    <h2 className="text-2xl">Create your profile</h2>
    <div className="flex gap-6 mt-6 ">
      <div className="flex flex-col items-center justify-center mt-5 gap-6 ">
        <Input name="Name" state ={name} setState={setName} label /> 
        <Input name="About" state ={about} setState={setAbout} label />
       
      </div>
      <div >
      <Avatar type="xl" image={image} setImage={setImage} />
      </div>
    </div>
  </div>
  );
}

export default onboarding;
