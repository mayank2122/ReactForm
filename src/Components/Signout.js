import React from 'react'

const Signout = (props) => {
  const { signupdata,setSignUpdata,onButtontwo}=props
      const onChange=(e)=>{
        const {name,value}=e.target
        console.log(e.target)
        setSignUpdata((prevState)=>({
        ...prevState,
          [name]:value
        }))
      }
      console.log(signupdata)
      const handleSubmit=(e)=>{
        e.preventDefault();
    
      }
      
  return (
    <div className="component-signin">
    <form onSubmit={handleSubmit} className="flex-column-center">
      <input onChange={onChange} type="text" name='name' placeholder="Enter Name" />
      <input onChange={onChange} type="email" name='email' placeholder="Email Address" />
      <input onChange={onChange} type="password" name='password' placeholder="Password" />
      <button className="btn-cta" onClick={()=>{onButtontwo()}} type="submit">SIGNUP</button>
    </form>
  </div>
  )
}

export default Signout;