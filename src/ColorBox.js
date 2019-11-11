import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (
            <div style={{ background }} className="ColorBox">
                <div className="copy-container">
                    <div className="p10">&nbsp;</div>
                    <button className="copy-button">
                        Copy
                    </button>
                    <div className="box-content">
                        <span className="p10">{name}</span>
                        <span className="see-more">More</span>
                    </div>
                </div>
            </div>
        )
    }
}
