import { useState } from "react";



export default function Counter(){

//   use State(0) array return KeyboardEvent, array te 2 ta jinish thake 1.initial value, 2.function

     let [count,newCount] = useState(0)

     function add(){

        let increased_count=count+1
         newCount(increased_count)
     }

     function remove(){

        let decrease_count=count-1

        if(decrease_count<0){

            return
         }

         newCount(decrease_count)
     }
         

        




     return(

        <div style={{border:"2px solid blue"}}>

        <h1>Counter : {count} </h1>

        <button onClick={add} style={{margin:"5px"}}>Add</button>

        <button onClick={remove} style={{margin:"5px"}}>Remove</button>
        
        </div>
     )
}