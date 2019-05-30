let optionsDictionary = {
	resolutionScale: {
		name: "Resolution Scale", 
		originalKey: "ScreenPercentage",
		type: Option,
		states: [25, 33, 50, 66, 75, 100, 150, 200],
		userStates: ["25%", "33%", "50%", "66%", "75%", "100%", "150%", "200%"],
		defaultIndex: 4,
		description: "At what percentage of the chosen screen resolution the 3D scene will be rendered with.",
		warning: "Values higher than 100% will be downscaled to fit the screen and have a huge impact on performance."
	},
	decals: {
		name: "Decals",
		type: Option,
		states: [true, false],
		userStates: ["Enabled", "Disabled"],
		defaultIndex: 0,
		description: "Decals are textures that overlay other textures in objects, like sprays.",
		warning: "Disabling this option will prevent Mal'Damba's gourd and Viktor's ultimate ground marker textures from displaying."
	},
	ragdolls: {
		name: "Ragdolls",
		type: Option,
		states: [true, false],
		userStates: ["Enabled", "Disabled"],
		defaultIndex: 0,
		description: "Physics simulation on character death instead of its default death animation.",
		warning: "Disabling this option may cause issues with Shattered and Golden weapon effects."
	},
	skeletalMeshLODBias: {
		name: "SkeletalMeshLODBias",
		type: Option,
		states: [10, 5, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls biasing of the Level Of Detail for character 3D geometry, lower values being better looking and higher values giving better performance."
	},
	particleLODBias: {
		name: "ParticleLODBias",
		type: Option,
		states: [10, 5, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls biasing of the Level Of Detail for particles, lower values being better looking and higher values giving better performance."
	},
	characterTextureRes: {
		name: "Character Texture Resolution",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)", "Ultra (2048x2048)"],
		defaultIndex: 1
	},
	weaponTextureRes: {
		name: "Weapon Texture Resolution",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)", "Ultra (2048x2048)"],
		defaultIndex: 1
	},
	environmentTextureRes: {
		name: "Map Texture Resolution",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)", "Ultra (2048x2048)"],
		defaultIndex: 1
	},
	MSAA: {
		name: "MSAA",
		type: Option,
		states: ["Disabled", "x2", "x4", "x8", "x16"],
		userStates: ["Disabled", "x2", "x4", "x8", "x16"],
		defaultIndex: 0,
		description: "Multisample Antialiasing: Samples pixels multiple times at different points to get the average pixel color, smoothing sharp edges at the cost of performance."
	},
	FXAA: {
		name: "FXAA",
		type: Option,
		states: [true, false],
		userStates: ["Enabled", "Disabled"],
		defaultIndex: 0,
		description: "Fast Approximate Antialiasing: Smoothes sharp edges using a post processing filter at a low performance cost, with less precision than MSAA."
	},
	directX: {
		name: "API",
		type: Option,
		states: [false, true],
		userStates: ["DirectX 9", "DirectX 11"],
		defaultIndex: 1,
		description: "Whether to use DirectX 9 or DirectX 11. Using the latter is highly recommended, especially with more recent hardware."
	},
	texturePool: {
		name: "Video Memory Texture Pool",
		type: Option,
		states: [150, 300, 600],
		userStates: ["150MB", "300MB", "600MB"],
		defaultIndex: 0,
		description: "How much video memory will be used by the texture streaming service, in megabytes.",
		warning: "Setting this too low may cause textures to be set to default resolution."
	},
	materialQuality: {
		name: "Material Quality",
		type: Option,
		states: [0, 1, 2],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "How complex the material shaders can get. This has a big performance impact."
	},
	verticalSync: {
		name: "VSync",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Limits the FPS to the screen refresh rate.",
		warning: "Increases input lag considerably when enabled, making it harder to aim and hurting player reaction times."
	},
	volumetrics: {
		name: "Volumetrics",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "General smoke and atmospheric effects.",
		warning: "Disabling this makes Maeve's ultimate not turn everything black so map is still visible, but players will be properly hidden when not inside the visibility radius."
	},
}