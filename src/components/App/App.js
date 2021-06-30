import './App.scss';
import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import chevron from "./chevron.svg"

const App = (props) => {
    const [value, setValue] = useState("")
    const [filter, setFilter] = useState([...props.houses])

    useEffect(() => {
        setFilter([...props.houses])
    }, [props.houses])

    const handleChange = (e) => {
        let val = e.target.value
        if (val.length >= 3) {
            setFilter(props.houses.filter(el => el.title.toLowerCase().trim().includes(val)))
        } else {
            setFilter(props.houses)
        }
        setValue(val)
    }

    let houses = filter?.map((el) => <Card {...el} key={el.id}/>)

    return (
        <div className="wrapper">
            <h1 className="wrapper__title">Our Latest Developments</h1>
            <div className="wrapper__filter">
                <span className="wrapper__filter-label">Filter</span>
                <input className="wrapper__filter-input"
                       value={value}
                       onChange={handleChange}
                       type="text"/>
            </div>
            <div className="wrapper__content">
                {houses}
            </div>
            <div className="wrapper__btn" onClick={() => alert("Dummy button 🙈🙈🙈!")}>
                <span>See more</span>
                <img src={chevron} alt=""/>
            </div>
        </div>
    )
}

export default App;
