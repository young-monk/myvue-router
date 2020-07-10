<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/learn">Learn</router-link>
      <router-link to="/student">Student</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/activity">Activity</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  
}
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
