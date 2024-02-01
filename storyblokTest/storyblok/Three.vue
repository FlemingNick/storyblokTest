<template>
  <div>
    <h2 class="canvas-title">THREE JS Scene</h2>
    <canvas
      id="c"
      ref="canvasElement"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/three.scss';
</style>

<script setup>
  import { ref, onMounted } from 'vue';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import model from '@/assets/models/MemmertUN450.gltf';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  defineProps({ blok: Object });

  const canvasElement = ref(null);

  onMounted(() => {
    const canvas = canvasElement.value;
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const loader = new GLTFLoader();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    const controls = new OrbitControls(camera, renderer.domElement);

    const scene = new THREE.Scene();

    {
      const color = 0xffffff;
      const intensity = 7;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(300, 100, 3000);
      scene.add(light);
    }

    function scale() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      renderer.setSize(width, height);

      camera.aspect = width / height;

      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', function () {
      scale();
    });

    function render(time) {
      renderer.render(scene, camera);

      requestAnimationFrame(render);

      controls.update();
    }

    scale();

    requestAnimationFrame(render);

    loader.load('/model.gltf', function (gltf) {
      scene.add(gltf.scene);
    });
  });
</script>
