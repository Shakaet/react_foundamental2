

export default function UserName({name}){



    return(

        <div style={{border:"2px solid green",padding:"10px", borderRadius:"10px", margin:"20px"}}>

        <h1>UserName:{name.name}</h1>
        <h1>UserEmail: {name.email}</h1>
        
        
        </div>
    )
}