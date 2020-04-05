import React from 'react';
import './ServiceItem.css';

export default class ServiceItem extends React.Component {
    render() {
        return (
            <div className="service-item-container">
                <img className="service-icon" src={this.props.icon} />
                <h2 className="service-price">
                    {this.props.price}
                </h2>
                <h3 className="service-type">
                    {this.props.type}
                </h3>
                <p className="service-details">
                    {this.props.details}
                </p>
            </div>
        );
    }
}