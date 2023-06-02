import React from 'react'

const Contact = () => {
  return (
    <section class="flex flex-col items-center sm:mt-20 mt-8.5 group cursor-pointer px-5">
    <div class="bg-black sm:max-w-[80rem] w-full p-8 sm:p-15">
        <p class="sm:text-white mb-5.5 text-grey-cta max-w-md  sm:font-normal sm:text-base uppercase font-gs tracking-[0.125rem]">
            For all questions on any of our brand guidelines, please contact
        </p>
        <div class="flex justify-between flex-col sm:flex-row">
            <h5 class="text-white w-1/2 text-lg sm:text-4xl uppercase gill"><a class="group-hover:underline" href="mailto:design@goodwood.com">design@goodwood.com</a></h5>
            <a class="overflow-hidden mt-4">
                <svg class="relative sm:translate-y-[48px] sm:group-hover:translate-y-[0] sm:block transition-all" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8H40V34" stroke="white" stroke-width="3"/>
                    <path d="M40 8L8 40" stroke="white" stroke-width="3"/>
                </svg>
            </a>
        </div>
    </div>
</section>
  )
}

export default Contact