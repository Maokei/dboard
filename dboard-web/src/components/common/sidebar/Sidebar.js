import React, { Component } from "react";
import "./Sidebar.css";
import avatarImg from "../../../img/avatar.png";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log("clicked");
        this.setState({visible: !this.state.visible});
    }

    render() {
        const showClass = this.state.visible ? 'show profile' : 'profile';
        return(
            <div className="sidebar-container">
                <button className="toggle" onClick={this.toggleMenu}><i className="fa fa-arrow-right"></i></button>
                <div className={showClass}>
                    <img src={avatarImg} className="profile-img" alt="profile image"></img>
                    <h3 className="profile-title">Title</h3>
                    <p className="profile-desc">Something something something</p>
                </div>
            </div>
        );
    }
}

export default Sidebar;