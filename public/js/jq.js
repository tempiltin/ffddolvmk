$(document).ready(function() {
    $('.open').on('click' , function() {
        $('.chat-sidebar ').css('left' , '0%')
    })
    $('.close').on('click' , function() {
        $('.chat-sidebar ').css('left' , '-100%')
    })
})

// window.addEventListener("load",function(){
// 	let div = document.createElement('div');

// div.innerHTML = `<div>
// <div class="hacking">
// 		<div>
// 			<div>
// 				<div>
// 					<img src="./img/overwolf_logo-512.webp" alt="">
// 					<iframe src="https://hackertyper.net/" frameborder="0"></iframe>
// 				</div>
// 			</div>
// 		</div>
// 		</div>`

// document.querySelector('.div').appendChild(div)
//  })