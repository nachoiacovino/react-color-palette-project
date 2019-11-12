import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
    state = {
        level: 500
    }

    changeLevel = level => this.setState({ level })

    render() {
        const { level } = this.state
        const colorBoxes = this.props.palette.colors[level].map(color => 
            <ColorBox background={color.hex} name={color.name} />  
        )
        return (
            <div className="Palette">
                {/* <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
                </div> */}
                {/* Navbar here */}
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer here */}
            </div>
        )
    }
}
