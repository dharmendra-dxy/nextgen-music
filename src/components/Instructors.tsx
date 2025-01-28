"use client";
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';

const Instructors = () => {
    const instructors = [
    {
        id: 1,
        name: "Alex Johnson",
        course: "Beginner Guitar",
        image:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
 
    },
    {
        id: 2,
        name: "Emily Davis",
        course: "Piano for Beginners" ,
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 3,
        name: "Mark Thompson",
        course: "Rock Drumming 101",
        image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",

    },
    {
        id: 4,
        name: "Sarah Williams",
        course: "Classical Violin",
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    },
    {
        id: 5,
        name: "David Lee",
        course: "Vocal Techniques" ,
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
    }];
          
  return (
    
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
            <p className='text-xl font-bold'> Meet Your Instructor</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full mt-16">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>

    </div>
    
  )
}

export default Instructors