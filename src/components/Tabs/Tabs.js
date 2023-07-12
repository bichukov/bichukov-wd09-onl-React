import './Tabs.scss'
import React, { useState } from "react";

export function Tabs() {
    const arr = [
        { id: 0, title: 'all'},
        { id: 1, title: 'My favorites' },
        { id: 2, title: 'Popular' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const results = []
    arr.forEach((el, index) => {
        results.push(
            <div key={el.id} index={index} className={activeIndex === index ? 'tabs-wrap-tab tabs-active' : 'tabs-wrap-tab'}  onClick={() => setActiveIndex(index)}>
                <p className='tabs-wrap-tab-title'>{el.title}</p>
            </div>
        );
    });

    return (
        <div className="tabs">
            <div className="tabs-wrap">
                {results}
            </div>
        </div>
    )
}
export default Tabs;