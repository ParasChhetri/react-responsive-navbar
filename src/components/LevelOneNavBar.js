import { useState } from 'react';
import './LevelOneNavBar.css';

const LeveOneNavBar = () => {
    const [clciked, setClicked] = useState(false);
    const handelClick = () => {
        setClicked(!clciked);
    }
    return (
        <>
        <nav >
            <span>Logo</span>
            <div>
                <ul className={clciked ? "active" : ""}>
                    <li>Home</li><span className='under-line'></span>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div id='mobile' onClick={handelClick}>
                <i id="bar" class={clciked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
            </div>
        </nav>
        </>
    );
}

export default LeveOneNavBar;