import React, { useEffect, useState } from 'react';
import {createBrowserRouter, Route,RouterProvider,Link} from 'react-router-dom';
import {useQuery} from 'react-query';



function Button(){
  const {data, error } = useQuery('hello-world',()=>{
    return new Promise(resolve =>{
      setTimeout(()=> resolve(1337), 1000)
    })
  })
  return <button> I am Button</button>
}

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/hello",
  //     element: (
  //       <div>
  //         <h1>Hello World</h1>
  //       </div>
  //     ),
  //   },
  // ]);
  const [visible,setVisible] = useState(true)

  function tooglebutton(){
    setVisible(visible => !visible)
  }
  
  return (
    <div>
      {/* <RouterProvider router={router}/> */}
      {visible && <Button />}
      <button onClick={tooglebutton()}>Toggle</button>
      <h2>H2 Hiyya</h2>
      
    </div>
  );
}

export default App;
