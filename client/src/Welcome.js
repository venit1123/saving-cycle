import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import together from './images/together.jpg'
import './Welcome.css'


class Welcome extends Component {
    render() {
        console.log("FROM WELCOME :" , this.props.getUserInfo)
        return (
            <div className = 'container-fluid body no-side-padding min-padding'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-sml-12 col-md-6'>
                            <span className = "helper" ></span>
                            <img src={together} className='img-fluid center' alt='human chain created by young adult' />
                        </div>
                        <div className = 'col-sml-12 col-md-6'>
                            <div className = 'min-padding'>
                                <h1 className = 'h2 title'>
                                    Tanda
                                    <br/>
                                    <small className = 'text-muted main-font medium-font'>A way to save money and build community</small>
                                </h1>
                                <p className = 'main-font justify-text'>
                                    Tandas is a tool that has been passed down
                                    for generations and has been used as a structured way to access cash or save
                                        for a goal. By working in a group, we are forced into a commitment where others are counting on us, which gives us just the right amount of motivation to stick to the plan. The idea of <i> "I want to save"</i> becomes <i> “I have to save” </i> and before you know it you’ve reached your savings goal and are off enjoying that trip you’ve been wanting to take.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);