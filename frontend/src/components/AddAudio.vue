<template>
    
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Audio</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Add Audio</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <form>
    <div class="modal-body">
      <input type="text" class="form-control" placeholder="ID" v-model="payload.productId"><br>
      <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.imgURL"><br>
      <input type="text" class="form-control" placeholder="AUDName" v-model="payload.prodName"><br>
      <input type="text" class="form-control" placeholder="Description" v-model="payload.prodDescription"><br>
      <input type="text" class="form-control" placeholder="Genre" v-model="payload.prodGenre"><br>
      <input type="text" class="form-control" placeholder="Price" v-model="payload.price"><br>
      <input type="text" class="form-control" placeholder="Artist" v-model="payload.prodArtist"><br>
      <input type="text" class="form-control" placeholder="QTY" v-model="payload.prodQuantity"><br>
      
    </div>
    <div class="modal-footer">
     <button type="button" class="btn ">Add Audio</button>
      <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
    </div>
    </form>
  </div>
</div>
</div>
</template>
<script>
import {useStore} from 'vuex';
import{computed} from '@vue/runtime-core';
import router from '@/router';

  export default {
    set(){
        const store = useStore();
        const payload = {
            prodId:'',
            imgURL:'',
            prodName:'',
            prodDescription:'',
            prodGenre:'',
            price:'',
            prodArtist:'',
            prodQuantity:''
        };
        let addProduct = () => {
            store.dispatch("addProduct",payload);
            router.push({name: 'home'})
        }
        const userMessage  = computed(()=> store.state.message)

        return{
            payload,
            addProduct,
            userMessage
        }
    }
      
  };
</script>
<style scoped>

.btn{
    box-shadow: 2px 2px 4px white;
    background-color: #121212;
    font-family: 'Montserrat', sans-serif;
}
 .modal-content{
    
    background-color: #252525;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 2px 2px 4px white;
} 
button {
  display: flex;
  margin: auto;
}
</style>
