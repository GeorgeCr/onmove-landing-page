import React from 'react';
import './ServicesArea.css';
import { serviceData } from './ServiceData';
import ServiceItem from '../ServiceItem/ServiceItem';

export default class BenefitsArea extends React.Component {
    render() {
        return (
            <div className="services-area-container">
                <h2 className="area-title">tipuri de servicii</h2>
                <div className="services-list">
                    {
                        serviceData.map((item, index) => {
                            return (
                                <ServiceItem
                                    key={`s-${index}`}
                                    icon={item.icon}
                                    price={item.price}
                                    type={item.type}
                                    details={item.details}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}