<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="element in myelements" v-bind:key="element.id">
          <div class="card shadow-sm">
            <img
              :src="`${element.image}`"
              class="card-img-top bd-placeholder-img"
              alt="..."
              width="80%"
              height="270"
            />

            <div class="card-body">
              <p class="card-text mytitle">
                {{ element.title }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link
                    :to="{ name: 'detailpage', params: { slug: element.slug } }"
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
  </div>
</template>
  
  <script>
export default {
  name: "SearchView",
  props: ["myelements"],
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