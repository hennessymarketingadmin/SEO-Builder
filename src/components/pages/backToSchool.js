import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class BackToSchool extends Component {

    state = {
        imageUrl: '',
        content: '',
    }
    
    render() {

        const shuffle = (arr, type) => {
            arr.sort(function() {
                return 0.5 - Math.random();
            });

            if (type !== 'list') {
                arr.unshift('<p class=\'seoContentP\'>')
                arr.push('</p>\n')
            }
            arr.join(', ')
            // console.log(arr)
            return arr.join('')
        }

        const shuffleAdverb = (words) => {
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbOne = () => {
            let words = ['college', 'university']
            return shuffleAdverb(words)
        }

        const generateAdverbTwo = () => {
            let words = ['summer', 'summer vacation', 'summer break']
            return shuffleAdverb(words)
        }

        const generateAdverbThree = () => {
            let words = ['avoid', 'avert', 'dodge', 'fend off']
            return shuffleAdverb(words)
        }
        const generateAdverbSix = () => {
            let arr = ['vehicle', 'car']
            return shuffleAdverb(arr)
        }
        const backToSchoolParagraphOne = () => {
            let arr = [
                '<li>Get an oil change</li> ',
                '<li>Change your engine and cabin air filters (because it\'s likely dusty, sandy, or somewhere in between after your ' + generateAdverbTwo() + ' road trip!)</li> ',
                '<li>Rotate your tires</li> ',
                '<li>Test your battery</li> ',
                '<li>Have your ' + generateAdverbSix() + ' deep cleaned</li> ',
                '<li>Get a wiper blade and possibly a mirror replacement (the days will be getting shorter; you’ll likely be spending more time in the ' + generateAdverbSix() + ', and visibility matters more now than ever!)</li> ',
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphTwo = () => {
            let arr = [
                'By taking a little time to service your ' + generateAdverbSix() + ' before the fall rush begins, you can ' + generateAdverbThree() + ' problems down the road and keep your ' + generateAdverbSix() + ' running smoothly throughout the season. ',
                'Our <a class=\'seoLinks\' href=' + this.props.serviceSpecials + ' target="_blank">Summer Road Trip Service Bundle</a> covers the essentials, so take advantage of it before Labor Day! '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphThree = () => {
            let arr = [
                'One way to help make this annual transition effortless is to add some new accessories to the family ' + generateAdverbSix() + '. ',
                'Here are a few items that can help make life with school-age kids a little bit easier. '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphFour = () => {
            let arr = [
                '<li>Seat covers: If you\'re worried about spills and stains, seat covers can be a lifesaver. They\'re also great for protecting the upholstery from wear and tear.</li> ',
                '<li>Storage bins and Cargo nets: These are perfect for organizing supplies, snacks, and toys, which is especially handy if you\'re constantly ferrying kids to and from extracurricular activities.</li> ',
                '<li>Floor mats: With all the extra foot traffic in and out of your ' + generateAdverbSix() + ' during the school year, you\'ll want to protect your upholstery from dirt and spills with a set of quality floor mats.</li> ',
                '<li>Sunshade: School days tend to start early, so help your kids (and yourself) ' + generateAdverbThree() + ' the harsh morning sun by investing in a good sunshade for your windshield.</li> ',
                '<li>First-aid kit: Having one of these on hand is always a good idea, especially if you‘re transporting small school-aged children regularly. Prepare for scrapes, cuts, and bruises with a well-stocked travel first-aid kit.</li> ',
                '<li>Jumper cables: A set of jumper cables should be in every ' + generateAdverbSix() + '. You never know when you\'ll need them, so it\'s best to be ready!</li> ',
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphFive = () => {
            let arr = [
                'Summer is winding down, and it\'s time to start thinking about back-to-school necessities. ',
                'For most students and parents alike, this means buying new clothes and supplies, organizing schedules, and preparing for some big changes. '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphSix = () => {
            let arr = [
                '<li>A backpack: Choose one that is comfortable and has enough room to store textbooks, notebooks, and other supplies.</li> ',
                '<li>Stationery: pens, pencils, paper, and other writing supplies.</li> ',
                '<li>School uniforms or clothing: Check with the school to see if there are any dress code requirements and prepare accordingly!</li> '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphSeven = () => {
            let arr = [
                'With a new school year on the horizon, all students must have proper access to school supplies. ',
                'Please join ' + this.props.dealer + ' as we partner with <a class=\'seoLinks\' href=\'https://www.kinf.org/\' target="_blank">Kids in Need Foundation</a> to collect school supplies that will be used by under-resourced children and teachers in Title I schools across the Metro-Atlanta area. ',
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphEight = () => {
            let arr = [
                'School supply donations can be dropped off at any of the 10 conveniently located <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/locations/index.htm\' target="_blank">Hennessy Automobile Companies dealerships</a> around Metro-Atlanta. ',
                'If you are unable to make by one of the dealerships, but would still like to have a hand in making this school year a success for so many students and teachers, we invite you <a class=\'seoLinks\' href=\'https://www.kinf.org/donate/\' target="_blank">donate directly to Kids in Need Foundation</a> and add a note that it is part of Hennessy Automobile Companies Back to School Supply Drive. ',
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphNine = () => {
            let arr = [
                'A clean ' + generateAdverbSix() + ' is a happy ' + generateAdverbSix() + ', and it\'ll make your commute much more pleasant. ',
                'Take some time to vacuum the floors, wipe down the dashboard, and remove any junk left over from ' + generateAdverbTwo() + '! ',
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphTen = () => {
            let arr = [
                'Before hitting the road, make sure <a class=\'seoLinks\' href=' + this.props.serviceApp + ' target="_blank">your ' + generateAdverbSix() + ' has been serviced</a> and is in good working order. ',
                'Doing so will help you ' + generateAdverbThree() + ' surprises (and unwanted expenses) along the way. '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphEleven = () => {
            let arr = [
                'Map out your route in advance and make sure you have a clear understanding of both the roads you\'ll be traveling on your commute and the roads near campus. ',
                'Doing so will help you ' + generateAdverbThree() + ' getting lost, overwhelmed, or taking unnecessary detours. '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphTwelve = () => {
            let arr = [
                'When packing your ' + generateAdverbSix() + ' for the trip back to school, be mindful of how much weight you\'re adding by packing efficiently. ',
                'Believe it or not, the weight of your ' + generateAdverbSix() + ' can impact your gas mileage and handling on the road, and right now we are all looking for ways to increase our vehicle’s gas mileage. '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphThirdteen = () => {
            let arr = [
                'Above all else, <a class=\'seoLinks\' href=\'https://collegepuzzle.stanford.edu/stay-safe-while-driving-7-tips-for-college-students/\' target="_blank">make safety your priority</a> when driving back to school. ',
                'Observe the speed limit, use your best judgment, and do away with distractions! '
            ]
            return shuffle(arr)
        }
        const backToSchoolParagraphFourteen = () => {
            let arr = [
                '<li>Make sure to get your ' + generateAdverbSix() + ' serviced as the season shifts </li>',
                '<li>Calling all parents: accessorize your ' + generateAdverbSix() + ' for the upcoming school year </li>',
                '<li>Calling all parents: stock up on supplies (and consider donating to under-resourced students and teachers at Title I schools through Hennessy’s Back-to-School Supply Drive!) </li>',
                '<li>Consider our five essential automotive tips for new and recurring ' + generateAdverbOne() + ' students </li>',
                '<li>Find the best back-to-school ' + generateAdverbSix() + ' for you </li>'
            ]
            return shuffle(arr)
        }

        const copyContent = () => {
            let x = [
                '<div class=\'contentHeaderContainer\'>\n',
                '<h1 class=\'contentHeader\'>Essential Back-to-School Automotive Tips</h1>\n',
                '<p class=\'contentHeaderParagraph\'>Schedule your appointment online now!</p>\n',
                '<div class=\'contentHeaderButtonContainer\'>\n',
                '<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>\n',
                '<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>\n',
                '</div>\n',
                '</div>\n',
                
                '<p>As ' + generateAdverbTwo() + ' draws to a close and parents, high schoolers, and ' + generateAdverbOne() + ' students alike begin to prepare for a new school year, people often find themselves in search of the best ' + generateAdverbSix() + ' to fit their needs. \n',
                '<p>Whether it\'s a young adult heading off to ' + generateAdverbOne() + ' for the first time or a family upgrading to a larger ' + generateAdverbSix() + ' for the upcoming school year, the back-to-school season is typically one of the most crucial times of the year to reassess – or at the very least, service – your ' + generateAdverbSix() + '.\n',
                '<p>From ' + this.props.dealer + ' to you, here is everything automotive you should consider this back-to-school season!\n',
                '<h2>Switching Seasons </h2> \n',
                '<p>The ' + generateAdverbTwo() + ' can be tough on cars, with long road trips and scorching temperatures taking their toll. As a result, it is crucial to ensure that your <a class=\'seoLinks\' href=' + this.props.serviceApp + ' target="_blank">' + generateAdverbSix() + ' is ready</a> for the transition of seasons. As back-to-school time approaches, be sure to:\n',
                '<ul class=\'seoContentP\'>',
                backToSchoolParagraphOne(),
                '</ul>',
                backToSchoolParagraphTwo(),
                '<h2>Calling All Parents!</h2> \n',
                '<p>Attention, parents: the end of ' + generateAdverbTwo() + ' is quickly approaching, and it\'s time to start getting ready for the upcoming school year!\n',
                '<h3>Accessorize Accordingly</h3>\n',
                backToSchoolParagraphThree(),
                '<ul class=\'seoContentP\'>',
                backToSchoolParagraphFour(),
                '</ul>',
                '<p>With a little preparation and some helpful accessories getting the family ' + generateAdverbSix() + ' ready for back-to-school season can be a breeze!\n',
                '<h3>Stock up on Supplies</h3>\n',
                backToSchoolParagraphFive(),
                '<p>Whether your child is starting kindergarten or headed to ' + generateAdverbOne() + ', they will need a few essential items. Here is a back-to-school checklist of must-haves for any student:\n',
                '<ul class=\'seoContentP\'>',
                backToSchoolParagraphSix(),
                '</ul>',
                backToSchoolParagraphSeven(),
                backToSchoolParagraphEight(),
                '<h2>Off to ' + generateAdverbOne() + '</h2>\n',
                '<p>As that transitional time to part ways from family and head off to ' + generateAdverbOne() + ' draws near, it\'s essential to ensure that your ' + generateAdverbSix() + ' is ready for the journey. Here are five back-to-school automotive tips that will help both upcoming and returning ' + generateAdverbOne() + ' students:\n',
                '<h3>1. Clean it out</h3>\n',
                backToSchoolParagraphNine(),
                '<h3>2. Get it inspected</h3>\n',
                backToSchoolParagraphTen(),
                '<h3>3. Plan your route</h3>\n',
                backToSchoolParagraphEleven(),
                '<h3>4. Pack wisely</h3>\n',
                backToSchoolParagraphTwelve(),
                '<h3>5. Drive safely</h3>\n',
                backToSchoolParagraphThirdteen(),
                '<h2>The Best Back-to-School ' + generateAdverbSix() + ' For You</h2>\n',
                '<p>It doesn’t matter whether you’re looking to buy a bigger ' + generateAdverbSix() + ' for your family, gifting your high schooler or up-and-coming ' + generateAdverbOne() + ' student with their first ' + generateAdverbSix() + ', or making your first big purchase as a young adult. If you’re in the market for a new ' + generateAdverbSix() + ', truck, or SUV this back-to-school season, here are three best practices you\'ll want to keep in mind:\n',
                
                '<h3>Price</h3>\n',
                '<p>Do your research and have a realistic idea of what you can afford monthly. Once you\'ve <a class=\'seoLinks\' href=\'https://www.kbb.com/car-news/10-tips-for-first_time-car-buyers/\' target="_blank">established your budget</a>, you can start narrowing down your options.\n',
                '<h3>Purpose</h3>\n',
                '<p>What are your transportation needs for this new ' + generateAdverbSix() + '? Do you need room for a large family or fuel efficiency for long commutes?\n',
                '<h3>Performance</h3>\n',
                '<p>Always test drive your ' + generateAdverbSix() + ' of interest to ensure it is right for you. After all, this is a substantial investment!\n',
                '<p>So, which ' + generateAdverbSix() + ' is <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">right for you</a>?\n',
                
                '<h3>Parents of School-Age Kids</h3>\n',
                '<p>If you\'re the parent of a grade school student, you’re probably looking for room and reliability above all else. In this case, we suggest the [car make, model] for an easy switch this back-to-school season.\n',
                '<h3>High Schoolers</h3>\n',
                '<p>Whether you’re a parent looking to buy your child a sweet sixteen gift or a student who has been saving up and just earned their license, one’s first ' + generateAdverbSix() + ' is usually not their most glamorous. However, something safe and affordable like the [car make, model] would be an ideal pick here. \n',
                '<h3> ' + generateAdverbOne() + ' Students</h3>\n',
                '<p>When heading off to ' + generateAdverbOne() + ', safety and affordability pair up with fuel efficiency as the most crucial factors to consider when purchasing a ' + generateAdverbSix() + ' for the back-to-school season. We recommend the [car make, model] for any ' + generateAdverbOne() + ' student with a sizable commute.\n',
    
                '<h2>Need a Recap?</h2>\n',
                '<p>Whether you are the parent of a school-aged student, a ' + generateAdverbOne() + ' student headed out on their own for the first time, or somewhere in between, you should now have the tools needed to navigate, dictate, and fulfill your automotive needs this back-to-school season. \n',
                '<p>To recap:\n',
                '<ul class=\'seoContentP\'>',
                backToSchoolParagraphFourteen(),
                '</ul>',
                '<p>At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a new ' + this.props.make + ' this upcoming school year, you can view our full <a class=\'seoLinks\' href=' + this.props.allInventory + ' target="_blank">inventory</a> and test drive your next ' + generateAdverbSix() + ' today. From our family to yours, safe travels!\n',    

                '<style>\n',
                '.contentHeaderContainer {\n',
                this.state.imageUrl === '' ? 'background-image: url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);' : 'background-image: url(' + this.state.imageUrl + ');\n',
                'background-size: cover;\n',
                'height: 400px;\n', 
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                'align-items: center;\n',
                'border-radius: 20px;\n',
                'margin-bottom: 20px;\n',
                '}\n',

                '.contentHeader { \n',
                'color: white;\n',
                'font-size: 50px;\n',
                'margin: 0;\n',
                '}\n', 
    
                '.contentHeaderButtonContainer {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: space-between;\n',
                'align-items: center;\n',
                'width: 450px;\n',
                'font-weight: bold;\n',
                'text-transform: uppercase;\n',
                'color: white;\n',
                'font-family: sans-serif;\n',
                'font-size: 30px;\n',
                'padding: 10px;\n',
                'text-align: center;\n',
                'float: left;\n',
                '}\n',
    
                '.contentHeaderButtons {\n',
                'color: #007FCB;\n',
                'background-color: #fff;\n',
                'border: 3px solid #00324F;\n',
                'border-radius: 16px;\n',
                'font-size: 15px;\n',
                'cursor: pointer;\n',
                'font-weight:bold;\n',
                'padding: 10px 40px;\n',
                'min-width: 25%;\n',
                'text-decoration: none;\n',
                'box-sizing: border-box;\n',
                'transition: all 500ms ease;\n',
                '}\n',
    
                '.contentHeaderButtons:hover {\n',
                'color: #FFFFFF;\n',
                'border: #FFFFFF solid 3px;\n',
                'background:#007FCB;\n',
                '}\n',
    
                '.contentHeaderParagraph {\n',
                'color: white;\n',
                'margin:0px;\n',
                'font-size:16px;\n',
                'text-transform:none;\n',
                'font-weight:300;\n',
                'padding:18px;\n',
                '}\n',
    
                '.seoLinks {\n',
                'color: black;\n',
                'font-weight: bold;\n',
                'text-decoration: none;\n',
                '}\n',
    
                '@media screen and (min-width: 320px) and (max-width: 420px) {\n',
                '.contentHeader {\n',
                'font-size: 20px\n',
                '}\n',
                '.contentHeaderParagraph {\n',
                'font-size: 14px\n',
                '}\n',
                '.contentHeaderButtons {\n',
                'font-size: 9px;\n',
                'padding: 5px;\n',
                'border-radius: 8px;\n',
                '}\n',
                '.contentHeaderContainer {\n',
                'height: 250px;\n',
                '}\n',
                '.contentHeaderButtonContainer {\n',
                'width: 250px;\n',
                '}\n',
                
                '}\n',
                '@media screen and (min-width: 420px) and (max-width: 520px) {\n', 
                '.contentHeader {\n',
                'font-size: 20px\n',
                '}\n',
                '.contentHeaderParagraph {\n',
                'font-size: 14px\n',
                '}\n',
                '.contentHeaderButtons {\n',
                'font-size: 10px;\n',
                'padding: 5px;\n',
                'border-radius: 9px;\n',
                '}\n',
                '.contentHeaderContainer {\n',
                'height: 250px;\n',
                '}\n',
                '.contentHeaderButtonContainer {\n',
                'width: 340px;\n',
                '}\n',
                '}\n',
                '</style>\n',
    
            ]
            return x.join(' ')
        }


        return (
            <div className='content'>
            <hr></hr>
            <p>Title:</p>
            <p><CopyToClipboard text={this.props.year + ' ' + this.props.make + ' ' + this.props.model}><button className='copyBtnTitle'>Copy</button></CopyToClipboard>{this.props.year + ' ' + this.props.make + ' ' + this.props.model}</p>
            <p>Discription:</p>
            <p><CopyToClipboard text={'Find great deals for your Road Trip for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}><button className='copyBtnTitle'>Copy</button></CopyToClipboard>{'Find great deals for your road trip for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}</p>
            <hr></hr>
            <input 
            className='imageInput' 
            placeholder='Update image with url link'
            onChange = {(event) => {
                let text = event.target.value;
                // console.log(text) 
                this.setState({imageUrl: text})
            }}
            ></input>
            <div><CopyToClipboard text={copyContent()}><button className='copyBtnContent'>Copy Content</button></CopyToClipboard></div>
            <div className='contentHeaderContainer'>
                <h1 className='contentHeader'>Essential Back-to-School Automotive Tips </h1>
                <p className='contentHeaderParagraph'>Schedule your appointment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Specials</button></a>
                </div>
            </div>

            <p>{'As ' + generateAdverbTwo() + ' draws to a close and parents, high schoolers, and ' + generateAdverbOne() + ' students alike begin to prepare for a new school year, people often find themselves in search of the best ' + generateAdverbSix() + ' to fit their needs. '}</p>
            <p>{'Whether it\'s a young adult heading off to ' + generateAdverbOne() + ' for the first time or a family upgrading to a larger ' + generateAdverbSix() + ' for the upcoming school year, the back-to-school season is typically one of the most crucial times of the year to reassess – or at the very least, service – your ' + generateAdverbSix() + '.'}</p>
            <p>{'From ' + this.props.dealer + ' to you, here is everything automotive you should consider this back-to-school season!'}</p>
            <h2>{'Switching Seasons'}</h2>
            <p>{'The ' + generateAdverbTwo() + ' can be tough on cars, with long road trips and scorching temperatures taking their toll. As a result, it is crucial to ensure that your <a class=\'seoLinks\' href=' + this.props.serviceApp + ' target="_blank">' + generateAdverbSix() + ' is ready</a> for the transition of seasons. As back-to-school time approaches, be sure to:'}</p>
            {'<ul class=\'seoContentP\'>'}
            {backToSchoolParagraphOne()}
            {'</ul>'}
            {backToSchoolParagraphTwo()}
            <h2>{'Calling All Parents!'}</h2>
            <p>{'Attention, parents: the end of ' + generateAdverbTwo() + ' is quickly approaching, and it\'s time to start getting ready for the upcoming school year!'}</p>
            <h3>{'Accessorize Accordingly'}</h3>
            {backToSchoolParagraphThree()}
            {'<ul class=\'seoContentP\'>'}
            {backToSchoolParagraphFour()}
            {'</ul>'}
            <p>{'With a little preparation and some helpful accessories getting the family ' + generateAdverbSix() + ' ready for back-to-school season can be a breeze!'}</p>
            <h3>{'Stock up on Supplies'}</h3>
            {backToSchoolParagraphFive()}
            <p>{'Whether your child is starting kindergarten or headed to ' + generateAdverbOne() + ', they will need a few essential items. Here is a back-to-school checklist of must-haves for any student:'}</p>
            {'<ul class=\'seoContentP\'>'}
            {backToSchoolParagraphSix()}
            {'</ul>'}
            {backToSchoolParagraphSeven()}
            {backToSchoolParagraphEight()}
            <h2>{'Off to ' + generateAdverbOne()}</h2>
            <p>{'As that transitional time to part ways from family and head off to ' + generateAdverbOne() + ' draws near, it\'s essential to ensure that your ' + generateAdverbSix() + ' is ready for the journey. Here are five back-to-school automotive tips that will help both upcoming and returning ' + generateAdverbOne() + ' students:'}</p>
            <h3>{'1. Clean it out'}</h3>
            {backToSchoolParagraphNine()}
            <h3>{'2. Get it inspected'}</h3>
            {backToSchoolParagraphTen()}
            <h3>{'3. Plan your route'}</h3>
            {backToSchoolParagraphEleven()}
            <h3>{'4. Pack wisely'}</h3>
            {backToSchoolParagraphTwelve()}
            <h3>{'5. Drive safely'}</h3>
            {backToSchoolParagraphThirdteen()}
            <h2>{'The Best Back-to-School ' + generateAdverbSix() + ' For You'}</h2>
            <p>{'It doesn’t matter whether you’re looking to buy a bigger ' + generateAdverbSix() + ' for your family, gifting your high schooler or up-and-coming ' + generateAdverbOne() + ' student with their first ' + generateAdverbSix() + ', or making your first big purchase as a young adult. If you’re in the market for a new ' + generateAdverbSix() + ', truck, or SUV this back-to-school season, here are three best practices you\'ll want to keep in mind:'}</p>
            
            <h3>{'Price'}</h3>
            <p>{'Do your research and have a realistic idea of what you can afford monthly. Once you\'ve <a class=\'seoLinks\' href=\'https://www.kbb.com/car-news/10-tips-for-first_time-car-buyers/\' target="_blank">established your budget</a>, you can start narrowing down your options.'}</p>
            <h3>{'Purpose'}</h3>
            <p>{'What are your transportation needs for this new ' + generateAdverbSix() + '? Do you need room for a large family or fuel efficiency for long commutes?'}</p>
            <h3>{'Performance'}</h3>
            <p>{'Always test drive your ' + generateAdverbSix() + ' of interest to ensure it is right for you. After all, this is a substantial investment!'}</p>
            <p>{'So, which ' + generateAdverbSix() + ' is <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">right for you</a>?'}</p>
            
            <h3>{'Parents of School-Age Kids'}</h3>
            <p>{'If you\'re the parent of a grade school student, you’re probably looking for room and reliability above all else. In this case, we suggest the [car make, model] for an easy switch this back-to-school season.'}</p>
            <h3>{'High Schoolers'}</h3>
            <p>{'Whether you’re a parent looking to buy your child a sweet sixteen gift or a student who has been saving up and just earned their license, one’s first ' + generateAdverbSix() + ' is usually not their most glamorous. However, something safe and affordable like the [car make, model] would be an ideal pick here. '}</p>
            <h3>{generateAdverbOne() + ' Students'}</h3>
            <p>{'When heading off to ' + generateAdverbOne() + ', safety and affordability pair up with fuel efficiency as the most crucial factors to consider when purchasing a ' + generateAdverbSix() + ' for the back-to-school season. We recommend the [car make, model] for any ' + generateAdverbOne() + ' student with a sizable commute.'}</p>

            <h2>{'Need a Recap?'}</h2>
            <p>{'Whether you are the parent of a school-aged student, a ' + generateAdverbOne() + ' student headed out on their own for the first time, or somewhere in between, you should now have the tools needed to navigate, dictate, and fulfill your automotive needs this back-to-school season. '}</p>
            <p>{'To recap:'}</p>
            {'<ul class=\'seoContentP\'>'}
            {backToSchoolParagraphFourteen()}
            {'</ul>'}
            <p>{'At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a new ' + this.props.make + ' this upcoming school year, you can view our full <a class=\'seoLinks\' href=' + this.props.allInventory + ' target="_blank">inventory</a> and test drive your next ' + generateAdverbSix() + ' today. From our family to yours, safe travels!'}</p>
            </div>
        );
    }
}

export default BackToSchool;
