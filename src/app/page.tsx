import React from 'react'
import Card from '@/app/components/Card'

const page = () => {
  const name="Abdul hadi";
  const rollNo="00312650";
  const Distancelearning = "No";
  const City = "karachi"
  const Center = "Governor House Karachi"
  const Campus = "main"
  const DayTime = "Monday -02:00 PM - 05:00 PM"
  return (
    <>
     { <Card name={name} rollNo={rollNo} Distancelearning={Distancelearning} City={City} Center={Center} Campus={Campus} DayTime={DayTime} />}
    </>
  )
}

export default page
