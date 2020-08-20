<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #800046;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  border: 1px solid transparent;
  padding: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #ecb5f3;
  border-color: #ecb5f3;
}
</style>