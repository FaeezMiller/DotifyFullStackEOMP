
<template>
    <html>
        
        <SideBar/>
        <TopBar/>
        <body>
    <div    id="primary-section-searchbar">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" name="searchbar" id="searchbar"  placeholder="Search for songs, artists etc">
                    </div>
   
     <h3 id="heading">Billboard Topchart</h3>
                  <div    id="topchart-cards">
                      <div    class="cards">
                          <img id="active"    src="https://upload.wikimedia.org/wikipedia/en/c/c4/Chance_the_Rapper_-_Coloring_Book.png" alt="coloring book">
                          <h3>Coloring book</h3>
                          <p>Pop King</p>
                      </div>
                      <div    class="cards">
                          <img src="https://upload.wikimedia.org/wikipedia/en/3/38/Troye_Sivan_-_Blue_Neighbourhood.png" alt="coloring book">
                          <h3>Blue neighbourhood</h3>
                          <p>Troye sivan</p>
                      </div>
                      <div    class="cards">
                          <img src="https://img.artpal.com/113321/49-19-8-24-13-34-15m.jpg" alt="coloring book">
                          <h3>StarBoy Weekend</h3>
                          <p>The Weekend</p>
                      </div>
                      <div    class="cards">
                          <img src="https://i1.sndcdn.com/artworks-000150713339-szsgme-t500x500.jpg" alt="coloring book">
                          <h3>Mirage Else Twin</h3>
                          <p>Else Twin</p>
                      </div>
                      <div    class="cards">
                          <img src="https://i1.sndcdn.com/artworks-000150713339-szsgme-t500x500.jpg" alt="coloring book">
                          <h3>Mirage Else Twin</h3>
                          <p>Else Twin</p>
                      </div>
                  </div>
                
                 
                  <hr>
    <h3 class="heading">Create Playlist</h3> 
    <table class="tableA">
        <thead class="theadA">
            <tr class="text-centerA">
           <th scope="colA"> # </th>
           <th scope="colA"> Img </th> 
           <th scope="colA"> AUDName </th> 
           <th scope="colA"> Genre </th> 
           <th scope="colA"> Discription </th> 
           <th scope="colA"> Artist </th> 
           <th scope="colA"> QTY </th>
           <th scope="colA">Edit</th>
           <th scope="colA">Delete</th>
            </tr>
        </thead>
        <tbody>
            <th scope="row">1</th>
            <td><img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" class="Timg" /></td>
            <td></td>
            <td>HipHop</td>
            <td>mega-hits</td>
            <td>2pac</td>
            <td>86</td>
            <td><AddAudio/></td>
            <td><button class="btn">Remove</button></td>
        </tbody>
    </table>         
</body>
<FooTer/>
    </html>
  </template>

  <style>
body{
    padding-left: 150px;
    margin: 0;
    font-weight: 14px;
    background-color: #121212;
    font-family: 'Montserrat', sans-serif;
      }

.heading{color:whitesmoke;
    font-family: 'Montserrat', sans-serif;}
.tableA{
    background-color: #121212;
    min-width:95%;
    min-height: 300px;
    text-align: center;
}
.btn{
    width:100px;
    box-shadow: 2px 2px 4px white;
    background-color: #121212;
    font-family: 'Montserrat', sans-serif;
}

.sidebar{
    width:max-content
}

#primary-section-topbar{
    margin: 24px;
    display: flex;
    position: relative;
    justify-content: space-between;
}
#primary-section-searchbar{
    width: 40%;
    font-size: 16px;
}
#searchbar{
    width: 100%;
    padding: 8px 44px;
    border-radius: 18px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    letter-spacing: 0.3;
    border: 1px solid white;
    outline: none;
}
#searchbar:hover{
    box-shadow: 2px 2px 4px white;
}
.search-icon{
    position: absolute;
    top: 50%;
    left: 16px;
    transform:translateY(-50%);
    color: white;
    font-size: 18px;
}
#primary-section-options{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#primary-section-options>div{
    margin-left: 14px;
    font-size: 16px;
    color: white;
}
.section-icon{
    font-size: 20px;
}


#billboard{
    font-size: 22px;
    font-weight: 700;
    margin-left: 24px;
    margin-bottom: 7px;
    margin-top: 32px;
    color:white
}

#topchart-cards{
    display: flex;
    align-content: center;
    color:white
}
.cards{
    margin: 10px 16px;
    padding: 4px;
}
.cards > img {
    width: 150px;
    height: 150px;
    border-radius: 16px;
   
}
.cards>img:hover{
    position: relative;
    top: -1px;
    box-shadow: 2px 2px 4px white;
}
.cards > h3{
    margin-bottom: 0;
    margin-top: 16px;
    font-size: 14px;
}
.cards > p{
    margin-top: 0px;
    color: white;
}
#active{
    width: 200px;
}






#controls>i:hover{
    cursor: pointer;
    font-size: 18px;
    color: black;
}
</style>
<script>
import AddAudio from '@/components/AddAudio.vue';


export default {
    component :AddAudio}



</script>