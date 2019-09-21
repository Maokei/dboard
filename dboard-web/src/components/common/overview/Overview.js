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
        const dataTmp = [
            {
                id: '88a0a089fc5f1b3c5fe5135e747f2cac0245a76d0eea02c28a0b1567dc362ea7',
                imageType: 'nodered/node-red-docker',
                commandId: 'npm start -- --userDir /data',
                status: 'Up 21 minutes',
                port: {
                    privatePort: 1880,
                    publicPort: 1880,
                    ip: '0.0.0.0'
                },
                imageId: 'sha256:884b3ad2aabbe05cd5d8a17f8af800b540113ae289322174745305d094f63a53'
            },
            {
                id: '88a0a089fc5f1b3c5fe5135e747f2cac0245a76d0eea02c28a0b1567dc362ea7',
                imageType: 'nodered/node-red-docker',
                commandId: 'npm start -- --userDir /data',
                status: 'Up 21 minutes',
                port: {
                    privatePort: 1880,
                    publicPort: 1880,
                    ip: '0.0.0.0'
                },
                imageId: 'sha256:884b3ad2aabbe05cd5d8a17f8af800b540113ae289322174745305d094f63a53'
            }
        ]

            const lists = dataTmp.map((list, i) => {
                return(
                    <li key={i} className="overview-item" id="container-id">
                        <h4 className="item-title">Container id</h4>
                        <div className="item-content active">
                            <span>{list.id}</span>
                        </div>
                    </li>
                )
            });

            return(
                <div className="overview-container">
                    <ul className="overview-item">
                        {lists}
                    </ul>
                </div>
            )

    }
}

export default Overview;