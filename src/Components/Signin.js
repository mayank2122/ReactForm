import React from 'react'

const Signin = (props) => {
      const { signInData,setSignInData,onButton}=props
      const onChange=(e)=>{
        const {name,value}=e.target ;
        console.log(e.target)
        setSignInData((prevState)=>({
        ...prevState,
          [name]:value
        }))
      }
      console.log(signInData)
      const handleSubmit=(e)=>{
        e.preventDefault();
        
      }
      
      
  return (
    <div className="component-signin">
      <form onSubmit={handleSubmit} className="flex-column-center">
        <input name='email' type="email" placeholder="Email Address" required  onChange={onChange}/>
        <input  name='password' type="password" placeholder="Password" required  onChange={onChange} />
        <button className="btn-cta" type="submit" onClick={()=>{onButton()}} >LOGIN</button>
      </form>
      <p className="highlighted-text">Forgot Password ?</p>
    </div>
  )
}

export default Signin;