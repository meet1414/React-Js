import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addDataAsync } from "../service/action/userAction";
import { useNavigate } from "react-router";
import "./style.css";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djswwbvlq/image/upload";
const UPLOAD_PRESET = "recipe-hub";

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCreated, errMSG } = useSelector(state => state.userReducer);

    const [input, setInput] = useState({
        img: "",
        name: "",
        price: "",
        description: "",
        ingredients: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!imageFile) {
            alert("Please select an image to upload.");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, formData);
            const imageUrl = response.data.secure_url;
            setInput({ ...input, img: imageUrl });
            setUploading(false);
            alert("Image uploaded successfully!");
        } catch (error) {
            console.error("Error uploading image:", error);
            setUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.img) {
            alert("Please upload an image first.");
            return;
        }
        dispatch(addDataAsync(input));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated]);

    return (
        <div className="overlay">
            <div className="containers">
                {errMSG && <div className="alert alert-danger">{errMSG}</div>}
                <form onSubmit={handleSubmit}>
                    <h1>Recipes</h1>
                    <div className="form-group">
                        <label>Recipe Image:</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} required />
                        <button type="button" onClick={uploadImage} disabled={uploading}>
                            {uploading ? "Uploading..." : "Upload Image"}
                        </button>
                        {input.img && <img src={input.img} alt="Uploaded" width="100" />}
                    </div>
                    <div className="form-group">
                        <label>Name of Dish:</label>
                        <input type="text" placeholder="Name" value={input.name} name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Price:</label>
                        <input type="number" placeholder="Amount" value={input.price} name="price" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Description:</label>
                        <input type="text" placeholder="Description" value={input.description} name="description" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Ingredients:</label>
                        <input type="text" placeholder="Ingredients" value={input.ingredients} name="ingredients" onChange={handleChange} required />
                    </div>
                    <button type="submit" disabled={uploading}>Add</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
