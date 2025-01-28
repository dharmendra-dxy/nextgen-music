import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const Instruments = () => {

    const musicInstruments = [
        {
          title: "Piano",
          description: "A versatile keyboard instrument with 88 keys, offering a wide range of musical expressions from classical to jazz and pop.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Piano
            </div>
          ),
        },
        {
          title: "Guitar",
          description: "A popular string instrument with six strings, suitable for various genres like rock, blues, folk, and classical.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--emerald-500))] flex items-center justify-center text-white">
             Guitar
            </div>
          ),
        },
        {
          title: "Drums",
          description: "A percussion instrument consisting of a set of drums and cymbals, providing the rhythmic foundation for most musical ensembles.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--emerald-500))] flex items-center justify-center text-white">
            Drums
            </div>
          ),
        },
        {
          title: "Violin",
          description: "A string instrument with four strings, known for its expressive and melodic capabilities in classical and other genres.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--emerald-500))] flex items-center justify-center text-white">
                Violin
            </div>
          ),
        }
      ];



  return (
    <div className='mt-10'>
        <h2 className='text-2xl text-center font-bold'>Our Proffesional Music Instruments</h2>

        <div className='p-10'>
        <StickyScroll content={musicInstruments} />
        </div>


    </div>
  )
}

export default Instruments