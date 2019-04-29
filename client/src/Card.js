import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Welcome.css'
import './App.css'

class Card extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className="card card-margin" >
              <img src={this.props.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="title card-title">{this.props.title}</h5>
                <p className="card-text main-font">{this.props.description}</p>
                {/* <a href="#" className="btn btn-primary">{this.props.button}</a> */}
                <button className='btn rounded-pill outline-button'  onClick={() => this.props.history.push('/newTanda')}>
                  {this.props.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Card);