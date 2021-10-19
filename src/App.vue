<template>
  <div id="nav">
    <div class="navbar">
      <router-link to="/" title="Home">Home</router-link>
      <router-link to="/profile" title="Profile">Profile</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  margin: 0;
  padding: 0;
  background-image: url("./assets/background.svg");
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: scroll;
  text-align: center;
}

body {
  margin: 0;
  overflow-y: scroll;
  color: #4c5270;
}

.navbar {
  height: 50px;
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
}

#nav {
  top: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  position: fixed;
  padding: 10px;
  width: 100%;
  height: 50px;
  line-height: 30px;
  background: #15b5b0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

#nav a:hover {
  color: #fbe698;
}
</style>
