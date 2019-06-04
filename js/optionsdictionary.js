let optionsDictionary = {
	directX: {
		name: "API",
		originalKey: "dx11",
		type: Option,
		states: [false, true],
		userStates: ["DirectX 9", "DirectX 11"],
		defaultIndex: 1,
		description: "Whether to use DirectX 9 or DirectX 11."
	},
	resolution: {
		name: "Resolution", // Label displayed to user
		originalKey: "resolution", // Property that has its value changed
		type: Option,
		states: [{x: 800, y: 600}, {x: 1280, y: 720}, {x: 1366, y: 768}, {x: 1440, y: 900}, {x: 1600, y: 900}, {x: 1920, y: 1080}], // Values to use
		userStates: ["800x600", "1280x720", "1366x768", "1440x900", "1600x900", "1920x1080"], // Value labels
		defaultIndex: 5, // Initial value index
		description: "Screen resolution." // Description shown to user
	},
	resolutionScale: {
		name: "Resolution Scale",
		originalKey: "screenPercentage", 
		type: Option,
		states: [25, 33, 50, 66, 75, 100], 
		userStates: ["25%", "33%", "50%", "66%", "75%", "100%"], 
		defaultIndex: 4,
		description: "At what percentage of the chosen screen resolution the 3D scene will be rendered with.",
		warning: "Lowest values can decrease visibility."
	},
	dynamicLights: {
		name: "Dynamic Lights",
		originalKey: "dynamicLights",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Whether to allow moving objects to emit light into the scene."
	},
	dynamicShadows: {
		name: "Dynamic Shadows",
		originalKey: "dynamicShadows",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Whether to allow moving objects to cast shadows."
	},
	decals: {
		name: "Decals",
		originalKey: "staticDecals",
		type: Option,
		states: [true, false],
		userStates: ["Enabled", "Disabled"],
		defaultIndex: 0,
		description: "Decals are textures that overlay other textures in objects, like sprays.",
		warning: "Disabling this option will prevent Mal'Damba's gourd and Viktor's ultimate ground marker textures from displaying."
	},
	SSAA: {
		name: "SSAA",
		originalKey: "ssaa",
		type: Option,
		states: [1.0, 1.5, 2.0],
		userStates: ["Disabled", "1.5x", "2.0x"],
		defaultIndex: 0,
		description: "Supersample Antialiasing: Smoothes sharp edges by rendering the scene at a higher resolution and downscaling it afterwards.",
		warning: "Enabling this option has a huge impact on performance."
	},
	ragdolls: {
		name: "Ragdolls",
		originalKey: "ragdolls",
		type: Option,
		states: [true, false],
		userStates: ["Enabled", "Disabled"],
		defaultIndex: 0,
		description: "Physics simulation on character death instead of its default death animation.",
		warning: "Disabling this option may cause issues with Shattered and Golden weapon effects."
	},
	textureFiltering: {
		name: "Texture Filtering",
		originalKey: "filtering",
		type: Option,
		states: ["Point", "Linear", "Aniso"],
		userStates: ["Disabled", "Bilinear/Trilinear", "Anisotropic"],
		defaultIndex: 2,
		description: "How to interpolate pixel values for low resolution textures or surfaces seen from extreme angles.",
		warning: "Disabling this option will have a huge visual impact, with little to no gain on performance."
	},
	skeletalMeshLODBias: {
		name: "SkeletalMesh Quality",
		originalKey: "skeletalMeshLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls biasing of Level Of Detail for deformable 3D geometry, like character models."
	},
	staticMeshLODBias: {
		name: "StaticMesh Quality",
		originalKey: "staticMeshLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls biasing of Level Of Detail for static meshes."
	},
	particleLODBias: {
		name: "Particle Quality",
		originalKey: "particleLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls biasing of Level Of Detail for particles."
	},
	characterTextureRes: {
		name: "Character Texture Resolution",
		originalKey: "charTextureRes",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)"],
		defaultIndex: 1
	},
	weaponTextureRes: {
		name: "Weapon Texture Resolution",
		originalKey: "weaponTextureRes",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)"],
		defaultIndex: 1
	},
	environmentTextureRes: {
		name: "Map Texture Resolution",
		originalKey: "mapTextureRes",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)"],
		defaultIndex: 1
	},
	lightingMapRes: {
		name: "Lighting Resolution",
		originalKey: "lightingMapRes",
		type: Option,
		states: [2, 64, 512, 1024],
		userStates: ["Solid (2x2)", "Low (64x64)", "Medium (512x512)", "High (1024x1024)"],
		defaultIndex: 1,
		description: "Controls resolution for environment lightmaps and shadowmaps."
	},/*
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
	},*/
	verticalSync: {
		name: "V-Sync",
		originalKey: "vsync",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Limits the FPS to the screen refresh rate.",
		warning: "Increases input lag considerably when enabled, making it harder to aim and hurting player reaction times."
	},/*
	volumetrics: {
		name: "Volumetrics",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "General smoke and atmospheric effects.",
		warning: "Disabling this makes Maeve's ultimate not turn everything black so map is still visible, but players will be properly hidden when not inside the visibility radius."
	},*/
}