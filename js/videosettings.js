class VideoSettings {
	constructor () {
		let settings = {
			resolutionScale: {
				name: "Resolution Scale", 
				type: RangeOption,
				min: 10,
				max: 100,
				defaultIndex: 65,
				description: "Which resolution the 3D scene will be rendered with."
			},
			decals: {
				name: "Decals",
				type: BoolOption,
				defaultIndex: 1,
				description: "Decals are textures that overlay other textures in objects, like sprays. Note that disabling this option will prevent Mal'Damba's Gourd and Viktor ultimate marker textures from displaying."
			}
		}


		this.options = [
			new RangeOption("Resolution Scale", 10, 100, 65, "Which resolution the 3D scene will be rendered with."),
			new BoolOption("Decals", 1, "Decals are textures that overlay other textures in objects, like sprays. Note that disabling this option will prevent Mal'Damba's Gourd and Viktor ultimate marker textures from displaying."),
			new BoolOption("Ragdolls", 1, "Enables custom physics at character death instead of the default character death animation."),
			new QualityOption("SkeletalMeshLODBias", 0, "Controls the quality of character 3D geometry, lower values being better looking and higher values giving better performance."),
			new ResolutionOption("Character Texture Resolution", 4, "Resolution for character textures."),
			new ResolutionOption("Weapon Texture Resolution", 4, "Resolution for weapon textures."),
			new ResolutionOption("Map Texture Resolution", 4, "Resolution for map textures."),
			new Option("Video Memory Texture Pool", [150, 300, 600], 0, "How much video memory will be used by the texture streaming service, in megabytes."),
			new Option("SSAA", ["OFF", "1.5x", "2x"], 0, "Supersample Antialiasing: Renders the 3D scene at a higher resolution and downscales the result to smooth sharp edges at a huge performance cost."),
			new Option("MSAA", ["OFF", "x2", "x4", "x8", "x16"], 0, "Multisample Antialiasing: Samples pixels multiple times at different points to get the average pixel color, smoothing sharp edges at the cost of performance."),
			new BoolOption("FXAA", 0, "Fast Approximate Antialiasing: Smoothes sharp edges using a post processing filter at a low performance cost, with less precision than MSAA."),
			new Option("DirectX", [9, 11], 1, "Whether to use DirectX 9 or DirectX 11."),
			new QualityOption("Material Quality", 0, "How complex the material shaders can get."),
			new BoolOption("VSync", 0, "Limits the FPS to the screen refresh rate. Increases input lag considerably."),
			new BoolOption("Volumetrics", 0, "General smoke and atmospheric effects. Disabling this makes Maeve's ultimate not turn everything black so map is still visible.")
		]
	}
}