import React from 'react';
import './BenefitItem.css';

export default class BenefitItem extends React.Component {

    render() {
        return (
            <div className="benefit-item-container">
                <img className="benefit-icon" src={this.props.icon} />
                <p className="benefit-text">
                    {this.props.text}
                </p>
            </div>
        );
    }
}