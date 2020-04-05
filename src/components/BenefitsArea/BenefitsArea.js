import React from 'react';
import './BenefitsArea.css';
import { benefitsData } from './BenefitsData';
import BenefitItem from '../BenefitItem/BenefitItem';

export default class BenefitsArea extends React.Component {
    render() {
        return (
            <div className="benefits-area-container">
                <h2 className="area-title">ce oferim?</h2>
                <div className="benefits-list">
                    {
                        benefitsData.map((item, index) => {
                            return (
                                <BenefitItem key={`i-${index}`} icon={item.icon} text={item.text} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }

}
