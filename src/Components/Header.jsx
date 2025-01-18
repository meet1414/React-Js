import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import './style.css'
const Header = () => {
    const navigate = useNavigate()
    const hendelAdd = () => {
        navigate('/add')
    }
    const hendelHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className="px-3 py-2 bg-white">
                <Container>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start my-4">
                        <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto">
                            <img src="https://logodix.com/logo/871229.jpg" className="img" alt="" />
                            <p className=" mt-2 m-0 fw-bold text-success">BANK</p></div>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className="me-4">
                                <Button variant="white" className="text-danger border border-2" onClick={hendelHome}>
                                    <FaHome className="me-2" size={17} />
                                    Home
                                </Button>
                            </li>
                            <li >
                                <Button variant="white" className="text-success border border-2" onClick={hendelAdd}>
                                    <FaUserCircle className="me-2" />
                                    Create Account
                                </Button>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Header;