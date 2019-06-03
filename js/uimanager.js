class UIManager {
	constructor (chaosSystemSettings, wrapper, settings, submit) {
		this.wrapper = wrapper
		this.settings = settings
		this.submit = submit
		this.chaosSystemSettings = chaosSystemSettings
	}
	updateUI (settings = this.settings) { // TODO: Optimize by not having to redraw entire UI at every change.
		this.wrapper.innerHTML = ``
		let ul = document.createElement("ul")
		this.wrapper.appendChild(ul)
		for (let id = 0; id < settings.length; ++id) (function(id){

			let option = settings[id]
			this.chaosSystemSettings[option.originalKey] = option.value

			let li = document.createElement("li")
			ul.appendChild(li)

			let divLabel = document.createElement("div")
			li.appendChild(divLabel)
			divLabel.className = "label"
			divLabel.innerHTML = option.name

			if (option.description.length > 0 || option.warning.length > 0) {
				let spanDescription = document.createElement("span")
				li.appendChild(spanDescription)
				spanDescription.className = "description"
				spanDescription.innerHTML = option.description

				if (option.warning.length > 0) {
					let spanWarning = document.createElement("span")
					spanDescription.appendChild(spanWarning)
					spanWarning.className = "warning"
					spanWarning.innerHTML = option.warning
				}
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
				settings[id].prev()
				this.updateUI()
			}

			let valueLabel = document.createElement("span")
			divOption.appendChild(valueLabel)
			valueLabel.innerHTML = option.valueLabel

			let nextButton = document.createElement("input")
			divOption.appendChild(nextButton)
			nextButton.type = "button"
			nextButton.value = "❯"
			nextButton.className = "close"
			nextButton.id = `next${id}`
			
			nextButton.onclick = () => {
				settings[id].next()
				this.updateUI()
			}
		}).bind(this)(id)

		submit.download = `ChaosSystemSettings.ini`
		submit.href = `data:application/octet-stream,${chaosSystemSettings.result}`
	}
}