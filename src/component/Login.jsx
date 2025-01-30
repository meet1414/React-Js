import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import "./signup.css"; // Using the same CSS file for styling

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully!", { position: "top-center" });
            navigate("/"); // Redirect to home page
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Logged in with Google!", { position: "top-center" });
            navigate("/"); // Redirect to home page
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };

    return (
        <div className="signup-container"> {/* Same styling as Signup */}
            <div className="signup-box"> {/* Reusing the same class */}
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <button className="google-signup" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
                <p className="switch-auth">
                    Don't have an account?{" "}
                    <Link to="/signup" className="auth-link">
                        Create a new account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
