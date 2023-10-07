	let inputEl = document.querySelector(".input-el")
	
	inputEl.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
   	   createNewLink()
    }
});
	
	 
	
	const searchButton = document.getElementById("search-btn")
	
	searchButton.addEventListener('click', function(){
		createNewLink()
	})
	
	
    function createNewLink() {
    	let inputValue = inputEl.value
    	console.log(inputValue)
		const newLink = `https://google.com/search?q=${inputValue}`
		window.open(newLink, '_blank')
		
		inputEl.value = ""
	}