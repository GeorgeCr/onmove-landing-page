import React from 'react';

export default class FeedbackItem extends React.Component {
    render() {
        return (
            <div className="feedback-item-container">
                <img className="feedback-photo" src={this.props.photo} />
                <p className="feedback-quote">
                    {this.props.quote}
                </p>
                <span className="feedback-name">
                    {this.props.name}
                </span>
            </div>
        );
    }
}