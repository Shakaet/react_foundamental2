import { useEffect, useState } from "react"
import UserName from "./UserName"

/// step 1. declard a useState to hold the data

/// step 2: useEffect function takes 2 things 1 is call back function,2 dependencies, in rare case clean up
/// step 3: fetch the data in call back function



export default function User(){


    let styles={

        border:"2px solid yellow",


    }
    



    let [users,setusers]= useState([])


    useEffect(()=>{

                          
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setusers(data))


    },[])


    return(

      <div style={{border:"2px solid yellow",padding:"10px", borderRadius:"10px"}}>

            <h1 style={{borderRadius:"10px",padding:"5px"}}>User:{users.length} </h1>

            {
                users.map(user=><UserName name={user}></UserName>)
            }
      
      
      
      </div>
       

        
    )

    
}