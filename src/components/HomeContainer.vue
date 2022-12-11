<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div
          class="col"
          v-for="category in categories"
          v-bind:key="category.id"
        >
          <div class="card shadow-sm">
            <img
              :src="`http://127.0.0.1:8000${category.image}`"
              class="card-img-top bd-placeholder-img"
              alt="..."
              width="80%"
              height="270"
            />

            <div class="card-body">
              <p class="card-text mytitle">{{ category.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link
                    :to="{
                      name: 'detailcards',
                      params: { slug: category.slug },
                    }"
                  >
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </router-link>
                  <a href="/"
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </a>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import MainCard from "@/components/MainCard.vue";
import axios from "axios";
export default {
  name: "HomeContainer",
  components: { MainCard },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    console.log("mounted");

    axios.get("/api/myapp/main/categories/").then((response) => {
      console.log(response.data);

      this.categories = response.data;
    });
  },
};
</script>

<style scoped>
.mytitle {
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 15px;
}
</style>