import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import {TaskItem} from "./TaskItem"
import axios from "axios"

export const Task=()=>{
    const [data,setData]=useState([])

    const getData=async()=>{
        const result= await axios.get("http://localhost:8080/movies")
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
        <h1>Movies List</h1>
        <Grid container spacing={2}>

            {
                data.map((item)=>{
                    return(
                        <>
                        <TaskItem item={item}/>
                        </>
                    )
                })
            }

        </Grid>
        </>
    )
}