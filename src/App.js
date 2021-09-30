import React, { Component } from 'react';
import './App.css';
import OilChanges from './components/oilChanges.js';

class App extends Component {
    state = {
        display: false,
        selected: '',
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
            <div className='dropdownContainer'>
            <div class="dropdown">
                <span>{this.state.selected === '' ? 'Dealers' : this.state.selected}</span>
                <div class="dropdown-content dropdownLeft">
                    <p onClick={()=>{this.setState({selected: 'Honda'})}}>Honda</p>
                    <p onClick={()=>{this.setState({selected: 'Porche'})}}>Porche</p>
                    <p onClick={()=>{this.setState({selected: 'Mazda'})}}>Mazda</p>
                    <p onClick={()=>{this.setState({selected: 'Lincoln'})}}>Lincoln</p>
                    <p onClick={()=>{this.setState({selected: 'Lexus'})}}>Lexus</p>
                    <p onClick={()=>{this.setState({selected: 'Land Rover'})}}>Land Rover</p>
                    <p onClick={()=>{this.setState({selected: 'Jaguar'})}}>Jaguar</p>
                    <p onClick={()=>{this.setState({selected: 'Ford'})}}>Ford</p>
                    <p onClick={()=>{this.setState({selected: 'GMC'})}}>GMC</p>
                    <p onClick={()=>{this.setState({selected: 'Buick'})}}>Buick</p>
                    <p onClick={()=>{this.setState({selected: 'Cadillac'})}} >Cadillac</p>
                </div>
            </div>
            <div class="dropdown">
                <span>Service</span>
                <div class="dropdown-content dropdownRight">
                    <p>Oil</p>
                    <p>Filter</p>
                    <p>Brakes</p>
                    <p>Battery</p>
                    <p>Wheels</p>
                    <p>Tires</p>
                    <p>Cabin & Engine Filter</p>
                    <p>Transmission</p>
                    <p>Coolant Flush</p>
                    <p>Diagnostics</p>
                    <p>Schedule Maintenance</p>
                    <p>Recall Information</p>
                </div>
            </div>
            </div>
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
