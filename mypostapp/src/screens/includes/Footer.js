import React from 'react'

const Footer = () => {
  return (
    <section class="flex flex-col items-center sm:mt-15 mt-8.5">
        <div class="border-solid border-t-1 justify-between sm:flex-row flex-col items-center gap-8 border-[#131313] sm:max-w-[80rem] sm:px20 w-full pt-8 pb-8 flex"> 
            <div>
                <p class="text-center">© 2023 The Goodwood Estate. All rights reserved.</p>
            </div>
            <div class="flex gap-4">
                <p id="last-push-date"></p>
                <a href="#">
                    <p>Terms</p>
                </a>
                <a href="#">
                    <p class="">Privacy</p>
                </a>
                <a href="#">
                    <p>Cookies</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer