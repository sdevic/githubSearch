import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';//con link no actualiza la pagina a diferencia con a
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar =({icon,title})=> {

    

 
    return (

        <nav className='navbar bg-primary'>
            
            
         <h1>
            <FontAwesomeIcon icon={icon}/>
            {title}
         </h1>
         <ul>
            <li>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>Abut</Link>
            </li>
         </ul>
        </nav>
    )
}

Navbar.defaultProps ={
    title:"Github Finder",
    icon:faGithub
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}
export default Navbar