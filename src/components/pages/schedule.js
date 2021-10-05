import React, { Component } from 'react';

class Schedule extends Component {
    
    state = {
        imageUrl: '',
    }
    
    render() {
        return (
            <div className='content'>
            <hr></hr>
            <p>{'Title: ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model}</p>
            <p>Discription:</p>
            <p>{'Find great deals for your Scheduled Maintenance for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}</p>
            <hr></hr>
            <input 
            className='imageInput' 
            placeholder='Update image with url link'
            onChange = {(event) => {
                let text = event.target.value;
                console.log(text)
                this.setState({imageUrl: text})
            }}
            ></input>
            <div className='contentHeaderContainer'>
                <h1 className='contentHeader'>{this.props.make + ' Scheduled Maintenance in ' + this.props.city}</h1>
                <p className='contentHeaderParagraph'>Schedule your Scheduled Maintenance & Repair appointment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Schedules</button></a>
                </div>
            </div>
            
            <p>{'<div class=\'contentHeaderContainer\'>'}</p>
            <p>{'<h1 class=\'contentHeader\'>' + this.props.make + ' Scheduled Maintenance in ' + this.props.city + '</h1>'}</p>
            <p>{'<p class=\'contentHeaderParagraph\'>Schedule your Scheduled Maintenance & Repair appointment online now!</p>'}</p>
            <p>{'<div class=\'contentHeaderButtonContainer\'>'}</p>
            <p>{'<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>'}</p>
            <p>{'<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>'}</p>
            <p>{'</div>'}</p>
            <p>{'</div>'}</p>




            <h1>Scheduled Maintenance</h1>


            <p>{'<style>'}</p>
            <p>{'.contentHeaderContainer {'}</p>
            <p>{this.state.imageUrl === '' ? 'background-image: url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);' : 'background-image: url(' + this.state.imageUrl + ');'}</p>
            <p>{'background-size: cover;'}</p>
            <p>{'height: 400px;'}</p> 
            <p>{'display: flex;'}</p>
            <p>{'flex-direction: column;'}</p>
            <p>{'justify-content: center;'}</p>
            <p>{'align-items: center;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeader { '}</p>
            <p>{'color: white;'}</p>
            <p>{'font-size: 50px;'}</p>
            <p>{'margin: 0;'}</p>
            <p>{'}'}</p> 
            <p>{'.contentHeaderButtonContainer {'}</p>
            <p>{'display: flex;'}</p>
            <p>{'flex-direction: row;'}</p>
            <p>{'justify-content: space-between;'}</p>
            <p>{'width: 500px;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderButtons {'}</p>
            <p>{'color: #007FCB;'}</p>
            <p>{'background-color: white;'}</p>
            <p>{'border: 3px solid #007FCB;'}</p>
            <p>{'border-radius: 16px;'}</p>
            <p>{'font-size: 15px;'}</p>
            <p>{'cursor: pointer;'}</p>
            <p>{'font-weight:bold;'}</p>
            <p>{'padding: 10px 40px;'}</p>
            <p>{'min-width: 25%;'}</p>
            <p>{'text-decoration: none;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderParagraph {'}</p>
            <p>{'color: white;'}</p>
            <p>{'}'}</p>
            <p>{'.seoLinks {'}</p>
            <p>{'color: black;'}</p>
            <p>{'font-weight: bold;'}</p>
            <p>{'text-decoration: none;'}</p>
            <p>{'}'}</p>
            <p>{'@media screen and (min-width: 300px) and (max-width: 400px) {'}</p>
            <p>{'.contentHeaderContainer{'}</p>
            <p>{'height: 200px;'}</p>
            <p>{'}'}</p>
            <p>{'}'}</p>
            <p>{'@media screen and (min-width: 400px) and (max-width: 500px) {'}</p>
            <p>{'.contentHeaderContainer{'}</p>
            <p>{'height: 250px;'}</p>
            <p>{'}'}</p>
            <p>{'}'}</p>
            <p>{'@media screen and (min-width: 500px) and (max-width: 600px) {'}</p>
            <p>{'.contentHeaderContainer{'}</p>
            <p>{'height: 300px;'}</p>
            <p>{'}'}</p>
            <p>{'}'}</p>
            <p>{'</style>'}</p>
            </div>
        );
    }
}

export default Schedule;