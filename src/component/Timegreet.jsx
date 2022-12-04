import { Height } from "@mui/icons-material";
import { Button,Grid,Card } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Timegreet=()=>{
    const [speed,setSpeed]=useState("")
    useEffect(()=>{
        const dt=new Date()
        const hrs=dt.getHours()
        setSpeed(hrs);
      },[])
    return(
        <React.Fragment>
     <Grid container spacing={3} align="center">
       <Grid item xs={12}>
          <Card sx={{bgcolor:"green", paddingTop:20, height:200,width:300}}> {speed}  </Card>
       </Grid>
       <Grid item xs={4}>
       </Grid>
       <Grid item xs={4}>
        <Button variant="contained"  fullWidth onClick={()=>setSpeed(speed)} > Greet Me </Button>
       </Grid>
       <Grid item xs={4}></Grid>

     </Grid>
        </React.Fragment>
    )
}