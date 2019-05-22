class Option {
	constructor (name, states, defaultIndex = 0, description = "") {
		this.name = name
		this.states = states
		this.currentStateIndex = defaultIndex
		this.description = description
	}
	next () {
		if (this.states.length - 1 > this.currentStateIndex)
			++this.currentStateIndex
	}
	prev () {
		if (this.currentStateIndex > 0)
			--this.currentStateIndex
	}
	get value () {
		return this.states[this.currentStateIndex]
	}
}