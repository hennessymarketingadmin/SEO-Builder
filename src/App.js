import React, { Component } from 'react';
import './App.css';
import OilChanges from './components/pages/oilChanges.js';
import BatteryPage from './components/pages/battery.js';
import CabinPage from './components/pages/cabin.js';
import CoolantPage from './components/pages/coolant.js';
import DiagnosticsPage from './components/pages/diagnostics.js';
import FilterPage from './components/pages/filter.js';
import RecallPage from './components/pages/recall.js';
import SchedulePage from './components/pages/schedule.js';
import TiresPage from './components/pages/tires.js';
import TransmissionPage from './components/pages/transmission.js';
import WheelsPage from './components/pages/wheels.js';
import BrakesPage from './components/pages/brakes.js';


class App extends Component {
    state = {
        display: false,
        selected: '',
        page: '',
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

    const selectDealer = (dealer) => {
        if (dealer === 'Honda') {
            this.setState({dealer: 'HennessyHonda'})
            this.setState({address: 'random address'})
            this.setState({state: 'Georgia'})
            this.setState({city: 'Marietta'})
            this.setState({phone: '6786438317'})
            this.setState({serviceCenter: 'https://www.google.com/'})
            this.setState({serviceApp: 'https://www.google.com/'})
            this.setState({serviceSpecials: 'https://www.google.com/'})
        }
    }

    const displayPage = (page) => {

        if (page === 'Oil') {
            return <OilChanges 
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
        }else if (page === 'Filter') {
            return <FilterPage />
        }else if (page === 'Brakes') {
            return <BrakesPage />
        }else if (page === 'Battery') {
            return <BatteryPage />
        }else if (page === 'Wheels') {
            return <WheelsPage />
        }else if (page === 'Tires') {
            return <TiresPage />
        }else if (page === 'Cabin') {
            return <CabinPage />
        }else if (page === 'Transmission') {
            return <TransmissionPage />
        }else if (page === 'Coolant') {
            return <CoolantPage />
        }else if (page === 'Diagnostics') {
            return <DiagnosticsPage />
        }else if (page === 'Schedule') {
            return <SchedulePage />
        }else if (page === 'Recall') {
            return <RecallPage />
        }
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
            {/* <div className='inputContainer'>
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
            ></input> */}
            {/* </div> */}
            <div className='dropdownContainer'>
            <div className="dropdown">
                <span>{this.state.selected === '' ? 'Dealers' : this.state.selected}</span>
                <div className="dropdown-content dropdownLeft">
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
            <div className="dropdown">
                <span>{this.state.page === '' ? 'Services' : this.state.page}</span>
                <div className="dropdown-content dropdownRight">
                    <p onClick={()=>{this.setState({page: 'Oil'})}}>Oil</p>
                    <p onClick={()=>{this.setState({page: 'Filter'})}}>Filter</p>
                    <p onClick={()=>{this.setState({page: 'Brakes'})}}>Brakes</p>
                    <p onClick={()=>{this.setState({page: 'Battery'})}}>Battery</p>
                    <p onClick={()=>{this.setState({page: 'Wheels'})}}>Wheels</p>
                    <p onClick={()=>{this.setState({page: 'Tires'})}}>Tires</p>
                    <p onClick={()=>{this.setState({page: 'Cabin'})}}>Cabin & Engine Filter</p>
                    <p onClick={()=>{this.setState({page: 'Transmission'})}}>Transmission</p>
                    <p onClick={()=>{this.setState({page: 'Coolant'})}}>Coolant Flush</p>
                    <p onClick={()=>{this.setState({page: 'Diagnostics'})}}>Diagnostics</p>
                    <p onClick={()=>{this.setState({page: 'Schedule'})}}>Schedule Maintenance</p>
                    <p onClick={()=>{this.setState({page: 'Recall'})}}>Recall Information</p>
                </div>
            </div>
            </div>
            <button
            className='genBtn'
            onClick = {() => {
                this.setState({display: true})
                selectDealer(this.state.selected)
            }}>Generate</button>
        
        {this.state.display ? 
        // <OilChanges 
            
        // /> 
        displayPage(this.state.page)
        : null}
        </div>
    );
    }
}

export default App;
