import React, { Component } from 'react';
import "./overview.scss";

class Overview extends Component {
    constructor() {
        super()
        this.state = {
            active: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        console.log("clicked");

        this.setState({
            active: !this.state.active,
            className: 'active'
        })
    }

    render() {
        const activeClass = this.state.active ? 'item-content active' : 'item-content'
        return(
            <div className="overview-container">
                <ul>
                    <li key={this.id} className="overview-item" id="container-id" onClick={this.toggle}>
                        <a href="#container-id" className="item-title">
                            <h4>Container id</h4>
                        </a>
                        <div className={activeClass}>
                            <span>88a0a089fc5f1b3c5fe5135e747f2cac0245a76d0eea02c28a0b1567dc362ea7</span>
                        </div>
                    </li>
                    <li key={this.id} className="overview-item" id="image" onClick={this.toggle}>
                        <a href="#image" className="item-title">
                            <h4>image</h4>
                        </a>
                        <div className={activeClass}>
                            <span>nodered/node-red-docker</span>
                        </div>
                    </li>
                    <li key={this.id} className="overview-item" id="commandId" onClick={this.toggle}>
                        <a href="#commandId" className="item-title">
                            <h4>command id</h4>
                        </a>
                        <div className={activeClass}>
                            <span>npm start -- --userDir /data</span>
                        </div>
                    </li>
                    <li className="overview-item" id="status" onClick={this.toggle}>
                        <a href="#status" className="item-title">
                            <h4>status</h4>
                        </a>
                        <div className={activeClass}>
                            <span>Up 21 minutes</span>
                        </div>
                    </li>
                    <li className="overview-item" id="port" onClick={this.toggle}>
                        <a href="#port" className="item-title">
                            <h4>ports</h4>
                        </a>
                        <div className={activeClass}>
                            <div>
                                <h5>PrivatePort</h5>
                                <p><span>1880</span></p>
                            </div>
                            <div>
                                <h5>PublicPort</h5>
                                <p><span>1880</span></p>
                            </div>
                            <div>
                                <h5>Type</h5>
                                <p><span>tcp</span></p>
                            </div>
                            <div>
                                <h5>IP</h5>
                                <p><span>0.0.0.0</span></p>
                            </div>
                        </div>
                    </li>
                    <li className="overview-item" id="imageId" onClick={this.toggle}>
                        <a href="#imageId" className="item-title">
                            <h4>image id</h4>
                        </a>
                        <div className={activeClass}>
                            <span>sha256:884b3ad2aabbe05cd5d8a17f8af800b540113ae289322174745305d094f63a53</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Overview;