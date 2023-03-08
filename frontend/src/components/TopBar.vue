<template>
    <body>
     <div class="main-container">
      <div class="topbar">
        <div class="prev-next-buttons">
          <button type="button" class="fa fas fa-chevron-left"></button>
          <button type="button" class="fa fas fa-chevron-right"></button>
        </div>

        <div class="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li class="divider">|</li>
            <li>
            <router-link to="/register" class="routerLink">Register</router-link>
            </li>
          </ul>
          <li>
            <router-link to="/login" class="routerLink"><button type="button">Log In</button></router-link>
          </li>
          
        </div>
      </div>
    </div>
</body>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}

</script>

<style>
     .main-container {
    
    margin-bottom: 100px;
  }
  
  .topbar {
    min-width: none;
    display: flex;
    justify-content: space-between;
    background-color: #101010;
    padding: 14px 30px;
  }
  .topbar .prev-next-buttons button {
    color: #7a7a7a;
    cursor: not-allowed;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    font-size: 18px;
    border: 0px;
    background-color: #090909;
    margin-right: 10px;
  }
  .topbar .navbar {
    display: flex;
    align-items: center;
  }
  .topbar .navbar ul {
    list-style: none;
  }
  .topbar .navbar ul li {
    display: inline-block;
    margin: 0px 8px;
    width: 70px;
  }
  .topbar .navbar ul li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .topbar .navbar ul li a:hover,
  .topbar .navbar ul li a:active,
  .topbar .navbar ul li a:focus {
    color: #ffffff;
    font-size: 15px;
  }
  .topbar .navbar ul li.divider {
    color: #ffffff;
    font-size: 26px;
    margin: 0px 20px;
    width: auto;
  }
  .topbar .navbar button {
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    padding: 14px 30px;
    border: 0px;
    border-radius: 40px;
    cursor: pointer;
    margin-left: 10px;
  }
  .topbar .navbar button:hover,
  .topbar .navbar button:active,
  .topbar .navbar button:focus {
    background-color: #f2f2f2;
  }
</style>

