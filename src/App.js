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
        city: '',
        zip: '',
        model: '',
        year: '',
        address: '',
        state: '',
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
            this.setState({dealer: 'Hennessy Honda'})
            this.setState({address: '8931 Highway 92 Woodstock, GA 30189'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Marietta'})
            this.setState({phone: '7706281155'})
            this.setState({serviceCenter: 'https://www.hennessyhonda.com/service/index.htm'})
            this.setState({serviceApp: 'https://www.hennessyhonda.com/schedule-a-service-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.hennessyhonda.com/promotions/service/index.htm'})
        } else if (dealer === 'Porche') {
            this.setState({dealer: 'Hennessy Porsche North Atlanta'})
            this.setState({address: '990 Mansell Rd, Roswell, GA 30076'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Roswell'})
            this.setState({phone: '7706436100'})
            this.setState({serviceCenter: 'https://www.hennessyporsche.com/service/index.htm'})
            this.setState({serviceApp: 'https://www.hennessyporsche.com/schedule_service.htm'})
            this.setState({serviceSpecials: 'https://www.hennessyporsche.com/promotions/service/index.htm'})
        } else if (dealer === 'Mazda') {
            this.setState({dealer: 'Hennessy Mazda'})
            this.setState({address: '7261 Jonesboro Road, Bld. 2, Morrow, GA 30260'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Morrow'})
            this.setState({phone: '8333391886'})
            this.setState({serviceCenter: 'https://www.hennessy-mazda.com/service/'})
            this.setState({serviceApp: 'https://www.hennessy-mazda.com/schedule-service/'})
            this.setState({serviceSpecials: 'https://www.hennessy-mazda.com/service/service-specials/'})
        } else if (dealer === 'Lincoln') {
            this.setState({dealer: 'Hennessy Lincoln Atlanta'})
            this.setState({address: '5675 Peachtree Industrial Boulevard Atlanta, GA 30341'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Atlanta'})
            this.setState({phone: '7706210200'})
            this.setState({serviceCenter: 'https://www.hennessylincolnatlanta.com/lincoln-priority-service-at-hennessy-lincoln-atlanta.htm'})
            this.setState({serviceApp: 'https://www.hennessylincolnatlanta.com/schedule-service.htm'})
            this.setState({serviceSpecials: 'https://www.hennessylincolnatlanta.com/service-specials-in-atlanta-ga.htm'})
        } else if (dealer === 'Lexus Atlanta') {
            this.setState({dealer: 'Hennessy Lexus of Atlanta'})
            this.setState({address: '5955 Peachtree Industrial Blvd.Atlanta, GA 30341'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Atlanta'})
            this.setState({phone: '6782925640'})
            this.setState({serviceCenter: 'https://www.lexusatlanta.com/auto-repair-in-atlanta.htm'})
            this.setState({serviceApp: 'https://www.lexusatlanta.com/ServiceApptForm.htm'})
            this.setState({serviceSpecials: 'https://www.lexusatlanta.com/parts-and-service/service-specials.htm'})
        } else if (dealer === 'Lexus Gwinnett') {
            this.setState({dealer: 'Hennessy Lexus of Gwinnett'})
            this.setState({address: '3383 Satellite Blvd, Duluth, GA 30096'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Duluth'})
            this.setState({phone: '7706801000'})
            this.setState({serviceCenter: 'https://www.lexusgwinnett.com/auto-repair-in-duluth.htm'})
            this.setState({serviceApp: 'https://www.lexusgwinnett.com/ServiceApptForm.htm'})
            this.setState({serviceSpecials: 'https://www.lexusgwinnett.com/parts-and-service/service-specials.htm'})
        } else if (dealer === 'Land Rover Gwinnett') {
            this.setState({dealer: 'Land Rover Gwinnett'})
            this.setState({address: '3423 Old Norcross Rd, Duluth, GA 30096'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Duluth'})
            this.setState({phone: '8339330115'})
            this.setState({serviceCenter: 'https://www.landrovergwinnett.com/service-department.htm'})
            this.setState({serviceApp: 'https://www.landrovergwinnett.com/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.landrovergwinnett.com/promotions/service/index.htm'})
        } else if (dealer === 'Land Rover Buckhead') {
            this.setState({dealer: 'Land Rover Buckhead'})
            this.setState({address: '3040 Piedmont Rd NE, Atlanta, GA 30305'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Atlanta'})
            this.setState({phone: '8334487479'})
            this.setState({serviceCenter: 'https://www.landroverbuckhead.net/service-department.htm'})
            this.setState({serviceApp: 'https://www.landroverbuckhead.net/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.landroverbuckhead.net/promotions/service/index.htm'})
        } else if (dealer === 'Land Rover North Atlanta') {
            this.setState({dealer: 'Land Rover North Atlanta'})
            this.setState({address: '1505 Mansell Rd, Alpharetta, GA 30009'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Alpharetta'})
            this.setState({phone: '8339860454'})
            this.setState({serviceCenter: 'https://www.landrovernorthatlanta.com/service-department.htm'})
            this.setState({serviceApp: 'https://www.landrovernorthatlanta.com/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.landrovernorthatlanta.com/promotions/service/index.htm'})
        } else if (dealer === 'Ford') {
            this.setState({dealer: 'Hennessy Ford Atlanta'})
            this.setState({address: '5675 Peachtree Blvd, Atlanta, GA 30341'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Atlanta'})
            this.setState({phone: '8333391890'})
            this.setState({serviceCenter: 'https://www.hennessyford.com/service-center/'})
            this.setState({serviceApp: 'https://www.hennessyford.com/service-appointment/'})
            this.setState({serviceSpecials: 'https://www.hennessyford.com/service-coupons/'})
        } else if (dealer === 'GMC') {
            this.setState({dealer: 'Hennessy Buick GMC of Southlake'})
            this.setState({address: '7261 Jonesboro RD, Morrow, GA 30260'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'MORROW'})
            this.setState({phone: '8333391943'})
            this.setState({serviceCenter: 'https://www.hennessympg.com/service/'})
            this.setState({serviceApp: 'https://www.hennessympg.com/service/serviceapptform/'})
            this.setState({serviceSpecials: 'https://www.hennessympg.com/service/serviceandpartsspecials/'})
        } else if (dealer === 'Buick') {
            this.setState({dealer: 'Hennessy Buick GMC of Southlake'})
            this.setState({address: '7261 Jonesboro RD, Morrow, GA 30260'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'MORROW'})
            this.setState({phone: '8333391943'})
            this.setState({serviceCenter: 'https://www.hennessympg.com/service/'})
            this.setState({serviceApp: 'https://www.hennessympg.com/service/serviceapptform/'})
            this.setState({serviceSpecials: 'https://www.hennessympg.com/service/serviceandpartsspecials/'})
        } else if (dealer === 'Cadillac') {
            this.setState({dealer: 'Hennessy Cadillac'})
            this.setState({address: '3377 Satellite Blvd, Duluth, GA 30096'})
            this.setState({state: 'Georgia'})
            // this.setState({city: 'Duluth'})
            this.setState({phone: '7706807000'})
            this.setState({serviceCenter: 'https://www.hennessycadillac.com/service/'})
            this.setState({serviceApp: 'https://www.hennessycadillac.com/service/serviceapptform/'})
            this.setState({serviceSpecials: 'https://www.hennessycadillac.com/service/serviceandpartsspecials/'})
        } else if (dealer === 'Jaguar Atlanta') {
            this.setState({dealer: 'Hennessy Jaguar Atlanta'})
            this.setState({address: '3040 Piedmont Rd NE, Atlanta, GA 30305'})
            this.setState({state: 'Georgia'})
            this.setState({phone: '8335368188'})
            this.setState({serviceCenter: 'https://www.hennessyjaguaratlanta.com/service-department.htm'})
            this.setState({serviceApp: 'https://www.hennessyjaguaratlanta.com/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.hennessyjaguaratlanta.com/promotions/service/index.htm'})
        } else if (dealer === 'Jaguar North Atlanta') {
            this.setState({dealer: 'Hennessy Jaguar North Atlanta'})
            this.setState({address: '1505 Mansell Rd, Alpharetta, GA 30009'})
            this.setState({state: 'Georgia'})
            this.setState({phone: '8339850564'})
            this.setState({serviceCenter: 'https://www.jaguarnorthatlanta.com/service-department.htm'})
            this.setState({serviceApp: 'https://www.jaguarnorthatlanta.com/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.jaguarnorthatlanta.com/promotions/service/index.htm'})
        } else if (dealer === 'Jaguar Gwinnett') {
            this.setState({dealer: 'Hennessy Jaguar Gwinnett'})
            this.setState({address: '3423 Old Norcross Rd, Duluth, GA 30096'})
            this.setState({state: 'Georgia'})
            this.setState({phone: '8339330118'})
            this.setState({serviceCenter: 'https://www.jaguargwinnett.com/service-department.htm'})
            this.setState({serviceApp: 'https://www.jaguargwinnett.com/service/schedule-appointment.htm'})
            this.setState({serviceSpecials: 'https://www.jaguargwinnett.com/promotions/service/index.htm'})
        }
    }

    const displayPage = (page) => {

        if (page === 'Oil') {
            return <OilChanges 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Filter') {
            return <FilterPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Brakes') {
            return <BrakesPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Battery') {
            return <BatteryPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Wheels') {
            return <WheelsPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Tires') {
            return <TiresPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Cabin') {
            return <CabinPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Transmission') {
            return <TransmissionPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Coolant') {
            return <CoolantPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Diagnostics') {
            return <DiagnosticsPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Schedule') {
            return <SchedulePage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
        } else if (page === 'Recall') {
            return <RecallPage 
                make={this.state.make}
                model={this.state.model}
                year={this.state.year}
                city={this.state.city}
                zip={this.state.zip}
                address={this.state.address}
                state={this.state.state}
                dealer={this.state.dealer}
                phone={this.state.phone}
                serviceCenter={this.state.serviceCenter}
                serviceApp={this.state.serviceApp}
                serviceSpecials={this.state.serviceSpecials}
            />
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
            <div className='inputContainer'>
            <input
            className='searchBarLeft'
            placeholder='City'
            onChange = {(event) => {
                let text = event.target.value;
                this.setState({city: uppercaseFirst(text)})
            }}
            ></input>
            <input 
            className='searchBarRight'
            placeholder='Zipcode'
            onChange = {(event) => {
                let text = event.target.value;
                this.setState({zip: uppercaseFirst(text)})
            }}
            ></input>
            </div>
            <div className='dropdownContainer'>
            <div className="dropdown">
                <span>{this.state.selected === '' ? 'Dealers' : this.state.selected}</span>
                <div className="dropdown-content dropdownLeft">
                    <p onClick={()=>{this.setState({selected: 'Honda'})}}>Honda</p>
                    <p onClick={()=>{this.setState({selected: 'Porche'})}}>Porche</p>
                    <p onClick={()=>{this.setState({selected: 'Mazda'})}}>Mazda</p>
                    <p onClick={()=>{this.setState({selected: 'Lincoln'})}}>Lincoln</p>
                    <p onClick={()=>{this.setState({selected: 'Lexus Atlanta'})}}>Lexus Atlanta</p>
                    <p onClick={()=>{this.setState({selected: 'Lexus Gwinnett'})}}>Lexus Gwinnett</p>
                    <p onClick={()=>{this.setState({selected: 'Land Rover Gwinnett'})}}>Land Rover Gwinnett</p>
                    <p onClick={()=>{this.setState({selected: 'Land Rover Buckhead'})}}>Land Rover Buckhead</p>
                    <p onClick={()=>{this.setState({selected: 'Land Rover North Atlanta'})}}>Land Rover North Atlanta</p>
                    <p onClick={()=>{this.setState({selected: 'Jaguar Atlanta'})}}>Jaguar Atlanta</p>
                    <p onClick={()=>{this.setState({selected: 'Jaguar North Atlanta'})}}>Jaguar North Altanta</p>
                    <p onClick={()=>{this.setState({selected: 'Jaguar Gwinnett'})}}>Jaguar Gwinnett</p>
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
            {this.state.make === '' || this.state.selected === '' || this.state.page === '' ? 
            null :
            <button
            className='genBtn'
            onClick = {() => {
                this.setState({display: true})
                selectDealer(this.state.selected)
            }}>Generate</button>
        }
        
        {this.state.display ? displayPage(this.state.page) : null}
        </div>
    );
    }
}

export default App;



// testing