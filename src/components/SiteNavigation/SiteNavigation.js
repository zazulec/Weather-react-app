import React from 'react';
import { Link } from 'react-router-dom';
import './SiteNavigation.css'

const SiteNavigation = () => {

    return(
        <div className='navigation'>
            <Link to='/'>Home</Link>
            <Link to='/FiveDays'>Five days forecast</Link>
        </div>
    )
}

export default SiteNavigation;