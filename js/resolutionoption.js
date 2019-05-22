class ResolutionOption extends Option {
	constructor (name, defaultIndex = 0, description = "") {
		let states = [],
			maxRes = 32,
			res = 0

		for (let i = 2; i < 12; ++i) {
			res = Math.pow(2, i)
			states.push(res)
		}

		super(name, states, defaultIndex, description)
	}
}