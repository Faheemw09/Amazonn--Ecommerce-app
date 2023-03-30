import React from 'react'

const Login = () => {
  return (
    <div>
       <div className='loginform'>
      <br/>
    <h2 className='logname'>User Login</h2>
 
     <form >
     <br/>

        <input className='inputform' type="name" placeholder='User Name'/>

      <br/>
      <br/>
       
        <input className='inputform' type="email" placeholder='Email'/>
        <br/>
    <br/>
        <input  className='inputform' type="password" placeholder='Password'
    
        ></input>
        <br/>
        <br/>
        <button  className='btnform' type='submit' >Log In</button>
    </form>

    
    </div>
    </div>
  )
}

export default Login


// dev-61etewi1oke1yajn.us.auth0.com    Domain
// u2yyExeanfLzdhBp7ktDIsNLmJPWNZAh    Clint