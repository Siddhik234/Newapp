import React, { useState,useEffect } from "react";
import {Grid,Card, Button, CardContent} from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Indicator=()=>{
    const [speed,setSpeed]=useState(0)
    const [col,setCol]=useState("green")

    useEffect(()=>{
     speed<50 && setCol("green")
     speed>50 && speed<70 && setCol("yellow")
     speed>70 && setCol("red")
    },[speed])

    return(
<React.Fragment>
    <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <Card sx={{bgcolor:col,width:200,height:200}} ></Card>
        </Grid>
       <Grid item xs={4}>
         <Button variant="contained" disabled={speed===120} fullWidth onClick={(e)=>setSpeed(speed + 5)} > <ArrowUpwardIcon/> </Button>
       </Grid>
       <Grid item xs={4}>
          <Card>
            <CardContent sx={{ fontsize:30,fontWeight:"bold",height:50,width:50}}> {speed} </CardContent>
          </Card>
       </Grid>
       <Grid item xs={4}>
        <Button variant="contained" disabled={speed===0} fullWidth onClick={(e)=>setSpeed(speed - 5)} > <ArrowDownwardIcon/> </Button>
       </Grid>
    </Grid>
</React.Fragment>
    )
}