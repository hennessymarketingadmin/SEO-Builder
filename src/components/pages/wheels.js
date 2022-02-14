import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Wheels extends Component {

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
            let words = ['tires', 'wheels', 'car tires', 'vehicle tires', 'car wheels', 'vehicle wheels']
            return shuffleAdverb(words)
        }

        const generateAdverbThree = () => {
            let words = ['more', 'extra', 'many more', 'a lot more', 'entirely more', 'substantially more', 'incredibly more' ]
            return shuffleAdverb(words)
        }

        const generateAdverbFour = () => {
            let words = ['enthusiastic', 'happy', 'more than happy', 'pleased', 'more than willing', 'more than eager']
            return shuffleAdverb(words)
        }

        const generateAdverbFive = () => {
            let words = ['schedule', 'book']
            return shuffleAdverb(words)
        }

        const generateAdverbSix = () => {
            let words = ['slightly', 'lightly', 'a little', 'on a small scale', 'hardly', 'to some extent']
            return shuffleAdverb(words)
        }

        const wheelsParagraphOne = () => {
            let arr = [
                'At ' + this.props.dealer + ' you\'ll save time and money on your ' + this.props.model + ' alignment service. ',
                'Whether it\'s a full 4-wheel alignment, rear or front wheel alignment, our alignment machines automatically check the angle of your wheels as you pull into our service area. ',
                this.props.dealer + ' also offers fantastic discounts online so check out our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> today and compare us with other service centers in your area. ',
                'Not only do we use OEM certified parts, but our technicians are factory certified and can get your ' + this.props.model + ' back on the road urgently. ',
                'Give us a <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">call</a> or simply ' + generateAdverbFive() + ' a service <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">online</a>. ',
                'Our service advisors and mechanics are ' + generateAdverbFour() + ' to help! ',
            ]
            return shuffle(arr)
        }

        const wheelsParagraphTwo = () => {
            let arr = [
                'An alignment price varies depending on various factors such as location and parts availability. ',
                'Often, during an alignment, your ball joints, bearings, and disparate suspension parts will need to be replaced to align your tires. ',
                'Location is necessary to price labor rates. Keep in mind, at ' + this.props.dealer + ' we often have ' + this.props.model + ' alignment coupons to help save you money on your ' + generateAdverbOne() + '. ',
                'Check our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> at this moment and ' + generateAdverbFive() + ' your service <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">online</a> to save even ' + generateAdverbThree() + '! If you have additional questions, please give us a <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">call</a>. '
            ]
            return shuffle(arr)
        }

        const wheelsParagraphThree = () => {
            let arr = [
                '<li>Even the most minor of ' + generateAdverbOne() + ' accidents and impacts can fluctuate the alignment of your ' + this.props.model + '.</li>',
                '<li>Wear and tear on your ' + generateAdverbOne() + '\'s suspension components will cause your ' + this.props.model + ' to become misaligned.</li>',
                '<li>Speed bumps, potholes, and contact with extra road hazards are the most classic reasons for the wheels of your ' + this.props.model + ' to misalign.</li>',
                '<li>Alterations of your suspension must be made if you change the height of your ' + generateAdverbOne() + ' otherwise your ' + generateAdverbOne() + ' will be misaligned.</li>',
            ]
            return shuffle(arr, 'list')
        }

        const wheelsParagraphFour = () => {
            let arr = [
                '<li>If your steering ' + generateAdverbTwo() + ' is crooked or pointed to the left or right when you\'re driving straight, then your ' + this.props.model + ' needs an alignment immediately.</li>',
                '<li>If your ' + this.props.model + ' has noisy steering, then it\'s conceivable you need an alignment. There are multiple reasons your steering may be making that sound, so bring it in and have the professionals diagnose your ' + generateAdverbOne() + '\'s issue.</li>',
                '<li>Uneven wear and tear of your ' + generateAdverbTwo() + ' tread means your ' + this.props.model + ' has an alignment issue.</li>',
                '<li>If you\'re holding your steering ' + generateAdverbTwo() + ' straight, yet your ' + this.props.model + ' is pulling to the right or left then you need an alignment.</li>',
            ]
            return shuffle(arr, 'list')
        }

        const wheelsParagraphFive = () => {
            let arr = [
                'As you commute, your tires will wear down unevenly causing your tires to wobble. ',
                'This wobbling effect will cause the performance and fuel economy of your ' + this.props.model + ' to worsen. ',
                'It can also lead to alignment issues. ',
                'Balancing your tires requires them to be rotated from one side of the ' + generateAdverbOne() + ' to the back-up and from front to back. ',
                'This will ensure that your tires wear ' + generateAdverbThree() + ' evenly. ',
            ]
            return shuffle(arr)
        }

        const wheelsParagraphSix = () => {
            let arr = [
                'Alignment refers to the inward or outward angle of your wheels. ',
                'speed bumps, road hazards, and potholes frequently will cause your tires to misalign ' + generateAdverbSix() + ' due to changes in your ' + generateAdverbOne() + '\'s suspension. ',
                'An alignment is performed to fix the angle in which your tires contact the road. ',
                'A perfect alignment increases fuel efficiency, performance, and helps your tires wear ' + generateAdverbThree() + ' evenly. '
            ]
            return shuffle(arr)
        }

        const wheelsParagraphSeven = () => {
            let arr = [
            'At ' + this.props.dealer + ' we promote a variety of service coupons that can save you money including 4-wheel alignment, front or rear alignment, and ' + generateAdverbThree() + '. ',
            'Click here to see any of our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> or give one of our service consultants a <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">call</a> to learn ' + generateAdverbThree() + '. ',
            'You can also ' + generateAdverbFive() + ' your service <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">online</a> for further savings. '
            ]
            return shuffle(arr)
        }

        const wheelsParagraphEight = () => {
            let arr = [
                'When should you get an alignment for your ' + this.props.model + '? ',
                'The answer can vary ' + generateAdverbSix() + ' by manufacturer. ',
                'You should always check your maintenance manual to find the best mileage or time interval. ',
                'Driving habits can heavily influence how consistently you need to get your ' + generateAdverbOne() + ' aligned. '
            ]
            return shuffle(arr)
        }

        const wheelsParagraphNine = () => {
            let arr = [
                'If your ' + generateAdverbOne() + ' becomes misaligned, you\'ll notice your steering & handling may become hard to manage and the performance of your ' + this.props.model + ' will genuinely be noticeably worse than normal. ',
                'Driving straight will become harder, braking may prove to be serious or skip, fuel efficiency will diminish, and your tires will degrade much faster than usual. ',
                'In the end, it will cost you ' + generateAdverbThree() + ' money the longer you put off having your alignment completed. '
            ]
            return shuffle(arr)
        }

        const copyContent = () => {
            let x = [
                '<div class=\'contentHeaderContainer\'>\n',
                '<h1 class=\'contentHeader\'>' + this.props.make + ' Wheel Alignment in ' + this.props.city + '</h1>\n',
                '<p class=\'contentHeaderParagraph\'>Schedule your alignment appointment online now!</p>\n',
                '<div class=\'contentHeaderButtonContainer\'>\n',
                '<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>\n',
                '<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>\n',
                '</div>\n',
                '</div>\n',

                '<section class=\"milesSection\">\n',
                '<div class=\"milesSectionContainer\">\n',
                '<div class=\"milesSectionLeft\">\n',
                '<h3 class="milageTitle">Is Your "car" Ready For Its Next Wheel Alignment?</h3>\n',
                '</div>\n',
                '<div class=\"milesSectionRight\">\n',
                '<h5>Enter your car millage to find out</h5>\n',
                '<input id=\"miles\" class=\"milesInput\" placeholder=\"Miles\" type="number\">\n',
                '<button class=\"milesButton\" onclick=\"generateServices()\">Enter</button>\n',
                '</div>\n',
                '</div>\n',
                '</section>\n',

                '<section id=\"milesContentOne\">\n',
                '<div class=\"milesContentContainer\">\n',
                '<p>Your Vehicle may not need a wheel alignment at this time but here are some other services you should keep in mind</p>\n',
                '<h5>Oil and Oil Filter</h5>\n',
                '<p>Your engine oil and oil filter need to be changed regularly, because as an engine runs, tiny bits of metal, dirt, and carbon end up in the oil and can cause excessive wear on the engine.</p>\n',
                '<h5>Tires</h5>\n',
                '<p>Your car\'s tires should be checked regularly to ensure they are in good shape: look for good tread depth across the tire and use a tire pressure gauge to avoid ensure they aren\'t under- or over-inflated.</p>\n',
                '<h5>Air Filter</h5>\n',
                '<p>A clogged air filter makes it harder for your engine to breathe, and that can negatively impact performance.</p>\n',
                '<h5>Fuel Filter</h5>\n',
                '<p>If your fuel filter gets clogged, the engine will run rough, or not at all. Manufacturer suggestions on fuel filters vary widely, but some recommend replacing your filter as early as 30,000 miles.</p>\n',
                '<h5>Schedule Your Next Service</h5>\n',
                '<a href=\'' + this.props.serviceApp + '\' target="_blank"><button class=\"milesButtonTwo\">Schedule</button></a>\n',
                '</div>\n',
                '</section>\n',

                '<section id=\"milesContentTwo\">\n',
                '<div class=\"milesContentContainer\">\n',
                '<h5>Your vehicle may need a wheel alignment, Schedule an appointment or call to speak to a service advisor</h5>\n',
                '<p>Other services to remember</p>\n',
                '<h5>Battery</h5>\n',
                '<p>Extreme temperatures, age, and long periods of non-use affect batteries. Keep in mind that batteries are warrantied and pro-rated by time, not mileage, and are designed to wear out.</p>\n',
                '<h5>Brake Fluid</h5>\n',
                '<p>Your brakes are engaged through a hydraulic system. But when the fluid in that system is contaminated by water, its boiling point is lowered, and it can turn to gas—which is compressible.</p>\n',
                '<h5>Brake Pads/Shoes</h5>\n',
                '<p>Brake pads and shoes are designed to wear out, and usually make screeching noises when they need to get replaced.</p>\n',
                '<h5>Brake Rotors</h5>\n',
                '<p>Your brakes work by squeezing the pads against metal discs (called rotors) to slow the vehicle. Rotors get subjected to lots of heat due to the friction between them and the brake pads, and they can warp over time.</p>\n',
                '<h5>Coolant</h5>\n',
                '<p>A mix of water and antifreeze flows through your car engine\'s radiator to keep it at the correct temperature. If you lose too much coolant, the engine will overheat, which can cause severe damage.</p>\n',
                '<h5>Transmission Fluid</h5>\n',
                '<p>Low transmission-fluid levels will cause shifting problems and can burn up the transmission. It is important to monitor your transmission fluid regularly, rather than adhere to a specific mileage marker.</p>\n',
                '<h5>Schedule Your Next Service</h5>\n',
                '<a href=\'' + this.props.serviceApp + '\' target="_blank"><button class=\"milesButtonTwo\">Schedule</button></a>\n',
                '</div>\n',
                '</section>\n',

                '<section id=\"milesContentThree\">\n',
                '<div class=\"milesContentContainer\">\n',
                '<h5>Your vehicle may need a wheel alignment, Schedule an appointment or call to speak to a service advisor</h5>\n',
                '<p>Other services to remember</p>\n',
                '<h5>Hoses</h5>\n',
                '<p>The hoses on your car carry coolant, power steering fluid, and gases for the air conditioning system. As the rubber ages, cracks can form, and a busted hose will cause trouble in a hurry, so have them checked and changed as needed, particularly as your car approaches six-figure mileage.</p>\n',
                '<h5>Power Steering Fluid</h5>\n',
                '<p>Low power steering fluid will cause heavy steering or excessive noise while turning the wheel. Plan to flush and replace your power steering fluid around 75,000 miles</p>\n',
                '<h5>Spark Plugs/Ignition System</h5>\n',
                '<p>When components of your ignition system fail, you may get a “check engine” light on the dash, hard starting, or rough running. Your mechanic will be able to plug a laptop into your car to look for a “code” that will tell them what needs to be replaced.</p>\n',
                '<h5>Timing Belt</h5>\n',
                '<p>Cars that use a timing belt rather than a timing chain need to worry about this bit of maintenance. We recommend changing your belt pre-emptively between 75,000 and 90,000 miles</p>\n',
                '<h5>Schedule Your Next Service</h5>\n',
                '<a href=\'' + this.props.serviceApp + '\' target="_blank"><button class=\"milesButtonTwo\">Schedule</button></a>\n',
                '</div>\n',
                '</section>\n',

                '<section id=\"milesContentFour\">\n',
                '<div class=\"milesContentContainer\">\n',
                '<h5>Your vehicle may need a wheel alignment, Schedule an appointment or call to speak to a service advisor</h5>\n',
                '<p>Other services to remember</p>\n',
                '<h5>Oil and Oil Filter</h5>\n',
                '<p>Your engine oil and oil filter need to be changed regularly, because as an engine runs, tiny bits of metal, dirt, and carbon end up in the oil and can cause excessive wear on the engine.</p>\n',
                '<h5>Tires</h5>\n',
                '<p>Your car\'s tires should be checked regularly to ensure they are in good shape: look for good tread depth across the tire and use a tire pressure gauge to avoid ensure they aren\'t under- or over-inflated.</p>\n',
                '<h5>Air Filter</h5>\n',
                '<p>A clogged air filter makes it harder for your engine to breathe, and that can negatively impact performance.</p>\n',
                '<h5>Fuel Filter</h5>\n',
                '<p>If your fuel filter gets clogged, the engine will run rough, or not at all. Manufacturer suggestions on fuel filters vary widely, but some recommend replacing your filter as early as 30,000 miles.</p>\n',
                '<h5>Schedule Your Next Service</h5>\n',
                '<h5>Battery</h5>\n',
                '<p>Extreme temperatures, age, and long periods of non-use affect batteries. Keep in mind that batteries are warrantied and pro-rated by time, not mileage, and are designed to wear out.</p>\n',
                '<h5>Brake Fluid</h5>\n',
                '<p>Your brakes are engaged through a hydraulic system. But when the fluid in that system is contaminated by water, its boiling point is lowered, and it can turn to gas—which is compressible.</p>\n',
                '<h5>Brake Pads/Shoes</h5>\n',
                '<p>Brake pads and shoes are designed to wear out, and usually make screeching noises when they need to get replaced.</p>\n',
                '<h5>Brake Rotors</h5>\n',
                '<p>Your brakes work by squeezing the pads against metal discs (called rotors) to slow the vehicle. Rotors get subjected to lots of heat due to the friction between them and the brake pads, and they can warp over time.</p>\n',
                '<h5>Coolant</h5>\n',
                '<p>A mix of water and antifreeze flows through your car engine\'s radiator to keep it at the correct temperature. If you lose too much coolant, the engine will overheat, which can cause severe damage.</p>\n',
                '<h5>Transmission Fluid</h5>\n',
                '<p>Low transmission-fluid levels will cause shifting problems and can burn up the transmission. It is important to monitor your transmission fluid regularly, rather than adhere to a specific mileage marker.</p>\n',
                '<h5>Hoses</h5>\n',
                '<p>The hoses on your car carry coolant, power steering fluid, and gases for the air conditioning system. As the rubber ages, cracks can form, and a busted hose will cause trouble in a hurry, so have them checked and changed as needed, particularly as your car approaches six-figure mileage.</p>\n',
                '<h5>Power Steering Fluid</h5>\n',
                '<p>Low power steering fluid will cause heavy steering or excessive noise while turning the wheel. Plan to flush and replace your power steering fluid around 75,000 miles</p>\n',
                '<h5>Spark Plugs/Ignition System</h5>\n',
                '<p>When components of your ignition system fail, you may get a “check engine” light on the dash, hard starting, or rough running. Your mechanic will be able to plug a laptop into your car to look for a “code” that will tell them what needs to be replaced.</p>\n',
                '<h5>Timing Belt</h5>\n',
                '<p>Cars that use a timing belt rather than a timing chain need to worry about this bit of maintenance. We recommend changing your belt pre-emptively between 75,000 and 90,000 miles</p>\n',
                '<h5>Schedule Your Next Service</h5>\n',
                '<a href=\'' + this.props.serviceApp + '\' target="_blank"><button class=\"milesButtonTwo\">Schedule</button></a>\n',
                '</div>\n',
                '</section>\n',
                
                '<h2 class=\'seoContentH\'>Wheel Alignment</h2>\n',
                wheelsParagraphOne(),
                '<h2 class=\'seoContentH\'>How much is a ' + this.props.model + ' alignment? </h2>\n',
                wheelsParagraphTwo(),
                '<h2 class=\'seoContentH\'>What causes bad alignment in my ' + this.props.model + '? </h2>\n',
                '<p class=\'seoContentP\'>There are many factors that can cause your wheels to become misaligned.</p>\n',
                wheelsParagraphThree(),
                '<h2 class=\'seoContentH\'>What are common signs that my ' + this.props.model + ' needs an alignment?</h2>\n',
                '<p class=\'seoContentP\'>The following are the most prevailing signs that your ' + this.props.model + ' needs an alignment.</p>\n',
                wheelsParagraphFour(),
                '<h2 class=\'seoContentH\'>What\'s the difference between balancing and alignment?</h2>\n',
                '<p class=\'seoContentP\'>Tire rotations, balancing, and alignment are all laborious to a smooth ride. Taking care of your ' + this.props.model + ' starts with your tires and normal maintenance.</p>\n',
                wheelsParagraphFive(),
                wheelsParagraphSix(),
                '<h2 class=\'seoContentH\'>' + this.props.model + ' Alignment Coupons</h2>\n',
                wheelsParagraphSeven(),
                '<h2 class=\'seoContentH\'>How often should you get an alignment?</h2>\n',
                wheelsParagraphEight(),
                '<h2 class=\'seoContentH\'>Why is an alignment important for my ' + this.props.model + '?</h2>\n',
                wheelsParagraphNine(),
                
                '<script>\n',
                'function generateServices() {\n',
                'let miles = document.getElementById(\"miles\").value\n',
                'if (miles > 0 && miles <= 30000) {\n',
                'document.getElementById(\"milesContentOne\").style.display = \"flex\"\n',
                'document.getElementById(\"milesContentTwo\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentThree\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentFour\").style.display = \"none\"\n',
                '} else if (miles > 30000 && miles <= 60000) {\n',
                'document.getElementById(\"milesContentTwo\").style.display = \"flex\"\n',
                'document.getElementById(\"milesContentOne\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentThree\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentFour\").style.display = \"none\"\n',
                '} else if (miles > 60000 && miles <= 90000) {\n',
                'document.getElementById(\"milesContentThree\").style.display = \"flex\"\n',
                'document.getElementById(\"milesContentOne\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentTwo\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentFour\").style.display = \"none\"\n',
                '} else if (miles > 90000) {\n',
                'document.getElementById(\"milesContentFour\").style.display = \"flex\"\n',
                'document.getElementById(\"milesContentOne\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentTwo\").style.display = \"none\"\n',
                'document.getElementById(\"milesContentThree\").style.display = \"none\"\n',
                '} else {\n',
                'console.log(\"invalid\")\n',
                '}\n',
                '}\n',
                '</script>\n',

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
                '}\n',
                
                '.milesSection {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'margin-top: 40px;\n',
                'margin-bottom: 40px;\n',
                '}\n',
                '.milesSectionContainer {\n',
                'border: 2px solid lightgrey;\n',
                'width: 700px;\n',
                'height: 200px;\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'border-radius: 20px;\n',
                '}\n',
                '.milesSectionLeft {\n',
                'width: 50%;\n',
                'padding: 10px;\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                '}\n',
                '.milesSectionRight {\n',
                'width: 50%;\n',
                'padding: 10px;\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                '}\n',
                '.milesInput {\n',
                'border-radius: 20px;\n',
                'border: 1px solid lightgrey;\n',
                'padding-left: 10px;\n',
                '}\n',
                '.milesInput:focus {\n',
                'outline: none;\n',
                '}\n',
                '.milesButton {\n',
                'background-color: black;\n',
                'color: white;\n',
                'border: none;\n',
                'margin-top: 10px;\n',
                'margin-bottom: 10px;\n',
                'padding-top: 5px;\n',
                'padding-bottom: 5px;\n',
                'border-radius: 20px;\n',
                '}\n',
                '.milesButtonTwo {\n',
                'background-color: black;\n',
                'color: white;\n',
                'border: none;\n',
                'margin-top: 10px;\n',
                'margin-bottom: 10px;\n',
                'padding: 5px 30px 5px 30px;\n',
                'border-radius: 20px;\n',
                '}\n',
                'input::-webkit-outer-spin-button,\n',
                'input::-webkit-inner-spin-button {\n',
                '-webkit-appearance: none;\n',
                'margin: 0;\n',
                '}\n',
                '#milesContentOne {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'display: none;\n',
                '}\n',
                '#milesContentTwo {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'display: none;\n',
                '}\n',
                '#milesContentThree {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'display: none;\n',
                '}\n',
                '#milesContentFour {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'display: none;\n',
                '}\n',
                '.milesContentContainer {\n',
                'width: 650px;\n',
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
                '.milageTitle {\n',
                'font-size: 24px;\n',
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
                '.milageTitle {\n',
                'font-size: 24px;\n',
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
            <p><CopyToClipboard text={'Find great deals for your wheel alignment for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}><button className='copyBtnTitle'>Copy</button></CopyToClipboard>{'Find great deals for your oil change for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}</p>
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
                <h1 className='contentHeader'>{this.props.make + ' Wheel Alignment in ' + this.props.city}</h1>
                <p className='contentHeaderParagraph'>Schedule your wheel alignment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Specials</button></a>
                </div>
            </div>
                <h2>{'Wheel Alignment'}</h2>
                {wheelsParagraphOne()}
                <h2>{'How much is a ' + this.props.model + ' alignment?'}</h2>
                {wheelsParagraphTwo()}
                <h2>{'What causes bad alignment in my ' + this.props.model + '?'}</h2>
                <p>{'There are many factors that can cause your wheels to become misaligned.'}</p>
                {wheelsParagraphThree()}
                <h2>{'What are common signs that my ' + this.props.model + ' needs an alignment?'}</h2>
                <p>{'The following are the most prevailing signs that your ' + this.props.model + ' needs an alignment.'}</p>
                {wheelsParagraphFour()}
                <h2>{'What\'s the difference between balancing and alignment?'}</h2>
                <p>{'Tire rotations, balancing, and alignment are all laborious to a smooth ride. Taking care of your ' + this.props.model + ' starts with your tires and normal maintenance.'}</p>
                {wheelsParagraphFive()}
                {wheelsParagraphSix()}
                <h2>{'' + this.props.model + ' Alignment Coupons'}</h2>
                {wheelsParagraphSeven()}
                <h2>{'How often should you get an alignment?'}</h2>
                {wheelsParagraphEight()}
                <h2>{'Why is an alignment important for my ' + this.props.model + '?'}</h2>
                {wheelsParagraphNine()}
            </div>
        );
    }
}

export default Wheels;