import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class RoadTripLocations extends Component {

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
            let words = ['excellent', 'great', 'good', 'amazing', 'outstanding', 'fun', 'creative', 'entertaining']
            return shuffleAdverb(words)
        }

        const generateAdverbTwo = () => {
            let words = ['plenty', 'a lot', 'lots', 'a good deal']
            return shuffleAdverb(words)
        }

        const generateAdverbThree = () => {
            let words = ['road trip', 'summer road trip', 'vacation', 'summer vacation', 'summer break', 'journey', 'adventure', 'summer adventure']
            return shuffleAdverb(words)
        }

        const generateAdverbFour = () => {
            let words = ['perfect', 'ideal', 'amazing', 'excellent']
            return shuffleAdverb(words)
        }

        const generateAdverbFive = () => {
            let words = ['long', 'very long', 'lengthy', 'tedious', 'boring', 'endless']
            return shuffleAdverb(words)
        }

        const generateAdverbSix = () => {
            let words = ['vehicle', 'car']
            return shuffleAdverb(words)
        }

        const generateAdverbSeven = () => {
            let words = []
            return shuffleAdverb(words)
        }

        const roadTripGamesLocationsParagraphOne = () => {
            let arr = [
                'The Blue Ridge Mountains deliver stunning views, daring drives, and ' + generateAdverbTwo() + ' of activities for the whole family. ',
                'On the contrary, if you\'re looking for a more relaxed ' + generateAdverbThree() + ', head to one of Georgia\'s coastal towns like Tybee Island. ',
                'And if you’re looking for a new experience entirely, consider driving way down to the Okefenokee Swamp. ',
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphTwo = () => {
            let arr = [
                'From the mountains up north to the Atlantic coast, there are endless possibilities for ' + generateAdverbThree() + ' in Georgia. ',
                'No matter where you go in this versatile southern state, choosing the right ' + generateAdverbSix() + ' for the drive and ensuring proper maintenance for that ' + generateAdverbSix() + ' before heading out on your ' + generateAdverbThree() + ' is crucial. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphThree = () => {
            let arr = [
                'Located a few hours from Atlanta at the Georgia/Tennessee border; this state park is a ' + generateAdverbOne() + ' day trip getaway! The drive up is beautiful, and the surrounding mountain views from the top of the canyon are breathtaking. ',
                'There are ' + generateAdverbTwo() + ' of hiking and biking trails to explore, waterfalls to view, and even a seasonal swimming hole. ',
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphFour = () => {
            let arr = [
                'Looking to extend your trip? The cooler nights make Cloudland Canyon a ' + generateAdverbOne() + ' place to camp. ',
                'Several cabins are also available for rent so the ' + generateAdverbOne() + ' doesn’t have to stop on day one. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphFive = () => {
            let arr = [
                'Nestled in the Appalachian Mountains, this picturesque travel spot offers stunning views of the surrounding North Georgia countryside. ',
                'Thanks to its elevation, Brasstown Bald is also one of the coolest spots in this southern state to visit during the summer, making it a ' + generateAdverbOne() + ' escape from the heat. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphSix = () => {
            let arr = [
                'While any ' + generateAdverbSix() + ' can make the journey to Brasstown Bald, a four-wheel drive SUV or truck would be best suited for tackling the winding mountain roads. ',
                'And with ' + generateAdverbTwo() + ' of hiking trails and picnic spots to explore, there is no shortage of things to do once you reach your destination. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphSeven = () => {
            let arr = [
                'This historically and culturally-rich city has something for everyone, whether you\'re looking for a lively music scene, delicious food, or simply some ' + generateAdverbOne() + ' old-fashioned southern hospitality. ',
                'You can enjoy a family day at the famous Georgia Aquarium or spend a quiet afternoon at the High Museum of Art (check out Trip Advisor’s list of our <a class=\'seoLinks\' href=\'https://www.tripadvisor.com/Attractions-g60898-Activities-Atlanta_Georgia.html\' target="_blank">favorite Atlanta attractions</a>). '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphEight = () => {
            let arr = [
                'If you\'re planning on doing a lot of driving, then a comfortable sedan would be a ' + generateAdverbOne() + ' choice. ',
                'A smaller ' + generateAdverbSix() + ' would work fine if you\'re primarily using public transportation. ',
                'And if you\'re traveling with a group of people, then a compact SUV might be the best option. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphNine = () => {
            let arr = [
                'This man-made wonder resulted from farming practices in the 1800s that led to extreme erosion. ',
                'Visitors can hike through the Mars-like canyon, camp overnight, and even go fishing in the creek that runs through it. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphTen = () => {
            let arr = [
                'Taking a ' + generateAdverbThree() + ' here in an RV would be ' + generateAdverbFour() + ' because there are numerous campgrounds in the area with full hookups. ',
                'If you don’t have an RV, we suggest an SUV that can best tackle dirt and gravel roads. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphEleven = () => {
            let arr = [
                'There are several historical sites on the island to hit along the way, including the Tybee Island Light Station and Fort Pulaski National Monument. ',
                'Tybee Island is also home to various wildlife, including dolphins, loggerhead turtles, and ospreys. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphTwelve = () => {
            let arr = [
                'The refuge is home to an array of wildlife, including alligators, red-cockaded woodpeckers, and swallow-tailed kites. ',
                'In addition, it offers a variety of activities such as canoeing, hiking, and fishing. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphThirdteen = () => {
            let arr = [
                'Plus, there\'s no need to rough it on this ' + generateAdverbThree() + '. ',
                'Plenty of comfortable camping spots and lodges are scattered throughout the refuge, and a paved, 7-mile <a class=\'seoLinks\' href=\'https://visittheswamp.com/\' target="_blank">Auto Tour Route</a> makes the journey relatively easy for any ' + generateAdverbSix() + '. '
            ]
            return shuffle(arr)
        }
        const roadTripGamesLocationsParagraphFourteen = () => {
            let arr = [
                '<li>Cloudland Canyon State Park</li>',
                '<li>Brasstown Bald in the Blue Ridge Mountains</li>',
                '<li>Downtown Atlanta (because, of course)</li>',
                '<li>Providence Canyon (also known as the Little Grand Canyon)</li>',
                '<li>Tybee Island</li>',
                '<li>Okefenokee National Wildlife Refuge</li>'
            ]
            return shuffle(arr)
        }

        const copyContent = () => {
            let x = [
                '<div class=\'contentHeaderContainer\'>\n',
                '<h1 class=\'contentHeader\'>6 Must See Road Trip Spots in Georgia This Summer </h1>\n',
                '<p class=\'contentHeaderParagraph\'>Schedule your Road Trip appointment online now!</p>\n',
                '<div class=\'contentHeaderButtonContainer\'>\n',
                '<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>\n',
                '<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>\n',
                '</div>\n',
                '</div>\n',
                
                '<p>Summer is the ' + generateAdverbFour() + ' time to hit the open road and explore everything that the state of Georgia has to offer. </p>\n',
                roadTripGamesLocationsParagraphOne(),
                roadTripGamesLocationsParagraphTwo(),
                '<p>From ' + this.props.dealer + ' to you, here are 6 of our favorite Georgia ' + generateAdverbThree() + ' destinations (and our suggested ' + generateAdverbSix() + ' for each!) </p>\n',
                '<h2>Cloudland Canyon State Park</h2>\n',
                '<p>If you’re yearning for some elevation, consider marking Cloudland Canyon State Park on the map as a destination to hit this summer. </p>\n',
                roadTripGamesLocationsParagraphThree(),
                roadTripGamesLocationsParagraphFour(),
                '<p>For this ' + generateAdverbThree() + ', we suggest taking a ' + generateAdverbSix() + ' that has ' + generateAdverbTwo() + ' of space for all your gear and can tackle mild to moderate mountain roads. </p>\n',
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p>\n',
                '<p>Whatever kind of ' + generateAdverbSix() + ' you choose to take, Cloudland Canyon is a great place to escape the summer heat and enjoy some time in nature without committing to an overly-strenuous journey!</p>\n',
                '<h2>Brasstown Bald</h2>\n',
                '<p>Brasstown Bald in the heart of Blue Ridge is hard to beat when it comes to quintessential ' + generateAdverbThree() + ' destinations.</p>\n',
                roadTripGamesLocationsParagraphFive(),
                roadTripGamesLocationsParagraphSix(),
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p>\n',
                '<p>If you\'re looking for an iconic location to hit during your ' + generateAdverbThree() + ' in Georgia this summer, be sure to put Brasstown Bald at the top of your list.</p>\n',
                '<h2>Downtown Atlanta</h2>\n',
                '<p>When it comes to ' + generateAdverbOne() + ' things to do in Atlanta, the possibilities are endless. </p>\n',
                roadTripGamesLocationsParagraphSeven(),
                '<p>As for which ' + generateAdverbSix() + ' to take on a ' + generateAdverbThree() + ' to the city, that depends on a few factors.</p>\n',
                roadTripGamesLocationsParagraphEight(),
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p>\n',
                '<p>No matter what ' + generateAdverbSix() + ' you choose, Atlanta is sure to be an exciting ' + generateAdverbThree() + ' destination for everyone in your group!</p>\n',
                '<h2>The Little Grand Canyon</h2>\n',
                '<p>Many ' + generateAdverbThree() + ' destinations across the country are worth exploring, but few are as unique as Providence Canyon - the Little Grand Canyon - in Georgia. </p>\n',
                roadTripGamesLocationsParagraphNine(),
                roadTripGamesLocationsParagraphTen(),
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p>\n',
                '<p>With its sandy trails and stunning, otherworldly views, Providence Canyon is a ' + generateAdverbThree() + ' destination that you will not want to miss.</p>\n',
                '<h2>Tybee Island</h2>\n',
                '<p>Though Tybee Island is only about 20 miles outside Savannah, it feels a world away with its pristine beaches and lush vegetation. </p>\n',
                roadTripGamesLocationsParagraphEleven(),
                '<p>Because this destination only requires a relatively smooth drive to the beach (but ' + generateAdverbTwo() + ' of room to store beach gear and coolers), an SUV or minivan might be ' + generateAdverbFour() + '.</p>\n',
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p>\n',
                '<p>Geographical uniqueness and biological diversity make for endless fun things to do on Tybee Island this summer! </p>\n',
                '<h2>Okefenokee National Wildlife Refuge</h2>\n',
                '<p>As one of the largest freshwater marshes in North America, Okefenokee National Wildlife Refuge at Georgia’s southernmost border is a great ' + generateAdverbThree() + ' destination for nature lovers and road trippers alike. </p>\n',
                roadTripGamesLocationsParagraphTwelve(),
                roadTripGamesLocationsParagraphThirdteen(),
                '<p>That being said, a four-wheel drive SUV or truck would be ' + generateAdverbFour() + ' for tackling any muddy roads or large puddles of water you may come across, and the extra height might come in handy for spotting wildlife along the way. </p>\n',
                '<p>Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.</p> \n',
                '<p>No Georgia ' + generateAdverbThree() + ' in the summertime is complete without heading as far south as you can get to the Okefenokee Swamp! Just make sure your ' + generateAdverbSix() + ' is ready for the ride.</p>\n',
                '<h2>Need a Recap?</h2>\n',
                '<p>From the mountains up north to the beaches and swamplands down south, the beautiful state of Georgia offers endless opportunities for the ' + generateAdverbFour() + ' ' + generateAdverbThree() + '. By now, you should have a top-to-bottom list of six iconic Georgia ' + generateAdverbThree() + ' destinations to hit this summer:</p>\n',
                roadTripGamesLocationsParagraphFourteen(),
                '<p>Whether you’re looking to go offroading, travel compactly through the city, or cruise calmly down to the shoreline, there is sure to be a destination on this list for you and your family (and an ' + generateAdverbFour() + ' ' + generateAdverbSix() + ' to match)!</p>\n',
                '<p>At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a  ' + this.props.make + ' to take on your ' + generateAdverbThree() + ', you can view our <a class=\'seoLinks\' href=\'tel:' + this.props.allInventory + '\' target="_blank">inventory</a> and <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">Test Drive</a> today. From our family to yours, safe travels this summer!</p>\n',
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
                <h1 className='contentHeader'>6 Must See Road Trip Spots in Georgia This Summer </h1>
                <p className='contentHeaderParagraph'>Schedule your Road Trip appointment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Specials</button></a>
                </div>
            </div>

            <p>{'Summer is the ' + generateAdverbFour() + ' time to hit the open road and explore everything that the state of Georgia has to offer. '}</p>
            {roadTripGamesLocationsParagraphOne()}
            {roadTripGamesLocationsParagraphTwo()}
            <p>{'From ' + this.props.dealer + ' to you, here are 6 of our favorite Georgia ' + generateAdverbThree() + ' destinations (and our suggested ' + generateAdverbSix() + ' for each!) '}</p>
            <h2>{'Cloudland Canyon State Park'}</h2>
            <p>{'If you’re yearning for some elevation, consider marking Cloudland Canyon State Park on the map as a destination to hit this summer. '}</p>
            {roadTripGamesLocationsParagraphThree()}
            {roadTripGamesLocationsParagraphFour()}
            <p>{'For this ' + generateAdverbThree() + ', we suggest taking a ' + generateAdverbSix() + ' that has ' + generateAdverbTwo() + ' of space for all your gear and can tackle mild to moderate mountain roads. '}</p>
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p>
            <p>{'Whatever kind of ' + generateAdverbSix() + ' you choose to take, Cloudland Canyon is a great place to escape the summer heat and enjoy some time in nature without committing to an overly-strenuous journey!'}</p>
            <h2>{'Brasstown Bald'}</h2>
            <p>{'Brasstown Bald in the heart of Blue Ridge is hard to beat when it comes to quintessential ' + generateAdverbThree() + ' destinations.'}</p>
            {roadTripGamesLocationsParagraphFive()}
            {roadTripGamesLocationsParagraphSix()}
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p>
            <p>{'If you\'re looking for an iconic location to hit during your ' + generateAdverbThree() + ' in Georgia this summer, be sure to put Brasstown Bald at the top of your list.'}</p>
            <h2>{'Downtown Atlanta'}</h2>
            <p>{'When it comes to ' + generateAdverbOne() + ' things to do in Atlanta, the possibilities are endless. '}</p>
            {roadTripGamesLocationsParagraphSeven()}
            <p>{'As for which ' + generateAdverbSix() + ' to take on a ' + generateAdverbThree() + ' to the city, that depends on a few factors.'}</p>
            {roadTripGamesLocationsParagraphEight()}
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p>
            <p>{'No matter what ' + generateAdverbSix() + ' you choose, Atlanta is sure to be an exciting ' + generateAdverbThree() + ' destination for everyone in your group!'}</p>
            <h2>{'The Little Grand Canyon'}</h2>
            <p>{'Many ' + generateAdverbThree() + ' destinations across the country are worth exploring, but few are as unique as Providence Canyon - the Little Grand Canyon - in Georgia. '}</p>
            {roadTripGamesLocationsParagraphNine()}
            {roadTripGamesLocationsParagraphTen()}
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p>
            <p>{'With its sandy trails and stunning, otherworldly views, Providence Canyon is a ' + generateAdverbThree() + ' destination that you will not want to miss.'}</p>
            <h2>{'Tybee Island'}</h2>
            <p>{'Though Tybee Island is only about 20 miles outside Savannah, it feels a world away with its pristine beaches and lush vegetation. '}</p>
            {roadTripGamesLocationsParagraphEleven()}
            <p>{'Because this destination only requires a relatively smooth drive to the beach (but ' + generateAdverbTwo() + ' of room to store beach gear and coolers), an SUV or minivan might be ' + generateAdverbFour() + '.'}</p>
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p>
            <p>{'Geographical uniqueness and biological diversity make for endless fun things to do on Tybee Island this summer! '}</p>
            <h2>{'Okefenokee National Wildlife Refuge'}</h2>
            <p>{'As one of the largest freshwater marshes in North America, Okefenokee National Wildlife Refuge at Georgia’s southernmost border is a great ' + generateAdverbThree() + ' destination for nature lovers and road trippers alike. '}</p>
            {roadTripGamesLocationsParagraphTwelve()}
            {roadTripGamesLocationsParagraphThirdteen()}
            <p>{'That being said, a four-wheel drive SUV or truck would be ' + generateAdverbFour() + ' for tackling any muddy roads or large puddles of water you may come across, and the extra height might come in handy for spotting wildlife along the way. '}</p>
            <p>{'Our pick:  <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">' + this.props.make + ' ' + this.props.model + '</a>.'}</p> 
            <p>{'No Georgia ' + generateAdverbThree() + ' in the summertime is complete without heading as far south as you can get to the Okefenokee Swamp! Just make sure your ' + generateAdverbSix() + ' is ready for the ride.'}</p>
            <h2>{'Need a Recap?'}</h2>
            <p>{'From the mountains up north to the beaches and swamplands down south, the beautiful state of Georgia offers endless opportunities for the ' + generateAdverbFour() + ' ' + generateAdverbThree() + '. By now, you should have a top-to-bottom list of six iconic Georgia ' + generateAdverbThree() + ' destinations to hit this summer:'}</p>
            {roadTripGamesLocationsParagraphFourteen()}
            <p>{'Whether you’re looking to go offroading, travel compactly through the city, or cruise calmly down to the shoreline, there is sure to be a destination on this list for you and your family (and an ' + generateAdverbFour() + ' ' + generateAdverbSix() + ' to match)!'}</p>
            <p>{'At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a  ' + this.props.make + ' to take on your ' + generateAdverbThree() + ', you can view our <a class=\'seoLinks\' href=\'tel:' + this.props.allInventory + '\' target="_blank">inventory</a> and <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">Test Drive</a> today. From our family to yours, safe travels this summer!'}</p>
            </div>
        );
    }
}

export default RoadTripLocations;