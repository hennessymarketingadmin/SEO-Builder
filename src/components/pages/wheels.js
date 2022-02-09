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
                'font-size: 9px\n',
                '}\n',
                '.contentHeaderParagraph {\n',
                'font-size: 9px\n',
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
                '.seoContentP {\n',
                'font-size: 10px;\n',
                '}\n',
                '.seoContentH {\n',
                'font-size: 12px !important;\n',
                '}\n',
                '}\n',
                '@media screen and (min-width: 420px) and (max-width: 520px) {\n', 
                '.contentHeader {\n',
                'font-size: 12px\n',
                '}\n',
                '.contentHeaderParagraph {\n',
                'font-size: 12px\n',
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
                '.seoContentP {\n',
                'font-size: 12px;\n',
                '}\n',
                '.seoContentH {\n',
                'font-size: 15px !important;\n',
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