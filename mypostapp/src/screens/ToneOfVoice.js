import React from 'react'
import Contact from './includes/Contact'
import Footer from './includes/Footer'

function ToneOfVoice() {
  return (<>
  <section class="w-full flex bg-[#131313]  flex-col sm:pt-16 px-5 items-center">
        <div class="top-2 md:top-[2rem] w-full pt-8 bg-[#131313] sm:max-w-[90rem] sm:px-20">
            <h1 class="text-white text-4xl uppercase sm:text-6xl font-normal tracking-widest">Tone of Voice</h1>
            <p class="mt-6 sm:mb-16 text-lg text-[#ffffffb3] sm:text-2xl eb-garamond">It’s important that our tone of voice embodies our values, our vision and
                everything we stand for</p>
            <div class="flex flex-row items-center mt-3 h-16 gap-9 outertabContainer">
                <a id="eventBtn" class="hover:text-white uppercase font-semibold tracking-wide text-xs cursor-pointer w-auto text-[#ffffff99] hidden">
                    Events</a>
                <a id="estateBtn" class="hover:text-white uppercase font-semibold tracking-wide cursor-pointer text-xs w-auto text-[#ffffff99] active-tab hidden">
                    Estate</a>
                <a id="hospitalityBtn" class="hover:text-white font-semibold uppercase tracking-wide cursor-pointer text-xs w-auto text-[#ffffff99] hidden">
                    Entertaining and Hospitality
                </a>
            </div>
        </div>
    </section>
    <Contact />
     <Footer />
  </>
  )
}

export default ToneOfVoice
