let optionsDictionary = {
	directX: {
		name: "API",
		originalKey: "dx11",
		type: Option,
		states: [false, true],
		userStates: ["DirectX 9", "DirectX 11"],
		defaultIndex: 1,
		description: "Whether to use DirectX 9 or DirectX 11 as the graphics rendering API."
	},
	resolution: {
		name: "Screen Resolution",
		originalKey: "resolution",
		type: Option,
		states: [{x: 800, y: 600}, {x: 1280, y: 720}, {x: 1366, y: 768}, {x: 1440, y: 900}, {x: 1600, y: 900}, {x: 1680, y: 1050}, {x: 1920, y: 1080}],
		userStates: ["800x600", "1280x720", "1366x768", "1440x900", "1600x900", "1680x1050", "1920x1080"],
		defaultIndex: 6,
		description: "Screen resolution the game will be displayed at. It's highly recommended to use your native monitor resolution here."
	},
	resolutionScale: {
		name: "Resolution Scale",
		originalKey: "screenPercentage", 
		type: Option,
		states: [25, 33, 50, 66, 75, 100], 
		userStates: ["25%", "33%", "50%", "66%", "75%", "100%"], 
		defaultIndex: 4,
		description: "At what percentage of the chosen screen resolution the 3D scene will be rendered with. Using a lower value increases performance."
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
		description: "Whether to allow moving objects to cast shadows into the scene."
	},
	decals: {
		name: "Decals",
		originalKey: "staticDecals",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
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
		warning: "Enabling this option has a huge negative impact on performance."
	},
	MSAA: {
		name: "MSAA",
		originalKey: "msaa",
		type: Option,
		states: [1, 2, 4, 8, 16],
		userStates: ["Disabled", "x2", "x4", "x8", "x16"],
		defaultIndex: 0,
		description: "Multisample Antialiasing: Samples pixels multiple times at different points to get the average pixel color, smoothing sharp edges at a performance cost."
	},
	FXAA: {
		name: "FXAA",
		originalKey: "fxaa",
		type: Option,
		states: [0, 1],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Fast Approximate Antialiasing: Smoothes sharp edges using a post processing filter at a low performance cost."
	},
	textureFiltering: {
		name: "Texture Filtering",
		originalKey: "filtering",
		type: Option,
		states: ["Point", "Linear", "Aniso"],
		userStates: ["Disabled", "Bilinear/Trilinear", "Anisotropic"],
		defaultIndex: 2,
		description: "How to interpolate pixel values for low resolution textures or surfaces seen from extreme angles.",
		warning: "Disabling this option will have a huge visual impact, with little to no gain in performance."
	},
	skeletalMeshLODBias: {
		name: "SkeletalMesh Quality",
		originalKey: "skeletalMeshLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls how far deformable objects (such as characters) will have to be before switching to a lower geometry version of themselves to increase performance."
	},
	staticMeshLODBias: {
		name: "StaticMesh Quality",
		originalKey: "staticMeshLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls how far static objects (such as map props) will have to be before switching to a lower geometry version of themselves to increase performance."
	},
	particleLODBias: {
		name: "Particle Quality",
		originalKey: "particleLODBias",
		type: Option,
		states: [10, 2, 0],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "Controls how far particles (such as projectiles) will have to be before switching to a lower geometry version of themselves to increase performance."
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
		description: "Controls resolution for static (baked) environment shadows and lighting."
	},
	ragdolls: {
		name: "Ragdolls",
		originalKey: "ragdolls",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "Physics simulation on character death instead of its default death animation.",
		warning: "Disabling this option may cause issues with Shattered and Golden weapon effects upon player death."
	},
	verticalSync: {
		name: "V-Sync",
		originalKey: "vsync",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 0,
		description: "Limits the FPS to the screen refresh rate.",
		warning: "Increases input lag considerably when enabled, making it harder to aim and hurting player reaction times."
	},
	volumetrics: {
		name: "Volumetrics",
		originalKey: "volumetrics",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "General smoke and atmospheric effects.",
		warning: "Disabling this causes Maeve's ultimate not to render a dark fog, and even though players will still be invisible when outside the visibility radius, it can be considered as an unfair advantage by some players."
	},
	speedTreeLeaves: {
		name: "SpeedTree Leaves",
		originalKey: "speedTree",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "Whether to use SpeedTree to simulate tree leaves and fronds.",
		warning: "Disabling this option may prevent tree leaves from rendering, which can be considered as an unfair advantage by some players."
	},
	oneFrameThreadLag: {
		name: "Delay render thread",
		originalKey: "oneFrameThreadLag",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "Whether to delay the rendering thread by one frame relative to the game logic thread.",
		warning: "Disabling this option reduces input lag by one frame, but may hurt framerate stability."
	},
	perFrameYield: {
		name: "Framerate cap",
		originalKey: "perFrameYield",
		type: Option,
		states: [false, true],
		userStates: ["Disabled", "Enabled"],
		defaultIndex: 1,
		description: "Disabling this option allows the framerate to go higher than 175.",
		warning: "Disabling this option may increase hardware usage by a huge margin for little to no gain in terms of input lag. It does not improve performance at all. Only recommended if you have a 240hz monitor or for benchmarking purposes on beefy computers."
	},
	texturePool: {
		name: "Texture pool size",
		originalKey: "texturePoolSize",
		type: Option,
		states: [150, 180, 225, 450, 900],
		userStates: ["150MB", "180MB", "225MB", "450MB", "900MB"],
		defaultIndex: 1,
		description: "How much video memory will be allocated by the texture streaming service, in megabytes.",
		warning: "This is an advanced option, setting this too low can cause the texture streaming to glitch and textures to flicker."
	},/*
	materialQuality: {
		name: "Material Quality",
		type: Option,
		states: [0, 1, 2],
		userStates: ["Low", "Medium", "High"],
		defaultIndex: 0,
		description: "How complex the material shaders can get. This has a big performance impact."
	},*/
}
