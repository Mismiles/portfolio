console.log("It's working")

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

function SubForm (){
    fetch("https://api.apispreadsheets.com/data/11067/", {
        method: "POST",
        body: JSON.stringify({"data": {"Name":"","Email":"","Message":"","Subject":""}}),
    }).then(res =>{
        if (res.status === 201){
            "Form submitted successfully"
        }
        else{
            "Error, please resubmit form"
        }
    })
}