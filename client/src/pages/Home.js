import React, { useContext } from "react";
import { UidContext } from "../component/AppContext";
import LeftNav from "../component/LeftNav";
import NewPostForm from "../component/Post/NewPostForm";
import Thread from "../component/Thread";
import Log from "../component/Log";
import Trends from "../component/Trends";
import FriendsHint from "../component/Profil/FriendsHint";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />

      <div className="main">
         <div className="home-header">
          {uid ? <NewPostForm /> : <Log signIn={true} signUp={false} />}
        </div> 
        <Thread />
      </div>
       <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
      
            {uid && <FriendsHint />}
         
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Home;



