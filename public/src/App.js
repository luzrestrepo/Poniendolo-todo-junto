import React from "react";
import PersonCard from "./PersonCard/PersonCard";





class App extends React.Component{

  render () {
    return (
      <div className="container">
      <PersonCard firstName="Ana" lastName ="Rojas" age ={20}  color ="Rubio"/>      
      <PersonCard firstName ="Luz" lastName = "Restrepo" age ={25}  color ="Negro"/>
      <PersonCard firstName ="Santiago" lastName = "Restrepo" age ={18}  color ="Castaño"/>   
      
      
      </div>
    );

  }
 
}



export default App;
