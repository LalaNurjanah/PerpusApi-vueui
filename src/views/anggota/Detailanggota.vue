<template>
  <div class="card text-center mt-4" v-for="a in ang" :key="a.id">
  <div class="card-header">
    Detail anggota
  </div>
  <div class="card-body">
    <h5 class="card-title">{{f.nama_anggota }}</h5>
    <p class="card-text">{{f.jenis_kelamin }}</p>
        <p class="card-text">{{f.alamat }}</p>
    <p class="card-text">{{f.email }}</p>
    <p class="card-text">{{f.no_telp }}</p>
     <p class="card-text">{{f.buku.name }}</p>

  </div>
  <div class="card-footer">
  <router-link class="btn btn-success" :to="{name: 'Editannggota', params:{id:a.id}} "
              >Edit</router-link
            >
            <button @click.prevent="angDelete(a.id)"  class="btn btn-danger">delete</button>
  </div>
</div>
</template>

<script>
import { onMounted,  ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
   
   let ang = ref([]);

    const router = useRouter();

const validation = ref([]);

    const route = useRouter();

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/anggpta/${route.params.id}')
      .then (response => {
        console.log(response.data.data.nama_anggota)

        ang.value = response.data.data.nama_anggota
        
      }).catch(error =>{
        console.log(error.response.data)
      });
    });

     function angDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/anggota/${id}`)
    .then(()=>{
      router.go(-1);
    }).catch(error => {
      console.log(error)
    });
  }


    
    
    return {
      ang,
      validation,
      router,
      angDelete, 
      route,
     
    };
  },
};
</script>

<style>

</style>