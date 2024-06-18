//props=props are read only properties that are shared between the component a parent component can send data to child component <component key=value />
//propTypes= is a mechanisem make sure the data type is correct or not
//defaultprops =default value for the props in case they are not passed from the parent component 
import PropTypes from 'prop-types';
import  './index.css';
function Student(props){
   

    return(
        <div className='Student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: "False"

}
export default Student
