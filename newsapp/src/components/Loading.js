import React, { Component } from 'react'
import gif from './loading.gif'

export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={gif} alt="" />
            </div>
        )
    }
}

export default Loading