import React, { Component } from 'react';
import './App.css';
import OilChanges from './components/oilChanges.js';

class App extends Component {
  state = {
    make: '',
    model: '',
    year: '',
    address: '',
    state: '',
    city: '',
    dealer: '',
    phone: '',
    serviceCenter: '',
    serviceApp: '',
    serviceSpecials: '',
    display: false,
  }

  render () {

    const uppercaseFirst = (string) => {
      let arr = string.split(' ')
      
      for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      return arr.join(' ')
  }


    return (
      <div className={this.state.display ? 'appContainerLeft' : 'appContainer'}>
        <h1 className='header'>Hennessy <i className='blue'>S</i><i className='red'>E</i><i className='yellow'>O</i> Builder</h1>
          <div className='inputContainer'>
          <input
          className='searchBarLeft'
          placeholder='Make'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({make: uppercaseFirst(text)})
          }}
          ></input>
          <input 
          className='searchBarMiddle'
          placeholder='Model'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({model: uppercaseFirst(text)})
          }}
          ></input>
          <input 
          className='searchBarRight'
          placeholder='Year'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({year: uppercaseFirst(text)})
          }}
          ></input>
          </div>
          <div className='inputContainer'>
          <input 
          className='searchBarLeft'
          placeholder='Address'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({address: uppercaseFirst(text)})
          }}
          ></input>
          <input 
          className='searchBarMiddle'
          placeholder='City'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({city: uppercaseFirst(text)})
          }}
          ></input>
          <input 
          className='searchBarRight'
          placeholder='State'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({state: uppercaseFirst(text)})
          }}
          ></input>
          </div>
          <div className='inputContainer'>
          <input 
          className='searchBarLeft'
          placeholder='Dealer'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({dealer: uppercaseFirst(text)})
          }}
          ></input>
          <input 
          className='searchBarRight'
          placeholder='Phone'
          onChange = {(event) => {
              let text = event.target.value;
              this.setState({phone: uppercaseFirst(text)})
          }}
          ></input>
          </div>
          <div className='inputContainer'>
              <input 
              className='searchBarLeft'
              placeholder='Service Center'
              onChange = {(event) => {
                  let text = event.target.value;
                  this.setState({serviceCenter: text})
              }}
          ></input>
          <input 
          className='searchBarMiddle'
              placeholder='Service appointment'
              onChange = {(event) => {
                  let text = event.target.value;
                  this.setState({serviceApp: text})
              }}
          ></input>
          <input 
          className='searchBarRight'
              placeholder='Service specials'
              onChange = {(event) => {
                  let text = event.target.value;
                  this.setState({serviceSpecials: text})
              }}
          ></input>
          </div>
          {/* <div className='dropdownContainer'>
          <div class="dropdown">
              <span>Dealers</span>
              <div class="dropdown-content dropdownLeft">
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
                  <p>Dealer</p>
              </div>
          </div>
          <div class="dropdown">
              <span>Service</span>
              <div class="dropdown-content dropdownRight">
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
                  <p>Service</p>
              </div>
          </div>
          </div> */}
          <button
          className='genBtn'
          onClick = {() => {
              this.setState({display: true})
          }}>Generate</button>
        
        {this.state.display ? 
        <OilChanges 
          make={this.state.make}
          model={this.state.model}
          year={this.state.year}
          address={this.state.address}
          state={this.state.state}
          city={this.state.city}
          dealer={this.state.dealer}
          phone={this.state.phone}
          serviceCenter={this.state.serviceCenter}
          serviceApp={this.state.serviceApp}
          serviceSpecials={this.state.serviceSpecials}
        /> 
        : null}
      </div>
    );
  }
}

export default App;
