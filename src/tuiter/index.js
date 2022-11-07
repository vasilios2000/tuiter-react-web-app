import React from "react";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
  from "./reducers/who-reducer";
import {useSelector} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import navReducer from "./reducers/nav-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, nav: navReducer }});

function Tuiter() {
  return (

      <Provider store={store}>
        <RenderPage/>
      </Provider>
  );
}

function RenderPage() {
  const currPage = useSelector(state => state.nav)
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active= {currPage}/>
          </div>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6"
               style={{"position": "relative"}}>
            <RenderMainContent/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </>
  )
}

function RenderMainContent() {
  const currPage = useSelector(state => state.nav)
  switch (currPage) {
    case "home" : return <HomeComponent/>
    case "explore" : return <ExploreComponent/>
    default: return <HomeComponent/>
  }
}

export default Tuiter
