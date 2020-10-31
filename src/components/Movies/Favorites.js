import React from "react";

export default function Favorites(){
    console.log(localStorage.getItem("token") + "MIAAAAU");
    return(
        <div>
            <p>Aquí van las películas favoritas</p>
        </div>
    )
} 