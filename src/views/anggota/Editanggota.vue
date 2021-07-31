<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit anggota</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama_anggota</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="ang.nama_anggota"
          />
          <div class="alert alert-danger" v-if="validation.nama_anggota">
            {{ validation.nama_anggota[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">jenis_kelamin</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="ang.jenis_kelamin"
          />
          <div class="alert alert-danger" v-if="validation.jenis_kelamin">
            {{ validation.jenis_kelamin[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama_anggotalamat</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="ang.alamat"
          />
          <div class="alert alert-danger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">email</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="ang.email"
          />
          <div class="alert alert-danger" v-if="validation.email">
            {{ validation.email[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">no_telp</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="ang.no_telp"
          />
          <div class="alert alert-danger" v-if="validation.no_telp">
            {{ validation.no_telp[0] }}
          </div>
        </div>
       
<div class="col-6">
    <label for="inputAddress" class="form-label">Bku</label>
<select class="form-select" aria-label="Default select example" v-model="ang.buku_id">
 
  <option v-for="bku in buku" :key="bku.id" :value="bku.id">{{ bku.name}}</option>
 
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const ang = reactive({
      nama_anggota: "",
      jenis_kelamin: "",
      alamat: "",
      email: "",
      no_telp: "",
      buku_id: "",
    });

let buku = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRouter()

    onMounted(()=>{
      axios.get(' http://127.0.0.1:8000/api/anggota/${route.params.id}/edit')
      .then (response => {
        console.log(response.data.data.nama_anggota)

        ang.nama_anggota = response.data.data.nama_anggota
         ang.jenis_kelamin = response.data.data.jenis_kelamin
          ang.alamat = response.data.data.alamat
          ang.email = response.data.data.email
          ang.no_telp = response.data.data.no_telp
           ang.buku_id = response.data.data.buku_id
      }).catch(error =>{
        console.log(error.response.data)
      });
 axios
        .get("http://127.0.0.1:8000/api/buku/")
        .then((response) => {
         buku.value = response.data;
          console.log(response);
        })
        .catch((error) => {
          
          console.log(error);
        });

});

    function update() {
      let nama_anggota = ang.nama_anggota;
      let jenis_kelamin = ang.jenis_kelamin;
     let alamat = ang.alamat;
     let email = ang.email;
      let no_telp = ang.no_telp;
      let buku_id = ang.buku_id;



      axios.put('http://127.0.0.1:8000/api/anggota/${route.params.id}', {
          nama_anggota: nama_anggota,
      jenis_kelamin: jenis_kelamin,
      alamat: alamat,
      email: email,
      no_telp: no_telp,
          buku_id:buku_id
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
         validation.value = error.response.data
        });
    }
    return {
      ang,
      validation,
      router,
      update,
      route,
      buku,
    };
  },
};
</script>