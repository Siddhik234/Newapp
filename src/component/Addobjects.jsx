import { Button,Card, CardContent, Grid,TextField } from "@mui/material";
import React from "react";
import { useState } from "react";


export const Addobjects=()=>{
    const [text,setText]=useState("")
    const [data,setData]=useState(["cat","bat","mat"])

   const handleadd=()=>{
        setData([text,...data])
    }                 
    const handledelete=(n)=>{
        const filtered=data.filter((item,i)=>i!==n)
        setData(filtered)
    }
    return(
        <React.Fragment>
            <Grid container spacing={3}>
               <Grid item xs={8}> 
               <TextField variant="outlined" label="objects" onChange={(e)=>setText(e.target.value)} fullWidth  />
               </Grid>
               <Grid item xs={4}>
                <Button onClick={handleadd} fullWidth variant="contained"> Add </Button>
               </Grid>
               { 
               data.map((item,n)=>
               <Grid item xs={4}>
                <Card>
                    <CardContent>
                        {item}
                    </CardContent>
                </Card>
                <br />
                <Button onClick={()=>handledelete(n)} variant="contained"> delete </Button>
               </Grid>
               )
               }
            </Grid>
        </React.Fragment>
    )
}