import React from "react";
import {useDispatch} from "react-redux";
import {AiOutlineShareAlt, AiFillHeart, AiFillDislike} from 'react-icons/ai'
import {FaRetweet} from 'react-icons/fa'
import {SlBubble} from 'react-icons/sl'
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const tuitLikeHandler = () => {
    if (tuit.liked)
    {
      dispatch(updateTuitThunk({
        ...tuit,
        liked: false,
        likes: tuit.likes - 1
      }))
    }
    else {
      dispatch(updateTuitThunk({
        ...tuit,
        liked: true,
        likes: tuit.likes + 1
      }))
    }
  }
  const tuitDislikeHandler = () => {
    if (tuit.disliked)
    {
      dispatch(updateTuitThunk({
        ...tuit,
        disliked: false,
        dislikes: tuit.dislikes - 1
      }))
    }
    else {
      dispatch(updateTuitThunk({
        ...tuit,
        disliked: true,
        dislikes: tuit.dislikes + 1
      }))
    }
  }
  return(
        <div className="row">
          <div className="col-2">
            <SlBubble/>   {tuit.replies}
          </div>
          <div className="col-2">
            <FaRetweet/>   {tuit.retuits}
          </div>
          <div className="col-2">
            <i onClick={tuitLikeHandler}>
              {tuit.liked? <AiFillHeart color={"red"}/> : <AiFillHeart/>}   {tuit.likes}
            </i>
          </div>
          <div className="col-2">
            <i onClick={tuitDislikeHandler}>
              {tuit.disliked? <AiFillDislike color={"blue"}/> : <AiFillDislike/>}   {tuit.dislikes}
            </i>
          </div>
          <div className="col-2">
            <AiOutlineShareAlt/>
          </div>
        </div>
  );
};
export default TuitStats;
