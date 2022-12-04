import React, { useState,useEffect } from "react";
import {Grid,Card, Button, CardContent, getSpeedDialActionUtilityClass} from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Daylight=()=>{
    const [speed,setSpeed]=useState(1)
    const [col,setCol]=useState("aqua")
   
    useEffect(()=>{
     speed<6 && setCol("aqua")
     speed>7 && speed<17 && setCol("green")
     speed>18 && setCol("black")
    },[speed])

    useEffect(()=>{
      const dt=new Date()
      const hrs=dt.getHours()
      setSpeed(hrs);
    },[])

    return(
<React.Fragment>
    <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <Card sx={{bgcolor:col,width:200,height:200}} ></Card>
        </Grid>
       <Grid item xs={4}>
         <Button variant="contained" disabled={speed===24} fullWidth onClick={(e)=>setSpeed(speed + 1)} > <ArrowUpwardIcon/> </Button>
       </Grid>
       <Grid item xs={4}>
          <Card>
            <CardContent sx={{ fontsize:30,fontWeight:"bold",height:50,width:50}}> {speed} </CardContent>
          </Card>
       </Grid>
       <Grid item xs={4}>
        <Button variant="contained" disabled={speed===1} fullWidth onClick={(e)=>setSpeed(speed - 1)} > <ArrowDownwardIcon/> </Button>
       </Grid>
    </Grid>
</React.Fragment>
    )
}