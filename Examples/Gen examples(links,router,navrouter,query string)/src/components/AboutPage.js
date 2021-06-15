import React from "react";
import { Prompt } from "react-router-dom"
class AboutPage extends React.Component {
  render() {
    return (
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
        (//prompt)
        <Prompt when={true} message="do you want to leave this page?" />
      </>
    );
  }
}

export default AboutPage;
