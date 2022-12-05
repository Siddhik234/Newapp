import { Card, CardContent,Grid, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Typeofname=()=>{
    const [name,setName]=useState("")
    const [msg,setMsg]=useState("")

    useEffect(()=>{
       name.length<3 && setMsg("invalid")
       name.length>3 && name.length<6 && setMsg("small")
       name.length>6 && name.length<11 &&  setMsg("Mid")
       name.length>11 && name.length<21 && setMsg("Big")
       name.length>21 && setMsg("invalid")
    },[name])
    return(
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField fullWidth label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
      </Grid>
      <Grid item xs={12}>
      <Card>
            <CardContent> {msg} </CardContent>
      </Card>
      </Grid>
      </Grid>
    )
}