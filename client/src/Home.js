import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css'
import Card from './Card.js'
import saveImage from './images/saving.jpg'
import givingImage from './images/giving.jpg'
import moneyJar from './images/moneyJar.jpg'

class Home extends Component {
    render(){
        return(
            <div className="body container-fluid">
                    <div className="row">
                        <div className='col-sm-12 col-md-4'>
                            <Card 
                                title="Create new tanda"
                                description="Create a new tanda and invite friends and family to be part of the saving circle."
                                button="Get started"
                                image={saveImage}
                            />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <Card
                                title="Current Tandas"
                                description='Place holder paragraph'
                                button="Get started"
                                image={givingImage}
                            />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <Card
                                title="Your savings"
                                description='Place holder paragraph'
                                button="Get started"
                                image={moneyJar}
                            />
                        </div>
                    </div>
            </div>
       )
    }
}

export default withRouter(Home);