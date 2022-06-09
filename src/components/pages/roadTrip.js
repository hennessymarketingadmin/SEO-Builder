import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class RoadTrip extends Component {

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

        // const suffleParagraphs = (p) => {
        //     let length = p.length
        //     let index = Math.floor(Math.random() * length)
        //     return p[index]
        // }

        const generateAdverbOne = () => {
            let words = ['car', 'vehicle', 'motor vehicle', 'automobile']
            return shuffleAdverb(words)
        }

        const generateAdverbTwo = () => {
            let words = ['road trip', 'adventure', 'vacation', 'summer vacation', 'time off']
            return shuffleAdverb(words)
        }

        const generateAdverbThree = () => {
            let words = ['careful', 'deliberately', 'very careful', 'carefully', 'thoroughly', 'thoughtfully']
            return shuffleAdverb(words)
        }

        const generateAdverbFour = () => {
            let words = ['enjoyable', 'enjoyment', 'enjoy', 'appreciate', 'love', 'relish']
            return shuffleAdverb(words)
        }

        const generateAdverbFive = () => {
            let words = ['destination', 'route',]
            return shuffleAdverb(words)
        }

        const generateAdverbSix = () => {
            let words = ['many', 'a lot', 'plenty', 'more', 'a lot more', 'extra', 'many more']
            return shuffleAdverb(words)
        }

        const generateAdverbSeven = () => {
            let words = ['important', 'crucial', 'very important', 'very crucial', 'urgent', 'very urgent', 'vital', 'essential', 'very essential']
            return shuffleAdverb(words)
        }



        const roadTripParagraphOne = () => {
            let arr = [
                'Are you looking to embark on an epic family ' + generateAdverbTwo() + ' this summer? ',
                'If you are, there are a few questions that stand between you and the open road ',
                'Where will you go? When will you go? What will you do along the way? Can your vehicle take the wear? Can you afford it? '
            ]
            return shuffle(arr)
        }
        const roadTripParagraphTwo = () => {
            let arr = [
                'The most successful road trips are a ' + generateAdverbThree() + ' combination of well-made plans and spur-of-the-moment decisions. ',
                'You need to know where you\'re going and what your ' + this.props.make + ' ' + this.props.model + '  can handle, but you also need to be open to new experiences. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphThree = () => {
            let arr = [

            ]
            return shuffle(arr)
        }
        const roadTripParagraphFour = () => {
            let arr = [
                'If you have young kids, for instance, you might want to stay closer to home. ',
                'If you\'re on a budget, you might want to choose a ' + generateAdverbFive() + ' that doesn\'t require ' + generateAdverbSix() + ' of driving. ',
                'And if you\'re looking for adventure, you might want to choose a ' + generateAdverbFive() + ' that will take you off the beaten path. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphFive = () => {
            let arr = [
                'Once you\'ve decided on a ' + generateAdverbFive() + ', it\'s time to start planning your ' + generateAdverbFive() + '. ',
                'Having the perfect ' + generateAdverbFive() + ' laid out is ' + generateAdverbSeven() + ' not only for the enjoyment of the ride, but for practicality as well. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphEight = () => {
            let arr = [
                'If you\'re seeking ' + generateAdverbSix() + ' of a backroads travel experience, be sure to plan your ' + generateAdverbFive() + ' thoughtfully in advance. ',
                'For instance, will this ' + generateAdverbFive() + ' require specialized accessories that can be added to your ' + this.props.make + ' ' + this.props.model + '  prior to departure? ',
                'If so, you can easily contact one of our accessories teams to learn the best options for you. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphNine = () => {
            let arr = [
                'The most ' + generateAdverbSeven() + ' part of any ' + generateAdverbTwo() + ' is the planning stage. ',
                'You need to decide on a ' + generateAdverbFive() + ' and map out your ' + generateAdverbFive() + ', of course, but you also need to make reservations for hotels or camping spots and figure out what along-the-way activities you’ll need to budget for. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphTen = () => {
            let arr = [
                'Research suggests that 42% of <a class=\'seoLinks\' href=\'https://www.citizensbank.com/learning/surprising-road-trip-facts.aspx\' target="_blank"> ' + generateAdverbTwo() + ' </a> is planned between April and June, while only 28% is planned between January and March. ',
                'In other words, beat the rush and get your ' + generateAdverbTwo() + ' planning done in advance. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphEleven = () => {
            let arr = [
                'Don’t forget to factor in "smaller" costs that build quickly like gas, food, and even souvenirs. ',
                'After all, it\'s always better to over-budget and have money left over than to run out of necessary funds halfway through your  ' + generateAdverbTwo() + '. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphTwelve = () => {
            let arr = [
                'This might seem like ' + generateAdverbSix() + ' of work, but it’s worth the effort to avoid any stressful surprises down the road. ',
                'Online <a class=\'seoLinks\' href=\'https://roadtrippers.com/\' target="_blank"> ' + generateAdverbTwo() + ' planners </a> are wonderful for minimizing the workload! ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphThirteen = () => {
            let arr = [
                generateAdverbOne() + ' care is ' + generateAdverbSeven() + ', especially when you\'re about to embark on a ' + generateAdverbTwo() + '. ',
                'The last thing you want is to be stranded on the side of the road because of a flat tire or empty gas tank. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphFourteen = () => {
            let arr = [
                '<li>Get an oil change if needed</li> ',
                '<li>Check your fluids and top off if needed</li> ',
                '<li>Make sure your tires are properly inflated</li> ',
                '<li>Make sure your tires are rotated</li> ',
                '<li>Make sure your wheels are aligned</li> ',
                '<li>Clean out your ' + this.props.make + ' ' + this.props.model + ' interior</li> ',
            ]
            return shuffle(arr, 'list')
        }
        const roadTripParagraphFifteen = () => {
            let arr = [
                generateAdverbFour() + ' your ' + generateAdverbTwo() + ', but make sure that you stay on top of your summer ' + this.props.make + ' ' + this.props.model + ' maintenance! We would be happy to ensure the safety of your ' + this.props.make + ' ' + this.props.model + ' maintenance at' + this.props.dealer + ' before you head out. ',
                'Drivers in need of a service appointment to get their ' + this.props.make + ' ' + this.props.model + ' ready for a summer ' + generateAdverbTwo() + ' are encouraged to use our <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank"> online service scheduler </a> or contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphSixteen = () => {
            let arr = [
                'Another ' + generateAdverbSeven() + ' step in preparing for your ' + generateAdverbTwo() + ' is packing. ',
                'This may seem like a no brainer, but you would be surprised at how ' + generateAdverbSix() + ' people pack everything but essentials. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphSeventeen = () => {
            let arr = [
                '<li>snacks and drinks for the drive</li> ',
                '<li>a small first-aid kit</li> ',
                '<li>a phone charger, or two</li> ',
                '<li>' + generateAdverbSix() + ' of water</li> ',
                '<li>sunglasses</li> ',
                '<li>sunscreen (it\'s probably going to be hot)!</li> ',
            ]
            return shuffle(arr, 'list')
        }
        const roadTripParagraphEighteen = () => {
            let arr = [
                'In addition, be sure to pack light. ',
                'The less you have, the ' + generateAdverbSix() + ' mobile you are. ',
                'This is especially true if you are going on a cross-country ' + generateAdverbTwo() + ' and need to be on-the-go for a long period of time. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphNineteen = () => {
            let arr = [
                'In order to make the perfect summer ' + generateAdverbTwo() + ' playlist, you have to pick music that everyone will ' + generateAdverbFour() + ' and that keeps the energy up. ',
                'We recommend including a mix of old classics, iconic ' + generateAdverbTwo() + ' songs, and some new hits. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphTwenty = () => {
            let arr = [
                'While ' + generateAdverbThree() + ' planning and preparation are ' + generateAdverbSeven() + ' to having a successful summer ' + generateAdverbTwo() + ', it is ' + generateAdverbSeven() + ' to be spontaneous. ',
                'Play silly ' + generateAdverbTwo() + ' games to pass the time. ',
                'If you see a sign for an interesting attraction or a detour that looks like it could be fun, take it! ',
                'After all, the best thing about taking a ' + generateAdverbTwo() + ' is the adventure. ',
                'You are making memories that will last a lifetime. ',
            ]
            return shuffle(arr)
        }
        const roadTripParagraphTwentyOne = () => {
            let arr = [
                '<li>Choosing the right ' + generateAdverbFive() + ' for you</li> ',
                '<li>Planning your journey to that ' + generateAdverbFive() + ' ' + generateAdverbThree() + '</li> ',
                '<li>Budgeting and booking hotels ahead</li> ',
                '<li>Preparing your ' + this.props.make + ' ' + this.props.model + ' for the drive (' + generateAdverbOne() + ' care matters!)</li> ',
                '<li>Packing smart and light</li> ',
                '<li>Compiling a playlist of ' + generateAdverbTwo() + ' songs</li> ',
                '<li>Remembering to just ' + generateAdverbFour() + ' the ride</li> ',
            ]
            return shuffle(arr, 'list')
        }
        const roadTripParagraphTwentyTwo = () => {
            let arr = [
                'At ' + this.props.dealer + ', we truly believe in treating our customers like family. ',
                'From our family to yours, safe travels this summer! ',
            ]
            return shuffle(arr)
        }





        const copyContent = () => {
            let x = [
                '<div class=\'contentHeaderContainer\'>\n',
                '<h1 class=\'contentHeader\'>7 Tips and Tricks for the Best Summer Road Trip</h1>\n',
                '<p class=\'contentHeaderParagraph\'>Schedule your Road Trip appointment online now!</p>\n',
                '<div class=\'contentHeaderButtonContainer\'>\n',
                '<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>\n',
                '<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>\n',
                '</div>\n',
                '</div>\n',
                
                roadTripParagraphOne(),
                roadTripParagraphTwo(),
                '<p>Whether you want to keep it green with an east coast ' + generateAdverbTwo() + ' or head to the deserts out west, here are seven tips and tricks from us here at ' + this.props.dealer + ' to make sure your next ' + generateAdverbTwo() + ' is safe, ' + generateAdverbFour() + ' and economical.</p>\n',
                '<h2>1. Choose your ' + generateAdverbFive() + ' wisely</h2>\n',
                '<p>So ' + generateAdverbSix() + ' choices! To narrow it down, there are a few things you must consider when brainstorming ' + generateAdverbTwo() + ' ideas.</p>\n',
                roadTripParagraphFour(),
                '<p>Wherever you choose to travel this summer, make sure to do your research ahead of time so you know what to expect and which cool sites to hit along the way!</p>\n',
                '<h2>2. Plan your ' + generateAdverbFive() + ' ' + generateAdverbThree() + '</h2>\n',
                roadTripParagraphFive(),
                '<p>If driving cross country, you will want to research any historical landmarks or famous attractions that might be worth stopping along the way to ' + generateAdverbFour() + ' (check out this list of <a class=\'seoLinks\' href=\'https://discoveratlanta.com/things-to-do/attractions/must-see/\' target="_blank">popular Atlanta attractions</a>).</p>\n',
                '<p>If you\'re planning a family ' + generateAdverbTwo() + ' with kids, be sure to factor in ' + generateAdverbSix() + ' of rest stops and opportunities for them to burn off energy.</p>\n',
                roadTripParagraphEight(),
                '<p>A great ' + generateAdverbTwo() + ' is ' + generateAdverbSix() + ' about the journey than the ' + generateAdverbFive() + ', so plan accordingly!</p>\n',
                '<h2>3. Budget and book ahead</h2>\n',
                roadTripParagraphNine(),
                '<h3>Timing matters</h3>\n',
                '<p>More often than not, you\'re going to find better hotel and attraction prices the earlier you book.</p>\n',
                roadTripParagraphTen(),
                '<h3>Small Costs are a big deal</h3>\n',
                roadTripParagraphEleven(),
                roadTripParagraphTwelve(),
                '<h2>4. Get your ' + generateAdverbOne() + ' ready</h2>\n',
                roadTripParagraphThirteen(),
                '<p>Both distance and terrain make a heavy impact on just how prepared your ' + this.props.make + ' ' + this.props.model + ' must be.</p>\n',
                '<p>Before you hit the road, we recommend the following automotive services:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripParagraphFourteen(),
                '</ul>\n',
                roadTripParagraphFifteen(),
                '<h2>5. Pack smart, pack less</h2>\n',
                roadTripParagraphSixteen(),
                '<p>When packing for your ' + generateAdverbTwo() + ', be sure to bring along the following essentials:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripParagraphSeventeen(),
                '</ul>\n',
                roadTripParagraphEighteen(),
                '<h2>6. Make the perfect playlist</h2>\n',
                '<p>A  ' + generateAdverbTwo() + ' without music is like a PB&J without the jelly - just not as good.</p>\n',
                roadTripParagraphNineteen(),
                '<p>If you’re going on a family ' + generateAdverbTwo() + ', make a game out of it and have everyone pitch in to create the playlist.</p>\n',
                '<h2>7. Enjoy the ride!</h2>\n',
                roadTripParagraphTwenty(),
                '<h2>Need a Recap?</h2>\n',
                '<p>By this point, you should have the tools needed to set off on one awesome summer  ' + generateAdverbTwo() + '. To recap, our essential tips and tricks include:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripParagraphTwentyOne(),
                '</ul>\n',
                roadTripParagraphTwentyTwo(),



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
                <h1 className='contentHeader'>7 Tips and Tricks for the Best Summer Road Trip</h1>
                <p className='contentHeaderParagraph'>Schedule your wheel alignment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Specials</button></a>
                </div>
            </div>
                {roadTripParagraphOne()}
                {roadTripParagraphTwo()}
                <p>{'Whether you want to keep it green with an east coast ' + generateAdverbTwo() + ' or head to the deserts out west, here are seven tips and tricks from us here at ' + this.props.dealer + ' to make sure your next road trip is safe, ' + generateAdverbFour() + ' and economical.'}</p>
                <h2>{'1. Choose your ' + generateAdverbFive() + ' wisely'}</h2>
                <p>{'So ' + generateAdverbSix() + ' choices! To narrow it down, there are a few things you must consider when brainstorming ' + generateAdverbTwo() + ' ideas.'}</p>
                {roadTripParagraphFour()}
                <p>{'Wherever you choose to travel this summer, make sure to do your research ahead of time so you know what to expect and which cool sites to hit along the way!'}</p>
                <h2>{'2. Plan your ' + generateAdverbFive() + ' ' + generateAdverbThree() }</h2>
                {roadTripParagraphFive()}
                <p>{'If driving cross country, you will want to research any historical landmarks or famous attractions that might be worth stopping along the way to ' + generateAdverbFour() + ' (check out this list of <a href=\'https://discoveratlanta.com/things-to-do/attractions/must-see/\' target="_blank">popular Atlanta attractions</a>).'}</p>
                <p>{'If you\'re planning a family ' + generateAdverbTwo() + ' with kids, be sure to factor in ' + generateAdverbSix() + ' of rest stops and opportunities for them to burn off energy.'}</p>
                {roadTripParagraphEight()}
                <p>{'A great ' + generateAdverbTwo() + ' is ' + generateAdverbSix() + ' about the journey than the ' + generateAdverbFive() + ', so plan accordingly!'}</p>
                <h2>{'3. Budget and book ahead'}</h2>
                {roadTripParagraphNine()}
                <h3>{'Timing matters'}</h3>
                <p>{'More often than not, you\'re going to find better hotel and attraction prices the earlier you book.'}</p>
                {roadTripParagraphTen()}
                <h3>{'Small Costs are a big deal'}</h3>
                {roadTripParagraphEleven()}
                {roadTripParagraphTwelve()}
                <h2>{'4. Get your ' + generateAdverbOne() + ' ready'}</h2>
                {roadTripParagraphThirteen()}
                <p>{'Both distance and terrain make a heavy impact on just how prepared your ' + this.props.make + ' ' + this.props.model + ' must be.'}</p>
                <p>{'Before you hit the road, we recommend the following automotive services:'}</p>
                {'<ul class=\'seoContentP\'>'}
                {roadTripParagraphFourteen()}
                {'</ul>'}
                {roadTripParagraphFifteen()}
                <h2>{'5. Pack smart, pack less'}</h2>
                {roadTripParagraphSixteen()}
                <p>{'When packing for your summer ' + generateAdverbTwo() + ', be sure to bring along the following essentials:'}</p>
                {'<ul class=\'seoContentP\'>'}
                {roadTripParagraphSeventeen()}
                {'</ul>'}
                {roadTripParagraphEighteen()}
                <h2>{'6. Make the perfect playlist'}</h2>
                <p>{'A ' + generateAdverbTwo() + ' without music is like a PB&J without the jelly - just not as good.'}</p>
                {roadTripParagraphNineteen()}
                <p>{'If you’re going on a family ' + generateAdverbTwo() + ', make a game out of it and have everyone pitch in to create the playlist.'}</p>
                <h2>{'7. Enjoy the ride!'}</h2>
                {roadTripParagraphTwenty()}
                <h2>{'Need a Recap?'}</h2>
                <p>{'By this point, you should have the tools needed to set off on one awesome ' + generateAdverbTwo() + '. To recap, our essential tips and tricks include:'}</p>
                {'<ul class=\'seoContentP\'>'}
                {roadTripParagraphTwentyOne()}
                {'</ul>'}
                {roadTripParagraphTwentyTwo()}
            </div>
        );
    }
}

export default RoadTrip;