import React from "react";
import ReactTooltip from "react-tooltip";

const Form = ({search, message, setSearch, setObject, setMessage, setPage}) => {
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            setSearch(!search);
            if(message.length > 2){
                setPage(1);
            }
            setObject(Object.assign({loading: true}));
        }}>
            <input type="text" minLength="3" required placeholder="Search Movies..." onChange={e => {setMessage(e.target.value)}}/>
            <button type="submit" data-tip="Salut" event="click" eventOff="click">Submit</button>
            <ReactTooltip />
        </form>
    )
}

export default Form;

