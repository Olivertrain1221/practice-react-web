import React from 'react';

function Card(dataSource) {
	console.log(dataSource)
	return (
		<>
		{dataSource.dataSource.dataSource.map((dataPiece) => (
			<a key={Math.random().toString()}class="cursor-pointer border-solid border-1 border-black group" href={dataPiece.pdfALink} rel="nofollow">
			<div>
				<div class="outerCardImageContainer">
					<img id="innerCardImage" class="w-48 p-4" src={dataPiece.img}></img>
				</div>
				<div class="w-full">
					<p class="inner-card__text" id="innerCardText">{dataPiece.title}</p>
				</div>
			</div>
		</a>
		))}
			
		</>
	);
}

export default Card;
