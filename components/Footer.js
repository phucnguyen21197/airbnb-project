import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 '>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investor</p>
            <p>Airbnb plus</p>
            <p>Airbnb luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its an awesome clone</p>
            <p>Referrals accepted</p>
            <p>Phuc Nguyen Land</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Host</h5>
            <p>Phuc Nguyen</p>
            <p>Presents</p>
            <p>Learning how to code</p>
            <p>Gain confidence</p>
            <p>Start today</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>Help Centre</p>
            <p>Trust and Safety</p>
            <p>Youtube Channel</p>
            <p>I love you</p>
            <p>Le Thi Yen Vy</p>
        </div>
    </div>
  )
}

export default Footer