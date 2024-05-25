import { firebaseAuth } from "../utils/FirebaseConfig.js";
import {  getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import React from "react";
import { FcGoogle} from "react-icons/fc";
import {useRouter} from "next/router";
import axios from 'axios';
import { CHECK_USER_ROUTE } from "../utils/ApiRoutes.js";
import { useStateProvider } from "../context/StateContext.jsx";
import { reducerCases } from "../context/constants.js";


function login() {
  const router = useRouter();

  const [{},dispatch] = useStateProvider();

  const handleLogin = async() => {
    alert("Login with Google");
    const provider = new GoogleAuthProvider();
    const {user:{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth, provider);
    try{
      if(email){
        const response = await axios.post(CHECK_USER_ROUTE,{email});
        
        if(!response.data){
          dispatch({
            type:reducerCases.SET_NEW_USER,
            newUser:true,
          });
          dispatch({
            type:reducerCases.SET_USER_INFO,
            userInfo:{
              name,
              email,
              profileImage,
              status: "",
            },
          });
          router.push("/onboarding");
        }
        else{
          console.log("User found");
        }
      }
    }
    catch(error){
      console.error(error);
    }
  };
  return( 
  <div className="flex justify-center items-center bg bg-panel-header-background h-screen w-screen flex-col gap-6">
  <div className="flex items-center justify-center gap-2 text-white "> 
  <img src="/Whisper.png " alt="Whisper_app_logo" style={{ width: '200px', height: '200px'}}/>
  <span className="text-7xl text-white" >Whisper</span>
  </div>
  <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin}>
  <FcGoogle className="text-4xl"/>
  <span className="text-white text-2xl">Login with Google</span>
  </button>
  </div>
  
  


);
}

export default login;
