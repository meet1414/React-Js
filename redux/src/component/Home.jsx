import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, getdataAsync, serching } from '../servis/action/userAction';
import { data, useNavigate } from 'react-router';
import './style.css'
const Home = () => {
    const navigate = useNavigate()
    const { users } = useSelector(state => state.userReducer)
    const [search, setsearch] = useState("")
    const dispatch = useDispatch()

    const hendelDelete = (id) => {
        dispatch(deletedata(id))
    }
    const hendelEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const hendelSearch = () => {
        dispatch(serching(search))
    }
    useEffect(() => {
        dispatch(getdataAsync())
    }, [])
    return (
        <>
           
            <Container>
                <div className="d-flex justify-content-center align-items-center col-4">
                    <p className='m-0 me-2 fw-bold'>Filter :-</p>
                    <input type="text col-5" placeholder='Search' name="search" value={search} onChange={(e) => setsearch(e.target.value)} />
                    <Button variant="primary col-3 ms-4" onClick={hendelSearch}>Search</Button>
                </div>
                <Row className='d-flex justify-content-center mt-4'>
                    {
                        users.map((value, index) => (
                            <div className="card my-4" key={index} >
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div className="image text-center text-md-start d-flex justify-content-center align-items-center">
                                        <img src={value.img} className="img object-fit-cover rounded" />
                                        <div className='ms-5'>
                                            <div className="d-flex align-items-center my-3" >
                                                <h5 className="card-title m-0">Recipe Name :-</h5>
                                                <p className='mx-1 m-0'>{value.name}</p>
                                            </div>
                                            <div className="d-flex align-items-center my-3" >
                                                <h5 className="card-title m-0">Recipe M.R.P :-</h5>
                                                <p className='mx-1 m-0'>${value.amount}</p>
                                            </div>
                                            <div className="d-flex align-items-center my-3" >
                                                <h5 className="card-title m-0">type:-</h5>
                                                <p className='mx-1 m-0'>{value.type}</p>
                                            </div>
                                            <div className="d-flex align-items-center my-3" >
                                                <h5 className="card-title m-0">Recipe Ingredients:-</h5>
                                                <p className='mx-1 m-0'>{value.ingredients}</p>
                                            </div>
                                            <div className="d-flex align-items-center my-3" >
                                                <h5 className="card-title m-0">Recipe Description :-</h5>
                                                <p className="card-text">{value.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button variant="primary" className='my-3' onClick={() => hendelEdit(value.id)}>Edit</Button>
                                        <Button variant="danger" className='my-3' onClick={() => hendelDelete(value.id)}>Delete</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Row>
            </Container>

        </>
    )
}
export default Home;