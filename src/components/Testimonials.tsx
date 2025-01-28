import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Testimonials = () => {
    const testimonials = [
        {
          name: "John Doe",
          message: "I highly recommend this guitar course! The instructor was incredibly patient and knowledgeable, and I learned so much in just a few weeks.",
          course: "Beginner Guitar"
        },
        {
          name: "Jane Smith",
          message: "This piano course exceeded my expectations. The lessons were well-structured and engaging, and I'm already playing simple melodies.",
          course: "Piano for Beginners"
        },
        {
          name: "David Lee",
          message: "I was amazed at how quickly I improved on the drums with this online course. The video lessons were clear and easy to follow.",
          course: "Rock Drumming 101"
        },
        {
          name: "Sarah Jones",
          message: "The violin teacher is truly gifted. I'm so grateful for her guidance and encouragement. I'm starting to sound like a real musician!",
          course: "Classical Violin"
        },
        {
          name: "Michael Brown",
          message: "This vocal training course helped me improve my range and confidence. I'm now singing with more power and control.",
          course: "Vocal Techniques"
        }
      ];


  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
            
        <h2 className='text-center text-3xl font-bold my-8 z-10'>
            Hear From Our Students
        </h2>

        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            
        </div>
    </div>
  )
}

export default Testimonials