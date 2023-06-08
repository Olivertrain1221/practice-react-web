import React from 'react';

const estate = 



function Card() {
    return (
    <a class="cursor-pointer border-solid border-1 border-black group" href=""  rel="nofollow">
	<div>
	  <div class="outerCardImageContainer">
		<img id="innerCardImage" class="w-48 p-4" src="{currentData[i].imageURL}"></img>
	  </div>
	  <div class="w-full">
		<p class="inner-card__text" id="innerCardText"></p>
	  </div>
	</div>
  </a>
  );
}

export default Card;
