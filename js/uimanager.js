class UIManager {
	constructor (chaosSystemSettings, wrapper, settings, submit) {
		this.wrapper = wrapper
		this.settings = settings
		this.submit = submit
		this.chaosSystemSettings = chaosSystemSettings
	}
	updateUI (settings = this.settings) {
		this.wrapper.innerHTML = ``
		let ul = document.createElement("ul")
		this.wrapper.appendChild(ul)
		for (let id = 0; id < settings.length; ++id) (function(id){

			let option = settings[id]

			let li = document.createElement("li")
			ul.appendChild(li)

			let divLabel = document.createElement("div")
			li.appendChild(divLabel)
			divLabel.className = "label"
			divLabel.innerHTML = option.name

			if (option.description.length > 0 || option.warning.length > 0 || option.impact.length > 0) {
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
				if (option.impact.length > 0) {
					let spanImpact = document.createElement("span")
					spanDescription.appendChild(spanImpact)
					spanImpact.className = "impact"
					spanImpact.innerHTML = option.impact
				}
			}

			let divOption = document.createElement("div")
			li.appendChild(divOption)
			divOption.className = "option"

			let prevButton = document.createElement("input")
			divOption.appendChild(prevButton)
			prevButton.type = "button"
			prevButton.value = "❮"
			prevButton.id = `prev${id}`

			let valueLabel = document.createElement("span")
			divOption.appendChild(valueLabel)
			valueLabel.innerHTML = option.valueLabel

			let nextButton = document.createElement("input")
			divOption.appendChild(nextButton)
			nextButton.type = "button"
			nextButton.value = "❯"
			nextButton.id = `next${id}`

			let greyOutDisabledButtons = () => {
				if (!option.hasPrev()) {
					prevButton.className = "open hidden"
				} else {
					prevButton.className = "open"
				}
				if (!option.hasNext()) {
					nextButton.className = "close hidden"
				} else {
					nextButton.className = "close"
				}
			}
			greyOutDisabledButtons()

			let updateFileWithSettings = (modifiedSettings) => {
				this.chaosSystemSettings[modifiedSettings.originalKey] = modifiedSettings.value

				submit.download = `ChaosSystemSettings.ini`
				submit.href = `data:application/octet-stream,${chaosSystemSettings.result}`
			}
			updateFileWithSettings(option)

			prevButton.onclick = () => {
				option.prev()
				valueLabel.innerHTML = option.valueLabel
				greyOutDisabledButtons()
				updateFileWithSetting(option)
			}
			
			nextButton.onclick = () => {
				option.next()
				valueLabel.innerHTML = option.valueLabel
				greyOutDisabledButtons()
				updateFileWithSetting(option)
			}
		}).bind(this)(id)
	}
}
