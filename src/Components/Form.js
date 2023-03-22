import React, { useState } from 'react'
import Signout from './Signout';
import Signin from './Signin';

const Form = () => {
  const [login, setLogin] = useState(true);
  const [signInData,setSignInData]=useState({
    email:'',
    password:'',
  })
  const [signupdata,setSignUpdata]=useState({
    name:'',
    email:'',
    password:'',
  })
  
  const onButton=()=>{
    if(signInData.password !== signupdata.password){
        alert("Please enter valid password")
      }
    else if(signInData.email && signInData.password){
      alert("You are logged in")
    }
   
    else{
      alert("Please enter data")
    }
  }
  const onButtontwo=()=>{
    if(signupdata.name && signupdata.password && signupdata.email){
      alert("Now you can log in")
    }
    else{
      alert("Please enter data")
    }
  }
  return (
    <div className="component-form">
      <div className="form-tab flex-row">
        <div
          className={`tab-btn center-text ${login === true ? "btn-active" : ""}`}
          onClick={() => setLogin(!login)}
        >
          <p>Login</p> </div>
        <div
          className={`tab-btn center-text ${login === false ? "btn-active" : ""}`}
          onClick={() => setLogin(!login)}
        >
          <p> Sign up</p> </div>
      </div>
      {
        !login && <Signout onButtontwo={onButtontwo}  signupdata={signupdata} setSignUpdata={setSignUpdata}/>
      }
      {
        login && <Signin onButton={onButton} signInData={signInData}  setSignInData={setSignInData}/>
      }
    </div>
  )
}

export default Form