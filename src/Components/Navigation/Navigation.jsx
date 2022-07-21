import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import classNames from "classnames";


export class Navigation extends Component {
  
  render() {
    const { activeTab } = this.props;
    return (
      <nav className={styles.Navigation}>
        <ul>
          <li className={classNames({ [styles.active]: activeTab === "home" })}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/logout"  >Logout</a>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navigation;
