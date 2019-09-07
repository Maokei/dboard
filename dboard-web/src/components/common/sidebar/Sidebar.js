import React, { Component } from "react";
import "./Sidebar.scss";
import avatarImg from "../../../img/avatar.png";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            flip: false,
            addWidth: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log("clicked");
        this.setState({
            visible: !this.state.visible,
            flip: !this.state.flip,
            addWidth: !this.state.width
        });
    }

    render() {
        const showClass = this.state.visible ? 'show profile__details' : 'profile__details';
        const showClass2 = this.state.visible ? 'show sidebar__menu-desc' : 'sidebar__menu-desc';
        const sidebarWidth = this.state.addWidth ? 'sidebar-container-wide' : 'sidebar-container'
        const flip180 = this.state.flip ? 'flip-180 fa fa-arrow-right' : 'fa fa-arrow-right';
        return(
            <div className={sidebarWidth}>
                <div className="profile">
                    <a href="#">
                        <img src={avatarImg} className="profile-thumbnail" alt="profile image thumbnail"></img>
                    </a>
                    <h3 className={showClass}>Jane Doe</h3>
                    <p className={showClass}>Location Country</p>
                </div>
                <button className="toggle" onClick={this.toggleMenu}><i className={flip180}></i></button>
                <div className="sidebar__menu">
                    <div className="sidebar__menu-icons">
                        <a href="#"><i class="fas fa-home"></i></a>
                        <a href="#"><i class="fas fa-history"></i></a>
                        <a href="#"><i class="fas fa-folder-open"></i></a>
                        <a href="#"><i class="fas fa-crown"></i></a>
                        <a href="#"><i class="fas fa-cog"></i></a>
                    </div>
                    <div className={showClass2}>
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