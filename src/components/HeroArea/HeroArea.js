import React from 'react';
import './HeroArea.css';
import PhonesImg from '../../assets/Phones.svg';
import chevroDownImg from '../../assets/chevron-down-solid.svg';

const Phones = () => <img className="hero-image" src={PhonesImg} alt="phones img" />
const ChevronDown = () => <img className="chevron-down" src={chevroDownImg} alt ="go down"/>
export default class HeroArea extends React.Component {
    render() {
        return (
            <div className="hero-area-container">
                <div className="panel">
                    <div className="left-panel">
                        <h1 className="main-heading">
                            <div>sigur,</div>
                            <div>rapid&</div>
                            <div>distractiv</div>
                        </h1>
                        <h3 className="secondary-heading">Lasă în grija noastră transportul copilului tău!</h3>
                        <div className="button-container">
                            <button className="cta" onClick={() => console.log('link catre playstore')}>Descarcă acum</button>
                        </div>
                    </div>
                    <div className="right-panel">
                        <Phones />
                    </div>
                </div>
                <div className="border-bottom">
                    <ChevronDown />
                </div>
            </div>
        )
    }
}