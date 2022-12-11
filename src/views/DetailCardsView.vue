<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="meal in meals" v-bind:key="meal.id">
          <div class="card shadow-sm">
            <img
              :src="`http://127.0.0.1:8000${meal.image}`"
              class="card-img-top bd-placeholder-img"
              alt="..."
              width="80%"
              height="270"
            />

            <div class="card-body">
              <p class="card-text mytitle">{{ meal.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link
                    :to="{ name: 'recipes', params: { slug: meal.slug } }"
                  >
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </router-link>
                  <a href="/createmeal"
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailCardsView",

  data() {
    return {
      meals: [],
    };
  },
  mounted() {
    console.log("mounted");
    const slug = this.$route.params.slug;

    axios.get(`/api/myapp/main/meals/${slug}`).then((response) => {
      console.log(response.data);

      this.meals = response.data;
    });
  },
  methods: {},
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