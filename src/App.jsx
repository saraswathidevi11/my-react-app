// import Card from './Card.jsx'
// import profilePic from './assets/images.jpeg'
// import reactPic from './assets/download.jpeg'
// import './index.css'
// function App(){
//     return(
//             <div>
//                 <Card
//                     image={profilePic}
//                     title='React JS'
//                     text='Learning React'
//                      />
//                  <Card 
//                      image={reactPic}
//                      title='React JS'
//                      text='Learning React'
                     
//                     />
//             </div>
//     );
            
// }
// export default App  
// import Student from "./Student";

// function App(){

//     return(
//     <>
//     <Student name="John" age={20} isStudent={true}></Student>
//     <Student name="Alice" age={25} isStudent={false}></Student>
//     </>
//     );
// }
// export default App

import React from 'react';
import Student from './Student';
import './index.css'

function App() {
  return (
    <>
      <Student name="John" age={20} isStudent={true} />
      <Student name="Alice" age={25} isStudent={false} />
    </>
  );
}

export default App;
