import React, { useState ,useContext} from 'react'
import { Link, Redirect} from 'react-router-dom';
import firebase from 'firebase/app';
import { UserContext } from "../Context/UserContext";
import { toast } from 'react-toastify';



const Registration = () => {

    const context = useContext(UserContext)

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [conformPassword, setConformPassword]= useState('')

  const handelRegister = () => {
     firebase
       .auth()
       .createUserWithEmailAndPassword( email, password)
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

 const register = e => {
//    e.preventDefault()
   handelRegister()
 }

 
//  if (Password === conformPassword) {
//     register()
//   } else {
//      return toast( 'Passords are not same')
//   };
  

 
 
if (context.user?.uid ) {
    return <Redirect to='/' />
}
   else{ return (
<>

        <div className="card m-5 text-white text-center"
        style={{height: 600,
            width: 500,
            backgroundColor:'#332929'
           
        }}>

 <div className="card-body">
   <h5 className="card-header bg-transparent border-success ">REGISTRATION PAGE</h5>
             <form action="" >
               <div className='login__name list-group list-group-flush'>
               <label htmlFor="">Name:</label>
               <input type="text" name='name'   value={name} onChange={(e)=> setName(e.target.value)} required/>
               </div>
               <div className='login__email list-group list-group-flush'>
               <label htmlFor="">Email:</label>
               <input type="email" name='email'   value={email} onChange={(e)=> setEmail(e.target.value)} required/>
               </div>
               <div className='login__password list-group list-group-flush'>
               <label htmlFor="">Password:</label>
               <input type="password" name='password'   value={password} onChange={(e)=> setPassword(e.target.value)} required/>
               </div>
               <div className='login__password list-group list-group-flush'>
               <label htmlFor="">Conform Password:</label>
               <input type="password" name='conformPassword'  value={conformPassword} onChange={(e)=> setConformPassword(e.target.value)} required/>
               </div>
           </form>

           
               <button onClick={register} className='btn btn-success mb-4 w-47' type='submit'>Register</button>
               <p className="card-text">Already a user?<Link to='/login'> Login Here</Link> </p>
               <div className="card-footer bg-transparent border-success">&copy; 2021</div>

        </div>
        </div>
  


</>
    )

};




}

export default Registration
