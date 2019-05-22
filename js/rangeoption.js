class RangeOption extends Option { // TODO: Make it so a range option displays a canvas element with a range.
	constructor (name, min, max, defaultIndex = 0, description = "") {
		let states = []

		for (let i = min; i < max + 1; ++i) {
			states.push(i)
		}

		super(name, states, defaultIndex, description)
	}
}