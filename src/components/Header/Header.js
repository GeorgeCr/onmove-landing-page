import React from 'react';
import './Header.css';
import LogoImg from '../../assets/logo.svg';
import HamburgerImg from '../../assets/bars-solid.svg';
import XImg from '../../assets/X.png';

const Logo = () => <img src={LogoImg} alt="logo" />

const Hamburger = () => <img src={HamburgerImg} alt="hamburger" />

const X = () => <img className="close-icon" src={XImg} alt="close" />

export default class Header extends React.Component {

    state = {
        isMenuOpen: false
    }

    handleMenuOpen = (event) => {
        event.stopPropagation();
        this.setState({
            isMenuOpen: true
        });
    }

    handleMenuClose = (event) => {
        event.stopPropagation();
        this.setState({
            isMenuOpen: false
        });
    }

    render() {
        return (
            <div className="header-container">
                <Logo />
                <div className="list-container">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#about">Despre</a></li>
                        <li className="nav-item"><a href="#features">Funcţionalităţi</a></li>
                        <li className="nav-item"><a href="#services">Servicii</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <button className="button-hamburger" onClick={this.handleMenuOpen}>
                    <Hamburger />
                    {
                        this.state.isMenuOpen && (
                            <ul className="hamburger-list">
                                <div onClick={this.handleMenuClose}>
                                    <X />
                                </div>
                                <li onClick={this.handleMenuClose} className="nav-item"><a href="#about">Despre</a></li>
                                <li onClick={this.handleMenuClose} className="nav-item"><a href="#features">Funcţionalităţi</a></li>
                                <li onClick={this.handleMenuClose} className="nav-item"><a href="#services">Servicii</a></li>
                                <li onClick={this.handleMenuClose} className="nav-item"><a href="#contact">Contact</a></li>
                            </ul>
                        )
                    }
                </button>
            </div>
        )
    }
}