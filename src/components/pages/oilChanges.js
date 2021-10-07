import React, { Component } from 'react';

class oilChanges extends Component {

    state = {
        imageUrl: '',
    }
    
    render() {

        const shuffle = (arr, type) => {
            arr.sort(function() {
                return 0.5 - Math.random();
            });

            if (type !== 'list') {
                arr.unshift('<p class=\'seoContentP\'>')
                arr.push('</p>')
            }
            arr.join(' ')
            return arr
        }

        const shuffleAdverb = (words) => {
            let length = words.length
            let index = Math.floor(Math.random() * length)
            return words[index]
        }

        const suffleParagraphs = (p) => {
            let length = p.length
            let index = Math.floor(Math.random() * length)
            return p[index]
        }

        // const generateAdverbOne = () => {
        //     let words = ['dangerous', 'risky', 'perilous', 'unsafe', 'sensitive', 'hazardous', 'delicate']
        //     return shuffleAdverb(words)
        // }

        // const generateAdverbTwo = () => {
        //     let words = ['small', 'low', 'little', 'limited', 'deprived', 'unfilled']
        //     return shuffleAdverb(words)
        // }

        const generateAdverbThree = () => {
            let words = ['premium', 'superior', 'best', 'leading', 'perfect', 'most outstanding', 'mosremarkable']
            return shuffleAdverb(words)
        }

        const generateAdverbFour = () => {
            let words = ['benefits', 'advantages', 'pros']
            return shuffleAdverb(words)
        }

        const generateAdverbFive = () => {
            let words = ['conventional', 'traditional', 'regular', 'ordinary']
            return shuffleAdverb(words)
        }

        const generateAdverbSix = () => {
            let words = ['extra', 'more', 'innumerable']
            return shuffleAdverb(words)
        }

        const generateAdverbSeven = () => {
            let words = ['motor', 'car', 'engine']
            return shuffleAdverb(words)
        }

        const generateSectionOneParagraphOne = () => {
            let arr = [
                this.props.dealer + ' is right here to interpret that question and any ' + generateAdverbSix() + ' service questions that you could have about your ' + this.props.make + '. ',
                'When your ' + generateAdverbSeven() + ' oil level is deprived, it\'s going to cause the engine temperature to rise, and overheating can cause major mechanical troubles in the long run. ',
                'Therefore, it is extremely important to keep up with ' + generateAdverbFive() + ' oil changes. ',
                'Another risky characteristic of ' + generateAdverbSeven() + ' oil is cooling the components. ',
                'They ride on a skinny layer of ' + generateAdverbSeven() + ' oil inside of the engine. ',
                'As ' + generateAdverbSeven() + ' oil circulates, it carries away several the warmth generated because of the combustion process. ',
                'As owners, we understand we need to alternate our engine’s automobile oil at ' + generateAdverbFive() + ' intervals, whether this is searching on the decal at the windshield or while our maintenance light turns on. ',
                'It is important to test your ' + generateAdverbSeven() + ' oil level regularly to ' + this.props.make + ' sure these problems don\'t occur. ',
                'Did you know that the pistons and ' + generateAdverbSix() + ' engine components in no way are available to touch each other? ',
                'Oil maintains your engine\'s components separated from each other and helps prevent damage, knocking, and friction. ',
                'When you ask anyone about automobile repair or car repair, the most everyday service that everybody is aware of is an automobile oil change. ',
            ]
            return shuffle(arr)
        }

        const generateSectionOneParagraphTwo = () => {
            let arr = [
                this.props.dealer + ' here to interpret that question and any further service questions that you just may have concerning your ' + this.props.make + '. ',
                'Once your ' + generateAdverbSeven() + ' oil level is deprived, it\' going to cause the engine temperature to rise, and overheating will cause major mechanical troubles within the long run. ',
                'Therefore, it\'s very necessary to keep up with ' + generateAdverbFive() + ' oil changes. ',
                'Another risky characteristic of ' + generateAdverbSeven() + ' oil is cooling the components. ',
                'They ride on a thin layer of ' + generateAdverbSeven() + ' oil within the engine. ',
                'As ' + generateAdverbSeven() + ' oil circulates, it carries away many the heat generated thanks to the combustion process. ',
                'As owners, we understand we need to alternate our engine’s automobile oil at ' + generateAdverbFive() + ' intervals, whether or not this can be looking out on the decal at the windshield or while our maintenance light turns on. ',
                'It\'s necessary to check your ' + generateAdverbSeven() + ' oil level frequently to make certain these issues don\'t occur. ',
                'Did you know that the pistons and additional engine elements in no way are accessible to touch one another? ',
                'Oil keeps your engine\'s components separated from each other and helps stop damage, knocking, and friction. ',
                'When you ask anyone about automobile repair, the most everyday service that everyone is aware of is an automobile oil change. ',
            ]
            return shuffle(arr)
        }

        const generateSectionOneParagraphThree = () => {
            let arr = [
                this.props.dealer + ' is here to interpret this question and any other service questions you have about your ' + this.props.make + '. ',
                'Once your engine runs out of oil, the engine temperature rises, and overheating creates major long-term mechanical problems. ',
                'Hence, it is very important to keep up with ' + generateAdverbFive() + ' oil changes. ',
                'Another risky property of engine oil is that it cools the components that move on a thin layer of engine oil inside the engine. ',
                'As the engine oil circulates, much of the heat generated by the combustion process is dissipated. ',
                'As owners, we understand that we need to change the auto oil in our engine on a regular basis, whether it\'s on the sticker on the windshield or while our service light is on. ',
                'You need to check your engine\'s oil level regularly to make sure these issues are not occurring. ',
                'Did you know that the pistons and additional engine elements are inaccessible to touch? ',
                'Components are separated from each other and helps to avoid damage, shock, and friction. ',
                'When asking someone about a car repair, the everyday service everyone knows is a car oil change. ',
            ]
            return shuffle(arr)
        }

        const generateSectionOneParagraphFour = () => {
            let arr = [
                this.props.dealer + ' is here to interpret this and any other service questions you may have regarding your ' + this.props.make + '. ',
                'Once the engine runs out of oil, the engine temperature rises, and overheating creates serious mechanical problems in the long run. ',
                'Therefore, it is very important to follow up with ' + generateAdverbFive() + ' oil changes. ',
                'Another risky property of engine oil is that it cools components moving on a thin layer of engine oil inside the engine. ',
                'As engine oil is circulated, much of the heat generated by the combustion process is dissipated. ',
                'As owners, we understand that we need to regularly change the car oil in our engine, whether it\'s on the sticker on the windshield or while our service light is on. ',
                'It is necessary to regularly check the engine oil level to make sure that these problems do not occur. ',
                'Did you know that the pistons and additional parts of the engine are inaccessible to the touch? ',
                'The components are separated from each other and help prevent damage, shock, and friction. ',
                'When you ask someone to fix a car, everyone knows that the daily service is a car oil change. ',
            ]
            return shuffle(arr)
        }

        // ----------------------------------------

        const generateSectionTwoParagraphOne = () => {
            let arr = [
                'Synthetic-blend oil gives similar alternatives located in complete synthetic ' + generateAdverbSeven() + ' oil without the huge price tag, every now and then at the equal charge as ' + generateAdverbFive() + ' ' + generateAdverbSeven() + ' oil. ',
                'No matter how quiet your engine is, it is important to consider that there is a number of combustions taking place internally. ',
                'The ' + generateAdverbThree() + ' way to make certain that your engine is in advanced health is to keep up with your frequently scheduled oil changes in addition to ' + generateAdverbSix() + ' maintenance items. ',
                'Your engine is the heart of your vehicle. ',
                'Much like your body, you want to make sure that you take care of it well. ',
                'You may hear it called part-synthetic or semi-synthetic, however they are the same thing. ',
                'Synthetic blend ' + generateAdverbSeven() + ' oil combines the advanced traits of ' + generateAdverbFive() + ' ' + generateAdverbSeven() + ' oil and complete synthetic oil. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwoParagraphTwo = () => {
            let arr = [
                'Synthetic-blend oil offers similar alternatives located in complete synthetic ' + generateAdverbSeven() + ' oil without the massive price tag, every now and then at the equal charge as standard ' + generateAdverbSeven() + ' oil. ',
                'Regardless of however quiet your engine is, it\'s vital to think about that there\'s variety of combustions happening internally. ',
                'The ' + generateAdverbThree() + ' way to ensure that you engine is in advanced health is to stay up with your frequently scheduled oil changes in addition to ' + generateAdverbSix() + ' maintenance items. ',
                'Your engine is the heart of your vehicle. ',
                'Very similar to your body, you would like to make sure that you take care of it well. ',
                'You\'ll hear it referred to as part-synthetic or semi-synthetic, but they\'re a similar thing. ',
                'Synthetic blend ' + generateAdverbSeven() + ' oil combines the advanced traits of standard ' + generateAdverbSeven() + ' oil and complete synthetic oil. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwoParagraphThree = () => {
            let arr = [
                'Synthetic oil blends offer similar alternatives, embedded in fully synthetic ' + generateAdverbSeven() + ' oil, without the high price, sometimes with the same fee as standard ' + generateAdverbSeven() + ' oil. ',
                'Regardless of how quiet your engine is, it\'s important to note that there are a variety of combustions that take place internally. ',
                'The ' + generateAdverbThree() + ' way to make sure your engine is in advanced condition is to keep up with frequently scheduled oil changes and other maintenance items. ',
                'Your engine is the heart of your vehicle, very similar to your body, you want to take good care of it. ',
                'You\'ll hear it called part-synthetic or semi-synthetic, but they are somewhat similar. ',
                'Synthetic Blend ' + generateAdverbSeven() + ' Oil combines the advanced properties of standard ' + generateAdverbSeven() + ' oil and fully synthetic oil. '
            ]
            return shuffle(arr)
        }

        // ----------------------------------------


        const generateSectionThreeParagraphOne = () => {
            let arr = [
                'Full synthetic oils include much less impurities than synthetic blend oil, however, blends nonetheless provide advanced resistance to oxidation and preserve their overall performance in intense temperatures. ',
                'While chemically different, artificial blend ' + generateAdverbSeven() + ' oil shares ' + generateAdverbSix() + ' traits of a complete synthetic. ',
                'Synthetic blends also are an advanced choice for drivers who put huge strain on their engines and engage in activities like towing huge trailers, hauling, or off-roading. ',
                'What is the distinction among synthetic blend oil vs completely artificial oil, you would possibly ask? ',
                'Synthetic mixture vehicle oils are a collection of each artificial and everyday base oils, plus a few additives. ',
                'Learn ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of synthetic mixture ' + generateAdverbSeven() + ' oil at ' + this.props.dealer + ' serving ' + this.props.city + '! ',
            ]
            return shuffle(arr)
        }

        const generateSectionThreeParagraphTwo = () => {
            let arr = [
                'Full synthetic oils embody a lot of less impurities than synthetic blend oil, however, blends still give advanced resistance to oxidation and preserve their overall performance in intense temperatures. ', 
                'Whereas chemically different, artificial blend oil shares a lot of traits of a complete synthetic. ',
                'Synthetic blends are a sophisticated selection for drivers who place vast strain on their engines and have interaction in activities like towing huge trailers, hauling, or off-roading. ',
                'What\'s the distinction among synthetic blend oil vs full synthetic oil, you\'d presumably ask? Synthetic mixture vehicle oils are a set of every artificial and everyday base oils, and a couple of additives. ',
                'Learn ' + generateAdverbSix() + ' regarding the ' + generateAdverbFour() + ' of synthetic mixture oil at ' + this.props.dealer + ' serving ' + this.props.city + '! ',
            ]
            return shuffle(arr)
        }

        const generateSectionThreeParagraphThree = () => {
            let arr = [
                'What is the difference between synthetic blend oil and full synthetic oil? Fully synthetic oils contain far fewer impurities than synthetic blend oils; however, blends still offer improved oxidation resistance and retain their overall performance at high temperatures. ',
                'While chemically different synthetic oil blends share many of the characteristics of full synthetic oil. ',
                'Synthetic blends are a nifty choice for drivers who put a lot of pressure on their engines and interact with activities like pulling large trailers, towing, or driving off-road vehicles. ',
                'Vehicle oils are a collection of all everyday synthetic base oils and a few additives. ',
                'Learn ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of the synthetic blended oil at ' + this.props.dealer + '. ',
            ]
            return shuffle(arr)
        }

        const generateSectionThreeParagraphFour = () => {
            let arr = [
                'What is the difference between a synthetic blend oil and a full synthetic oil? ',
                'Full synthetic oils contain much less impurities than synthetic blend oils; however, the blends still offer better resistance to oxidation and maintain their overall performance at elevated temperatures. ',
                'Although chemically different synthetic oil blends share many characteristics of a full synthetic oil. ',
                'Synthetic blends are a good choice for drivers who put a lot of strain on their engines and interact with activities such as towing large trailers, towing, or driving off-road vehicles. ',
                'Vehicle oils are a collection of all common synthetic base oils and some additives. ',
                'Learn ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of Synthetic Blended Oil at ' + this.props.dealer + ' serving ' + this.props.city + '. ',
            ]
            return shuffle(arr)
        }

        // ----------------------------------------


        const generateSectionFourParagraphOne = () => {
            let arr = [
                this.props.dealer + ' offers a collection of automobile oil changes to keep your ' + this.props.make + ' running strong. ',
                'We are proud to serve any ' + this.props.make + ' owners and are the main place to service your ' + this.props.make + ' in ' + this.props.city + ' and the greater metro area. ',
                'A ' + generateAdverbSeven() + ' oil change is one of the most initial and excellent service to your automobile. ',
                'Our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> strives to successfully diagnose/repair your car the first time, whether you want an oil change or a brand-new transmission. ',
                'Most manufacturers suggest getting your oil & filter changed any 3,000-5,000 miles, however it is worth it to check your owner\'s guide and with your ' + this.props.dealer + ' to discover the intervals that work ' + generateAdverbThree() + ' for your car. ',
                'This saves you hours at the dealership, cash on needless upkeep or unneeded auto repair. ',
                'Contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">schedule your service appointment</a> or to find the store hours for the advanced appointment time for you. We look forward to working with you. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourParagraphTwo = () => {
            let arr = [
                this.props.dealer + ' offers a group of automobile oil changes to keep your ' + this.props.make + ' running strong. ',
                'We are proud to serve any ' + this.props.make + ' owners and are the main place to service your ' + this.props.make + ' in ' + this.props.city + ' and the greater metro area. ',
                'An oil change is one among the most initial and wonderful service to your automobile. ',
                'Our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> strives to successfully diagnose/repair your car the first time, whether you want an oil change or a brand-new transmission. ',
                'Most manufacturers recommend obtaining your oil & filter changed any 3,000-5,000 miles, but it\'s worthwhile to check your owner guide and with your ' + this.props.dealer + ' to get the intervals that work ' + generateAdverbThree() + ' for your car. ',
                'This saves you hours at the dealership, money on unnecessary repairs or inessential automotive vehicle repair. ',
                'Contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">schedule your service appointment</a> or to find the shop hours for the advanced appointment time for you. We look forward to operating with you. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourParagraphThree = () => {
            let arr = [
                this.props.dealer + ' offers a range of auto oil changes to keep your ' + this.props.make + ' running. ',
                'We take pride in serving every ' + this.props.make + ' owner and are the ' + generateAdverbThree() + ' place to service your ' + this.props.make + ' in ' + this.props.city + ' and the greater area. ',
                'An oil change is one of the most initial and wonderful services for your car. ',
                'Our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> strives to successfully diagnose / repair your car the first time, whether you want an oil change or a new transmission. ',
                'Most manufacturers recommend changing the oil and filter every 3,000-5,000 miles, but it is worth reading your owner\'s manual and contacting your ' + this.props.dealer + '. ',
                'This saves you hours in the dealership and money on unnecessary repairs. ',
                'Contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to arrange your <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">service appointment</a> or to determine the ' + generateAdverbThree() + ' times for the service appointment for you. ',
                'We look forward to working with you. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourParagraphFour = () => {
            let arr = [
                this.props.dealer + ' offers a range of car oil changes to keep your ' + this.props.make + ' running. ',
                'We take pride in serving every ' + this.props.make + ' owner and are the ' + generateAdverbThree() + ' place to repair your ' + this.props.make + ' in ' + this.props.city + ' and the wider region. ',
                'One of the first and most wonderful services for your car is an oil change. ',
                'Our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> is committed to successfully diagnosing / repairing your car the first time, whether you want an oil change or a new transmission. ',
                'Most manufacturers recommend changing the oil and filter every 3,00-5,000 miles, but it\'s worth reading your owner\'s manual and contacting your ' + this.props.dealer + '. ',
                'This saves hours at the dealership and money on unnecessary repairs. ',
                'Contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to schedule your <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">service appointment</a> or to determine the ' + generateAdverbThree() + ' appointment time for you. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionFiveParagraphOne = () => {
            let arr = [
                'Full synthetic ' + generateAdverbSeven() + ' oil is designed to be the ' + generateAdverbThree() + ' first-rate ' + generateAdverbSeven() + ' oil to your vehicle. ',
                'Full synthetic ' + generateAdverbSeven() + ' oil helps keep your engine as new as possible, which adds up to you having ' + generateAdverbSix() + ' assurance on the road. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> to research ' + generateAdverbSix() + ' about the ' + generateAdverbFour() + ' of synthetic ' + generateAdverbSeven() + ' oil and ' + generateAdverbSix() + ' favors for your next oil change. ',
                'It gives the advanced safeness around. ',
                'However, some clients nonetheless ask..."What are the ' + generateAdverbFour() + ' of full synthetic ' + generateAdverbSeven() + ' oil?" and "Why is it so expensive? ',
                'Synthetic ' + generateAdverbSeven() + ' oil is particularly made from chemicals and the formulations allow scientists to create ' + generateAdverbSeven() + ' oil that at a molecular degree that offer ' + generateAdverbSix() + ' complete safeness. ',
                'This means a chain of distinct selections you may not discover in everyday oils that consist of a better viscosity index, ' + generateAdverbSix() + ' resistance to oxidation thermal breakdown and decreased sludge issues. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFiveParagraphTwo = () => {
            let arr = [
                'Full synthetic ' + generateAdverbSeven() + ' oil is intended to be the most effective first-rate ' + generateAdverbSeven() + ' oil to your vehicle. ',
                'Full synthetic ' + generateAdverbSeven() + ' oil helps keep your engine as new as possible, which adds up to you having additional assurance on the road. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> to research ' + generateAdverbSix() + ' concerning the ' + generateAdverbFour() + ' of synthetic ' + generateAdverbSeven() + ' oil and ' + generateAdverbSix() + ' favors for your next oil change. ',
                'It provides the advanced safeness around. ',
                'However, some shoppers nonetheless ask..."What are the ' + generateAdverbFour() + ' of full synthetic ' + generateAdverbSeven() + ' oil?" and "Why is it so expensive? ',
                'Synthetic ' + generateAdverbSeven() + ' oil is especially made up of chemicals and therefore the formulations enable scientists to create ' + generateAdverbSeven() + ' oil that at a molecular degree that supply a lot of complete safeness. ',
                'This suggests a sequence of distinct choices you will not discover in everyday oils that incorporates a ' + generateAdverbSix() + ' robust viscousness index, additional resistance to oxidization thermal breakdown and faded sludge issues. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFiveParagraphThree = () => {
            let arr = [
                'Fully synthetic engine oil is said to be the most effective ' + generateAdverbThree() + ' engine oil for your vehicle. ',
                'Fully synthetic engine oil helps to keep your engine as new as possible and offers you additional safety on the road. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> for ' + generateAdverbSix() + ' information about the ' + generateAdverbFour() + ' of synthetic ' + generateAdverbSeven() + ' oil and countless ' + generateAdverbFour() + ' for your next oil change. ',
                'However, some drivers ask ... "What are the ' + generateAdverbFour() + ' of fully synthetic ' + generateAdverbSeven() + ' oil?" and "Why is it so expensive? ',
                'Synthetic ' + generateAdverbSeven() + ' oil is made up of chemicals, and so the formulas allow scientists to develop a ' + generateAdverbSeven() + ' oil that offers a great deal of absolute safety at the molecular level. ',
                'This suggests a sequence of different options that you will find in everyday life. ',
                'Failed to discover oils that have a ' + generateAdverbSix() + ' robust viscosity index, added resistance to oxidation, thermal degradation, and discolored sludge issues. ',

            ]
            return shuffle(arr)
        }

        const generateSectionFiveParagraphFour = () => {
            let arr = [
                'Fully synthetic ' + generateAdverbSeven() + ' oil is considered the most efficient ' + generateAdverbThree() + ' ' + generateAdverbSeven() + ' oil for your vehicle. ',
                'Full synthetic ' + generateAdverbSeven() + ' oil helps keep your engine as new as possible and gives you ' + generateAdverbSix() + ' safety on the road. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> for ' + generateAdverbSix() + ' information on the ' + generateAdverbFour() + ' of synthetic ' + generateAdverbSeven() + ' oil and the countless ' + generateAdverbFour() + ' for your next oil change. ',
                'However, some drivers ask… "What are the ' + generateAdverbFour() + ' of fully synthetic ' + generateAdverbSeven() + ' oil?" and "Why is it so expensive? ',
                'Synthetic ' + generateAdverbSeven() + ' oil is made up of chemicals, so the formulas allow scientists to develop ' + generateAdverbSeven() + ' oil that offers absolute safety at the molecular level. ',
                'It suggests a sequence of different options that you will find in everyday life. ',
                'Could not find oils with a higher viscosity index, higher resistance to oxidation, thermal degradation, and sludge discoloration problems. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionSixParagraphOne = () => {
            let arr = [
                'Depending on the location, a synthetic oil change could cost two times as much as a ' + generateAdverbFive() + ' oil change! ',
                'You will commonly discover this at ' + generateAdverbSix() + ' oil change places like Express oil change, Jiffy Lube or Valvoline. ',
                'Conventional ' + generateAdverbSeven() + ' oil has ' + generateAdverbSix() + ' choices. ',
                'Even though synthetic oils are typically crucial to ' + generateAdverbFive() + ' oils or blends in terms of excessive and low-temperature overall performance and durability, if the components are not prudent to your car, it is now no longer the prudent type of oil to apply and will damage your engine. ',
                'Conventional oil changes are nearly usually inexpensive than synthetic-combination or full synthetic oil changes. ',
                'Like synthetic oil, ' + generateAdverbFive() + ' ' + generateAdverbSeven() + ' oil starts its existence in the ground as crude oil and is then refined and combined with distinct chemical components to fulfill the desires of common car engines. ',
                'Conventional ' + generateAdverbSeven() + ' oil is the most commonly used kind of oil. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixParagraphTwo = () => {
            let arr = [
                'Depending on the location, an artificial oil change may value two times the maximum amount as a standard oil change! ',
                'You may ordinarily discover this at countless oil change places like Express oil change, Jiffy Lube or Valvoline. ',
                'Conventional ' + generateAdverbSeven() + ' oil has additional choices. ',
                'Even though synthetic oils are usually crucial to ' + generateAdverbFive() + ' oils or blends in terms of excessive and low-temperature overall performance and durability, if the elements don\'t seem to be prudent to your car, it\'s now no longer the prudent sort of oil to use and can damage your engine. ',
                'Conventional oil changes are nearly usually cheaper than synthetic-combination or full artificial oil changes. ',
                'Like synthetic oil, typical ' + generateAdverbSeven() + ' oil starts its existence within the ground as fossil oil and is that then refined and combined with distinct chemical elements to meet the wishes of common automotive engines. ',
                'Conventional ' + generateAdverbSeven() + ' oil is the most ordinarily used kind of oil. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixParagraphThree = () => {
            let arr = [
                'Depending on the location, an artificial oil change can cost twice as much as a normal oil change! ',
                'You can usually find this at countless oil change shops such as the Express, Jiffy Lube or Valvoline oil change. ',
                'Conventional ' + generateAdverbSeven() + ' oil offers additional options. ',
                'While synthetic oils are often critical to ' + generateAdverbFive() + ' oils or blends for ' + generateAdverbThree() + ' performance and overall durability and at low temperatures, if the items do not seem reasonable for your car it can harm ' + generateAdverbFive() + ' oil changes. ',
                'Like synthetic oil, ' + generateAdverbFive() + ' ' + generateAdverbSeven() + ' oil begins its existence in the ground as fossil oil and is then refined and combined with various chemical elements to meet the needs of popular automotive engines. ',
                'Conventional ' + generateAdverbSeven() + ' oil is the most used type of oil. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixParagraphFour = () => {
            let arr = [
                'Depending on your location, an artificial oil change can cost twice as much as a ' + generateAdverbFive() + ' oil change! ',
                'You can usually find it in countless oil change stores like Express Oil Change, Jiffy Lube, or Valvoline. ',
                'Conventional ' + generateAdverbSeven() + ' oil offers additional options. ',
                'While synthetic oils are often essential to ' + generateAdverbFive() + ' oils or blends for ' + generateAdverbThree() + ' performance and overall durability, and at low temperatures, if the elements don\'t seem reasonable for your car, they can damage ' + generateAdverbFive() + ' oil changes. ',
                'Like synthetic oil, ' + generateAdverbFive() + ' ' + generateAdverbSeven() + ' oil begins its existence in the ground as fossil oil and is then refined and combined with various chemical elements to meet the needs of popular automotive engines. ',
                'Conventional ' + generateAdverbSeven() + ' oil is the most used type of oil. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionSevenParagraphOne = () => {
            let arr = [
                'This kind of oil can help decrease oil consumption, limit oil leaks and oil spills, and can help decrease smoke and emissions in older engines. ',
                'Whether the car is five years old or 25 years old, the ' + generateAdverbSix() + ' you drive or the longer you drive, the ' + generateAdverbSix() + ' the miles add up. ',
                'This can also cause a collection of engines, overall performance, and protection issues, making it even ' + generateAdverbSix() + ' perilous to maintain any protection needs for your ' + this.props.make + '. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to research ' + generateAdverbSix() + '! ',
                this.props.dealer + ' offers high mileage vehicle oils designed mainly for automobiles with ' + generateAdverbSix() + ' than 75,000 miles to keep them running stronger for longer. ',
                'High mileage ' + generateAdverbSeven() + ' oil is mainly designed for ' + generateAdverbSeven() + ' with greater than 75,000 miles. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSevenParagraphTwo = () => {
            let arr = [
                'This kind of oil can help decrease oil consumption, limit oil leaks and oil spills, and may help decrease smoke and emissions in older engines. ',
                'Whether the automobile is 5 years old or twenty-five years old, the ' + generateAdverbSix() + ' you drive or the longer you drive, the ' + generateAdverbSix() + ' the miles add up. ',
                'This will additionally cause a set of engines, overall performance, and protection issues, making it even ' + generateAdverbSix() + ' dangerous to keep up any protection needs for your ' + this.props.make + '. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to learn ' + generateAdverbSix() + '! ' + this.props.dealer + ' offers high mileage vehicle oils designed principally for vehicles with over 75,000 miles to keep them running stronger for longer. ',
                'High mileage ' + generateAdverbSeven() + ' oil is principally designed for ' + generateAdverbSeven() + ' with larger than 75,000 miles. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSevenParagraphThree = () => {
            let arr = [
                'This type of oil can help reduce oil consumption, limit oil leaks and oil spills, and can help reduce smoke and emissions in older engines. ',
                'Whether the car is 5 or 25 years old, the ' + generateAdverbSix() + ' you drive or the longer you drive, the ' + generateAdverbSix() + ' the miles add up. ',
                'This also creates a number of engine, overall performance, and protection issues, making it even ' + generateAdverbSix() + ' dangerous to meet your ' + this.props.make + '\'s protection needs. ',
                'High Mileage automotive oils are primarily designed for vehicles with ' + generateAdverbSix() + ' than 75,000 miles to keep them running longer. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to find out ' + generateAdverbSix() + '! ',
            ]
            return shuffle(arr)
        }

        const generateSectionSevenParagraphFour = () => {
            let arr = [
                'This type of oil can help reduce oil consumption, limit oil leaks and oil spills, and can help reduce smoke and emissions in older engines. ',
                'Whether the car is 5 or 25 years old, the longer you drive or the longer you drive, the ' + generateAdverbSix() + ' kilometers accumulate. ',
                'It also creates a number of engine, overall performance and protection issues, making it even ' + generateAdverbSix() + ' dangerous to meet your ' + this.props.make + '\'s protection needs. ',
                'High Mileage ' + generateAdverbSeven() + ' Oils are primarily designed for vehicles over 75,000 miles to keep them running longer. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> today to find out ' + generateAdverbSix() + '! ',
            ]
            return shuffle(arr)
        }

        // ----------------------------------------


        const generateSectionEightParagraphOne = () => {
            let arr = [
                'Most engines require anywhere among five to eight quarts of ' + generateAdverbSeven() + ' oil. ',
                'For example, a four-cylinder engine would require at least five quarts of oil and a 6-cylinder engine would require around 6 quarts of ' + generateAdverbSeven() + ' oil. ',
                'How much ' + generateAdverbSeven() + ' oil you must use relies greatly on the kind of automobile, engine length, and kind of oil. ',
                'For example, four-cylinder passenger vehicles take much less automobile oil, and normally use ' + generateAdverbFive() + ' oil, as compared to an automobile with a high-overall performance V-eight engine, which can also additionally require complete artificial automobile oil. ',
                'We look forward to helping you with any of your car needs! ',
                'Give ' + this.props.dealer + ' a <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">call</a> today and ask for one of our single carrier advisers for additional information. ',
            ]
            return shuffle(arr)
        }

        const generateSectionEightParagraphTwo = () => {
            let arr = [
                'Most engines need anywhere among five to eight quarts of ' + generateAdverbSeven() + ' oil. ',
                'For example, a four-cylinder engine would require a minimum of five quarts of oil and a 6-cylinder engine would require around 6 quarts of ' + generateAdverbSeven() + ' oil. ',
                'How much ' + generateAdverbSeven() + ' oil you need to use depends greatly on the kind of automobile, engine length, and type of oil. ',
                'For example, four-cylinder passenger vehicles take much less automobile oil, and usually use ' + generateAdverbFive() + ' oil, as compared to an automobile with a high-overall performance V-eight engine, which may also additionally need complete artificial automobile oil. ',
                'We look forward to helping you with any of your automobile needs! ',
                'Give ' + this.props.dealer + ' a <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">call</a> today and ask for one of our single carrier advisers for added information. ',
            ]
            return shuffle(arr)
        }

        const generateSectionEightParagraphThree = () => {
            let arr = [
                'Most engines require between five and eight quarts of ' + generateAdverbSeven() + ' oil. ',
                'For example, a four-cylinder engine would use at least five quarts of oil, and a six-cylinder engine would need about 6 quarts of ' + generateAdverbSeven() + ' oil. ',
                'We look forward to supporting you in all your car-related matters! <a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">Call</a> ' + this.props.dealer + ' today and ask one of our service advisors for ' + generateAdverbSix() + ' information. ',
            ]
            return shuffle(arr)
        }

        const generateSectionEightParagraphFour = () => {
            let arr = [
                'Most engines require between five and eight quarts of ' + generateAdverbSeven() + ' oil. ',
                'For example, a four-cylinder engine would use at least five quarts of oil and a six-cylinder engine would require about 6 quarts of ' + generateAdverbSeven() + ' oil. ',
                'We look forward to assisting you in all your automotive problems! ',
                '<a class=\'seoLinks\' href=\'tel:' + this.props.phone + '\' target="_blank">Call</a> ' + this.props.dealer + ' today and ask one of our service advisors for ' + generateAdverbSix() + ' information. ',
            ]
            return shuffle(arr)
        }

        // ----------------------------------------


        const generateSectionNineParagraphOne = () => {
            let arr = [
                <li>{'<li>Protects the engine components from corrosion - Single of the additives present in most oils is particularly there to assist to decrease oxidation and save you corrosion.</li>'}</li>,
                <li>{'<li>Keeps the ' + this.props.make + ' engine real - This is outstanding to keep the engine running at maximum efficiency. Oil picks up particles and dirt debris and carries them to the automobile oil filter, in which they become trapped. This reduces the threat of dust constructing up inside the engine and inflicting harm to the engine. </li>'}</li>,
                <li>{'<li>Helps to decrease warmness - Aside from the explosions because of the spark plug and gasoline, warmness is constituted of the friction of engine components and immoderate warmness can reason sure harm to high-quality engine components. As ' + generateAdverbSeven() + ' oil moves across the engine, heat is carried away to cooler components. This dissipation of warmth method that no single place of the engine has to emerge as too hot. </li>'}</li>,
                <li>{'<li>Prevents engine knocking - Since components, like your engine pistons, do not touch, the automobile oil offers lubrication and prevents the components from touching. This helps prevents issues and harm because of engine knocking.</li>'}</li>,
                <li>{'<li>To help to improve gas efficiency - The slipperier the engine components then the much less pressure mandatory to transport them, so much less gas is utilized by the engine.</li>'}</li>,
            ]
            return shuffle(arr, 'list')
        }

        const generateSectionNineParagraphTwo = () => {
            let arr = [
                <li>{'<li>Protects the engine parts from corrosion - Single of the additives present in most oils is especially there to help to decrease oxidization and prevent corrosion.</li>'}</li>,
                <li>{'<li>Keeps the ' + this.props.make + ' engine real - this is often outstanding to stay the engine running at most efficiency. Oil picks up particles and dirt rubbish and carries them to the car oil filter, during which they become trapped. This reduces the threat of dust constructing up within the engine and inflicting hurt to the engine.</li>'}</li>,
                <li>{'<li>Helps to decrease high temperature - aside from the explosions due to the spark plug and gasoline, high temperature is brought about of the friction of engine parts and immoderate warmness can reason certain damage to high-quality engine components. As oil moves across the engine, heat is carried away to cooler components. This dissipation of heat method that no single place of the engine needs to emerge as too hot.</li>'}</li>,
                <li>{'<li>Prevents engine knocking - Since components, like your engine pistons, don\'t touch, the car oil offers lubrication and prevents the components from touching. This helps prevents problems and harm because of engine knocking.</li>'}</li>,
                <li>{'<li>To help to boost gas potency - The slipperier the engine parts then the much less pressure necessary to move them, so much less gas is used by the engine. </li>'}</li>,
            ]
            return shuffle(arr, 'list')
        }

        const generateSectionNineParagraphThree = () => {
            let arr = [
                <li>{'<li>Protects engine parts from corrosion, - One of the additives in most oils is specifically designed to reduce oxidation and prevent corrosion.</li>'}</li>,
                <li>{'<li>Keeps the ' + this.props.make + ' engine real - this is often great for running the engine at maximum efficiency. The oil collects the particles and dirt and transports them to the car\'s oil filter, where they are trapped. This reduces the risk of dust building up inside.</li>'}</li>,
                <li>{'<li>Helps reduce high temperatures - in addition to spark plug and gasoline explosions, high temperatures are caused by friction between engine parts, and excessive heat can damage high-quality engine components. This method of heat dissipation doesn\'t need to get too hot anywhere in the engine.</li>'}</li>,
                <li>{'<li>Prevents Engine Shocks - Because components such as engine pistons do not touch, auto oil provides lubrication and prevents components from touching. This will help prevent engine knocking problems and damage.</li>'}</li>,
                <li>{'<li>To Increase Gas Efficiency - The ' + generateAdverbSix() + ' slippery the engine parts, the less pressure it takes to move them, so the engine uses less gasoline.</li>'}</li>,
            ]
            return shuffle(arr, 'list')
        }

        const generateSectionNineParagraphFour = () => {
            let arr = [
                <li>{'<li>Protects engine parts from corrosion - One of the additives in most oils is specially formulated to reduce oxidation and prevent corrosion.</li>'}</li>,
                <li>{'<li>Retains the real ' + this.props.make + ' engine - which is often ideal for running the engine at maximum efficiency. The oil collects particles and dirt and carries them to the car\'s oil filter, where they are trapped. This reduces the risk of dust accumulation inside.</li>'}</li>,
                <li>{'<li>Helps reduce high temperatures - In addition to spark plug and gasoline explosions, high temperatures are caused by friction between engine parts, and excessive heat can damage high quality engine components. This method of heat dissipation does not need to overheat anywhere on the ' + generateAdverbSeven() + '.</li>'}</li>,
                <li>{'<li>Prevents engine shock - Since components such as the engine pistons do not touch each other, car oil provides lubrication and prevents contact of the components. This will help prevent knocking problems and engine damage.</li>'}</li>,
                <li>{'<li>To increase gas efficiency - The slicker the slippery parts of the engine, the lower the pressure required to move them, so that the engine uses less gasoline.</li>'}</li>,
            ]
            return shuffle(arr, 'list')
        }

        // ----------------------------------------


        const generateSectionTenParagraphOne = () => {
            let arr = [
                'For example, four-cylinder passenger vehicles take much less oil, and generally use ' + generateAdverbFive() + ' oil, in comparison to an automobile with a high-overall performance V-eight engine, which can also additionally require complete synthetic ' + generateAdverbSeven() + ' oil. ',
                'Oil change charges also vary, relying on the sort of automobile, engine length, and sort of oil. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> page today to see our current oil change offers on ' + this.props.make + ' or schedule your appointment online! ',
                'Either way, ' + this.props.dealer + ' gives a collection of <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a> any month that can be much less than you think. ',
                'Any vehicle oil change is achieved through our factory-trained mechanics and consists of a multi-point inspection, as well. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTenParagraphTwo = () => {
            let arr = [
                'For example, four-cylinder passenger vehicles take a lot of less oil, and usually use ' + generateAdverbFive() + ' oil, as compared to an automobile with a high-overall performance V-eight engine, which may also additionally need complete synthetic ' + generateAdverbSeven() + ' oil. ',
                'Oil change charges also vary, relying on the type of automobile, engine length, and type of oil. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> page today to see our current car care offers on ' + this.props.make + ' or schedule your appointment online! ',
                'Either way, ' + this.props.dealer + ' offers a group of <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a> any month that may be much less than you think. ',
                'Any vehicle oil change is achieved through our factory-trained mechanics and consists of a multi-point inspection, as well. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTenParagraphThree = () => {
            let arr = [
                'For example, four-cylinder passenger cars use much less oil and typically use ' + generateAdverbFive() + ' oil compared to a vehicle with an overall powerful V-eight engine which may also use fully synthetic engine oil. ',
                'Visit our <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> page today to view our current ' + this.props.make + ' car care offers or to ' + this.props.make + ' an appointment online. ',
                'Either way, ' + this.props.dealer + ' offers oil change vouchers each month, which may be a lot less than you think. ',
                'Every vehicle oil change is performed by our factory-trained mechanics and includes a multi-point inspection as well. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTenParagraphFour = () => {
            let arr = [
                'For example, passenger cars with four cylinders consume much less oil and generally use ' + generateAdverbFive() + ' oil than a vehicle with an overall powerful V-eight engine which can also use fully synthetic ' + generateAdverbSeven() + ' oil. ',
                'Either way, ' + this.props.dealer + ' offers monthly <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a>, which can be a lot cheaper than you might think. ',
                'Each vehicle oil change is performed by our factory-trained mechanics and also includes a multi-point inspection. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionElevenParagraphOne = () => {
            let arr = [
                'You also can view our current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> here and schedule your ' + this.props.make + ' oil change appointment directly from the coupon. ',
                this.props.dealer + ' gets you inside and outside quickly while you want your automobile oil changed. ',
                'Short on time? Let us help! Our auto mechanics are licensed to work on any ' + this.props.make + '. ',
                'We look forward to seeing you! ',
                'We additionally feature online scheduling, so that you can come in at a time that works for your busy schedule! ',
                'If you have ' + generateAdverbSix() + ' cars you want to be serviced, bring them to our dealership located at ' + this.props.address + '! ' + this.props.dealer + ' is proud to serve the greater ' + this.props.city + ' area. ',
            ]
            return shuffle(arr)
        }

        const generateSectionElevenParagraphTwo = () => {
            let arr = [
                'You also can view our current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> here and schedule your ' + this.props.make + ' car care appointment directly from the coupon. ',
                this.props.dealer + ' gets you inside and outside quickly while you want your automobile oil changed. ',
                'Short on time? Allow us to help! Our auto mechanics are accredited to work on any ' + this.props.make + '. ',
                'We look forward to seeing you!',
                'We additionally feature on-line scheduling, so you\'ll come in at a time that works for your busy schedule! ',
                'If you have got additional cars you want to be serviced, bring them to our business located at ' + this.props.address + '! ' + this.props.dealer + ' is proud to serve the greater ' + this.props.city + ' area. ',
            ]
            return shuffle(arr)
        }

        const generateSectionElevenParagraphThree = () => {
            let arr = [
                'You can also view our current range of services here and make your ' + this.props.make + ' car care appointment directly via the coupon - ' + this.props.dealer + ' will get you in and out quickly! ',
                'We hope to see you! We also have online scheduling so you can arrive at the time that ' + generateAdverbThree() + ' suits your busy schedule. ',
                'If you have ' + generateAdverbSix() + ' cars that you would like to have repaired, bring them to our store at ' + this.props.address + '! ' + this.props.dealer + ' prides itself on serving the greater ' + this.props.city + ' area. ',
            ]
            return shuffle(arr)
        }

        const generateSectionElevenParagraphFour = () => {
            let arr = [
                'You can also view our current range of services here and make your ' + this.props.make + ' car maintenance appointment directly via the ' + this.props.dealer + ' coupon. ',
                'We will get you in and out quickly! We hope to see you! We also have online scheduling so you can arrive at the ' + generateAdverbThree() + ' time to fit into your busy schedule. ',
                'If you have any other cars that you would like to have repaired, please bring them to our store at ' + this.props.address + '! ',
                this.props.dealer + ' is proud to serve the greater ' + this.props.city + ' region. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionTwelveParagraphOne = () => {
            let arr = [
                'While you can choose to blend oil to save money, our current automobile oil change discounts can also additionally provide a higher deal than you can think! ',
                'Mixing reachable types of oils isn\'t always recommended at any, for a few major reasons. ',
                'Contact ' + this.props.dealer + ' for our current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> and oil change coupons. ',
                'Motor oils are basically a combination of base oils and components. ',
                'In the end, synthetic and ' + generateAdverbSeven() + ' oil are fabricated from especially admissible elements, it is simply that synthetics are of a much better quality. ',
                'If you blend the 2 forms of ' + generateAdverbSeven() + ' oil, you\'re only diluting the overall performance and purity of the full synthetic ' + generateAdverbSeven() + ' oil and costing yourself ' + generateAdverbSix() + ' cash in the process. ',
                'For example, full synthetic oils are synthetic in such a manner that nearly any of the impurities are removed & comprise the very ' + generateAdverbThree() + ' excellent components too. ',
                'Conventional base oils inherently comprise a few impurities and even as they contain improved components, the components are not as high quality as the ones which are combined into synthetics. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwelveParagraphTwo = () => {
            let arr = [
                'While you\'ll choose to mix oil to avoid wasting money, our current automobile car care discounts also can additionally offer a better deal than you can think! ',
                'Mixing approachable sorts of oils isn\'t continually counseled at any, for several major reasons. ',
                'Contact ' + this.props.dealer + ' for our current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> and oil change coupons. ',
                'Motor oils are essentially a mix of base oils and components. ',
                'Within the end, synthetic and ' + generateAdverbSeven() + ' oil are fabricated from particularly admittable elements, it\'s simply that synthetics are of a way better quality. ',
                'If you blend the two forms of ' + generateAdverbSeven() + ' oil, you\'re solely diluting the performance and purity of the full synthetic ' + generateAdverbSeven() + ' oil and cost accounting yourself additional money in the process. ',
                'For example, full synthetic oils are synthetic in such a fashion that just about any of the impurities are removed & comprise the ' + generateAdverbThree() + ' possible wonderful elements too. ',
                'Standard base oils inherently comprise several impurities and whilst they contain improved components, the components aren\'t as top quality because of the ones that are combined into synthetics. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwelveParagraphThree = () => {
            let arr = [
                'While you choose to mix oil to avoid money, our current car care discounts may also give you a better deal than you think! ',
                'Mixing accessible oils is not always recommended for several important reasons. ',
                this.props.dealer + ' offers current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> and oil change vouchers. ',
                'Motor oils are essentially a mixture of base oils and components. ',
                'Ultimately, synthetic, and common ' + generateAdverbSeven() + ' oils are made from particularly admittable elements, the synthetic ones are simply of much better quality. ',
                'When you mix the two ' + generateAdverbSeven() + ' oils you are only diluting the performance and purity of the fully synthetic ' + generateAdverbSeven() + ' oil. ',
                'Fully synthetic oils, for example, are so synthetic that almost all impurities are removed and contain the ' + generateAdverbThree() + ' possible elements. ',
                'Standard base oils naturally contain various impurities and while they contain upgraded components, the components are not as good quality since they are blended into synthetics. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwelveParagraphFour = () => {
            let arr = [
                'While you choose to mix oil to avoid money, our current car care discounts may also give you a better deal than you think! ',
                'Mixing accessible oils is not always recommended for several important reasons. ',
                this.props.dealer + ' offers current <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> and oil change vouchers. ',
                'Motor oils are essentially a mixture of base oils and components. ',
                'Ultimately, synthetic, and common ' + generateAdverbSeven() + ' oils are made from particularly admittable elements, the synthetic ones are simply of much better quality. ',
                'When you mix the two ' + generateAdverbSeven() + ' oils, you are only diluting the performance and purity of the fully synthetic ' + generateAdverbSeven() + ' oil. ',
                'Fully synthetic oils, for example, are so synthetic that almost all impurities are removed and contain the ' + generateAdverbThree() + ' possible elements. ',
                'Standard base oils naturally contain various impurities and while they contain upgraded components, the components are not as good quality since they are blended into synthetics. ',
            ]
            return shuffle(arr)
        }

        const generateSectionTwelveParagraphFive = () => {
            let arr = [
                'While you choose to mix the oil to save money, our current auto service discounts may also give you a better deal than you think! ',
                'Blending accessible oils is not always recommended for several important reasons. ',
                this.props.dealer + ' offers special quality and current oil change services. ',
                'Engine oils are basically a mixture of base oils and components. ',
                'At the end of the day, both synthetic and common ' + generateAdverbSeven() + ' oils consist of particularly permissible elements, synthetic oils are simply of a much higher quality. ',
                'When you mix the two ' + generateAdverbSeven() + ' oils, you are only diluting the performance and purity of the fully synthetic ' + generateAdverbSeven() + ' oil. ',
                'Fully synthetic oils, for example, are so synthetic that almost all impurities are removed and contain the ' + generateAdverbThree() + ' possible elements. ',
                'Standard base oils naturally contain various impurities, and although they contain updated components, the components are not of good quality because they are mixed with synthetic materials. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionThirdteenParagraphOne = () => {
            let arr = [
                'If you\'re inquisitive about the sort of engine oil your ' + this.props.make + ' needs, simply contact us at ' + this.props.dealer + ', and we will be ' + generateAdverbSix() + ' than overjoyed to assist you! ',
                'These factors are generally based on your vehicle\'s manufacturer\'s specs and might also be in your owner\'s manual. ',
                'What sort of oil change does my ' + this.props.make + ' need? ',
                'Some ' + generateAdverbSix() + ' elements, which include the climate you stay in, your riding habits, or maybe the age of your engine, additionally influence the sort of ' + generateAdverbSeven() + ' oil your engine will need. ',
                'Determining the ' + generateAdverbThree() + ' ' + generateAdverbSeven() + ' oil in your vehicle, whether you\'re looking at a complete synthetic vehicle oil change, synthetic-combination oil alternate, high-mileage oil change, ' + generateAdverbFive() + ' oil change or maybe diesel oil changes, depends on numerous elements. ',
                'The vital aspect is the sort of engine. ',
            ]
            return shuffle(arr)
        }

        const generateSectionThirdteenParagraphTwo = () => {
            let arr = [
                'If you\'re interested in the type of engine oil your ' + this.props.make + ' needs, simply contact us at ' + this.props.dealer + ', and we are going to be quite joyful to help you! ',
                'These factors are typically based on your vehicle manufacturers specs and may be in your owner\'s manual. ',
                'What form of car care will my ' + this.props.make + ' need? ',
                'Some countless elements, which include the climate you stay in, your riding habits, or even the age of your engine, additionally influence the sort of ' + generateAdverbSeven() + ' oil your engine can need. ',
                'Determining the ' + generateAdverbThree() + ' ' + generateAdverbSeven() + ' oil in your vehicle, whether you\'re looking at an entire synthetic vehicle oil change, synthetic-combination oil alternate, high-mileage oil change, ' + generateAdverbFive() + ' oil change, or even diesel fuel changes, depends on various elements. ',
                'The very important aspect is the form of engine. ',
            ]
            return shuffle(arr)
        }

        const generateSectionThirdteenParagraphThree = () => {
            let arr = [
                'If you\'re interested in the type of engine oil your ' + this.props.make + ' needs, just contact us at ' + this.props.dealer + ', and we\'ll be happy to help. ',
                'These factors are generally based on the specifications of the “manufacturer” of your vehicle. ',
                'What kind of car care will my ' + this.props.make + ' need? ',
                'A myriad of factors, including the climate you are in, your driving habits, or even the age of your engine, also affects the type of engine oil your engine may need. ',
                'The ' + generateAdverbThree() + ' ' + generateAdverbSeven() + ' oil in your vehicle, whether you are considering a fully synthetic oil change, a synthetic combination alternative oil change, a high-mileage oil change, a ' + generateAdverbFive() + ' oil change, or even a diesel fuel change, depends on various factors. ',
                'The very important aspect is the form of the engine. ',
            ]
            return shuffle(arr)
        }

        const generateSectionThirdteenParagraphFour = () => {
            let arr = [
                'If you are interested in what type of engine oil your ' + this.props.make + ' requires, please contact us at ' + this.props.dealer + ', and we will be happy to assist you. ',
                'These factors are generally based on the “manufacturer” specifications of your vehicle. ',
                'What kind of maintenance will my ' + this.props.make + ' need? ',
                'A multitude of factors, including the climate you live in, your driving habits, or even the age of your engine, also affect the type of engine oil your engine may need. ',
                'The ' + generateAdverbThree() + ' engine oil in your vehicle, whether you are considering a full synthetic oil change, an alternative oil change with a synthetic combination, a high mileage oil change, a ' + generateAdverbFive() + ' oil change, or even a diesel change, depends on various factors. ',
                'The very important aspect is the form of the engine. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionFourteenParagraphOne = () => {
            let arr = [
                'As our engines grow old and rack up the miles, compression in every one of the cylinders can start to weaken & seals can crack. ',
                'Contact us today to learn ' + generateAdverbSix() + ' about our high mileage oil change services and see why we\'re the best ' + this.props.make + ' dealership in GA! ',
                'Whether it is a complete synthetic oil change or a normal oil change that you are searching for, we provide a collection of <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> to help save you money. ',
                '"What is sludge?" you may ask. Sludge is a tar-like residue that could increase in an engine because the end result of automobile oil thickening, and the build-up is normally due to rare oil changes. ',
                'Contact us today to learn ' + generateAdverbSix() + '. ',
                'This can cause your engine to lose overall performance and begin to devour ' + generateAdverbSix() + ' oil or, maybe worse, cause steeply-priced maintenance that pops up out of the blue. ',
                'High mileage oil can help remove engine sludge and decrease wear in older engines. ',
                'Our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> is proud to serve our clients in ' + this.props.city + '. By keeping up with your ' + generateAdverbSeven() + ' oil changes, you could additionally help eliminate this hassle earlier than it starts. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourteenParagraphTwo = () => {
            let arr = [
                'As our engines grow up and rack up the miles, compression in each one of the cylinders will begin to weaken & seals can crack. ',
                'Contact us today to learn ' + generateAdverbSix() + ' regarding our high mileage car care services and see why we\'re the best ' + this.props.make + ' franchise in GA! ',
                'Whether or not it\'s a whole synthetic oil change or a normal oil change that you just are looking for, we offer a group of <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">service specials</a> to help save you money. ',
                '"What is sludge?" you may ask. Sludge may be a tar-like residue that might increase in an engine because of the end results of automobile oil thickening, and the build-up is often because of rare oil changes. ',
                'Contact us today to be told ' + generateAdverbSix() + '. ',
                'This may cause your engine to lose overall performance and start to devour ' + generateAdverbSix() + ' oil or, perhaps worse, cause steeply priced maintenance that pops up out of the blue. ',
                'High mileage oil can help take away engine sludge and reduce wear in older engines. ',
                'Our Service Department is proud to serve our clients in ' + this.props.city + '. ',
                'By keeping up along with your ' + generateAdverbSeven() + ' oil changes, you could additionally help eliminate this trouble prior to it starts. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourteenParagraphThree = () => {
            let arr = [
                'As our engines grow and accumulate kilometers, the compression in each of the cylinders weakens and the seals can tear. ',
                'Contact us today to find out ' + generateAdverbSix() + ' about our high mileage auto care services and why we\'re the best ' + this.props.make + ' dealer. ',
                'Whether you want a fully synthetic oil change or a ' + generateAdverbFive() + ' oil change, we offer a range of special services to help you save money. ',
                '"What\'s Sludge?" Sludge can be a tar-like residue that could build up in an engine due to the end results of oil thickening, and the build-up is often due to infrequent oil changes. ',
                'Contact us today for ' + generateAdverbSix() + ' information. ',
                'This can cause your engine to lose overall performance and gobble up lots of oils or, perhaps worse, cause expensive maintenance to appear out of nowhere. ',
                'High mileage oil can help remove engine sludge and reduce wear and tear on older engines. ',
                this.props.dealer + ' prides itself on serving our clients in ' + this.props.city + '. ',
                'Keeping up with your engine oil change will also help you get rid of this problem before you start. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFourteenParagraphFour = () => {
            let arr = [
                'As our engines grow and accumulate miles, the compression in each of the cylinders weakens and the seals can tear. ',
                'Contact us today to learn ' + generateAdverbSix() + ' about our high mileage automotive service and why we are the best ' + this.props.make + ' dealership. ',
                'Whether a full synthetic oil change or a ' + generateAdverbFive() + ' oil change, we offer a range of special services to help save you money. ',
                'What is sludge? Sludge can be a tar-like residue that could build up in an engine due to the end results of oil thickening, and the build-up is often due to infrequent oil changes. ',
                'Contact us today for ' + generateAdverbSix() + ' information. ',
                'This can cause loss of overall engine performance and devours a lot of oils or, perhaps worse, makes expensive maintenance appear out of nowhere. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionFifteenParagraphOne = () => {
            let arr = [
                'Visit ' + this.props.dealer + ' serving ' + this.props.city + ', GA for any of your car oil change needs. ',
                'Schedule your <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">service appointment</a> and see why we\'re the best-rated ' + this.props.make + ' service dealers in ' + this.props.city + '. ',
                'Our dealership features a modern <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> that gives a collection of ' + generateAdverbSix() + ' offerings, including a multipoint inspection during any visit. ',
                'We provide ' + generateAdverbSix() + ' reductions and <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a> any month, so you are assured to keep cash whilst visiting ' + this.props.dealer + '. ',
                'Our pricing adjustments with market costs and the fee of oil, but hardly ever fluctuates several bucks at a time unless we are running an improvement on ' + this.props.make + ' oil changes. Don\'t wait to attend to your car. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFifteenParagraphTwo = () => {
            let arr = [
                'Visit ' + this.props.dealer + ' serving ' + this.props.city + ', GA for any of your automotive oil change needs. ',
                '<a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">Schedule your service appointment</a> and see why we\'re the best-rated ' + this.props.make + ' service dealers in ' + this.props.city + '. ',
                'Our dealership features a modern <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> that provides a group of countless offerings, as well as a multipoint inspection throughout any visit. ',
                'We offer ' + generateAdverbSix() + ' reductions and <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a> any month, so you\'re assured to keep money while visiting ' + this.props.dealer + '. ',
                'Our pricing changes with market prices and therefore the fee of oil, however, hardly fluctuates many bucks at a time unless we are running an improvement on ' + this.props.make + ' oil changes. Don\'t wait to attend to your car. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFifteenParagraphThree = () => {
            let arr = [
                'Visit ' + this.props.dealer + ' serving ' + this.props.city + ', GA for all your auto oil change needs. ',
                'Make your <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">service appointment</a> and see why we are the best ' + this.props.make + ' service dealers in ' + this.props.city + '. ',
                'Our dealership has a modern <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> that provides countless offers, as well as a multi-point inspection with every visit. ',
                'We offer countless discounts and oil change vouchers every month, so you can be sure that you will ' + this.props.make + ' money during your visit at ' + this.props.dealer + '. ',
                'Our prices change with market prices, and therefore the price of oil hardly fluctuates around many dollars. Don\'t wait to maintain your car. ',
            ]
            return shuffle(arr)
        }

        const generateSectionFifteenParagraphFour = () => {
            let arr = [
                'Visit ' + this.props.dealer + ' serving ' + this.props.city + ', GA for all of your car oil change needs. ',
                'Book your <a class=\'seoLinks\' href=\'' + this.props.serviceApp + '\' target="_blank">service appointment</a> and find out why we are the best ' + this.props.make + ' Service Dealers in ' + this.props.city + '. ',
                'Our dealership has a modern <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> that offers countless offers, as well as a multi-point inspection on every visit. ',
                'We offer countless discounts and <a class=\'seoLinks\' href=\'' + this.props.serviceSpecials + '\' target="_blank">oil change coupons</a> every month, so you can be sure to ' + this.props.make + ' money when you visit ' + this.props.dealer + '. ',
                'Our prices change with market prices, so the price of oil barely fluctuates around several dollars. Don\'t wait to maintain your car. ',
            ]
            return shuffle(arr)
        }


        // ----------------------------------------


        const generateSectionSixteenParagraphOne = () => {
            let arr = [
                'Extra manufacturers nowadays layout their engines specifically across the important safeness and overall performance properties of complete synthetic automobile oil. ',
                'What are the ' + generateAdverbFour() + ' of the use of synthetic ' + generateAdverbSeven() + ' oil? ',
                'Well, a few motors require it, mainly in automobiles just like the ones determined in sports activities sedans or sports coupes that concentrate on overall performance. ',
                this.props.dealer + ', a ' + this.props.make + ' dealership serving ' + this.props.city + ', has an unbelievable group of licensed mechanics who can inform you which oil is mandatory in your automobile, or you could examine your automobile manufacturer’s guidelines to make sure you\'re providing your automobile with the proper sane favors. ',
                'Visit our dealership today or contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> with any questions on your next complete synthetic automobile oil change! ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixteenParagraphTwo = () => {
            let arr = [
                'Extra manufacturers these days layout their engines specifically across the necessary characteristic and overall performance properties of complete synthetic automobile oil. ',
                'What are the ' + generateAdverbFour() + ' of the use of synthetic ' + generateAdverbSeven() + ' oil? ',
                'Well, many motors need it, primarily in cars like those determined in sports activities sedans or sports coupes that concentrate on overall performance. ',
                this.props.dealer + ', a ' + this.props.make + ' franchise serving ' + this.props.city + ', has an incredible cluster of licensed mechanics who will inform you which oil is mandatory in your automobile, otherwise, you might examine your automobile manufacturer’s guidelines to be positive you\'re providing your automobile with the right sane favors. ',
                'Visit our dealership today or contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> with any queries on your next complete synthetic automobile oil change! ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixteenParagraphThree = () => {
            let arr = [
                'Nowadays, many manufacturers design their engines specifically according to the necessary properties and overall performance properties of fully synthetic car oil. ',
                'What are the ' + generateAdverbFour() + ' of using synthetic ' + generateAdverbSeven() + ' oil? ',
                'Well, a lot of engines need it, especially in cars that are used in sporting activities. ',
                this.props.make + ' dealership serving ' + this.props.city + ', has an incredible group of licensed mechanics who can tell you what oil is needed in your car; If not, you can check your automaker\'s guidelines to make sure you\'re doing your car the right favors. ',
                'Visit our dealership today or contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> if you have any questions about your next fully synthetic auto oil change. ',
            ]
            return shuffle(arr)
        }

        const generateSectionSixteenParagraphFour = () => {
            let arr = [
                'Today, many manufacturers design their engines specifically for the necessary properties and overall performance of fully synthetic automotive oil. ',
                'The ' + this.props.make + ' dealership serving ' + this.props.city + ' has an amazing team of certified mechanics who can tell you what oil is needed in your car; If not, you can check your car manufacturer\'s guidelines to make sure you are doing the right favors for your car. ',
                'Visit our dealership today or contact our <a class=\'seoLinks\' href=\'' + this.props.serviceCenter + '\' target="_blank">service center</a> if you have any questions about your next full synthetic oil change. ',
            ]
            return shuffle(arr)
        }

        const generateSectionOne = () => {
            let paragraphs = [generateSectionOneParagraphOne(), generateSectionOneParagraphTwo(), generateSectionOneParagraphThree(), generateSectionOneParagraphFour()];
            return suffleParagraphs(paragraphs)
        }
        const generateSectionTwo = () => {
            let paragraphs = [generateSectionTwoParagraphOne(), generateSectionTwoParagraphTwo(), generateSectionTwoParagraphThree()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionThree = () => {
            let paragraphs = [generateSectionThreeParagraphOne(), generateSectionThreeParagraphTwo(), generateSectionThreeParagraphThree(), generateSectionThreeParagraphFour()];
            return suffleParagraphs(paragraphs)
        }
        const generateSectionFour = () => {
            let paragraphs = [generateSectionFourParagraphOne(), generateSectionFourParagraphTwo(), generateSectionFourParagraphThree(), generateSectionFourParagraphFour()];
            return suffleParagraphs(paragraphs)
        }
        const generateSectionFive = () => {
            let paragraphs = [generateSectionFiveParagraphOne(), generateSectionFiveParagraphTwo(), generateSectionFiveParagraphThree(), generateSectionFiveParagraphFour()];
            return suffleParagraphs(paragraphs)
        }
        const generateSectionSix = () => {
            let paragraphs = [generateSectionSixParagraphOne(), generateSectionSixParagraphTwo(), generateSectionSixParagraphThree(), generateSectionSixParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionSeven = () => {
            let paragraphs = [generateSectionSevenParagraphOne(), generateSectionSevenParagraphTwo(), generateSectionSevenParagraphThree(), generateSectionSevenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionEight = () => {
            let paragraphs = [generateSectionEightParagraphOne(), generateSectionEightParagraphTwo(), generateSectionEightParagraphThree(), generateSectionEightParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionNine = () => {
            let paragraphs = [generateSectionNineParagraphOne(), generateSectionNineParagraphTwo(), generateSectionNineParagraphThree(), generateSectionNineParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionTen = () => {
            let paragraphs = [generateSectionTenParagraphOne(), generateSectionTenParagraphTwo(), generateSectionTenParagraphThree(), generateSectionTenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionEleven = () => {
            let paragraphs = [generateSectionElevenParagraphOne(), generateSectionElevenParagraphTwo(), generateSectionElevenParagraphThree(), generateSectionElevenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionTwelve = () => {
            let paragraphs = [generateSectionTwelveParagraphOne(), generateSectionTwelveParagraphTwo(), generateSectionTwelveParagraphThree(), generateSectionTwelveParagraphFour(), generateSectionTwelveParagraphFive()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionThirdteen = () => {
            let paragraphs = [generateSectionThirdteenParagraphOne(), generateSectionThirdteenParagraphTwo(), generateSectionThirdteenParagraphThree(), generateSectionThirdteenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionFourteen = () => {
            let paragraphs = [generateSectionFourteenParagraphOne(), generateSectionFourteenParagraphTwo(), generateSectionFourteenParagraphThree(), generateSectionFourteenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionFifteen = () => {
            let paragraphs = [generateSectionFifteenParagraphOne(), generateSectionFifteenParagraphTwo(), generateSectionFifteenParagraphThree(), generateSectionFifteenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }

        const generateSectionSixteen = () => {
            let paragraphs = [generateSectionSixteenParagraphOne(), generateSectionSixteenParagraphTwo(), generateSectionSixteenParagraphThree(), generateSectionSixteenParagraphFour()];
            return suffleParagraphs(paragraphs)
        }


        return (
            <div className='content'>
            <hr></hr>
            <p>{'Title: ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model}</p>
            <p>Discription:</p>
            <p>{'Find great deals for your oil change for your ' + this.props.year + ' ' + this.props.make + ' ' + this.props.model + ' at ' + this.props.dealer + ' located in ' + this.props.city + ' and metro area'}</p>
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
                <h1 className='contentHeader'>{this.props.make + ' Oil Changes in ' + this.props.city}</h1>
                <p className='contentHeaderParagraph'>Schedule your Oil Change appointment online now!</p>
                <div className='contentHeaderButtonContainer'>
                    <a href={this.props.serviceApp} target='_blank'><button className='contentHeaderButtons'>Schedule Service</button></a>
                    <a href={this.props.serviceSpecials} target='_blank'><button className='contentHeaderButtons'>View Service Schedules</button></a>
                </div>
            </div>
            
            <p>{'<div class=\'contentHeaderContainer\'>'}</p>
            <p>{'<h1 class=\'contentHeader\'>' + this.props.make + ' Oil Changes in ' + this.props.city + '</h1>'}</p>
            <p>{'<p class=\'contentHeaderParagraph\'>Schedule your Brake Service & Repair appointment online now!</p>'}</p>
            <p>{'<div class=\'contentHeaderButtonContainer\'>'}</p>
            <p>{'<a href=' + this.props.serviceApp + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>Schedule Service</button></a>'}</p>
            <p>{'<a href=' + this.props.serviceSpecials + ' target=\'_blank\'><button class=\'contentHeaderButtons\'>View Service Schedules</button></a>'}</p>
            <p>{'</div>'}</p>
            <p>{'</div>'}</p>
            
            <h2>{'<h2 class=\'seoContentH\'>Why Do Cars Need An oil change? | Oil Change Service in ' + this.props.city + '</h2>'}</h2>
            {generateSectionOne()}
            <h2>{'<h2 class=\'seoContentH\'>What is Synthetic-Blend Oil? </h2>'}</h2>
            {generateSectionTwo()}
            <p>{'<p class=\'seoContentP\'>Synthetic blend ' + generateAdverbSeven() + ' oil combines the advanced properties of standard ' + generateAdverbSeven() + ' oil and fully synthetic oil.</p>'}</p>
            <h2>{'<h2 class=\'seoContentH\'>What is The Difference Between Synthetic Blend Oil vs Full Synthetic Oil? </h2>'}</h2>
            {generateSectionThree()}
            <h2>{'<h2 class=\'seoContentH\'>How Often Does a ' + this.props.make + ' Need an Oil Change?</h2>'}</h2>
            {generateSectionFour()}
            <h2>{'<h2 class=\'seoContentH\'>Full Synthetic Oil Change</h2>'}</h2>
            {generateSectionFive()}
            <h2>{'<h2 class=\'seoContentH\'>Conventional Motor Oil | Conventional Oil Change Benefits</h2>'}</h2>
            {generateSectionSix()}
            <h2>{'<h2 class=\'seoContentH\'>High Mileage Motor Oil | High Mileage oil change Benefits </h2>'}</h2>
            {generateSectionSeven()}
            <h2>{'<h2 class=\'seoContentH\'>How Much Oil Does a ' + this.props.make + ' Take?</h2>'}</h2>
            {generateSectionEight()}
            <h2>{'<h2 class=\'seoContentH\'>What Occurs If You Don\'t Change The Oil In Your ' + this.props.make + '?</h2>'}</h2>
            <p>{'<p class=\'seoContentP\'>Motor oil has innumerable ' + generateAdverbSix() + ' functions & benefits, which include:</p>'}</p>
            <ul>
                {'<ul class=\'seoContentP\'>'}
                {generateSectionNine()}
                {'</ul>'}
            </ul>            
            <h2>{'<h2 class=\'seoContentH\'>How Much Does An Oil Change Cost For a ' + this.props.make + '?</h2>'}</h2>
            {generateSectionTen()}
            <h2>{'<h2 class=\'seoContentH\'>' + this.props.make + ' Oil Change Near Me | Oil Change Coupons ' + this.props.city + ', ' + this.props.state + '</h2>'}</h2>            
            {generateSectionEleven()}
            <h2>{'<h2 class=\'seoContentH\'>Can You Mix Conventional Oil & Synthetic Motor Oil?</h2>'}</h2>            
            {generateSectionTwelve()}
            <h2>{'<h2 class=\'seoContentH\'>What Type Of Oil Does a ' + this.props.make + ' Use? | What Oil Does ' + this.props.make + ' Need? | Types of Motor Oil</h2>'}</h2>
            {generateSectionThirdteen()}
            <h2>{'<h2 class=\'seoContentH\'>Best ' + this.props.city + ' High Mileage Oil Change | Why Use High Mileage Oil?</h2>'}</h2>
            {generateSectionFourteen()}
            <h2>{'<h2 class=\'seoContentH\'>' + this.props.make + ' Oil Change Price at ' + this.props.dealer + '</h2>'}</h2>
            {generateSectionFifteen()}
            <h2>{'<h2 class=\'seoContentH\'>Why Is Full Synthetic Motor Oil So Expensive? What Are The Benefits Of Synthetic Oil Changes?</h2>'}</h2>
            {generateSectionSixteen()}

            <hr></hr>

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
            <p>{'align-items: center;'}</p>
            <p>{'width: 450px;'}</p>
            <p>{'font-weight: bold;'}</p>
            <p>{'text-transform: uppercase;'}</p>
            <p>{'color: white;'}</p>
            <p>{'font-family: sans-serif;'}</p>
            <p>{'font-size: 30px;'}</p>
            <p>{'padding: 10px;'}</p>
            <p>{'text-align: center;'}</p>
            <p>{'float: left;'}</p>
            <p>{'}'}</p>

            <p>{'.contentHeaderButtons {'}</p>
            <p>{'color: #007FCB;'}</p>
            <p>{'background-color: #fff;'}</p>
            <p>{'border: 3px solid #00324F;'}</p>
            <p>{'border-radius: 16px;'}</p>
            <p>{'font-size: 15px;'}</p>
            <p>{'cursor: pointer;'}</p>
            <p>{'font-weight:bold;'}</p>
            <p>{'padding: 10px 40px;'}</p>
            <p>{'min-width: 25%;'}</p>
            <p>{'text-decoration: none;'}</p>
            <p>{'box-sizing: border-box;'}</p>
            <p>{'transition: all 500ms ease;'}</p>
            <p>{'}'}</p>

            <p>{'.contentHeaderButtons:hover {'}</p>
            <p>{'color: #FFFFFF;'}</p>
            <p>{'border: #FFFFFF solid 3px;'}</p>
            <p>{'background:#007FCB;'}</p>
            <p>{'}'}</p>

            <p>{'.contentHeaderParagraph {'}</p>
            <p>{'color: white;'}</p>
            <p>{'margin:0px;'}</p>
            <p>{'font-size:16px;'}</p>
            <p>{'text-transform:none;'}</p>
            <p>{'font-weight:300;'}</p>
            <p>{'padding:18px;'}</p>
            <p>{'}'}</p>

            <p>{'.seoLinks {'}</p>
            <p>{'color: black;'}</p>
            <p>{'font-weight: bold;'}</p>
            <p>{'text-decoration: none;'}</p>
            <p>{'}'}</p>

            <p>{'@media screen and (min-width: 320px) and (max-width: 420px) {'}</p>
            <p>{'.contentHeader {'}</p>
            <p>{'font-size: 9px'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderParagraph {'}</p>
            <p>{'font-size: 9px'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderButtons {'}</p>
            <p>{'font-size: 9px;'}</p>
            <p>{'padding: 5px;'}</p>
            <p>{'border-radius: 8px;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderContainer {'}</p>
            <p>{'height: 250px;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderButtonContainer {'}</p>
            <p>{'width: 300px;'}</p>
            <p>{'}'}</p>
            <p>{'.seoContentP {'}</p>
            <p>{'font-size: 10px;'}</p>
            <p>{'}'}</p>
            <p>{'.seoContentH {'}</p>
            <p>{'font-size: 12px !important;'}</p>
            <p>{'}'}</p>
            <p>{'}'}</p>
            <p>{'@media screen and (min-width: 420px) and (max-width: 520px) {'}</p> 
            <p>{'.contentHeader {'}</p>
            <p>{'font-size: 12px'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderParagraph {'}</p>
            <p>{'font-size: 12px'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderButtons {'}</p>
            <p>{'font-size: 10px;'}</p>
            <p>{'padding: 5px;'}</p>
            <p>{'border-radius: 9px;'}</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderContainer {'}</p>
            <p>{'height: 250px'};</p>
            <p>{'}'}</p>
            <p>{'.contentHeaderButtonContainer {'}</p>
            <p>{'width: 340px;'}</p>
            <p>{'}'}</p>
            <p>{'.seoContentP {'}</p>
            <p>{'font-size: 12px;'}</p>
            <p>{'}'}</p>
            <p>{'.seoContentH {'}</p>
            <p>{'font-size: 15px !important;'}</p>
            <p>{'}'}</p>
            <p>{'}'}</p>
            <p>{'</style>'}</p>
            </div>
        );
    }
}

export default oilChanges;