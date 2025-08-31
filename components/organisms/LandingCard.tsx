import React from 'react'
import Button from '../atoms/Button'
import SocialIcons from '../molecules/socialIcons'

const LandingCard = () => {
  return (
    <div className='flex flex-col gap-y-5 items-center'>
        <h2 className='text-3xl font-semibold mb-4'>Start your Journey</h2>
        <Button text='Login' variant='secondary' />
        <Button text='Sign up' variant='default' />
        <p className='mt-4'>Or continue with </p>
        <SocialIcons />
    </div>
  )
}

export default LandingCard