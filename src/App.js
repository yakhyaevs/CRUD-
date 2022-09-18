import React from 'react';
import './App.css';
import Login from './Components/LogIn/index'
import SignUp from './Components/SignUp';

export default class App extends React.Component{
   state = {
    target:true
  }
   render(){

    const signin=()=>{
      this.setState({target: true}) 
   }
   const signup=()=>{
      this.setState({target:false})
   }
   return (
    
    <div>
      {
         this.state.target ? (<Login onClick={signup} />):(<SignUp onClick={signin}/>)
      }
     </div>
  )
}
}
   
