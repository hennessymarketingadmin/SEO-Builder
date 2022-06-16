import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class RoadTripGames extends Component {

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
            let words = ['excellent', 'great', 'good', 'amazing', 'outstanding', 'fun', 'creative']
            return shuffleAdverb(words)
        }

        const generateAdverbTwo = () => {
            let words = ['crucial', 'essential', 'necessary', 'important']
            return shuffleAdverb(words)
        }

        const generateAdverbThree = () => {
            let words = ['road trip', 'summer road trip', 'vacation', 'summer vacation', 'summer break', 'journey']
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
            let words = []
            return shuffleAdverb(words)
        }

        const generateAdverbSeven = () => {
            let words = []
            return shuffleAdverb(words)
        }

        const roadTripGamesParagraphOne = () => {
            let arr = [
                'The goal is to spot objects or landmarks on the side of the road and mark them off on a 4x4 grid bingo card (we suggest creating your own or downloading and printing one out.) ',
                'The first player to complete a row, column, or diagonal wins. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphTwo = () => {
            let arr = [
                'Road trip bingo is a ' + generateAdverbOne() + ' way to pass the time, keep everyone entertained, and teach kids about different states and landmarks. ',
                'If you\'re looking for a ' + generateAdverbOne() + ' family ' + generateAdverbThree() + ' activity, give this one a try! '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphThree = () => {
            let arr = [
                'Holding a ' + generateAdverbThree() + ' scavenger hunt is a ' + generateAdverbOne() + ' way to pass the time on a ' + generateAdverbFive() + ' ' + generateAdverbThree() + '. ',
                'This game is similar to Road Trip Bingo, but players collect items they find along the way instead of marking off items on a card. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphFour = () => {
            let arr = [
                'To make the game more challenging, consider adding a time limit or making it about other vehicles on the road. ',
                'For example, you could look for a red car, an old truck, or a license plate from your home state. ',
                'Get a head start by purchasing a vehicle from your local ' + this.props.dealer + ' that matches the scavenger hunt description. ',

            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphFive = () => {
            let arr = [
                'Road trip scavenger hunts are a ' + generateAdverbOne() + ' way to keep everyone entertained and help make the ' + generateAdverbThree() + ' feel like part of the adventure. ',
                'When you\'re planning your next ' + generateAdverbThree() + ', be sure to add this ' + generateAdverbOne() + ' game to your list of activities. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphSix = () => {
            let arr = [
                'As ' + generateAdverbOne() + ' as a ' + generateAdverbThree() + ' can be, the ' + generateAdverbThree() + ' can become ' + generateAdverbFive() + ' and monotonous, especially for the kids. ',
                'I-Spy is a timeless game, ' + generateAdverbFour() + ' for keeping little ones entertained. ',
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphSeven = () => {
            let arr = [
                'One of the best parts about this game is that there isn’t a set number of players needed! The goal is to spot objects along the road and call them out. ',
                'For example, you might see a blue SUV and say, "I spy with my little eye something blue." ',
                'The first person to guess correctly earns a point. ',
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphEight = () => {
            let arr = [
                'I-Spy is an interactive way for kids and adults to learn about and engage with their surroundings. ',
                'When you\'re on the road this summer, keep your eyes peeled for exciting things along the way; you never know what you might find. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphNine = () => {
            let arr = [
                'Per the old-fashioned method, players ask and answer questions about the history, culture, and geography of whatever area they\'re currently traveling through or to. ',
                'Players can ask general ' + generateAdverbThree() + ' trivia questions as well. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphTen = () => {
            let arr = [
                '<li>A recent list of <a class=\'seoLinks\' href=\'https://www.liveawilderlife.com/road-trip-trivia/\' target="_blank">41 challenging ' + generateAdverbThree() + ' trivia questions</a> from Live a Wilder Life</li>',
                '<li>A longer (and more generalized) <a class=\'seoLinks\' href=\'https://scenicstates.com/road-trip-trivia/\' target="_blank">75-question road trip trivia list</a> from Scenic States </li>',
                '<li>This <a class=\'seoLinks\' href=\'https://gominivan.com/road-trip-facts/\' target="_blank">interestingly specific list</a> of ' + generateAdverbOne() + ' ' + generateAdverbThree() + ' facts</li>',
                '<li>Drive.fm: Car & Home Trivia: This ' + generateAdverbThree() + ' trivia app is less about road trips specifically and more about the convenience of <a class=\'seoLinks\' href=\'https://apps.apple.com/us/app/drive-fm-car-home-trivia/id1357342274\' target="_blank">trivia on the road</a>. Nonetheless, it’s hands-free, brainy ' + generateAdverbOne() + ' for the whole family!</li>'
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphEleven = () => {
            let arr = [
                'There are a few variations of this game, but the basic rules are always the same: spot license plates from as many states as possible during your ' + generateAdverbThree() + '. ',
                'The game can be played individually or in teams, and it\'s a ' + generateAdverbOne() + ' way to stay alert and focused during a ' + generateAdverbFive() + ' drive. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphTelve = () => {
            let arr = [
                'To make it more challenging, you can try to spot plates from all 50 states or set a time limit and see how many you can find in an hour. ',
                'Not only is the License Plate Game a ' + generateAdverbOne() + ' way to pass the time, but it\'s also a ' + generateAdverbOne() + ' way to teach kids about geography. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphThirdteen = () => {
            let arr = [
                'Players attempt to spot objects (including other cars on the road) in alphabetical order. ',
                'Take the letter B, for example. ',
                'You might see a billboard, a bumper sticker, or a Buick [another “B” vehicle: car make, model]. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphFourteen = () => {
            let arr = [
                'As you go through the letters, you can point out different features of the objects you see and talk about how they work. ',
                'The Alphabet Game is an engaging way to teach kids about different vehicles and their uses, passing the time productively on a ' + generateAdverbFive() + ' ' + generateAdverbThree() + '. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphFifteen = () => {
            let arr = [
                'This game is ' + generateAdverbFour() + ' for when you\'re looking to start some lively debates. ',
                'It’s also a ' + generateAdverbOne() + ' way to learn more about your travel companions. ',
                'For instance, you might be surprised to find out that most people in the car would rather drive manual over automatic or prefer a road vacation over flying. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphSixteen = () => {
            let arr = [
                'While we do love Would You Rather as a ' + generateAdverbThree() + ' game, it also applies when purchasing a vehicle. ',
                'Be sure to narrow down the absolute must-haves from the generic wants (Would you rather have a third-row of seating or more storage capacity?). ',
                'Once you’re ready to start test driving, visit any of our <a class=\'seoLinks\' href=\'https://www.hennessyauto.com/all-inventory/index.htm\' target="_blank">Hennessy Automobile Companies</a> stores. '
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphSeventeen = () => {
            let arr = [
                'The goal of Hennessy Auto Challenge is simple; players take turns choosing a vehicle from our personalized list of cars for everyone to spot on the road. ',
                'The first player to spot that vehicle wins a point, and the first player to 10 points wins. ',
                'But it wouldn’t be a proper challenge without having a bonus vehicle would it? Spot the ultra-rare Ford F-250 and add 3 points to your tally! ',
            ]
            return shuffle(arr)
        } 
        const roadTripGamesParagraphEighteen = () => {
            let arr = [
                '<li>Ford F-250 (3 points)</li>',
                '<li>Jaguar F-Type </li>',
                '<li>Land Rover Range Rover Velar</li>',
                '<li>Lincoln Navigator</li>',
                '<li>Mazda Miata</li>',
                '<li>Buick Encore</li>',
                '<li>GMC Yukon</li>',
                '<li>Lexus GX460</li>',
                '<li>Cadillac Escalade</li>',
                '<li>Porsche 911</li>',
                '<li>Honda CRV</li>'
            ]
            return shuffle(arr)
        } 
        // const roadTripGamesParagraphNineteen = () => {
        //     let arr = [

        //     ]
        //     return shuffle(arr)
        // } 
        const roadTripGamesParagraphTwenty = () => {
            let arr = [
                '<li>Road Trip Bingo </li>',
                '<li>Road Trip Scavenger Hunt</li>',
                '<li>I Spy</li>',
                '<li>Road Trip Trivia</li>',
                '<li>License Plate Game</li>',
                '<li>The Alphabet Game</li>',
                '<li>Would You Rather?</li>',
                '<li>Hennessy Auto Challenge</li>',
            ]
            return shuffle(arr)
        } 

        const copyContent = () => {
            let x = [
                '<div class=\'contentHeaderContainer\'>\n',
                '<h1 class=\'contentHeader\'>8 Essential Road Trip Games to Play This Summer </h1>\n',
                '<p class=\'contentHeaderParagraph\'>Schedule your Road Trip appointment online now!</p>\n',
                '<div class=\'contentHeaderButtonContainer\'>\n',
                '<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>\n',
                '<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>\n',
                '</div>\n',
                '</div>\n',
                
                '<p>A ' + generateAdverbThree() + ' is an ' + generateAdverbOne() + ' way to see new places, make lifelong memories, and spend quality time with family or friends. With that said, even the most dedicated driver can begin to feel antsy after several hours in the car. That\'s why it\'s ' + generateAdverbTwo() + ' to have a few ' + generateAdverbOne() + ' games for the drive!</p>\n',
                '<p>Car games for road trips can range from the classics like I-Spy to more modern digital options like downloading a Road Trip trivia app.</p>\n',
                '<p>Road trips are back on the rise in popularity, with a survey from The Vacationer suggesting that around 80 percent of Americans will be <a class=\'seoLinks\' href=' + this.props.phone + ' target="_blank">taking a road trip</a> this summer. If you are part of that 80 percent, from ' + this.props.dealer + ' to you, here are eight ' + generateAdverbTwo() + ' road trip games to play this summer:</p>\n',
                '<h2>1. Road Trip Bingo</h2>\n',
                'Road trip bingo is a staple car game ' + generateAdverbFour() + ' for ' + generateAdverbFive() + ' summer road trips with the family.</p>\n',
                roadTripGamesParagraphOne(),
                roadTripGamesParagraphTwo(),
                '<h2>2. Road Trip Scavenger Hunt</h2>\n',
                roadTripGamesParagraphThree(),
                roadTripGamesParagraphFour(),
                roadTripGamesParagraphFive(),
                '<h2>3. I Spy</h2>\n',
                roadTripGamesParagraphSix(),
                roadTripGamesParagraphSeven(),
                roadTripGamesParagraphEight(),
                '<h2>4. Road Trip Trivia</h2>\n',
                '<p>This ' + generateAdverbThree() + ' game tests your trivia knowledge of the places you\'re visiting on your summer trip (or about popular ' + generateAdverbThree() + ' destinations in general.)</p>\n',
                roadTripGamesParagraphNine(),
                '<p>If you\'re looking for a source of some solid ' + generateAdverbThree() + ' trivia, here are a few of our favorites:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripGamesParagraphTen(),
                '</ul>\n',
                '<h2>5. License Plate Game</h2>\n',
                roadTripGamesParagraphEleven(),
                roadTripGamesParagraphTelve(),
                '<h2>6. The Alphabet Game</h2>\n',
                '<p>This one is pretty straightforward.</p>\n',
                roadTripGamesParagraphThirdteen(),
                roadTripGamesParagraphFourteen(),
                '<h2>7. Would You Rather?</h2>\n',
                '<p>One of the all-time best ' + generateAdverbThree() + ' games is "Would You Rather?" The game is simple: one person poses a hypothetical question with two choices, and everyone else in the car votes on which they would choose. </p>\n',
                '<p>For example, "Would you rather drive cross-country in a minivan or a convertible?" </p>\n',
                roadTripGamesParagraphFifteen(),
                roadTripGamesParagraphSixteen(),
                '<h2>8. Hennessy Auto Challenge </h2>\n',
                '<p>This last game comes straight from Hennessy to you!</p>\n',
                roadTripGamesParagraphSeventeen(),
                '<p>Vehicle List:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripGamesParagraphEighteen(),
                '</ul>\n',
                '<p>Essentially, think of our ' + generateAdverbThree() + ' game as I Spy-meets-scavenger-hunting. If you\'re looking for a ' + generateAdverbOne() + ', educational, and unique game to play on your next ' + generateAdverbThree() + ', look no further than Hennessy Auto Challenge!</p>\n',
                '<h2>Need a Recap?</h2>\n',
                '<p>Car ride games are the ' + generateAdverbFour() + ' source of entertainment to pass time on a ' + generateAdverbFive() + ' ' + generateAdverbThree() + '. By now, you should have the best of the best up your sleeve. To recap, our top eight ' + generateAdverbThree() + ' games include:</p>\n',
                '<ul class=\'seoContentP\'>\n',
                roadTripGamesParagraphTwenty(),
                '</ul>\n',
                '<p>Whatever your preference, there\'s sure to be a game that\'s ' + generateAdverbFour() + ' for you and your family. After all, what\'s a ' + generateAdverbThree() + ' without a little friendly competition?</p>\n',
                '<p>At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a ' + this.props.make + ' to take on your ' + generateAdverbThree() + ', you can <a class=\'seoLinks\' href=' + this.props.phone + ' target="_blank">schedule a test drive</a> today. From our family to yours, safe travels this summer!</p>\n',



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
                <h1 className='contentHeader'>8 Essential Road Trip Games to Play This Summer </h1>
                <p className='contentHeaderParagraph'>Schedule your Road Trip appointment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Specials</button></a>
                </div>
            </div>

                <p>{'A ' + generateAdverbThree() + ' is an ' + generateAdverbOne() + ' way to see new places, make lifelong memories, and spend quality time with family or friends. With that said, even the most dedicated driver can begin to feel antsy after several hours in the car. That\'s why it\'s ' + generateAdverbTwo() + ' to have a few ' + generateAdverbOne() + ' games for the drive!'}</p>
                <p>{'Car games for road trips can range from the classics like I-Spy to more modern digital options like downloading a Road Trip trivia app.'}</p>
                <p>{'Road trips are back on the rise in popularity, with a survey from The Vacationer suggesting that around 80 percent of Americans will be <a class=\'seoLinks\' href=' + this.props.phone + ' target="_blank">taking a road trip</a> this summer. If you are part of that 80 percent, from ' + this.props.dealer + ' to you, here are eight ' + generateAdverbTwo() + ' road trip games to play this summer:'}</p>
                <h2>{'1. Road Trip Bingo '}</h2>
                <p>{'Road trip bingo is a staple car game ' + generateAdverbFour() + ' for ' + generateAdverbFive() + ' summer road trips with the family.'}</p>
                {roadTripGamesParagraphOne()}
                {roadTripGamesParagraphTwo()}
                <h2>{'2. Road Trip Scavenger Hunt '}</h2>
                {roadTripGamesParagraphThree()}
                {roadTripGamesParagraphFour()}
                {roadTripGamesParagraphFive()}
                <h2>{'3. I Spy '}</h2>
                {roadTripGamesParagraphSix()}
                {roadTripGamesParagraphSeven()}
                {roadTripGamesParagraphEight()}
                <h2>{'4. Road Trip Trivia'}</h2>
                <p>{'This ' + generateAdverbThree() + ' game tests your trivia knowledge of the places you\'re visiting on your summer trip (or about popular ' + generateAdverbThree() + ' destinations in general.)'}</p>
                {roadTripGamesParagraphNine()}
                <p>{'If you\'re looking for a source of some solid ' + generateAdverbThree() + ' trivia, here are a few of our favorites: '}</p>
                {roadTripGamesParagraphTen()}
                <h2>{'5. License Plate Game'}</h2>
                {roadTripGamesParagraphEleven()}
                {roadTripGamesParagraphTelve()}
                <h2>{'6. The Alphabet Game'}</h2>
                <p>{'This one is pretty straightforward.'}</p>
                {roadTripGamesParagraphThirdteen()}
                {roadTripGamesParagraphFourteen()}
                <h2>{'7. Would You Rather?'}</h2>
                <p>{'One of the all-time best ' + generateAdverbThree() + ' games is "Would You Rather?" The game is simple: one person poses a hypothetical question with two choices, and everyone else in the car votes on which they would choose. '}</p>
                <p>{'For example, "Would you rather drive cross-country in a minivan or a convertible?" '}</p>
                {roadTripGamesParagraphFifteen()}
                {roadTripGamesParagraphSixteen()}
                <h2>{'8. Hennessy Auto Challenge '}</h2>
                <p>{'This last game comes straight from Hennessy to you!'}</p>
                {roadTripGamesParagraphSeventeen()}
                <p>{'Vehicle List:'}</p>
                {roadTripGamesParagraphEighteen()}
                <p>{'Essentially, think of our ' + generateAdverbThree() + ' game as I Spy-meets-scavenger-hunting. If you\'re looking for a ' + generateAdverbOne() + ', educational, and unique game to play on your next ' + generateAdverbThree() + ', look no further than Hennessy Auto Challenge!'}</p>
                <h2>{'Need a Recap?'}</h2>
                <p>{'Car ride games are the ' + generateAdverbFour() + ' source of entertainment to pass time on a ' + generateAdverbFive() + ' ' + generateAdverbThree() + '. By now, you should have the best of the best up your sleeve. To recap, our top eight ' + generateAdverbThree() + ' games include:'}</p>
                {roadTripGamesParagraphTwenty()}
                <p>{'Whatever your preference, there\'s sure to be a game that\'s ' + generateAdverbFour() + ' for you and your family. After all, what\'s a ' + generateAdverbThree() + ' without a little friendly competition?'}</p>
                <p>{'At ' + this.props.dealer + ', we truly believe in treating our customers like family. If you are looking for a ' + this.props.make + ' to take on your ' + generateAdverbThree() + ', you can <a class=\'seoLinks\' href=' + this.props.phone + ' target="_blank">schedule a test drive</a> today. From our family to yours, safe travels this summer!'}</p>
            </div>
        );
    }
}

export default RoadTripGames;