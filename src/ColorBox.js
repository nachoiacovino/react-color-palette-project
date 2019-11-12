import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {
    state = {
        copied: false
    }

    changeCopyState = e => {
        this.setState({ copied: true }, _ => 
            setTimeout(_=> this.setState({ copied: false }), 1500))

        // this.setState({ copied: true }, _ => {
        //     setTimeout(() => {
        //         this.setState({ copied: false })
        //     }, 1500)
        // })
    }
    render() {
        const { name, background } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div className="copy-container">
                        <div className="p10">&nbsp;</div>
                        <button className="copy-button">
                            COPY
                        </button>
                        <div className="box-content">
                            <span className="p10">{name}</span>
                            <span className="see-more">More</span>
                        </div>
                    </div>
                    <div className="copy-overlay-container">
                        <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
                    </div>
                    <div className={`copy-msg ${copied && "show"}`} >
                            <h1>Copied!</h1>
                            <p>{background}</p>
                        </div>
                </div>
            </CopyToClipboard>
        )
    }
}
