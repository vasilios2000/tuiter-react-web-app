import React from "react";
import {useDispatch} from "react-redux";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineUser
} from "react-icons/ai"
import {BsAsterisk, BsHash, BsBookmark, BsCardList} from "react-icons/bs"
import {FiMoreHorizontal} from "react-icons/fi";
import {updatePage} from "../reducers/nav-reducer";
const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  const dispatch = useDispatch();
  const navClickHandler = (newPage) => {
    return dispatch(updatePage(newPage))
  }
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <a className={`list-group-item ${active === 'home'?'active':''}`} onClick={() => navClickHandler("home")}>
          <AiOutlineHome/>Home
        </a>
        <a className={`list-group-item ${active === 'explore'?'active':''}`} onClick={() => navClickHandler("explore")}>
          <BsHash/>Explore
        </a>
        <a className={`list-group-item ${active === 'labs'?'active':''}`}>
          <BsAsterisk/>Labs
        </a>
        <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
          <AiOutlineBell/>Notifications
        </a>
        <a className={`list-group-item ${active === 'messages'?'active':''}`}>
          <AiOutlineMail/>Messages
        </a>
        <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
          <BsBookmark/>Bookmarks
        </a>
        <a className={`list-group-item ${active === 'lists'?'active':''}`}>
          <BsCardList/>Lists
        </a>
        <a className={`list-group-item ${active === 'profile'?'active':''}`}>
          <AiOutlineUser/>Profile
        </a>
        <a className={`list-group-item ${active === 'more'?'active':''}`}>
          <FiMoreHorizontal/>More
        </a>

      </div>
  )
};
export default NavigationSidebar;