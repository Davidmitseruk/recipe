 //import React from "react";

 //const App = () => {
 //    return <p style={{
 //        color: 'white',
 //        backgroundColor: 'black',
 //        borderRadius: 4,
 //        padding: '12px 18px',
 //        margin: 10
 //    }}>Hello!</p>;
 //};


 //export default App;

 import React from "react";
 import {Alert} from './Alert';


const App = () => {
  return (
    <>
    <Alert variant="warning">Please update your email!</Alert>
    <Alert variant="error">Error</Alert>
    <Alert variant="succes">Payment recived, thank you!</Alert>
    </>
  )
}

 export default App;