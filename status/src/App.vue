<template>
  <div class="home">
    <router-link to="/resolved"> Resolved </router-link> |
    <router-link to="/progress"> Progress </router-link> |
    <router-link to="/pending"> Pending </router-link> 
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}
.home {
  margin-left: 300px;
}
</style>
