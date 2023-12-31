//your JS code here. If required.
const container=document.querySelector('.container')

for(let i =1 ; i<=800 ; i++)
	{
		const div=document.createElement('div');
		div.classList.add('square');
		container.appendChild(div);
		
	}
const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
//   square.addEventListener('mouseover', () => {
//     square.style.backgroundColor = '1d1d1d';
//   });

//   square.addEventListener('mouseout', () => {
//     square.style.backgroundColor = 'white';
//   });
// });