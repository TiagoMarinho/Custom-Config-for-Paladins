class Dictionary {
	constructor (keys) {
		this._dictionary = keys
	}
	forEachKey (callback) {
		for (let property in this._dictionary) {
			if (this._dictionary.hasOwnProperty(property))
				callback(property)
		}
	}
}