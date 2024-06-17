

// const Card =({ image, title, text}) =>{
//     return(
//         <div className='Card '>
//             <img className='card-image'src={image} alt={title} />
//             <h2 className='card-title'>{title}</h2>
//             <p className='card-text'>{text}</p>
//         </div>
//     );
// };

// export default Card;



function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  // Using the Greeting component
  <Greeting name="Alice" />
  