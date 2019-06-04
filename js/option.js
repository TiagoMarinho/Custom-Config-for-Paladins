class Option {
	constructor (name, originalKey, states, userStates, operation = Operation.replace, defaultIndex = 0, description = "", warning = "") {
		this.name = name
		this.originalKey = originalKey
		this.states = states
		this.userStates = userStates
		this.operation = operation
		this.currentStateIndex = defaultIndex
		this.description = description
		this.warning = warning
	}
	next () {
		if (this.states.length - 1 > this.currentStateIndex)
			++this.currentStateIndex
	}
	prev () {
		if (this.currentStateIndex > 0)
			--this.currentStateIndex
	}
	hasNext () {
		return this.currentStateIndex + 1 <= this.states.length - 1
	}
	hasPrev () {
		return this.currentStateIndex - 1 >= 0
	}
	get value () {
		return this.states[this.currentStateIndex]
	}
	get valueLabel () {
		if (this.userStates) {
			return this.userStates[this.currentStateIndex]
		} else {
			return this.states[this.currentStateIndex]
		}
	}
}