let generateConfig = (chaosSystemSettings, settings) => {
	let customChaosSystemSettings = chaosSystemSettings
	for (let i = 0; i < settings.length; ++i) {
		let setting = settings[i],
			originalKey = setting.originalKey,
			value = setting.value,
			operation = setting.operation

		customChaosSystemSettings[originalKey] = operation(customChaosSystemSettings[originalKey], value)
	}
	return customChaosSystemSettings
}