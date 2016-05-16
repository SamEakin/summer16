// create DIV element
var div = document.createElement('DIV');
// set height of element
div.style.height = '100vh';
// add to DOM
document.body.appendChild(div);
// add event listener
div.addEventListener('mousemove', function(event) {
	console.log(event);
	var x = event.clientX;
	var y = event.clientY;
	div.textContent = x + ', ' + y;
});
