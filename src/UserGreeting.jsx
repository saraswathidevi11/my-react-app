/*// Props and conditional redendring

import "./index.css"
function UserGreeting(props){
    return(props.isloggedIn ? 
        <h2 className="welcome-message">Welcome {props.username}</h2>
        : 
        <h2 className="login-prompt">Please log in to continue</h2>
    );
}
export default UserGreeting
*/
// Using JavaSctipt Variable
/* import './index.css'
import propTypes from 'prop-types'
function UserGreeting (props){
    const welcomeMesssage = <h2 className='welcome-message'>
                            Welcome {props.username} </h2>
    const loginPrompt = <h2 className='login-prompt'>
                        please log in to continue </h2>

        return(props.isloggedIn ? welcomeMesssage : loginPrompt);
}
//debugging
UserGreeting.propTypes = {
    isloggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps = {
    isloggedIn: false,
    username: "Guest",
}
export default UserGreeting */

