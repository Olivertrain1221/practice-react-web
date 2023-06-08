import React from 'react'
import Contact from './includes/Contact'
import Grid from '../components/Grid/Grid'
import Footer from './includes/Footer'
import Tabs from '../components/AllTabs/tabs';
function BrandGuide() {
  
  const tabs = [
    {
      id: 'e1',
      title: 'Events',
      data: "",
    },{
      id: 'e2',
      title: 'Estate',
      data: "",
    },
    {
      id: 'e3',
      title: 'Entertaining and Hospitality',
      data: "",
    },
  ]
  return (
    <>
    <section class="w-full flex bg-[#131313]  flex-col sm:pt-16 px-5 justify-center">
        <div class="top-2 md:top-[2rem] mx-auto pt-8 left-1/2 bg-[#131313] sm:max-w-[90rem] sm:px-20">
            <h1 class="text-white text-4xl uppercase sm:text-6xl font-normal tracking-widest">Brand guidelines</h1>
            <p class="mt-6 sm:mb-16 text-lg text-[#ffffffb3] sm:text-2xl eb-garamond ">Maintaining brand consistency and
                integrity in everything we do to ensure our brand's identity and message are communicated effectively
                and consistently to all our customers</p>
            <div class="flex flex-row items-center mt-3 h-16 gap-9 outertabContainer">
              <Tabs items={tabs}/>
            </div>
        </div>
    </section>
    <Grid />
    <Contact />
     <Footer />
    </>
  )
}



export default BrandGuide;