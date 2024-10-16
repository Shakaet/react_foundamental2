
import './App.css'
import Counter from './counter'
import User from './user'

function App() {

  let handleclick=()=>{

    alert("you cant it")

  }

  let handleclick2=()=>{

    alert("you cant it more")

  }

  // if add parameter based evenhandler

  let parameterEvenHandler=(num)=>{

    alert (num+5)


  }

  return (
    <>
     
      <h1>React Core Concept Part 2</h1>

      <User></User>

      <Counter></Counter>

      <button onClick={handleclick} className='margin'>Button1</button>
      <button onClick={handleclick2} className='margin'>Button2</button>
{/* 
      // single line handler */}

      <button onClick={()=>alert("you cant it")} className='margin'>Button3</button>

      {/* parameter based event handler */}

      <button onClick={()=>parameterEvenHandler(9)} className='margin'>Parameter Pass</button>
    
      <button onClick={function param(){
        alert(5)

      }} className='margin'>Parameter Pass2 </button>
      
      
    </>
  )
}

export default App
