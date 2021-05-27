/*

export default Logo;


import React from "react";

export default class App extends React.Component {
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
/*
    constructor (props, context) {
        super(props, context);
        this.state = {
            show: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true})
        }, this.props.timeOutShow * 1000);
    }

    render() {
        return (
            <>
                {this.state.show && (
                    <Svg
                        className={this.props.className}
                        style={this.props.style}
                        viewBox={this.props.viewBox}
                    >
                        {this.props.path}
                    </Svg>
                )}
            </>
        )
    }
}
*/
import React, {useState} from 'react';

/** ====================================================================================================
 *              Main
 =====================================================================================================*/

const Logo = (className, viewBox) => {

    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 1000);

    return (
        <>
            {show && (
                <svg
                    className={className}
                    // style={this.props.style} this.props.style === ???
                    viewBox={viewBox}
                >
                </svg>
            )}
        </>
    )
}

export default Logo
