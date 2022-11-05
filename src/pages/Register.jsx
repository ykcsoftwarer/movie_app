import React from 'react'

const Register = () => {
  // const [firstName, setFirstName] = useState()
  // const [lastName, setLastName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()



  return (
    <div className='d-flex justify-content-center'>
    <div className="form-image d-none d-lg-block">
      <img src={'https://picsum.photos/800/800'} alt="sample-movie" />
    </div>

    <form className="register-form">

    <div className="mb-3"> 
    <label htmlFor="firstName" className='form-label'>First Name</label>
    {/* <input onClick={(e) => setFistName(e.target.value)} type="text" className="form-control" id='firstName' placeholder='Enter Your First Name' required/> */}
    </div>

    <div className="mb-3"> 
    <label htmlFor="lastName" className='form-label'>Last Name</label>
    <input type="text" className="form-control" id='lastName' placeholder='Enter Your Last Name' required/>
    </div>


    <div className="mb-3"> 
    <label htmlFor="email" className='form-label'>Email</label>
    <input type="email" className="form-control" id='email' placeholder='Enter Your Email' required/>
    </div>

    <div className="mb-3"> 
    <label htmlFor="password" className='form-label'>Password</label>
    <input type="password" className="form-control" id='password' placeholder='Enter Your Password' required/>
    </div>

    <div className="mb-3">
      <input type="submit" className='btn btn-dark form-control' value="Register" />
    </div>

    </form>
  </div>


  )
}

export default Register