import React from 'react'

type MarqueeTextProps = {
  text: string
}

const MarqueeText: React.FC<MarqueeTextProps> = ({text}) => {
  return (
    <div className='bg-white rounded-[8px] border-2 border-[#DA1077] px-4 py-2 inline-block whitespace-nowrap'>
        <p>{text}</p>
    </div>
  )
}

export default MarqueeText