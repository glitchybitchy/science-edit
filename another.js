var container, stats;

var camera, controls, scene, renderer;

var cross;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 100000;

  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', render );

  scene = new THREE.Scene();


  // solar system set up


  var geometry = new THREE.SphereGeometry( 10, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xb6b6b6} );
  
  var sun = new THREE.Mesh(geometry, material);
  var mercury = new THREE.Mesh(geometry, material);
  var venus = new THREE.Mesh(geometry, material);
  var earth = new THREE.Mesh(geometry, material);
  var mars = new THREE.Mesh(geometry, material);
  var jupiter = new THREE.Mesh(geometry, material);
  var saturn =  new THREE.Mesh(geometry, material);
  var neptune = new THREE.Mesh(geometry, material);
  var uranus = new THREE.Mesh(geometry, material);

  var solarSystem = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

  // Adding all elments to scene

  for (i=0; i<solarSystem.length; i++){

    solarSystem[i].position.x = i*110;
    solarSystem[i].position.z = 10000;
    scene.add( solarSystem[i] ); 


  }

  console.log(solarSystem[0].scale);

  // Sun - scale, colour, etc...

  sun.scale.x = 10;
  sun.scale.y = 10;
  sun.scale.z = 10;

  mercury.scale.x = 0.5;
  mercury.scale.y = 0.5;
  mercury.scale.z = 0.5;

  venus.scale.x = 0.8;
  venus.scale.y = 0.8;
  venus.scale.z = 0.8;

  mars.scale.x = 0.7;
  mars.scale.y = 0.7;
  mars.scale.z = 0.7;

  jupiter.scale.x = 8;
  jupiter.scale.y = 8;
  jupiter.scale.z = 8;

  // Style all planets
  // Make them rotate
  // Make them translate

  


  // Lights

  // light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( 1, 1, 1 );
  // scene.add( light );

  // light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( -1, -1, -1 );
  // scene.add( light );

  // light = new THREE.AmbientLight( 0xffffff );
  // scene.add( light );


  // Renderer

  renderer = new THREE.WebGLRenderer( { antialias: true } );

  renderer.setSize( window.innerWidth, window.innerHeight );

  container = document.getElementById( 'container' );
  container.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

function animate() {

  requestAnimationFrame( animate );
  controls.update();

}

function render() {
  renderer.render( scene, camera );
}