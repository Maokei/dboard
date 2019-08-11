import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return(
            <div className="sidebar-container">
                <img className="profile-img"></img>
                <h3 className="profile-title">Title</h3>
                <p className="profile-desc">Something something something</p>
            </div>
        );
    }
}

export default Sidebar;