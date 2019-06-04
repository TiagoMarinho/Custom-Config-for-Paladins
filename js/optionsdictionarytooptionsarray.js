let optionsDictionaryToOptionsArray = (optionsDictionary) => {
	let options = []
	for (let key in optionsDictionary) {
		let option
		if (optionsDictionary.hasOwnProperty(key)) {
			let setting = optionsDictionary[key],
				name = setting.name,
				originalKey = setting.originalKey,
				type = setting.type || Option,
				operation = setting.operation || Operation.replace,
				defaultIndex = setting.defaultIndex || 0,
				description = setting.description || "",
				warning = setting.warning || "",
				impact = setting.impact || ""

			switch (type) {
				case Option:
					let states = setting.states,
						userStates = setting.userStates
					option = new Option(name, originalKey, states, userStates, operation, defaultIndex, description, warning, impact)
					break
				default:
					throw new Error("Unknown Option type being passed to optionsDictionaryToOptionsArray()")
			}
		}
		options.push(option)
	}
	return options
}