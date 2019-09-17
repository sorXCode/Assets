<template>
  <div class="pt-5">
    <div v-if="assets && assets.length">
      <div class="card mb-3" v-for="asset of assets" v-bind:key="asset.id">
        <div class="row no-gutters">
          <div class="col-md-4">
            <svg
              class="bd-placeholder-img"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>{{ asset.name }}</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ asset.name.charAt(0) }}</text>
            </svg>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ asset.name }}</h5>
              <p class="card-text">{{ asset.amount }}</p>
              <router-link
                :to="{name: 'edit', params: { id: asset.id}}"
                class="btn btn-sm btn-primary"
              >Edit</router-link>
              <button class="btn btn-danger btn-sm ml-1" v-on:click="deleteItem(asset.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="assets.length === 0">You don't have any asset! LoL...</p>
  </div>
</template>
<script>
import axios from "axios";
// import { response } from 'express';
export default {
  data() {
    return {
      assets: []
    };
  },
  created() {
    this.all();
  },
  methods: {
    deleteAsset: function(asset) {
      if (confirm("Delete " + asset.name)) {
        axios
          .delete(`http://127.0.0.1:8000/api/assets/${asset.id}`)
          .then( () => {
            this.all();
          });
      }
    },
    all: function() {
      axios.get(`http://127.0.0.1:8000/api/assets/`).then(response => {
        this.assets = response.data;
      });
    }
  }
};
</script>