"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";


const FeaturedCourses = () => {

    interface Course{
      name: string,
      description: string,
      rating: number,
      price: number,
      instructor: string,
      duration: string,
    }
    const courseData =  [
        {
          name: "Beginner Guitar Mastery",
          description: "Learn the fundamentals of guitar playing, including chords, scales, strumming patterns, and basic music theory.",
          rating: 4.8,
          price: 99.99,
          instructor: "John Smith",
          duration: "8 weeks",
        },
        {
          name: "Piano for Absolute Beginners",
          description: "Discover the joy of playing piano from scratch. This course covers basic music notation, chords, scales, and simple songs.",
          rating: 4.7,
          price: 79.99,
          instructor: "Jane Doe",
          duration: "6 weeks",
        },
        {
          name: "Vocal Techniques for Singers",
          description: "Improve your vocal range, tone, and projection with exercises and techniques for breath control, resonance, and vocal health.",
          rating: 4.6,
          price: 69.99,
          instructor: "David Lee",
          duration: "4 weeks",
        },
        {
          name: "DJing 101: Mix Like a Pro",
          description: "Learn the art of DJing, including beatmatching, mixing techniques, effects, and music selection for different genres.",
          rating: 4.9,
          price: 129.99,
          instructor: "Sarah Jones",
          duration: "12 weeks",
        },
        {
          name: "Music Theory Fundamentals",
          description: "Understand the building blocks of music, including scales, chords, intervals, rhythm, and melody. This course is essential for any musician.",
          rating: 4.5,
          price: 59.99,
          instructor: "Michael Brown",
          duration: "6 weeks",
        },
      ];


  return (

    <div className="py-12 bg-gray-900 px-4">

        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                Our Featured Courses
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Learn With The Best
            </h1>

        </div>


        <div className="mt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {
                courseData.map((course:Course)=>(
                  <div key={course.name}
                    className="flex justify-center"
                  >
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">

                      <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                        <p className="text-lg sm:text-xl font-semibold text-black mt-4 mb-2 dark:text-neutral-200">
                          {course.name}
                        </p>

                        <p className="text-sm font-normal">
                          {course.description}
                        </p>

                        <Link href='/#' className="bg-white px-2 py-1 rounded text-black mt-2">
                          Check out
                        </Link>
                      </div>
                    </BackgroundGradient>
                  </div>
                ))
              }
            </div>
        </div>
        
        <div className="mt-20 text-center">
            <Link href='/courses' className="px-4 py-2 rounded border border-neutral-200 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View all courses
            </Link>
        </div>

        
    


    </div>

  )
}

export default FeaturedCourses