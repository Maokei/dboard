import React, { Component } from "react";
import "./Sidebar.scss";
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
                <div className="profile">
                    <a href="#">
                        <img src={avatarImg} className="profile-thumbnail" alt="profile image thumbnail"></img>
                    </a>
                    <h3 className="profile-title">Jane Doe</h3>
                    <p className="profile-desc">Location Country</p>
                </div>
                <button className="toggle" onClick={this.toggleMenu}><i className={flip180}></i></button>
                {/* <div className={showClass}>
                    <img src={avatarImg} className="profile-img" alt="profile image"></img>
                    <h3 className="profile-title">Jane Doe</h3>
                    <p className="profile-desc">Location Country</p>
                </div> */}
                <div className="sidebar__menu">
                    <div className="sidebar__menu-icons">
                        <a href="#"><i class="fas fa-home"></i></a>
                        <a href="#"><i class="fas fa-history"></i></a>
                        <a href="#"><i class="fas fa-folder-open"></i></a>
                        <a href="#"><i class="fas fa-crown"></i></a>
                        <a href="#"><i class="fas fa-cog"></i></a>
                    </div>
                    <div className="sidebar__menu-desc">
                        <span>Home</span>
                        <span>History</span>
                        <span>Library</span>
                        <span>Favorite</span>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;