
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from 'react-bootstrap';

function Login() {
    var count = 0;
    let navigate = useNavigate();

    useEffect(() => {
        getAllRecipes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getAllRecipes() {
        try {
            let res = await axios.get('https://recipe-wbww.onrender.com/recipes')
            sessionStorage.setItem('recipes', JSON.stringify(res.data))
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    errorToastMessage()
                }
            }
            else {
                errorToastMessage()
            }
        }
    }


    function emailValidate() {
        const email = document.getElementById('email')
        const emailError = document.getElementById('emailError')
        if (email.value === "") {
            emailError.innerText = "*Required"
        }
        else {
            emailError.innerText = ""
        }
    }

    function passwordValidate() {
        const password = document.getElementById('password')
        const passwordError = document.getElementById('passwordError')
        if (password.value === "") {
            passwordError.innerText = "*Required"
        }
        else {
            passwordError.innerText = ""
        }
    }

    async function loginClick() {
        const email = document.getElementById('email')
        const emailError = document.getElementById('emailError')
        const password = document.getElementById('password')
        const passwordError = document.getElementById('passwordError')
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
        if (email.value === "") {
            emailError.innerText = "*Required"
        }
        else {
            if (email.value.match(emailPattern)) {
                emailError.innerText = ""
            }
            else {
                emailError.innerText = "*Invalid"
            }
        }
        if (password.value === "") {
            passwordError.innerText = "*Required"
        }
        else {
            passwordError.innerText = ""
        }
        if (emailError.innerText === "" && passwordError.innerText === "") {
            try {
                let res = await axios.get(`https://recipe-wbww.onrender.com/users/login/${email.value}/${password.value}`)
                // console.log(res)
                sessionStorage.setItem('userData', JSON.stringify(res.data.userData[0]));
                sessionStorage.setItem('token', JSON.stringify(res.data.tokenData));
                successToastMessage()
            }
            catch (error) {
                if (error.response) {
                    if (error.response.status === 400) {
                        warnToastMessage()
                    }
                }
                else {
                    errorToastMessage('')
                }
            }
        }
    }

    function showPasswordClick() {
        const password = document.getElementById('password');
        count++;
        if (count % 2 === 0) {
            password.setAttribute('type', 'password')
        }
        else {
            password.removeAttribute('type')
        }
    }


    function successToastMessage() {
        toast.success('Login successful', {
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/home')
    }

    function warnToastMessage() {
        toast.warn('Invalid login credentials !', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function errorToastMessage() {
        toast.error('Something went wrong. Please try again !', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>
            <Navbar myProfile={false} logout={false} />
            <div className="loginMainDiv shadow rounded mt-4" style={{}}>
                <div className='text-center'>
                    <h3 className='text-primary'>Login</h3>
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailHelp" autoComplete='off' onKeyUp={() => emailValidate()} />
                    <span id='emailError' className='text-danger'></span>
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" autoComplete='off' onKeyUp={() => passwordValidate()} />
                    <span id='passwordError' className='text-danger'></span>
                </div>
                <div className='mt-2'>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => showPasswordClick()} /> Show password
                </div>
                <div className='text-center mt-3'>
                    <button type="button" className="btn btn-outline-primary" onClick={() => loginClick()}>Login</button>
                
                    <h6 className='mt-3 hoverText' onClick={() => { navigate('/signup') }}>new user? <span className='text-primary' >create account</span></h6>
                    <h6 className=' hoverText' onClick={() => { navigate('/change-password') }}>forgot password? <span className='text-primary'>click here</span></h6>
                </div>
                <div className='text-center mt-3 border rounded p-2'>
                    <span>Test login credentials</span><br />
                    <span>Email address: userone@gmail.com</span><br />
                    <span>Password: userone</span>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login;