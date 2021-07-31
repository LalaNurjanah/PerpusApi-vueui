<template>
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createanggota"
      >Add anggota</router-link
    >

<Cardanggota :anggota="anggota"/>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama_anggota</th>
           <th scope="col">jenis_kelamin</th>
            <th scope="col">Alamat</th>
             <th scope="col">email</th>
          <th scope="col">No Telp</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ang, index) in anggota" :key="index">
          <td>{{ ang.nama_anggota}}</td>
            <td>{{ ang.jenis_kelamin}}</td>
            <td>{{ ang.alamat}}</td>
              <td>{{ ang.email}}</td>
          <td>{{ ang.no_telp}}</td>
          
          <td>
            <router-link class="btn btn-success" :to="{name: 'Editanggota', params:{id:ang.id}} "
              >Edit</router-link
            >
            <button @click.prevent="angDelete(ang.id)"  class="btn btn-danger">delete</button>
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
import Cardanggota from "@/components/Cardanggota.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Cardanggota,
  },
  setup(){
    let anggota = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/anggota')
      .then(response => {
        anggota.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });

  function angDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/anggota/${id}`)
    .then(()=>{
      let z = this.anggota.map(anggota => anggota.id).indexOf(id);
      this.anggota.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }

    return {
      anggota,
      angDelete
    }
  }
};
</script>
