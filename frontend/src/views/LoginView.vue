<template>
    <body> 
          <div id="wrapper">
        <div id="container">
          
          <div class="information-column">
            <div class="content">
                <div class="logo">
                    <a href="../Index.html">
                      <img src="https://i.postimg.cc/zGdg1Qkq/logo-removebg-preview.png"  width="150px" height="60px"/>
                    </a>
                  </div>
      
              <h1>Choose a subscription and start the party</h1>
              <p>Find all your favorite tracks and create the best playlist ever</p>
            </div>
          </div>
          
          <div class="form-column">
            
            <router-link to="/" ><div class="subscription free">
                <h2>Free</h2>
                <p>Unlimited music online</p>
            </div></router-link>
            
            <div class="subscription family">
                <h2>Sign in</h2>
        <form class="form">
        
        <label>Email</label>
        <input type="email" placeholder="Your email here" class="placeholder"><br>
        
        <label>Password</label><br>
        <input type="password" placeholder="Your password here" class="placeholder">
       
      
       </form>
            </div>
        
      
            <div class="subscription premium">
                <h2>Premium</h2>
                <p>Unlimited music anywhere, anytime both online and offline</p>
            </div>
            
          </div>
          
        </div>
      </div>
</body>
<FooTer/>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    font-family: "museo-sans", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f1f2f6;
}
*:focus {
    outline: none;
}
body {
  background-color: #121212;
    font-family: 'Montserrat', sans-serif;
  }
#wrapper {
    position: absolute;
    top: 50%;
    margin-top: -240px;
    left: 0;
    width: 100%;
}
#container {
    width: 720px;
    height: 580px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
}
#body{
     padding-left: 196px;
}
.information-column {
    width: 40%;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.content {
    width: 100%;
    height: 100%;
    padding: 30px;
    background: whitesmoke;
   
}
.content h1 {
    width: 100%;
    margin-top: 32px;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: #2ebd59;
    text-shadow: -1px 1px 2px whitesmoke;
}
.content p {
    width: 62%;
    font-size: 0.8em;
    letter-spacing: 1px;
    line-height: 1.6em;
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: #2ebd59;
}

.placeholder{border-radius:6px ;
      border-color: whitesmoke;
    width:100%; }
   


.form-column {
    width: 60%;
    height: 100%;
    padding: 50px;
    float: right;
    background: #2ebd59;
    background: -moz-linear-gradient(45deg, rgba(46, 189, 89, 1) 0%, rgba(50, 201, 93, 1) 54%, rgba(57, 229, 97, 1) 100%);
    background: -webkit-linear-gradient(45deg, rgba(46, 189, 89, 1) 0%, rgba(50, 201, 93, 1) 54%, rgba(57, 229, 97, 1) 100%);
    background: linear-gradient(45deg, rgba(46, 189, 89, 1) 0%, rgba(50, 201, 93, 1) 54%, rgba(57, 229, 97, 1) 100%);
}
.subscription {
    width: 100%;
    overflow: hidden;
    padding: 12px;
    margin-bottom: 24px;
    border: 2px solid #f1f2f6;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
}
.subscription:nth-child(1) {
    margin-top: 24px;
}
.subscription h2 {
    width: 60%;
    font-weight: 700;
    font-size: 1.4em;
    letter-spacing: 2px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f2f6;
    margin-bottom: 8px;
}
.subscription p {
    width: 80%;
    font-size: 0.8em;
    line-height: 1.4em;
}
.subscription:hover {
    box-shadow: 0px 0px 10px 0px whitesmoke;
}
.subscription.active {
    background-color: #f1f2f6;
}
.subscription.active:nth-child(1) {
    margin-top: 0px;
}
.subscription.active h2 {
    color: #2ebd59;
    border-color: #2ebd59;
}
.subscription.active p {
    color: #2ebd59;
}


</style>