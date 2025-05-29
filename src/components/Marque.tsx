import React from 'react'
import MarqueeText from './MarqueeText'

const Marque: React.FC = () => {
    const quotes = [
        'Small acts, big changes for children',
        'Changing lives, one child at a time',
        'Because every child matters',
        'Hope begins with care.',
        'Together, we create possibilities',
        'Every child deserves a champion.',
        'Nurturing futures, one child at a time.',
        'Compassion is the first step to change.',
        'Investing in children is investing in humanity.',
        'Hearts that care, hands that help.',
        'Empowering young dreams to soar.',
        'A safe childhood is every child\'s right.',
        'Hope grows when children thrive.',
        'Together, we build brighter tomorrows.',
        'Kindness is the language every child understands.'
        ];

    return (
        <div className="bg-[#FFC3E2] overflow-x-scroll w-full hide-scrollbar">
            <div className='py-5 md:py-10 flex gap-4 animate-marquee'>
            
                {quotes.map((quote, index) => (
                    <MarqueeText key={index} text={quote}/>
                ))}
            </div>
        </div>
    )
    }

export default Marque