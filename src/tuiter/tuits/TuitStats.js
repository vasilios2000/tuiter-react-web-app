import React from "react";
import {AiOutlineShareAlt, AiFillHeart} from 'react-icons/ai'
import {FaRetweet} from 'react-icons/fa'
import {SlBubble} from 'react-icons/sl'

const TuitStats = ({tuit}) => {
  return(
        <div className="row">
          <div className="col-3">
            <SlBubble/>   {tuit.replies}
          </div>
          <div className="col-3">
            <FaRetweet/>   {tuit.retuits}
          </div>
          <div className="col-3">
            {tuit.liked? <AiFillHeart color={"red"}/> : <AiFillHeart/>}   {tuit.likes}
          </div>
          <div className="col-3">
            <AiOutlineShareAlt/>
          </div>
        </div>
  );
};
export default TuitStats;
