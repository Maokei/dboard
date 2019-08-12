import React, { Component } from "react";
import "./Sidebar.css";
import avatarImg from "../../../img/avatar.png";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            flip: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log("clicked");
        this.setState({
            visible: !this.state.visible,
            flip: !this.state.flip
        });
    }

    render() {
        const showClass = this.state.visible ? 'show profile' : 'profile';
        const flip180 = this.state.flip ? 'flip-180 fa fa-arrow-right' : 'fa fa-arrow-right';
        return(
            <div className="sidebar-container">
                <button className="toggle" onClick={this.toggleMenu}><i className={flip180}></i></button>
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