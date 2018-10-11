<template>
  <div class="grid-container">
    <div id="app">
      <Navigation></Navigation>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },

}
</script>
