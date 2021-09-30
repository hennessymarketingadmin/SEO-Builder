import React, { Component } from 'react';

class Brakes extends Component {
    
    render() {
        return (
            <div>
                <div className='contentHeaderContainer'>
                {/* <p className='contentHeader2'>{'<div class=\'contentHeaderContainer\'>'}</p> */}
                <h1 className='contentHeader'>{this.props.make + ' Brake Service in ' + this.props.city}</h1>
                <p className='brakesHeaderparagraph'>Schedule your Brake Service & Repair appointment online now!</p>
                <div className='coupon-button-link-123645565745-container'>
                    <a href='https://www.hennessyhonda.com/schedule-a-service-appointment.htm' target='_blank'><button className='coupon-button-link-123645565745'>Schedule Service</button></a>
                    <a href='https://www.hennessyhonda.com/promotions/service/index.htm' target='_blank'><button className='coupon-button-link-123645565745'>View Service Schedules</button></a>
                </div>
                {/* <p className='contentHeader2'>{'</div>'}</p> */}
                </div>
            </div>
        );
    }
}

export default Brakes;