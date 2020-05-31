import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <div className ='container'>
            <div className = 'AppContainer headerContainer'>
                <label className='headerLogo'>FASHIONISTA</label>
                <div className ='headerButtons'>
                    <button className='headerButton'><FontAwesomeIcon icon={faSearch} /></button>   
                    <button className='headerButton'>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <sup className='counter'>
                            <span>0</span>
                        </sup>
                    </button>
                    
                </div>
            </div>
        </div>

    );
}

export default Header;