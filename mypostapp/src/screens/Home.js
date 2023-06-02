import React from 'react'
import Contact from './includes/Contact'
import Footer from './includes/Footer'

function Home() {
  return (
    <>
    <section className="bg-[#131313] w-full flex justify-center">
            <div className="sm:max-w-[90rem] sm:pt-16 pt-8 pb-13 sm:pb-17 sm:px-20 w-11/12 sm:w-full">
                <img alt="Goodwood Crest" className="h-[89.22px] w-[59.07px]" src="https://brand.goodwood.com/dist/images/estate-logo.png"></img>
                <h2 className="text-white uppercase text-sm sm:text-lg font-semibold tracking-[0.25rem] mt-6">Goodwood Design &mdash; 
                    </h2>
                <h3
                    className="uppercase text-[2.5rem] sm:text-[3.75rem] w-full tracking-widest mt-6 text-white">Delivering Exceptional Experiences, <span className="text-[#9EE0D8]">For Everyone.</span></h3>
                <p className="text-lg sm:text-2xl eb-garamond mt-6 text-[#ffffffb3] w-full md:w-[38rem]">We want to be the
                    world’s leading luxury experience brand and to be recognised as the best in the world at whatever we
                    do.</p>
                <a href="./guidelines.html"
                    className="font-gs inline-block items-center justify-center mt-6 text-xs tracking-[0.125rem] leading-none bg-[#9EE0D8] hover:bg-transparent border-2 border-[#9EE0D8] hover:text-white text-center px-6 py-4 h-12 uppercase">
                    Brand Guidelines
                </a>
                <img alt="Goodwood Crest" className="mt-8 sm:mt-16 w-full" src="https://brand.goodwood.com/dist/images/map.png"></img>
            </div>
        </section>
         <section className="flex flex-col items-center mt-10 sm:mt-20">
         <div className="sm:max-w-[90rem] sm:px-20 flex flex-col items-center">
             <h4 className="uppercase tracking-widest text-sm sm:text-base font-semibold mb-5 sm:mb-10">Our values</h4>
             <p className="w-[90%] sm:w-[59%] text-xl sm:text-center eb-garamond sm:text-3xl font-normal">The Goodwood brand is key to everything we do. It embraces every aspect of the business from print to digital, architecture to interior design, how we conduct ourselves to how we treat our guests.</p>
             <img className="mt-5" alt="The Duke Of Richmond' Signature" src="../dist/images/dr-signature.png"></img>
         </div>
     </section>
     <section className="flex flex-col items-center sm:mt-15 mt-8.5">
         <div className="sm:max-w-[90rem] px-5 sm:px-20 flex-col sm:flex-row flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className=" border-solid border-1 border-black group hover:bg-black">
                 <div className="p-6 sm:px-9 sm:py-16">
                     <small className="text-grey-minor-numbers mr-2 relative top-[1.563rem] right-[1.25rem]">01</small>
                     <p className="uppercase text-lg font-semibold mb-2 group-hover:text-white">quality</p>
                     <h4 className="uppercase font-normal sm:text-4xl text-3xl mb-4 group-hover:text-white">
                         OBSESSION FOR PERFECTION
                     </h4>
                     <p className="text-grey-minor font-normal sm:text-lg text-base group-hover:text-white">
                         We have an insatiable appetite to get it 100% right; we're madly passionate about what we do.
                     </p>
                 </div>
             </div>
             <div className=" border-solid border-1 border-black group hover:bg-black">
                 <div className="p-6 sm:px-9 sm:py-16">
                     <small className="text-grey-minor-numbers mr-2 relative top-[1.563rem] right-[1.25rem]">02</small>
                     <p className="uppercase text-lg font-semibold mb-2 group-hover:text-white">Authenticity</p>
                     <h4 className="uppercase font-normal sm:text-4xl text-3xl mb-4 group-hover:text-white">
                         The Real Thing
                     </h4>
                     <p className="text-grey-minor font-normal sm:text-lg text-base group-hover:text-white">
                         We employ meticulous attention to detail to create experiences, as they should be, resulting in pure, unspoiled, unadulterated pleasure.
                     </p>
                 </div>
             </div>
             <div className="border-solid border-1 border-black group hover:bg-black">
                 <div className="p-6 sm:px-9 sm:py-16">
                     <small className="text-grey-minor-numbers mr-2 relative top-[1.563rem] right-[1.25rem]">03</small>
                     <p className="uppercase text-lg font-semibold mb-2 group-hover:text-white">The "Wow"</p>
                     <h4 className="uppercase font-normal sm:text-4xl text-3xl mb-4 group-hover:text-white">
                         Derring Do
                     </h4>
                     <p className="text-grey-minor font-normal sm:text-lg text-base group-hover:text-white">
                         We don't mind breaking the rules to create the best possible experiences where everything action orientated happens brilliantly and quickly.
                     </p>
                 </div>
             </div>
             <div className="border-solid border-1 border-black group hover:bg-black ">
                 <div className="p-6 sm:px-9 sm:py-16">
                     <small className="text-grey-minor-numbers mr-2 relative top-[1.563rem] right-[1.25rem]">04</small>
                     <p className="uppercase text-lg font-semibold mb-2 group-hover:text-white">Infectious Enthusiasm</p>
                     <h4 className="uppercase font-normal sm:text-4xl text-3xl mb-4 group-hover:text-white">
                         Sheer Love Of Life
                     </h4>
                     <p className="text-grey-minor font-normal sm:text-lg text-base group-hover:text-white">
                         Goodwood people, like Goodwood customers, want to get and see others get the most out of life - and specifically during their experience at Goodwood.
                     </p>
                 </div>
             </div>
         </div>
     </section>
     <Contact />
     <Footer />
     </>
  )
}

export default Home