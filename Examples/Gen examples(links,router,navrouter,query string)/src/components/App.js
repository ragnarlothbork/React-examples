import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage"; 
import {Redirect, Route ,Switch} from "react-router-dom";
import errorpage from "./errorpage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
 
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        (//route)
       <Route path="/" exact component={HomePage}/> 
       <Route path="/courses" component={CoursesPage}/> 
       <Route path="/About" component={AboutPage}/>
       (//Url parameters)
       <Route path="/course/:slug" component={ManageCoursePage}/>
        (//redirect)
      <Redirect from="/courses-old" to="/courses"/>
       (//errorpage)
       <Route component={errorpage}/> 
      
      </Switch>
   
    </div>
  );
}

export default App;
