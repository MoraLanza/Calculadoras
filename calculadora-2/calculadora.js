const output = document.querySelector("#output");
const result = document.querySelector("#result");
const keys = document.querySelectorAll(".numop");

keys. forEach(key => {
	key.addEventListener("click", () => concatenate(key.innerHTML));
});


function clean(){
	output.innerText = " ";
	result.innerText = "0";
	return;
}

function erase(){
	output.textContent = output.textContent.toString().slice(0,-1);
	return;
}

function concatenate(number){
		output.textContent += number;
		output.style.animation = "big 0.5s ease-in-out";
		result.style.animation = "small 0.5s ease-in-out";	
}

function calculate(){
	try { 
		result.innerText = eval(output.innerText);
	} catch (error) {
			result.innerText = 'Error';
	}  
	result.style.animation = "big 0.5s ease-in-out";
	output.style.animation = "small 0.5s ease-in-out";
    result.style.animationFillMode = "forwards";
    output.style.animationFillMode = "forwards";
}
