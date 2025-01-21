import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { useNavigate } from "react-router";
import './style.css'
const Header = () => {
    const navigate = useNavigate()
    const hendelAdd = () => {
        navigate('/add')
    }
    const hendelHome = () => {
        navigate('/home')
    }
    return (
        <>
            <div className="px-3 header">
                <Container>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto">
                            <img src="" className="img logo-img" alt=""  style={{width:"100px"}}/>
                        </div>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className="me-4">
                                <Button variant="dark" onClick={hendelHome}>
                                    <FaHome className="me-2" size={17} />
                                    Home
                                </Button>
                            </li>
                            <li >
                                <Button variant="dark" onClick={hendelAdd}>
                                    <IoFastFood className="me-2" />
                                    Add Recipe
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