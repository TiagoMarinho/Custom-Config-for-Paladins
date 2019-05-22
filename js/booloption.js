class BoolOption extends Option {
	constructor (name, defaultIndex = 0, description = "") {
		let states = [false, true]
		super(name, states, defaultIndex, description)
	}
}