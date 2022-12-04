import { Button,Grid, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Greetung=()=>{
    const [num,setNum]=useState(0)
    const [greet,setGreet]=useState("Hi")

    useEffect(()=>{
        num>1 && num<5 && setGreet("sk siddik")
        num>5 && num<12 && setGreet("Good Morning")
        num>12 && num <17 && setGreet("Good Afternoon")
        num>17 && num<19 && setGreet("Good Evening")
        num>19 && num<24 && setGreet("Good Night")
    },[num])
    return(
        <React.Fragment> 
     <Grid container spacing={3} align="center">
        <Grid item xs={12}>
           <Card sx={{bgcolor:"violet", textAlign:"center",paddingTop:20, fontSize:50, height:200,width:400,border:"black"}}> {greet} </Card>
        </Grid>
        <Grid item xs={4}>
         <Button disabled={num===24} onClick={()=>setNum(num+1)} variant="contained" fullWidth > UP </Button>
        </Grid>
        <Grid item xs={4}>
          <Card> {num} </Card>
        </Grid>
        <Grid item xs={4}>
        <Button disabled={num===0} onClick={()=>setNum(num-1)} variant="contained" fullWidth > Down </Button>
        </Grid>
     </Grid>
        </React.Fragment>
    )
}