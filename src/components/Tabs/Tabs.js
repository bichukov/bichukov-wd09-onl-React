import './Tabs.scss'
import React, {useRef} from "react";


const Tabs = () => {
    const list = document.querySelectorAll('.tabs-wrap-tab');

    const handleClick = (e) => {
        const clickedTab = e.currentTarget;
        list.forEach(item => {
            item.addEventListener('click', handleClick);
        });
        list.forEach(item => {
            item.classList.remove('tabs-active');
        });
        clickedTab.classList.add('tabs-active');
    };



    return (
        <div className="tabs">
            <div className="tabs-wrap">
                <div className="tabs-wrap-tab tabs-active" onClick={handleClick}>
                    <p className="tabs-wrap-tab-title">All</p>
                </div>
                <div className="tabs-wrap-tab" onClick={handleClick}>
                    <p className="tabs-wrap-tab-title">My favorites</p>
                </div>
                <div className="tabs-wrap-tab" onClick={handleClick}>
                    <p className="tabs-wrap-tab-title">Popular</p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;