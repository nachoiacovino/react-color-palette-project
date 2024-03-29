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
            
    }
    render() {
        const { name, background } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
              <div style={{ background }} className='ColorBox'>
                <div
                  style={{ background }}
                  className={`copy-overlay ${copied && "show"}`}
                />
                <div className={`copy-msg ${copied && "show"}`}>
                  <h1>Copied!</h1>
                  <p>{background}</p>
                </div>
                <div className='copy-container'>
                  <div className='box-content'>
                    <span>{name}</span>
                  </div>
                  <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
              </div>
            </CopyToClipboard>
          );
    }
}
