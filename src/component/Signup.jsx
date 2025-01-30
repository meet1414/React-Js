import React, { useState } from "react"; 
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import "./signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", { position: "top-center" });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Account created successfully!", { position: "top-center" });
            navigate("/login"); // Redirect to login page
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Signed up with Google!", { position: "top-center" });
            navigate("/"); // Redirect to home page
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <button className="google-signup" onClick={handleGoogleSignup}>
                    Sign Up with Google
                </button>
                <p className="switch-auth">
                    Already have an account?{" "}
                    <Link to="/login" className="auth-link">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
