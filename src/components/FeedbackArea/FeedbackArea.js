import React from 'react';
import './FeedbackArea.css';
import { feedbackData } from './FeedbackData'
import FeedbackItem from '../FeedbackItem/FeedbackItem';

export default class BenefitsArea extends React.Component {
    render(){
        return(
            <div className="feedback-area-container">
               <h2 className="area-title">părerile clienților noștri</h2>
               {
                   feedbackData.map((item, index) => {
                       return (
                           <FeedbackItem 
                                key={`f-${index}`} 
                                photo={item.photo}
                                quote={item.quote}
                                name={item.name}
                            />
                       )
                   })
               }
                
           </div> 
        )
    }

}