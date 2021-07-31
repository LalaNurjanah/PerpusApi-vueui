<template>
  <div class="index">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createbuku"
      >Add buku</router-link
    >

<Cardbuku :buku="buku"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Judul Buku</th>
<th scope="col">Deskripsi Buku</th>
<th scope="col">Kategori Buku</th>
<th scope="col">Cover Buku</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bku, index) in buku" :key="index">
            <td>{{ bku.judul_buku}}</td>
            <td>{{ bku.deskripsi_buku}}</td>
              <td>{{ bku.kategori_buku}}</td>
          <td>{{ bku.cover_buku}}</td>
          
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editbuku', params:{id:bku.id}} "
              >Edit</router-link
            >
            <button @click.prevent="bkuDelete(bku.id)"  class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardbku from "@/components/Cardbku.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "index",
  components: {
    Slider,
    Cardbku,
  },
  setup(){
    let anggota = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/buku')
      .then(response => {
        buku.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function bkuDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/buku/${id}`)
    .then(()=>{
      let z = this.buku.map(buku => buku.id).indexOf(id);
      this.buku.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      buku,
      bkuDelete
    }
  }
};
</script>
