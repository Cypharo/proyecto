<template>
  <router-view/>
</template>

<script>
  export default {
    data: () => ({
      extended: true,
      extendedSlot: false,
      prominent: false,
      dense: false,
      collapse: false,
      flat: true,
      bg: true,
      extensionHeight: 70,
    }),
  }
</script>

<style>
  .change-font {
    font-family: "Arial", Helvetica, sans-serif;
  }
</style>