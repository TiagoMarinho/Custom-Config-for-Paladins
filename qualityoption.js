class QualityOption extends Option {
	constructor (name, defaultIndex = 0, description = "") {
		let states = ["low", "medium", "high"]

		super(name, states, defaultIndex, description)
	}
}