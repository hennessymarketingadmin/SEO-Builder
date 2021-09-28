import React, { Component } from 'react';

class Home extends Component {
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
        paragraphOne: '',
        paragraphTwo: '',
        paragraphThree: '',
        paragraphFour: '',
        paragraphFive: '',
        paragraphSix: '',
        paragraphSeven: '',
        paragraphEight: '',
        paragraphNine: '',
        paragraphTen: '',
        paragraphElevin: '',
        paragraphTwelve: '',
        paragraphThirdteen: '',
        paragraphFourteen: '',
        paragraphFifthteen: '',
        paragraphSixteen: '',
    }
    render() {

        const generateAdverbOne = () => {
            let words = ['dangerous', 'risky', 'perilous', 'unhealthy', 'unsafe', 'sensitive', 'hazardous', 'delicate']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbTwo = () => {
            let words = ['small', 'low', 'little', 'limited', 'deprived', 'unfilled']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbThree = () => {
            let words = ['premium', 'superior', 'best', 'leading', 'perfect', 'outstanding', 'remarkable']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbFour = () => {
            let words = ['benefits', 'advantages', 'choices']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbFive = () => {
            let words = ['conventional', 'traditional', 'regular', 'ordinary']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbSix = () => {
            let words = ['extra', 'more', 'innumerable']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const generateAdverbSeven = () => {
            let words = ['motor', 'car']
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const uppercaseFirst = (string) => {
            let arr = string.split(' ')
            
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            return arr.join(' ')
        }

        const generateParagraphOne = () => {
            let arr = [
                'As owners, we know we need to change our engine’s ' + generateAdverbSeven() + ' oil at normal intervals, whether that\'s looking at the sticker on the windshield or when our maintenance light turns on. ',
                'But most drivers ask what does engine oil actually do? ',
                'When your motor oil level is ' + generateAdverbTwo() + ', it will cause the engine temperature to rise and overheating can cause major mechanical issues in the long run. ',
                'Did you know that the pistons and ' + generateAdverbSix() + ' appealing engine parts never come in contact with each other? ',
                'They actually ride on a thin layer of motor oil interior of the engine. ',
                'It is ' + generateAdverbOne() + ' to check your motor oil level frequently to make satisfied that this doesn’t occur. ',
                'When you ask anyone about car repair or auto repair, the most everyday service that everyone knows about is an ' + generateAdverbSeven() + ' oil change. ',
                'Oil keeps your engine\'s appealing parts separated from each ' + generateAdverbSix() + ' and helps prevent damage, knocking and friction. ',
                'This is why it is extremely ' + generateAdverbOne() + ' to retain up with normal oil changes. ',
                'Another ' + generateAdverbOne() + ' function of motor oil is cooling the components. ',
                'As motor oil circulates, it carries away some of the heat generated as a result of the combustion process. ',
                this.state.dealer + ' is here to interpretation that question, and any ' + generateAdverbSix() + ' service question that you may have about your ' + this.state.make + '.'
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphOne: arr})
        }

        const generateParagraphTwo = () => {
            let arr = [
                'Synthetic blend motor oil combines the ' + generateAdverbThree() + ' characteristics of ' + generateAdverbFive() + ' motor oil and full synthetic oil. ',
                'You may also hear it referred to as part-synthetic or semi-synthetic, but they are any the identical thing. ',
                'Synthetic-blend oil provides similar ' + generateAdverbFour() + ' found in full synthetic ' + generateAdverbSeven() + ' oil without the large price tag, sometimes at the identical price as ' + generateAdverbFive() + ' motor oil. ',
                'The ' + generateAdverbThree() + ' way to ensure that your engine is in improved health is to retain up with your regularly scheduled oil changes as well as ' + generateAdverbSix() + ' maintenance items. ',
                'No matter how quiet your engine is, it\'s ' + generateAdverbOne() + ' to remember that there\'s a lot of combustion happening internally, so it\'s ' + generateAdverbOne() + ' to ensure that it\'s properly lubricated at any times, and synthetic-blend motor oil is becoming a ' + generateAdverbSix() + ' everyday oil change option due to this. ',
                'Your engine is the heart of your vehicle. Much like your body, you need to make satisfied that you take care of it properly. '
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphTwo: arr})
        }

        const generateParagraphThree = () => {
            let arr = [
                'Full synthetics contain less impurities than synthetic blends, but blends still offer improved resistance to oxidation and maintain their performance in extreme temperatures. ',
                'While chemically different, synthetic blend ' + generateAdverbSeven() + ' oil shares ' + generateAdverbSix() + ' characteristics of a full synthetic. ',
                'Synthetic blends are also a improved selection for drivers who put big strain on their engines and engage in activities like towing big trailers, hauling, or off-roading. What is the difference between synthetic blend oil vs fully synthetic oil, you might ask? ',
                'Synthetic blend ' + generateAdverbSeven() + ' oils are a assortment of both synthetic and ' + generateAdverbFive() + ' base oils, plus some additives. Learn ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of synthetic blend motor oil at ' + this.state.dealer + ' serving ' +this.state.city+ '! ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphThree: arr})
        }

        const generateParagraphForth = () => {
            let arr = [
                'An ' + generateAdverbSeven() + ' oil change is single of the most initial and ' + generateAdverbThree() + ' services for your car. ',
                'Most manufacturers recommend getting your oil & filter changed any 3,000-5,000 miles, but it\'s ' + generateAdverbThree() + ' to check your owner\'s manual and with your dealer to find out the intervals that work ' + generateAdverbThree() + ' four your vehicle. ',
                this.state.dealer + ' offers a assortment of ' + generateAdverbSeven() + ' oil changes favors to retain your ' + this.state.make + ' running strong. ',
                'Our service center strives to correctly diagnose/fix your vehicle the first time, whether you need an oil change or a new transmission. ',
                'This saves you hours at the dealership, money on unnecessary repairs or unneeded auto repair. ',
                'We are proud to serve any ' + this.state.make + ' owners and are the ' + generateAdverbThree() + ' location to service your ' + this.state.make + ' in ' + this.state.city + ' and the greater metro area. ',
                'Contact our <a class=\'seoLinks\' href=\'' + this.state.serviceCenter + '\' target="_blank">service center</a> today to <a class=\'seoLinks\' href=\'' + this.state.serviceApp + '\' target="_blank">schedule your service appointment</a> or to find the shop hours for the ' + generateAdverbThree() + ' appointment time for you or visit the store. We look forward to working with you. '
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphForth: arr})
        }

        const generateParagraphFith = () => {
            let arr = [
                'Full synthetic motor oil is designed to be the highest quality motor oil for your vehicle. ',
                'It provides the ' + generateAdverbThree() + ' safeness around. However, ' + generateAdverbSix() + ' customers still ask..."What are the ' + generateAdverbFour() + ' of full synthetic motor oil?" and "Why is it so expensive? ',
                'Full synthetic motor oil helps retain your engine as close to new as sane for as long as sane, which adds up to you having greater assurance on the road. ',
                'Contact our service department to learn ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of synthetic motor oil and ' + generateAdverbSix() + ' favors for your next oil change. ',
                'Synthetic ' + generateAdverbSeven() + ' oil is specifically created from chemical compounds and the formulations allow scientists to create motor oil that at a molecular level that provide ' + generateAdverbSix() + ' complete safeness. ',
                'This means a series of distinctive ' + generateAdverbFour() + ' you won\'t find in ' + generateAdverbFive() + ' oils that include a higher viscosity index, greater resistance to oxidation thermal breakdown and reduced sludge issues. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>');
            arr.push('</p>');
            arr.join(' ');
            this.setState({paragraphFith: arr});
        }

        const generateParagraphSix = () => {
            let arr = [
                'Conventional ' + generateAdverbSeven() + ' oil is the most commonly used type of oil. ',
                'You will typically find this at ' + generateAdverbSix() + ' oil change locations like Express oil change, Jiffy Lube or Valvoline as everyday favors for middle cars with  ' + generateAdverbTwo() + '  to middle mileage and a real engine design. ',
                'Conventional oil changes are almost always cheaper than synthetic-blend or full synthetic oil changes. ',
                'Depending on the location, a synthetic oil change could cost twice as much as a ' + generateAdverbFive() + ' oil change! ',
                'While it is everyday, ' + generateAdverbFive() + ' motor oil has ' + generateAdverbSix() + ' ' + generateAdverbFour() + '. ',
                'Even though synthetic oils are usually important to ' + generateAdverbFive() + ' oils or blends in terms of high and low-temperature performance and durability, if the additives aren\'t prudent for your vehicle, it\'s not the prudent kind of oil to use and could harm your engine. ',
                'Like synthetic oil, ' + generateAdverbFive() + ' motor oil begins its life in the ground as crude oil and is then refined and blended with different chemical additives to meet the needs of commonplace vehicle engines. ',
            ]

            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphSix: arr})
        }

        const generateParagraphSeven = () => {
            let arr = [
                'Whether the car is 5 years old or 25 years old, the ' + generateAdverbSix() + ' you drive or the longer you drive, the ' + generateAdverbSix() + ' the miles add up. ',
                'This also can lead to a assortment of engine, performance and maintenance issues, making it even ' + generateAdverbSix() + ' ' + generateAdverbOne() + ' to retain any maintenance needs on your ' + this.state.make + ' . ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.state.serviceCenter + '\' target="_blank">service center</a> today to learn more! ',
                'High mileage ' + generateAdverbSeven() + ' oil is specifically designed for cars with ' + generateAdverbSix() + ' than 75,000 miles. ',
                'This type of oil can help lower oil consumption, minimize oil leaks and oil spills, and can also help lower smoke and emissions in older engines. ',
                this.state.dealer + ' offers high mileage has ' + generateAdverbSeven() + ' oils designed specifically for vehicles with ' + generateAdverbSix() + ' that 75,000 miles to retain them running stronger for longer. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphSeven: arr})
        }

        const generateParagraphEight = () => {
            let arr = [
                'How much ' + generateAdverbSeven() + ' oil you should use depends greatly on the type of vehicle, engine size and type of oil. ',
                'For example, 4 cylinder passenger cars take less ' + generateAdverbSeven() + ' oil, and typically use ' + generateAdverbFive() + ' oil, compared to a vehicle with a high-performance V-8 engine, which may require full synthetic ' + generateAdverbSeven() + ' oil. ',
                'Most engines require anywhere between 5 to 8 quarts of ' + generateAdverbSeven() + ' oil. For example, a 4-cylinder engine will require at least 5 quarts of oil and a 6-cylinder engine will require around 6 quarts of ' + generateAdverbSeven() + ' oil. ',
                'Give ' + this.state.dealer + ' a call today and ask for single of our service advisers for ' + generateAdverbSix() + ' information. ',
                'We look forward to assisting you with any your automotive needs! ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphEight: arr})
        }

        const generateParagraphNine = () => {
            let arr = [
                <li>{'<li>To help to improve fuel efficiency - The slipperier the engine parts then the less force mandatory to move them so less fuel is used by the engine.</li>'}</li>,
                <li>{'<li>Prevents engine knocking - Since parts, like your engine pistons, don\'t touch, the ' + generateAdverbSeven() + ' oil provides lubrication and prevents the parts from touching. This helps prevents problems and damage caused by engine knocking.</li>'}</li>,
                <li>{'<li>Keeps the ' + this.state.make + ' engine real - This is remarkable to retain the engine running at maximum efficiency. Oil picks up debris and dust particles and carries them to the ' + generateAdverbSeven() + ' oil filter where they become trapped. This reduces the risk of dirt building up in the engine and causing damage to the engine.</li>'}</li>,
                <li>{'<li>Protects the engine parts from corrosion - Single of the additives present within the majority of oils is specifically there to help to lower oxidation and prevent corrosion.</li>'}</li>,
                <li>{'<li>Helps to lower heat - Aside from the explosions caused by the spark plug and gasoline, heat is produced from the friction of engine parts and excessive heat can cause certain damage to remarkable engine components. As ' + generateAdverbSeven() + ' oil moves around the engine heat is carried away to cooler parts. This dissipation of heat means that no single area of the engine should become too hot.</li>'}</li>,
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.join(' ')
            this.setState({paragraphNine: arr})
        }

        const generateParagraphTen = () => {
            let arr = [
                'Any ' + generateAdverbSeven() + ' oil change is performed by our factory-trained mechanics and includes a multi-point inspection, as well. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.state.serviceSpecials + '\' target="_blank">service specials</a> page today to see our current oil change deals on ' + this.state.make + ' or <a class=\'seoLinks\' href=\'' + this.state.serviceApp + '\' target="_blank">schedule your appointment online!</a> ',
                generateAdverbSeven() + ' change prices also vary, depending on the type of vehicle, engine size and type of oil. ',
                'For example, 4 cylinder passenger cars take less oil, and typically use ' + generateAdverbFive() + ' oil, compared to a vehicle with a high-performance V-8 engine, which may require full synthetic ' + generateAdverbSeven() + ' oil. ',
                'Either way, ' + this.state.dealer + ' offers a assortment of oil changes coupons any month that may be less than you think. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphTen: arr})
        }

        const generateParagraphElevin = () => {
            let arr = [
                this.state.dealer + ' will get you in and out quickly when you need your ' + generateAdverbSeven() + ' oil changed. ',
                'We also feature online scheduling, so you can come in at a time that works for your your busy schedule! ',
                this.state.dealer + ' is proud to serve the greater ' + this.state.city + ' area. ',
                'You can also view our current <a class=\'seoLinks\' href=\'' + this.state.serviceSpecials + '\' target="_blank">current service specials here</a> and schedule your ' + this.state.make + ' <a class=\'seoLinks\' href=\'' + this.state.serviceApp + '\' target="_blank">oil change appointment</a> directly from the coupon. ',
                'If you have ' + generateAdverbSix() + ' vehicles you need serviced, definitely bring it to our dealership located at ' + this.state.address + ', ' + this.state.city + ', ' + this.state.state + '! ',
                'Short on time? Let us help! Our auto mechanics are certified to work on any ' + this.state.make + ' . We look forward to looking you! ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphElevin: arr})
        }

        const generateParagraphTwelve = () => {
            let arr = [
                'Conventional base oils inherently contain some impurities and while they contain improved additives, the additives aren\'t as high quality as those that are mixed into synthetics, ',
                generateAdverbSeven() + ' oils are essentially a combination of base oils and additives. ',
                'Mixing accessible types of oils is not recommended at any, for a few major reasons. ',
                'While you may favor to mix oil to save money, our current ' + generateAdverbSeven() + ' oil change discounts may offer a better deal than you may think! ',
                'Contact ' + this.state.dealer + ' for our <a class=\'seoLinks\' href=\'' + this.state.serviceSpecials + '\' target="_blank">current service specials and oil change coupons</a>. ',
                'In the end, synthetic and ' + generateAdverbFive() + ' motor oil are made of relatively admissible elements, it\'s just that synthetics are of a much higher quality. If you mix the two types of ' + generateAdverbSeven() + ' oil, you are only diluting the performance and purity of the full synthetic ' + generateAdverbSeven() + ' oil, and costing yourself ' + generateAdverbSix() + ' money in the process. ',
                'For example, full synthetic oils are manufactured in such a way that almost any of the impurities are removed & contain the highest quality additives too.'
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphTwelve: arr})
        }

        const generateParagraphThirdteen = () => {
            let arr = [
                'If you are inquisitive about the type of engine oil your ' + this.state.make + ' needs, just contact us at ' + this.state.dealer + ' and we will be ' + generateAdverbSix() + ' than delighted to help you! ',
                'These factors are typically based on your vehicle\'s manufacturer\'s specifications and can even be found in your owner\'s manual. What type of oil change does my ' + this.state.make + ' need? ',
                'Determining the ' + generateAdverbThree() + ' motor oil for your vehicle, whether you are looking at a full synthetic ' + generateAdverbSeven() + ' oil change, synthetic-blend oil change, high-mileage oil change, ' + generateAdverbFive() + ' oil change or even diesel oil changes, depends on several factors. ',
                'The essential factor is the type of engine. ',
                'Do you have a diesel engine, high-performance ' + generateAdverbSeven() + ', or an adequate 4-cylinder? ',
                'Some ' + generateAdverbSix() + ' factors, such as the climate you live in, your driving habits, or even the age of your engine also affect the type of motor oil your engine will need. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphThirdteen: arr})
        }

        const generateParagraphFourteen = () => {
            let arr = [
                'Contact us today to learn ' + generateAdverbSix() + ' about our high mileage oil changes services and see why we are single of the ' + generateAdverbThree() + ' ' + this.state.make + ' dealerships in ' + this.state.state + '! ',
                'High mileage oil can help remove engine sludge and lower wear in older engines. ',
                'By keeping up with your ' + generateAdverbSeven() + ' oil changes, you can also help eliminate this problem before it starts. ',
                'Whether it\'s a full synthetic oil change or ' + generateAdverbFive() + ' oil change that you are looking for, we offer a assortment of <a class=\'seoLinks\' href=\'' + this.state.serviceSpecials + '\' target="_blank">service specials</a> to help save you money. ',
                'Our Service Department is proud to serve our customers in ' + this.state.city + '. ',
                'Contact us today to learn ' + generateAdverbSix() + '. ',
                'As our engines get older and rack up the miles, compression in each of the cylinders can begin to weaken & seals can crack. ',
                'This can cause your engine to lose performance and start to consume ' + generateAdverbSix() + ' oil or even worse, lead to expensive repairs that pop up out of the blue. ',
                'Single of the major ' + generateAdverbFour() + ' of high mileage motor oil is that it helps prevent sludge build-up. ',
                '"What is sludge?" you may ask. Sludge is a tar-like residue that can build up in an engine as the result of ' + generateAdverbSeven() + ' oil thickening and the build-up is mostly caused by infrequent oil changes. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphFourteen: arr})
        }

        const generateParagraphFifthteen = () => {
            let arr = [
                'Don\'t wait to take care of your car. ',
                'Our dealership features a state-of-the-art <a class=\'seoLinks\' href=\'' + this.state.serviceCenter + '\' target="_blank">service center</a> that offers a assortment of ' + generateAdverbSix() + ' services including a multipoint inspection during any visit. ',
                '<a class=\'seoLinks\' href=\'' + this.state.serviceApp + '\' target="_blank">Schedule your service appointment</a> and see why we are the highest rated ' + this.state.make + ' service locations in ' + this.state.city + '. ',
                'Visit ' + this.state.dealer + ' serving ' + this.state.city + ', ' + this.state.state + ' for any your ' + generateAdverbSeven() + ' oil change needs. ',
                'Our pricing changes with market prices and the cost of oil, but rarely fluctuates ' + generateAdverbSix() + ' than a few dollars at time unless we\'re running a improved on ' + this.state.make + ' oil changes. ',
                'We offer ' + generateAdverbSix() + ' discounts and oil change coupons any month, so you\'re guaranteed to save money when visiting ' + this.state.dealer + '. ',
                'You\'ll also amenity from our certified, professional and knowledgeable auto mechanics who can assess your ' + generateAdverbSeven() + ' oil service with care and consideration. ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphFifthteen: arr})
        }

        const generateParagraphSixteen = () => {
            let arr = [
                'What are the ' + generateAdverbFour() + ' of using synthetic ' + generateAdverbSeven() + ' oil? Well, some vehicles require it, especially in motors like the ones found in sports sedans or sports coupes that focus on performance. ',
                'Extra manufacturers today design their engines specifically around the important safeness and performance properties of full synthetic ' + generateAdverbSeven() + ' oil. ',
                this.state.dealer + ', a ' + this.state.make + ' dealership serving ' + this.state.city + ', has an inconceivable team of certified mechanics at who can tell you which oil is mandatory for your vehicle, or you can look at your vehicle manufacturer’s recommendations to make satisfied you are providing your vehicle with the ' + generateAdverbThree() + ' sane favors. ',
                'Visit our dealership today or contact our <a class=\'seoLinks\' href=\'' + this.state.serviceCenter + '\' target="_blank">service center</a> with any questions about your next full synthetic ' + generateAdverbSeven() + ' oil change! ',
            ]
            arr.sort(function() {
                return 0.5 - Math.random();
            });
            arr.unshift('<p>')
            arr.push('</p>')
            arr.join(' ')
            this.setState({paragraphSixteen: arr})
        }
        

        const shuffle = () => {
            generateParagraphOne()
            generateParagraphTwo()
            generateParagraphThree()
            generateParagraphForth()
            generateParagraphFith()
            generateParagraphSix()
            generateParagraphSeven()
            generateParagraphEight()
            generateParagraphNine()
            generateParagraphTen()
            generateParagraphElevin()
            generateParagraphTwelve()
            generateParagraphThirdteen()
            generateParagraphFourteen()
            generateParagraphFifthteen()
            generateParagraphSixteen()
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
                <button
                className='genBtn'
                onClick = {() => {
                    shuffle()
                    // generateAdverb()
                    this.setState({display: true})
                }}>Generate</button>


                {/* ________________________________________ */}

                {this.state.display ?

                <div className='content'>
                
                <hr></hr>
                <div className='contentHeaderContainer'>
                    <p className='contentHeader2'>{'<div class=\'contentHeaderContainer\'>'}</p>
                <h1 className='contentHeader'>{'<h1 class=\'contentHeader\'>' + this.state.make + ' Oil Change in ' + this.state.city + '</h1>'}</h1>
                    <p className='contentHeader2'>{'</div>'}</p>
                </div>
                <h1>{'<h1>Why Do Cars Need An oil change? | Oil Change Service ' + this.state.city + '</h1>'}</h1>
                {this.state.paragraphOne}
                <h1>{'<h1>What is Synthetic-Blend Oil? </h1>'}</h1>
                {this.state.paragraphTwo}
                <h1>{'<h1>What is the Difference between Synthetic Blend Oil vs Full Synthetic Oil? </h1>'}</h1>
                {this.state.paragraphThree}
                <h1>{'<h1>How often does a ' + this.state.make + ' need an Oil Change?</h1>'}</h1>
                {this.state.paragraphForth}
                <h1>{'<h1>Full Synthetic Oil Change</h1>'}</h1>
                {this.state.paragraphFith}
                <h1>{'<h1>Conventional Motor Oil | Conventional Oil Change Benefits</h1>'}</h1>
                {this.state.paragraphSix}
                <h1>{'<h1>High Mileage Motor Oil | High Mileage oil change Benefits </h1>'}</h1>
                {this.state.paragraphSeven}
                <h1>{'<h1>How much oil does a ' + this.state.make + ' take?</h1>'}</h1>
                {this.state.paragraphEight}
                <h1>{'<h1>What happens if you don\'t change the oil in your ' + this.state.make + '?</h1>'}</h1>
                <p>{'<p>Motor oil has innumerable ' + generateAdverbSix() + ' functions & benefits, which include:</p>'}</p>
                <ul>
                    {'<ul>'}
                    {this.state.paragraphNine}
                    {'</ul>'}
                </ul>
                <h1>{'<h1>How Much Does an Oil Change Cost for a ' + this.state.make + '?</h1>'}</h1>
                {this.state.paragraphTen}
                <h1>{'<h1>' + this.state.make + ' Oil Change Near Me | Oil Change Coupons ' + this.state.city + ', ' + this.state.state + '</h1>'}</h1>
                {this.state.paragraphElevin}
                <h1>{'<h1>Can you mix Conventional Oil & Synthetic Motor Oil?</h1>'}</h1>
                {this.state.paragraphTwelve}
                <h1>{'<h1>What Type of Oil does a ' + this.state.make + ' use? | What Oil Does ' + this.state.make + ' Need? | Types of Motor Oil</h1>'}</h1>
                {this.state.paragraphThirdteen}
                <h1>{'<h1>Best ' + this.state.city + ' High Mileage oil change | Why Use High Mileage Oil?</h1>'}</h1>
                {this.state.paragraphFourteen}
                <h1>{'<h1>' + this.state.make + ' oil change Price at ' + this.state.dealer + '</h1>'}</h1>
                {this.state.paragraphFifthteen}
                <h1>{'<h1>Why is Full Synthetic Motor Oil So Expensive? What are the Benefits of Synthetic Oil Changes?</h1>'}</h1>
                {this.state.paragraphSixteen}
                
                <hr></hr>

                <p>{'<style>'}</p>
                <p>{'.contentHeaderContainer{'}</p>
                <p>{'background-image: url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);'}</p>
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
                <p>{'}'}</p> 
                <p>{'.seoLinks {'}</p>
                <p>{'color: black;'}</p>
                <p>{'font-weight: bold;'}</p>
                <p>{'text-decoration: none;'}</p>
                <p>{'}'}</p>
                <p>{'@media screen and (min-width: 300px) and (max-width: 400px) {'}</p>
                <p>{'height: 200px;'}</p>
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

                : 
                null
                }
        </div>
        );
    }
}

export default Home;