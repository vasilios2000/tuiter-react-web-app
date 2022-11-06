import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
      tuit
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div><span className={"fw-bold"}>{tuit.userName}</span> <BsFillCheckCircleFill color={"blue"}/> {tuit.handle} . {tuit.time}</div>
            <div>{tuit.tuit}</div>
            <div>
              <TuitStats key={tuit._id} tuit={tuit}/>
            </div>
          </div>
        </div>

      </li>
  );
};
export default TuitItem;
