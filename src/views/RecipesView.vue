<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="recipe in recipes" v-bind:key="recipe.id">
          <div class="card shadow-sm">
            <img
              :src="`http://127.0.0.1:8000${recipe.image}`"
              class="card-img-top bd-placeholder-img"
              alt="..."
              width="80%"
              height="270"
            />

            <div class="card-body">
              <p class="card-text mytitle">{{ recipe.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link
                    :to="{ name: 'detailpage', params: { slug: recipe.slug } }"
                  >
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </router-link>

                  <a href="/createrecipe"
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
    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-center"
    >
      <ul class="pagination my-5">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecipesView",
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    console.log("mounted");
    const slug = this.$route.params.slug;

    axios.get(`/api/myapp/main/recipes/${slug}`).then((response) => {
      console.log(response.data);

      this.recipes = response.data.recipe;
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