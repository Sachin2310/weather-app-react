import { useState, useEffect } from "react";
import { apiCall } from "../js/weatherAPI";
import "../css/Card.css"
import { userContext } from "../context/UserDataContext"


const Card = () => {
    const userDataContext = userContext();
    const [cardData, setCardData] = useState(null);
    const weatherData = async () => {
        let data = await apiCall(userDataContext.apiKey, userDataContext.place);
        console.log(data);
        setCardData(data);
    }
    useEffect(() => {
        weatherData();
    },[userDataContext.apiKey, userDataContext.place])

    const weatherDetailsComponent = (cardData) => {
        return (
            <>
                <img src={cardData?.current?.condition?.icon}/>
                <p>City: {cardData.location.name}, State: {cardData?.location?.region}</p>
                <p>Current Temparature - {cardData?.current?.temp_c}c, feels like - {cardData.current.feelslike_c}c</p>
                <p>Condition - {cardData?.current?.condition?.text}</p>
            </>
        )
    }

    return (
        <div className="card">
            {cardData && weatherDetailsComponent(cardData)}
        </div>
    )
}

export default Card;