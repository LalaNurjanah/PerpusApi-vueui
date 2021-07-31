<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3" 
  v-for="(bku, index) in buku" 
  :key="index"
  >
  <div class="card">
  <div class="card-header"> {{bku.judul_buku}}
  </div>
  <div class="card-body">
    <p class="card-text">{{bku.deskripsi_buku}}</p>
    <p class="card-text">{{bku.kategori_buku}}</p>
    <p class="card-text">{{bku.cover_buku}}</p>
   
    <p class="card-text">{{bku.buku.name }}</p>
   
  </div>
<div class="card-footer text-muted">
   <router-link class="btn btn-primary" :to="{name: 'Detailbuku', params:{id:bku.id}} "
              >Edit</router-link
            >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["buku"],
};
</script>

<style>

</style>