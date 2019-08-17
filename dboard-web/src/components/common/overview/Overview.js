import React, { Component } from 'react';
import "./overview.scss";

class Overview extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return(
            <div className="overview-container">
                <ul>
                    <li className="overview-item" id="container-id">
                        <a href="#container-id" className="item-title">
                            <h4>Container id</h4>
                        </a>
                        <div className="item-content is-active">
                            <span>88a0a089fc5f1b3c5fe5135e747f2cac0245a76d0eea02c28a0b1567dc362ea7</span>
                        </div>
                    </li>
                    <li className="overview-item" id="image">
                        <a href="#image" className="item-title">
                            <h4>image</h4>
                        </a>
                        <div className="item-content">
                            <span>nodered/node-red-docker</span>
                        </div>
                    </li>
                    <li className="overview-item" id="commandId">
                        <a href="#commandId" className="item-title">
                            <h4>command id</h4>
                        </a>
                        <div className="item-content">
                            <span>npm start -- --userDir /data</span>
                        </div>
                    </li>
                    <li className="overview-item" id="status">
                        <a href="#status" className="item-title">
                            <h4>status</h4>
                        </a>
                        <div className="item-content">
                            <span>Up 21 minutes</span>
                        </div>
                    </li>
                    <li className="overview-item" id="port">
                        <a href="#port" className="item-title">
                            <h4>ports</h4>
                        </a>
                        <div className="item-content is-active">
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
                    <li className="overview-item" id="imageId">
                        <a href="#imageId" className="item-title">
                            <h4>image id</h4>
                        </a>
                        <div className="item-content">
                            <span>sha256:884b3ad2aabbe05cd5d8a17f8af800b540113ae289322174745305d094f63a53</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Overview;