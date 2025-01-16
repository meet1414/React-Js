import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate } from "react-router-dom";
import { AuthenticatedContext } from '../../../Redux/AuthenticatedContext';
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, provider, facebookProvider, githubProvider } from '../../../Config/Firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const initialState = { email: "", password: "" }

function Login() {
  const [state, setState] = useState(initialState)
  const [user, setUser] = useState({})
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticatedContext);
  const { userId, setUserId } = useContext(AuthenticatedContext);

  console.log(isAuthenticated)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    // setUser(auth.currentUser)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // console.log(user)
        setUser(user)
        setUserId(user.uid)
        // console.log(user.uid)
        // ...
      } else {
        // console.log("user is not signed in")
        setUser({})
        // User is signed out
        // ...
      }
    });
  }, [])
  //loginUser

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)

    const { email, password } = state

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log("User Loggedin successful")
        toast.success('User has been logged In!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(userCredential)
        console.log(user)
        setIsAuthenticated(true);
        navigate("/dashboard")
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error)
        toast.error("password/email incorrect", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .finally(() => {
        setIsLoading(false);
      })
  }



  return (
    <div className='mvh-100 loginPage d-flex justify-content-center align-items-center'>
      <div className="container ">
        <div className="row">
          <div className="col">
            <Link className='btn btn-home' to="/"><i class="fa-solid fa-arrow-left"></i></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card  w-100">
              <div className="div card-body">
                <h3>LOGIN</h3>
                <form onSubmit={handleSubmit}>
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <br />
                  <div class="input-group flex-nowrap">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-label="Email" name='email' required onChange={handleChange} />
                    {/* <span class="input-group-text" id="addon-wrapping">@</span> */}
                  </div>
                  <label for="password" className="form-label">Password</label>
                  <div class="input-group flex-nowrap">
                    <input type={isPasswordShow ? "text" : "password"} className="form-control" id="password" name='password' placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" required onChange={handleChange} />
                    <button type='button' class="input-group-text" id="addon-wrapping" onClick={() => { setIsPasswordShow(!isPasswordShow) }} ><i class={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></button>
                  </div>
                  <div className="mb-3 mt-1 m form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <div className="text-center">
                    <button type="submit" disabled={isLoading} class="btn  loginButton">
                      {
                        !isLoading ?
                          "Login"
                          : <div className='spinner-border spinner-border-sm'></div>
                      }
                    </button>
                  </div>
                  <div className="text-end">
                    <Link to="/forgotPassword">forgot Passsword?</Link>
                  </div>
                  {/* <button type="submit" className="btn btn-danger text-center">Login</button> */}
                </form>
                <div style={{ position: "relative" }}><span className='OR text-center'><i class="fa-solid fa-o"></i><i class="fa-solid fa-r"></i></span><hr /></div>
                <div className='text-center'>
                  Need an account? <span style={{textDecoration:"underline"}}><Link to="/signUp">SIGNUP</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login