import React, { useState ,useContext} from 'react'
import { Link, Redirect} from 'react-router-dom';
import firebase from 'firebase/app';
import { UserContext } from "../Context/UserContext";
import {toast} from "react-toastify"


const Login = () => {

    const context = useContext(UserContext)

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
   

  const handelLogin = () => {
     firebase
       .auth()
       .signInWithEmailAndPassword( email, password)
    .then(response => {
        console.log(response)
        context.setUser({
            email: response.user.email,
            uid: response.user.uid

        })
    })
    .catch(error => {
        console.log(error)
        toast(error.message, {
            type: "error"
        })
    })
  }  

 const loginbtn = e => {
 e.preventDefault()
   handelLogin()

 }



if (context.user?.uid ) {
    return <Redirect to='/' />
}
   else{ return (
        <div className="card m-5 text-white text-center"
        style={{height: 600,
            width: 500,
            backgroundColor:'#332929'
           
        }}>

 <div className="card-body">
   <h5 className="card-header bg-transparent border-success ">LOGIN PAGE</h5>
             <form action="" >
               <div className='login__name list-group list-group-flush'>
               <label htmlFor="">Name:</label>
               <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
               </div>
               <div className='login__email list-group list-group-flush'>
               <label htmlFor="">Email:</label>
               <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
               </div>
               <div className='login__password list-group list-group-flush'>
               <label htmlFor="">Password:</label>
               <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
               </div>
               
           </form>
               
             <button className='btn btn-success mb-4' onClick={loginbtn} type='submit'>Login</button>
                 <p className="card-text">New User?<Link to='/register'> Register Here</Link> </p>
                <div className="card-footer bg-transparent border-success">&copy; 2021</div>

        </div>
        </div>
    )
}
}

export default Login;

