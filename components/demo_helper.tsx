
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />


import * as THREE from "three";
import { tw } from "twind";

/**
 * Creates the Three.js app from a Preact (class) component. Make sure the parent returns false from shouldComponentUpdate() !
 *
 * @param domElement The parent component's dom element (ie. this.base)
 * @param threeCallback A callback to the parent once we are done
 */
const threeApp = (domElement: HTMLElement, threeCallback: () => void) => {
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;

  const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

  let particles: THREE.Points;
  let count = 0;

  let mouseX = 0, mouseY = 0;
  let windowHalfX = window.innerWidth;
  let windowHalfY = window.innerHeight;

  init();
  animate();

  function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    camera = new THREE.PerspectiveCamera(
      45, //FOV
      window.innerWidth / window.innerHeight, //Aspect
      10, //Near
      10000, //Far
    );

    ////////

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0, j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTX; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

        scales[j] = 1;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color("#ffffff") },
      },
      vertexShader: `
      attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 300.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}
      `,
      fragmentShader: `
      uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

			}
      `,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    ////////

    /////

    // renderer.setClearColor("#999999");
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute("id", "generatedCanvas");

    domElement.style.touchAction = "none"; // ???
    domElement.appendChild(renderer.domElement);

    // We cast the domElement as an HTMLElement so the linter doesn't get confused. We know for sure that this will always be a <div>
    document.body.addEventListener("pointermove", onPointerMove);
    // @ts-ignore this runs in the browser. so Deno's warning doesn't apply, as we wont ever use deno's window object.
    window.addEventListener("resize", onWindowResize);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.position.x += (mouseY - camera.position.x) * .05;
    camera.position.z += (mouseX - camera.position.z) * .5;
    camera.lookAt(scene.position);

    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;

    let i = 0, j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
          (Math.sin((iy + count) * 0.5) * 50);

        scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 +
          (Math.sin((iy + count) * 0.5) + 1) * 20;

        i += 3;
        j++;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;

    renderer.render(scene, camera);

    count += 0.1;
  }

  function onPointerMove(event: any) {
    if (event.isPrimary === false) return;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  const canvasStyles = tw`bg-black`;
  renderer.domElement.setAttribute("class", canvasStyles);

  // Do whatever we need to do after this is done :D
  // This should all run as part of ComponentDidMount() on the parent component!
  // We could, for example send a reference to the <canvas> element upwards.
  threeCallback();
};

export default threeApp;
