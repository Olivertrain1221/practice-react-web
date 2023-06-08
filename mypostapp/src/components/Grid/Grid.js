import React, { useState } from 'react'
import Card from '../card/Card'

export default function Grid(dataSource) {
  console.log(dataSource)
  return (
    <section class="flex flex-col items-center sm:mt-15 mt-8.5">
      <div class="x-5 w-full sm:max-w-[80rem]">
        <div id="outerCardContainer"
          class="x-5 sm:items-start items-center sm:max-w-[80rem] flex flex-col sm:flex-row flex-wrap gap-6">
          <Card dataSource={dataSource}/>
        </div>
      </div>
    </section>
  )
}
