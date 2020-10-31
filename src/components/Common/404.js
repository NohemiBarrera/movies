import React from "react";
import cat from "../../assets/404.jpg";

export default function Error404(){
    return(
        <div>
            <img src={cat} alt="404 error mimimi" style={{margin: 'auto', display: 'block', width: '75vw', height:'100vh'}}/>
        </div>
    )
} 