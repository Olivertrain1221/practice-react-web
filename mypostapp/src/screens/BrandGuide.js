import React, { useState } from 'react'
import Contact from './includes/Contact'
import Grid from '../components/Grid/Grid'
import Footer from './includes/Footer'
import Tabs from '../components/AllTabs/tabs';
function BrandGuide() {

  const tabs = [
    {
      id: 'e1',
      title: 'Events',
      img: "",
    }, {
      id: 'e2',
      title: 'Estate',
      img: "",
    },
    {
      id: 'e3',
      title: 'Entertaining and Hospitality',
      img: "",
    },
  ]
  
  const estate = [
    {
      id: 'e1',
      title: 'Core',
      img: "https://static.goodwood.com/globalassets/email/talent/goodwood-estate-logo-2x.png",
      pdfALink: "https://static.goodwood.com/globalassets/brand/guidelines/brand-guidelines-goodwood-core-brand.pdf",
    }, {
      id: 'e2',
      title: 'The Kennels',
      img: "https://ticketing.goodwood.com/Assets/HTML/Images/logos/the-kennels-logo.svg",
      pdfALink: "https://static.goodwood.com/globalassets/brand/guidelines/brand-guidelines-goodwood-the-kennels.pdf",

    },
  ]
  const hopitality = [
    {
      id: 'e1',
      title: 'FOOD',
      data: "",
      pdfALink: "",
    }, {
      id: 'e2',
      title: 'DRINK',
      data: "",
      pdfALink: "",
    },
  
  ]
  const events = [
    {
      id: 'e1',
      title: 'Festival Of Speed',
      data: "https://static.goodwood.com/globalassets/motorsport/fos/logo/festival-of-speed-logo.svg?width=80&quality=80",
      pdfALink: "",
    }, {
      id: 'e2',
      title: 'Members Meeting',
      data: "https://ticketing.goodwood.com/Assets/HTML/Images/logos/grrc-color-logo.svg?width=80&quality=80",
      pdfALink: "",
    },
    {
      id: 'e3',
      title: 'Goodwood Revival',
      data: "https://static.goodwood.com/globalassets/revival-logo.png?quality=80",
      pdfALink: "",
    },
    {
      id: 'e3',
      title: 'Qatar Goodwood',
      data: "https://www.goodwood.com/globalassets/press/horseracing/qgf-logo---red-outline.png?quality=80",
      pdfALink: "",
    },
    {
      id: 'e3',
      title: 'Goodwoof',
      data: "https://static.goodwood.com/globalassets/goodwoof/goodwoof-mars-petcare-logo.png?quality=80",
      pdfALink: "",
    },
  ]

  const [tabState, setTabState] = useState('');
  const [data, setData] = useState(events);

  const onTabClick = (e) => {
    const tabId = e.target.id
    console.log("working")
    console.log(tabId)
    setTabState(tabId)
    if (tabId === "e1") {
      setData(events)
    } else if (tabId === "e2") {
      setData(estate)
    } else if (tabId === "e3") {
      setData(hopitality)
    }

  }

  return (
    <>
      <section class="w-full flex bg-[#131313]  flex-col sm:pt-16 px-5 justify-center">
        <div class="top-2 md:top-[2rem] mx-auto pt-8 left-1/2 bg-[#131313] sm:max-w-[90rem] sm:px-20">
          <h1 class="text-white text-4xl uppercase sm:text-6xl font-normal tracking-widest">Brand guidelines</h1>
          <p class="mt-6 sm:mb-16 text-lg text-[#ffffffb3] sm:text-2xl eb-garamond ">Maintaining brand consistency and
            integrity in everything we do to ensure our brand's identity and message are communicated effectively
            and consistently to all our customers</p>
          <div class="flex flex-row items-center mt-3 h-16 gap-9 outertabContainer">
            <Tabs onTabClick={onTabClick} items={tabs} />
          </div>
        </div>
      </section>
      <Grid dataSource={data} />
      <Contact />
      <Footer />
    </>
  )
}



export default BrandGuide;