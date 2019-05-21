class UIManager {
	constructor (wrapperID, settings) {
		this.wrapper = document.getElementById(wrapperID)
		this.settings = settings
	}
	updateUI () {
		this.wrapper.innerHTML = ``
		for (let id = 0; id < this.settings.options.length; ++id) (function(id){

			let option = this.settings.options[id]
			
			let li = document.createElement("li")
			this.wrapper.appendChild(li)

			let divLabel = document.createElement("div")
			li.appendChild(divLabel)
			divLabel.className = "label"
			divLabel.innerHTML = option.name

			if (option.description.length > 0) {
				let spanDescription = document.createElement("span")
				li.appendChild(spanDescription)
				spanDescription.className = "description"
				spanDescription.innerHTML = option.description
			}

			let divOption = document.createElement("div")
			li.appendChild(divOption)
			divOption.className = "option"

			let prevButton = document.createElement("input")
			divOption.appendChild(prevButton)
			prevButton.type = "button"
			prevButton.value = "❮"
			prevButton.className = "open"
			prevButton.id = `prev${id}`

			prevButton.onclick = () => {
				this.settings.options[id].prev()
				this.updateUI()
			}

			let valueLabel = document.createElement("span")
			divOption.appendChild(valueLabel)
			valueLabel.innerHTML = option.value

			let nextButton = document.createElement("input")
			divOption.appendChild(nextButton)
			nextButton.type = "button"
			nextButton.value = "❯"
			nextButton.className = "close"
			nextButton.id = `next${id}`
			
			nextButton.onclick = () => {
				this.settings.options[id].next()
				this.updateUI()
			}

		}).bind(this)(id)
	}
}