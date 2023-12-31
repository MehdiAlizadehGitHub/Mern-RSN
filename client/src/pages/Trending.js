import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "../component/AppContext";
import LeftNav from '../component/LeftNav';
import { isEmpty } from "../component/Utils";
import Card from "../component/Post/Card";
import Trends from "../component/Trends";
import FriendsHint from "../component/Profil/FriendsHint";

const Trending = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);

  return <div className="trending-page">
    <LeftNav />
    <div className="main">
      <ul>
        {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id} />)}
      </ul>
    </div>
    <div className="right-side">
      <div className="right-side-container">
        <Trends />
        {uid && <FriendsHint />}
      </div>
    </div>
  </div>;
};

export default Trending;
