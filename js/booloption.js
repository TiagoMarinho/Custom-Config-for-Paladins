class BoolOption extends Option {
	constructor (name, defaultIndex = 0, description = "", warning = "") {
		let states = [false, true]
		super(name, states, defaultIndex, description, warning)
	}
}