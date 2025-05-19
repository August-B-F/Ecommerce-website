import "./itemCard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetData = () => {
  const [images, setPhoto] = useState([]);
  const [cost, setCost] = useState([]); 
  const [hoodieName, setHoodieName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/imagesGet").then((res) => {
      console.log("res: ", res.data);
      setPhoto(res.data);
      setLoading(false);
    })
  }, [loading])

  return (
    <div>
        <ul>
            {setPhoto.map(image => (
              <img src="http://127.0.0.1:5000/static/hoodies/a monster hoodie (5).png" />
            ))}
        </ul>
    </div>
  )

}

export default GetData;
