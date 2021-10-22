let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", (e)=>{
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let msg = document.getElementById("msg");

	if(name.length < 4){
		msg.innerText = 'Name cannot be under 4 characters';
		msg.classList.add('text-danger');
		msg.style.display = 'block';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
		}, 2000)
	}else if(email.length < 4){
		msg.innerText = 'Email cannot be under 4 characters';
		msg.classList.add('text-danger');
		msg.style.display = 'block';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
		}, 2000)
	}else if(message.length < 4){
		msg.innerText = 'Message cannot be under 4 characters';
		msg.classList.add('text-danger');
		msg.style.display = 'block';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
		}, 2000)
	}else{
		msg.innerText = 'You can now submit the form';
		msg.classList.add('text-success');
		msg.style.display = 'block';
		msg.style.border = '2px solid #008000';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
			msg.style.border = '';
		}, 2000)
	}
})