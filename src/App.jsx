import { useState } from 'react';
import './App.css'

function App() {

 
  let cars = ['supra','ford','a','b'];

  return (
    <div style={{backgroundColor: 'yellow' , width: '100%', height: '100vh'}}>
<ol>
      {
        cars.map((car)=>{
          return <li key={car}>{car}</li>
        })
      }
   </ol>
    </div>
  )



}

export default App
