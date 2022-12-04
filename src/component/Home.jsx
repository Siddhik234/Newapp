import React from "react";
import { Addcust } from "./Addcust";
import { Addvehicle } from "./Addvehicle";

export const Home=()=>{
    return(
        <div>
            <h1> Home </h1>
            <Addvehicle/>
            <Addcust/>
        </div>
    )
}