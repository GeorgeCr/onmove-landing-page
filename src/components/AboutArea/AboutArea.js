import React from 'react';
import './AboutArea.css';

export default class AboutArea extends React.Component{
    render(){
        return (
           <div className="about-area-container">
               <div className="left-panel-about">
               </div>
               <div className="right-panel-about">
                <h2 className="area-title">cine suntem noi?</h2>
                <p>
                <strong>OnMove</strong> este o afacere B2C ce oferă părinților un mijloc de transport sigur pentru copiii lor, de acasă până la grădiniță/școală și înapoi. 
                </p>
                <p>
                Folosind aplicația <strong>OnMoveBus</strong> părinții pot rezerva un număr de locuri, destinația pentru fiecare pasager și locul de plecare cu o seară înainte, iar algoritmul nostru va genera un traseu optim pentru șoferii autobuzelor noastre, astfel încât copiii să ajungă în timp util. 
                </p>
                <p>
                Copiii beneficiază de securitate, siguranță și confort pe timpul transportului, dar și de un mediu în care pot socializa și lega prietenii.
                </p>
               </div>
           </div> 
        )
    }
}