import { useState } from 'react';
import './App.css'

function App() {

 
  const [show, setshow] = useState(false);
  function updateshow(){
    setshow(!show) ;
    console.log(show) ;
  }

  return (
    <div style={{backgroundColor: 'yellow' , width: '100%', height: '100vh'}}>

    <title>Sandbox</title>


    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis excepturi, quibusdam voluptas dolor suscipit provident veniam? Fugit officiis fugiat nulla! Praesentium consequatur ea est cupiditate quae consectetur quidem quod placeat blanditiis inventore rerum dolor, illum ratione, voluptatum fugiat qui mollitia tenetur reprehenderit sunt atque nostrum dolores animi? Sit aut voluptates tempora, dicta totam ad repellat. Fugiat labore dignissimos illo, deleniti suscipit aspernatur eaque sed numquam enim nulla, cum maiores alias, porro distinctio cupiditate culpa iusto. Accusantium vitae officiis magni magnam asperiores in atque nobis, perferendis recusandae dignissimos, ad reiciendis voluptates iusto a accusamus aperiam dolores corrupti repellat deleniti quo maxime.</p>

    { show ? <p>  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, recusandae. Porro incidunt, deleniti nihil hic numquam itaque maxime ut sit voluptate nam cupiditate, illo fugit at ipsum perferendis quae quia totam doloribus dolores iusto error? Deserunt provident eveniet animi, dicta odio accusantium sint, assumenda mollitia fuga, minima laborum quod dolores!</p></p> : <p>click on button to show more</p>}
  

    <button onClick={updateshow}>Hide/show</button>

    </div>
  )



}

export default App
