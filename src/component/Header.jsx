import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import "./style.css";

const Header = () => {
    const navigate = useNavigate();
    const user = auth.currentUser; 

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully!", { position: "top-center" });
            navigate("/login"); 
        } catch (error) {
            toast.error("Failed to log out. Please try again.", { position: "top-center" });
        }
    };

    const handleAdd = () => {
        navigate("/add");
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <header>
            <div className="px-3 header">
            <div className="header-data">
                <div>
                    <h3 className="recipe-book">
                        <GiCook />
                        RECIPE BOOK
                    </h3>
                </div>
                <div>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li className="me-4">
                            <Button onClick={handleHome}>
                                <FaHome className="me-2" size={17} />
                                Home
                            </Button>
                        </li>
                        <li>
                            <Button onClick={handleAdd}>
                                <MdFastfood className="me-2" />
                                Add Recipe
                            </Button>
                        </li>
                        {user ? (
                            <li className="ms-4">
                                <Button variant="danger" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </li>
                        ) : (
                            <li className="ms-4">
                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/login")}
                                >
                                    Login / Signup
                                </Button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header;
