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
			msg.style.border = '';
		}, 2000)
	}else if(email.length < 4){
		msg.innerText = 'Email cannot be under 4 characters';
		msg.classList.add('text-danger');
		msg.style.display = 'block';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
			msg.style.border = '';
		}, 2000)
	}else if(message.length < 4){
		msg.innerText = 'Message cannot be under 4 characters';
		msg.classList.add('text-danger');
		msg.style.display = 'block';
		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-danger');
			msg.style.display = 'none';
			msg.style.border = '';
		}, 2000)
	}else{
		let data = 
            '\r Name: ' + name + ' \r\n ' + 
            'Email: ' + email + ' \r\n ' +
            'Message: ' + message;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
        msg.innerText = 'You can now submit the form';
		msg.classList.add('text-success');
		msg.style.display = 'block';
		msg.style.border = '2px solid green';

		setTimeout(()=>{
			msg.innerText = '';
			msg.classList.remove('text-success');
			msg.style.display = 'none';
			msg.style.border = '';
		}, 2000)
	}
})