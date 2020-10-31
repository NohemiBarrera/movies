import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Movies (){
    const name = useSelector(state => state.auth.name)
    console.log(name);
    return(
        <div>
            <p>Holi {name}</p>
        </div>
    )
};