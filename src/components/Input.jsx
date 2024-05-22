import { useState } from 'react';
import { userContext } from '../context/UserDataContext'

export const InputField = () => {
    const [newApiKey, setNewApiKey] = useState("19f3ad0a347c4941932103234240905");
    const [newPlace, setNewPlace] = useState(null);
    const userDataContext = userContext();
    let handleClick = () => {
        userDataContext.setApiKey(newApiKey);
        userDataContext.setPlace(newPlace);
    }
    let handleChange = (e) => {
        if(e.target.id == "apikey"){
            setNewApiKey(e.target.value);
        } else if(e.target.id == "place") {
            setNewPlace(e.target.value);
        }
    }
    return (
        <>
            <label htmlFor="html">API Key: </label>
            <input type="text" id="apiKey" name="apiKey" defaultValue="19f3ad0a347c4941932103234240905" onChange={handleChange}></input><br/>
            <label htmlFor="html">Place: </label>
            <input type="text" id="place" name="place" onChange={handleChange}></input><br/>
            <button onClick={handleClick}>get data</button>
        </>
    )
}