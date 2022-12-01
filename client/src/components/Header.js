import {Link} from 'react-router-dom';

import logo from "../assets/Logo_Hust.png"


function Header(){



    return (
        <div className="header flex">
            <div className='logo'>
                <Link to = "/" className='flex'>
                    <img src={logo} alt=""/>
                    Coding Practice
                </Link>
            </div>
            <div className=''></div>
        </div>
    );
}

export default Header