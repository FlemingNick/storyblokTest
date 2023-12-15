<template>
    <div>
        <h2 class="canvas-title">THREE JS Scene</h2>
        <canvas id="c" ref="canvasElement"></canvas>
        <img src="/mario.jpg" alt="mario pic"/>
    </div>
    
</template>

<style lang="scss" scoped>
@use "~/assets/scss/three.scss";
</style>

<script setup>
    import { ref, onMounted } from 'vue'
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import model from '@/assets/models/MemmertUN450.gltf'

    defineProps({ blok: Object })
    
    const canvasElement = ref(null)
    
    onMounted(() => {

        const canvas = canvasElement.value
        const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
        
        const loader = new GLTFLoader();

        

        const fov = 75;
        const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        camera.position.z = 2;

        const scene = new THREE.Scene();

        {

            const color = 0xFFFFFF;
            const intensity = 3;
            const light = new THREE.DirectionalLight( color, intensity );
            light.position.set( - 1, 2, 4 );
            scene.add( light );

        }

        function render( time ) {

            renderer.render( scene, camera );

            requestAnimationFrame( render );

        }

        requestAnimationFrame( render );

        loader.load( '/model.gltf', function ( gltf ) {

            scene.add( gltf.scene );

        })
    })
    
</script>


