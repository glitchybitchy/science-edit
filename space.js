	console.log("is linked");

var width = window.innerWidth;
var height = window.innerHeight;

var scene = new THREE.Scene();
camera = new THREE.OrthographicCamera( width / - 8, width / 8, height / 8, height / - 8, - 500, 1000 );
				camera.position.x = 0;
				camera.position.y = 0;
				camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry(50, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshNormalMaterial();

var sun = new THREE.Mesh(geometry, material);
var mercury = new THREE.Mesh(geometry, material);
var venus = new THREE.Mesh(geometry, material);
var earth = new THREE.Mesh(geometry, material);
var mars = new THREE.Mesh(geometry, material);
var jupiter = new THREE.Mesh(geometry, material);
var neptune = new THREE.Mesh(geometry, material);
var uranus = new THREE.Mesh(geometry, material);

var solarSystem = [sun,venus,earth,mars,jupiter,uranus,neptune];






for(i = 0; i < solarSystem.length; i++){


	solarSystem[i].position.x = 70 * i;

	
}

scene.add(sun,venus,earth,mars,jupiter,uranus,neptune);

console.log(solarSystem[6].geometry.parameters,solarSystem[2].geometry.parameters);


var render = function () {
    // requestAnimationFrame(render);

    // cube.rotation.y += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);


};


render();

