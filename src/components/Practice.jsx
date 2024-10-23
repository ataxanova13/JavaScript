import React from "react";
import { practiceData } from "./data";
import PracticeItem from "./PracticeItem";


function Practice() {
    return (
        <div className="practice">
           <div className="container">
           <div className="practice__top">
                <h1 className="practice__title">Areas of Practice</h1>
                <p className="practice__subtitle">Our disciplined approach to resolving your legal issues <br/>will produce the best-possible outcome.</p>
            </div>

            <div className="practice__bottom">
                {
                    practiceData.map(item => (
                     <PracticeItem   key={item.id}  item={item}  />
                    ))
                }
            </div>
           </div>
        </div>
    )
}

export default Practice