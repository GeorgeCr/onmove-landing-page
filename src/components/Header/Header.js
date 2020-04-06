import React from 'react';
import './Header.css';
import LogoImg from '../../assets/logo.svg';

const Logo = () => <img src={LogoImg} alt="logo"/>

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <Logo />
                <div className="list-container">
                    <ul className="nav-list">
                        <li className="nav-item">Despre</li>
                        <li className="nav-item">Funcţionalităţi</li>
                        <li className="nav-item">Servicii</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}