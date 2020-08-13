import React from 'react';
import { Link } from 'react-router-dom';

function Navagation(){
    return(
        <div className="Navigation">
            <ul>
                <li><Link to='/'>Home</li>
                <li><Link to='/Clock'>Clock</Link>Clock</li>
                <li><Link to='Contact'></Link>Contact</li>
            </ul>
        </div>
    )
};

export default Navagation;