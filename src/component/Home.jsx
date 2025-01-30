import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, getdataAsync, searching } from '../service/action/userAction';
import { data, useNavigate } from 'react-router';
import './style.css'
const Home = () => {
    const navigate = useNavigate()
    const { users } = useSelector(state => state.userReducer)
    const [search, setsearch] = useState("")
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletedata(id))
    }
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleSearch = () => {
        dispatch(searching(search))
    }
    useEffect(() => {
        dispatch(getdataAsync())
    }, [])
    return (
        <>
        <div className="overlay">
        <Container className='pt-5'>
                <div className="search d-flex justify-content-center align-items-center col-10">
                    <input className='search-recipe' type="text col-5"  name="search" value={search} onChange={(e) => setsearch(e.target.value)} />
                    <Button style={{ backgroundColor: "#9cc7cc" }} onClick={handleSearch}>Search</Button>
                </div>
                <Row className='d-flex justify-content-center mt-4'>
                    {
                        users.map((value, index) => (
                            <div className="card my-4" key={index} >
                                <div className="card-body">
                                    <div className='recipe-img'>
                                        <img src={value.img} alt="" />
                                    </div>
                                    <div className="recipe-name">
                                        <p><span>Name of Dish:</span>{value.name}</p>
                                        {/* <h4 className='recipe-name'>$80</h4> */}
                                    </div>
                                    <div className="recipe-price">
                                        <p><span>Recipe Price:</span>{value.price}</p>
                                        {/* <h4 className='recipe-price'></h4> */}
                                    </div>
                                    <div>
                                        <div className="recipe-desc">
                                            <p><span>Recipe Description:</span>{value.description}</p>
                                        </div>
                                        <div className="recipe-ing">
                                            <p><span>Recipe Ingredients:</span>{value.ingredients}</p>
                                        </div>
                                       <div className='btn-action'>
                                       <Button  className=" my-2" onClick={() => handleEdit(value.id)}>Edit</Button>
                                       <Button  className="my-2" onClick={() => handleDelete(value.id)}>Delete</Button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Row>
            </Container>
        </div>

        </>
    )
}
export default Home;