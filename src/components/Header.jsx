import React from 'react'

const Header = ({titulo}) => {
    return ( 
        <>
            <nav>
                <div className='nav-wraper purple lighten-1'>
                    <a href='#!' className='brand-logo'>{titulo}</a>
                </div>
            </nav>
        </>
     );
}
 
export default Header;