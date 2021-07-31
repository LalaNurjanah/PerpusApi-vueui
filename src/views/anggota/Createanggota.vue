<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add ang</h5>
      <form class="row g-3" @submit.prevent="store">
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
          <label for="inputEmail4" class="form-label">alamat</label>
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
    <label for="inputAddress" class="form-label">Buku</label>
<select class="form-select" aria-label="Default select example" v-model="ang.buku_id">
 
  <option v-for="bku in buku" :key="bku.id" :value="bku.id">{{ bku.name}}</option>
 
</select>
</div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
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
      buku_id: ""
    });

    let buku = ref([]);

    const validation = ref([]);

    const router = useRouter();

onMounted(() => {

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

    function store() {
      let nama_anggota = ang.nama_anggota;
      let jenis_kelamin = ang.jenis_kelamin;
     let alamat = ang.alamat;
     let email = ang.email;
      let no_telp = ang.no_telp;
      let buku_id = ang.buku_id;

      axios
        .post("http://127.0.0.1:8000/api/anggota/", {
           nama_anggota: nama_anggota,
      jenis_kelamin: jenis_kelamin,
      alamat: alamat,
      email: email,
      no_telp: no_telp,
          buku_id:buku_id,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      ang,
      validation,
      router,
      store,
      buku
    };
  },
};
</script>