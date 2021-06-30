import React, {useEffect, useState} from 'react';
import App from "./App";
import axios from "axios";
import Card from "../Card/Card";

const AppContainer = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
            .then((res) => {
                console.log(res.data)
                setHouses(res.data)
                setIsLoading(false)
            })
    }, [])

    return <App houses={houses}/>
};

export default AppContainer;