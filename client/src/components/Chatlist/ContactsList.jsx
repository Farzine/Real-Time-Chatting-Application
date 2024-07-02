import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { GET_ALL_CONTACTS } from "../../utils/ApiRoutes";
import { useStateProvider } from "../../context/StateContext";
import { BiArrowBack,BiSearchAlt2 } from "react-icons/bi";
import { reducerCases } from "@/context/constants";
import ChatListItem from "../Chatlist/ChatListItem";


function ContactsList() {
  const [allContacts,setAllContacts] = useState([]);
  const[{},dispatch] = useStateProvider();

  useEffect(() => {
   const getContacts = async () => {
    try{
      const {data:{users}} = await axios.get(GET_ALL_CONTACTS);
      setAllContacts(users);
    }
    catch(error){
      console.log(error);
    }
    };
    getContacts();
  } ,[]);

  return(
  <div className=" h-full flex flex-col">
    <div className="flex h-24 items-end px-3 py-4">
      <div className="flex items-center gap-12 text-white">
      <BiArrowBack className="text-xl cursor-pointer" onClick={()=> dispatch({type: reducerCases.SET_ALL_CONTACTS_PAGE})}/>
      <span>New Chat</span>
      </div>
    </div>
    <div className="bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar">
      <div className="flex py-3 items-center gap-3 h-14">
    <div className="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4">
      <div>
        <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-l"/>
      </div>
      <div>
        <input type="text" placeholder="Search contacts" className="bg-transparent text-sm focus:outline-none text-white w-full"/>
      </div>
    </div>
    </div>
    {
      Object.entries(allContacts).map(([initialLetter,userList]) => {
        return(
          <div key={Date.now()+initialLetter} >
           <div className="text-teal-light pl-10 py-5">
            {initialLetter}
            </div>
             {
              userList.map(contact=>{
                return (<ChatListItem data={contact} key={contact.id} isContactPage={true}/>);
              })

             }
             
          </div>
        )
      } )
    }
    </div>
  </div>
  );
}

export default ContactsList;
