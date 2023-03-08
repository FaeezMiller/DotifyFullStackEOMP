<template>
    
  <div class="sidebar">
      <div class="logo">
        <a href="../views/HomeView.vue">
          <img src="https://i.postimg.cc/zGdg1Qkq/logo-removebg-preview.png" alt="Logo" />
        </a>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <router-link to="/" ><b>Home</b></router-link>
          </li>

          <li>
            <a href="#">
              <router-link to="/" class="routerLink">Search</router-link> 
            </a>
          </li>
          <li>
            <router-link to="/yourlibrary" class="routerLink">Your Library</router-link>   
          </li>
          
          
        </ul>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <router-link to="/admin" class="routerLink">Admin</router-link>
          </li>
          <li>
            <a href="#">
              <span>Liked Songs</span>
            </a>
          </li>
          <li>
            <router-link to="" class="routerLink">Artist</router-link>   
          </li>
          
        </ul>
      </div>

      <div class="policies">
        <ul>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          
        </ul>
      </div>
    </div>

    
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    msg: String
  }
}

</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    min-width: 196px;
    background-color: #000000;
    padding: 24px;
    font-family: 'Montserrat', sans-serif;
  }
  .sidebar .logo img {
    width: 130px;
  }
  .sidebar .navigation ul {
    list-style: none;
    margin-top: 20px;
  }
  .sidebar .navigation ul li {
    padding: 10px 0px;
  }
  .sidebar .navigation ul li a {
    color: #b3b3b3;
    text-decoration: none;
    
    font-size: 13px;
  }
  .sidebar .navigation ul li a:hover,
  .sidebar .navigation ul li a:active,
  .sidebar .navigation ul li a:focus {
    color: #ffffff;
  }
  .sidebar .navigation ul li a:hover .fa,
  .sidebar .navigation ul li a:active .fa,
  .sidebar .navigation ul li a:focus .fa {
    color: #b3b3b3;
  }
  .sidebar .navigation ul li .fa {
    font-size: 20px;
    margin-right: 10px;
  }
  .sidebar .navigation ul li a:hover .fa:hover,
  .sidebar .navigation ul li a:hover .fa:active,
  .sidebar .navigation ul li a:hover .fa:focus {
    color: #ffffff;
  }
  .sidebar .policies {
    position: absolute;
    bottom: 100px;
  }
  .sidebar .policies ul {
    list-style: none;
  }
  .sidebar .policies ul li {
    padding-bottom: 5px;
  }
  .sidebar .policies ul li a {
    color: #b3b3b3;
    font-weight: 500;
    text-decoration: none;
    font-size: 10px;
  }
  .sidebar .policies ul li a:hover,
  .sidebar .policies ul li a:active,
  .sidebar .policies ul li a:focus {
    text-decoration: underline;
  }


</style>