import React, { Component } from "react";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import logoImg from '../../images/asda.png';
class Header extends Component {
  render() {
       return (
      <header className={styles.Header}>
        <img src={logoImg} alt="ASDA"/>
        <Navigation  />
       </header>
    );
  }
}


export default Header;
