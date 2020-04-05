import React from 'react';
import './FeedbackItem.css';

export default class FeedbackItem extends React.Component {
    render() {
        return (
            <div className="feedback-item-container">
                <img className="feedback-photo" src={this.props.photo} />
                <div className="feedback-text">
                    <p className="feedback-quote">
                        {this.props.quote}
                    </p>
                    <span className="feedback-name">
                        {this.props.name}
                    </span>
                </div>
            </div>
        );
    }
}