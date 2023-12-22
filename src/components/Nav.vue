<script>


export default {
  data() {
    return {
      navItems: [
        { path: "/", name: "Home", display: true },
        { path: "/Shop", name: "Shop", display: true },
        { path: "/Detail", name: "Detail", display: false },
        { path: "/Cart", name: "Cart", display: true },
        { path: "/Login", name: "Login", display: true },
        { path: "/Confirmation", name: "Confirmation", display: false },
        { path: "/Checkout", name: "Checkout", display: false },
      ],
    };
  },
  computed: {
    filteredNavItems() {
      return this.navItems.filter(item => item.display);
    },
  },
};
</script>

<template>
    <header>
        <div class="logo">
            <img src="@/assets/logo.png" alt="Your Logo">
        </div>
        <nav class="navbar">

            <ul class="nav-list">
                <li v-for="navItem in filteredNavItems" :key="navItem.path">
                    <router-link :to="navItem.path">{{ navItem.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>

header {
    background-color: #42b9e5; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
}

header nav .active-page {
    color: orange;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-list{
    color: #fff;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 18px;
    color: fff;
    text-transform: none;
    padding: 10px;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    
}

button:hover {
    background-color: rgb(0, 140, 255);
    color: orange;
} 

.logo img {
    max-width: 100px; 
    height: auto; 
    margin-left: 20px;
    margin-right: auto;
    display: flex;

}

.nav-item {
    display: inline-block; 
}

a{
  color: #fff;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 18px;
    color: fff;
    text-transform: none;
    padding: 10px;
    text-decoration: none;
    list-style-type: none;
    display: flex;
}

button a:hover {
    background-color: #328aaa; 
    color: orange;
}
</style>