<template>
    <div
      v-editable="blok"
      class="hero-container"
    >
      <div class="content-wrapper">
          <div class="content">
            <div>
              <h1 class="headline">
                {{ blok.headline }}
              </h1>
        
              <p>{{blok.content}}</p>
              <StoryblokComponent
                v-for="blok in blok.button"
                :key="blok._uid"
                :blok="blok"
              />
            </div>
          </div>
      
        <div class="video-wrapper">
          <svg viewBox="0 0 1 1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <defs>
              <clipPath id="leaf" clipPathUnits="objectBoundingBox">
                <path d="M0.505,1L-0,1L-0,0.489C-0,0.219 0.222,-0 0.495,0L1,0L1,0.511C1,0.781 0.778,1 0.505,1Z" style="fill:white;fill-rule:nonzero;"/>
              </clipPath>
            </defs>
          </svg>
          
          <video autoplay muted loop id="myVideo">
            <source v-bind:src="blok.video.filename" type="video/mp4">
          </video>
        </div>
      </div>

      <div class="background">
        <svg width="100%" height="100%" viewBox="0 0 1728 958" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
          <path d="M-65.011,-195.069l593.931,-593.931l607.367,607.37c320.641,320.641 320.006,841.137 -1.418,1162.56l-593.929,593.928l-607.371,-607.367c-320.64,-320.641 -320,-841.138 1.42,-1162.56Z" style="fill:url(#_Linear1);fill-rule:nonzero;"/>
          <path ref="animateObject1" d="M1098.83,-46l802.98,0l0,735.765c0,388.425 -352.279,703.305 -786.84,703.305l-802.97,-0l0,-735.765c0,-388.425 352.28,-703.305 786.83,-703.305Z" style="fill:url(#_Linear2);fill-rule:nonzero;"/>
          <path ref="animateObject2" d="M1527.87,368.291l855.313,-62.86l57.598,783.72c30.406,413.742 -320.181,776.722 -783.061,810.741l-855.32,62.858l-57.59,-783.719c-30.41,-413.74 320.18,-776.72 783.06,-810.74Z" style="fill:url(#_Linear3);fill-rule:nonzero;"/>

          <defs>
            <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1681.31,-1192.36,1192.36,1681.31,-1153.06,1140)"><stop offset="0" style="stop-color:rgb(255,152,0);stop-opacity:0.65"/><stop offset="0.05" style="stop-color:rgb(255,152,0);stop-opacity:0.65"/><stop offset="0.95" style="stop-color:rgb(37,148,168);stop-opacity:0.65"/><stop offset="1" style="stop-color:rgb(37,148,168);stop-opacity:0.65"/></linearGradient>
            <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1681.31,-1192.36,1192.36,1681.31,-9.11,1701.21)"><stop offset="0" style="stop-color:rgb(255,152,0);stop-opacity:0.9"/><stop offset="0.05" style="stop-color:rgb(255,152,0);stop-opacity:0.9"/><stop offset="0.95" style="stop-color:rgb(37,148,168);stop-opacity:0.9"/><stop offset="1" style="stop-color:rgb(37,148,168);stop-opacity:0.9"/></linearGradient>
            <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1681.31,-1192.36,1192.36,1681.31,962.669,2622.32)"><stop offset="0" style="stop-color:rgb(255,152,0);stop-opacity:0.9"/><stop offset="0.05" style="stop-color:rgb(255,152,0);stop-opacity:0.9"/><stop offset="0.95" style="stop-color:rgb(37,148,168);stop-opacity:0.9"/><stop offset="1" style="stop-color:rgb(37,148,168);stop-opacity:0.9"/></linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    import gsap from 'gsap';

    defineProps({ blok: Object });

    let animateObject1 = ref()
    let animateObject2 = ref()

    onMounted(() => {
      let animatedObjects = [animateObject1.value, animateObject2.value]

      window.addEventListener("mousemove", (e) => {
        let mouseOriginX = e.clientX - (window.innerWidth / 2);
        let mouseOriginY = e.clientY - (window.innerHeight / 2);
        let mouseDamping = 0.05;

        gsap.to(animatedObjects, {
          x: mouseOriginX * mouseDamping,
          y: mouseOriginY * mouseDamping,
          stagger: 0.2,
          duration: 0.3,
          ease: "none"
        });
      })
    })
  </script>
  
  <style lang="scss" scoped>
    @use "~/assets/scss/hero.scss";
  </style>