<template>
    <SideBar/>
    <TopBar/>
    <body>
    <div class="container-fluid">
      <div class="row">
          <h2 class="registration">Registration</h2>
      </div>
      <div class="row">
          <div class="col">
              <form class="form" @submit.prevent="signUp">
                  <div class="form-control-wrapper">
                  <span class="inline">
                    <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>
                    <i class="bi bi-person"></i>
                  </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                      <i class="bi bi-person"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                      <i class="bi bi-telephone-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                      <i class="bi bi-envelope"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
                      <i class="bi bi-person-fill"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                      <i class="bi bi-link"></i>
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span class="inline">
                      <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
                    </span >
                </div>
                <div class="form-control-wrapper">
                  <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
                </div>
                <div class="form-control-wrapper">
                  <button type="submit" class="btn ">Register</button>
                </div>
            </form>
          </div>
      </div>
  </div>
</body>
  <FooTer/>
</template>
<style>
.btn{
    box-shadow: 2px 2px 4px white;
    background-color: #121212;
   width: 100%;
}

.container-fluid{padding-left: 100px;
    width: 100%;
    
    background-color:#121212
}
.form-control-wrapper{width:900px;
background-color: #121212}

.registration{
    font-size: 22px;
    font-weight: 700;
    margin-left: 24px;
    margin-bottom: 7px;
    margin-top: 32px;
    color:white
}
</style>



<script>
import axios from "axios"
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
    // when there is a setup it means that its a composition api
    setup() {
        const payload = {
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
            joinDate: ''
        };
        const store = useStore();
        
        const signUp = async () => {
            try{
                const response = await axios.post(
                    "https://eomp-node-js-dotify.onrender.com/register",payload
                );
                const {data} = response;
                store.commit("setMessage", data.message);
                store.dispatch("fetchUsers");
            } catch (error){
                console.log(error);
            }
        };

        const userMsg = computed(() => store.state.message);
        return{
            payload,userMsg,signUp
        };
    },
};



  
 
</script>