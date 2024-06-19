/* Card
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
*/
/* Props 
import React from 'react';
import Student from './Student';
import './index.css'

function App() {
  return (
    <>
      <Student name="John" age={20} isStudent={true} />
      <Student name="Alice" age={25} isStudent={false} />
      <Student name="Bob" age={28} isStudent={True} />
      <Student name="Bob" age={28} isStudent={True} />
    </>
  );
}

export default App;
*/
// import UserGreeting from "./UserGreeting";


// function App(){
//   return(
//   <>
//   <UserGreeting isloggedIn={true} username="Saraswathi"/>
//   </>
//   );
// }
// export default App
// import React from "react";
// import List from "./List.jsx"
// function App(){
//   const fruits =[{id:1, name:"apple", count:5, cal:45},  //objects { key: value }
//                  {id:2, name:"orange", count:15, cal:76},
//                  {id:3, name:"mango", count:7, cal:102},
//                  {id:4, name:"watermelon", count:17, cal:87},
//                  {id:5, name:"banana", count:9, cal:120},];
//   return( 
//       <>
//       {fruits.length > 0 && <list items={fruits} category ="Fruits" />}
//       </>
//   );

// }
// export default App

import React from "react";
import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", count: 5, cal: 45 },
    { id: 2, name: "orange", count: 15, cal: 76 },
    { id: 3, name: "mango", count: 7, cal: 102 },
    { id: 4, name: "watermelon", count: 17, cal: 87 },
    { id: 5, name: "banana", count: 9, cal: 120 }
  ];
  const vegetables = [
    { id: 6, name: "carrot", count: 10, cal: 25 },
    { id: 7, name: "broccoli", count: 5, cal: 55 },
    { id: 8, name: "spinach", count: 20, cal: 23 },
    { id: 9, name: "potato", count: 8, cal: 77 },
    { id: 10, name: "tomato", count: 12, cal: 18 }
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App;
