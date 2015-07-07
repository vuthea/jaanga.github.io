
// axes
		scene.add( new THREE.AxisHelper( 50 ) );


// ground box
		geometry = new THREE.BoxGeometry( 100, 2, 100 );
		material = new THREE.MeshNormalMaterial();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, -10, 0 );
		scene.add( mesh );

		mesh = new THREE.GridHelper( 50, 10 );
		mesh.position.set( 0, -9, 0 );
		scene.add( mesh );


// box Normal transparent edges
		geometry = new THREE.BoxGeometry( 20, 20, 20 );
		material = new THREE.MeshNormalMaterial( { opacity: 0.7, side: THREE.DoubleSide, transparent: true });
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 50, 10, 0 );
		scene.add( mesh );
		scene.add( new THREE.BoxHelper( mesh ) );


// 50 boxes
	function addBoxesNoLights() {

		geometry = new THREE.BoxGeometry( 10, 10, 10 );
		material = new THREE.MeshNormalMaterial( { opacity: 0.7, side: THREE.DoubleSide, transparent: true });
		for (var i = 0; i < 50; i++) {

			mesh = new THREE.Mesh( geometry, material );
			mesh.position.set( 100 * Math.random() - 50, 100 * Math.random(), 100 * Math.random() - 50 );
			mesh.rotation.set( 6.3 * Math.random(), 1.57 * Math.random(), 3.14 * Math.random() );

			scene.add( mesh );

			helper = new THREE.BoxHelper( mesh );
			helper.material.color.setRGB( 1, 0, 0 );
			scene.add( helper );

		}

// Square lines
		function v( x, y, z ){ return new THREE.Vector3( x, y, z ); }

		var geometry = new THREE.Geometry();
		geometry.vertices = [ v( 20, 20, 20 ), v( -20, 20, 20 ), v( -20, 20, -20 ), v( 20, 20, -20 ), v( 20, 20, 20 ) ];

		var line = new THREE.Line( geometry, new THREE.LineBasicMaterial({ color: 0x0000ff }));
		scene.add(line);


	function getTrylonPerisphere() {

// Perisphere
		geometry = new THREE.SphereGeometry( 25, 50, 50 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(), 
			ambient: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 10
		} );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -100, 20, 0 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		scene.add( mesh );

// Trylon
		geometry = new THREE.CylinderGeometry( 0, 8, 100, 3 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(), 
			ambient: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 1
		} );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -120, 50, -30 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		scene.add( mesh );

	}


// add remove existing
// see algesurf pe r4
	function getLights() {

// Lights
		var light = new THREE.AmbientLight( 0x888888 );
		scene.add( light );

		lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
		lightDirectional.position.set( -400, 400, 400 );

		var d = 400;
		lightDirectional.shadowCameraLeft = -d;
		lightDirectional.shadowCameraRight = d;
		lightDirectional.shadowCameraTop = d;
		lightDirectional.shadowCameraBottom = -d;

		lightDirectional.shadowCameraNear = 300;
		lightDirectional.shadowCameraFar = 2000;

// can help stop appearance of gridlines in objects with opacity < 1
		lightDirectional.shadowBias = -0.0002; // default 0 ~ distance fron corners?
		lightDirectional.shadowDarkness = 0.3; // default 0.5
		lightDirectional.shadowMapWidth = 2048;  // default 512
		lightDirectional.shadowMapHeight = 2048;

		lightDirectional.castShadow = true;
		lightDirectional.shadowCameraVisible = true;
		scene.add( lightDirectional );

		pointLight = new THREE.PointLight( 0xffffff, 0.5 );
		pointLight.position = camera.position;
		camera.add( pointLight );
		scene.add( camera );

	}

