<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(ang, index) in anggota" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{ang.nama_anggota}}
  </div>
  <div class="card-body">
    <p class="card-text">{{ang.jenis_kelamin}}</p>
    <p class="card-text">{{ang.alamat}}</p>
    <p class="card-text">{{ang.email}}</p>
    <h5 class="card-title">{{ang.no_tlp}}</h5>
    <p class="card-text">{{ang.buku.name }}</p>
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailanggota', params:{id:ang.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["anggota"],
};
</script>

<style>

</style>