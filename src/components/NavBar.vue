<template>
  <nav class="navbar navbar-expand-lg mynavbar">
    <div class="container-fluid">
      <a class="navbar-brand mx-5 mytitle" href="/">CookBook</a>
      <button
        class="navbar-toggler mytoggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link myelements mx-2" aria-current="page" href="/">Home</a>
          </li>

          <li
            class="nav-item dropdown"
            v-if="$store.state.user.isAuthenticated"
          >
            <a
              class="nav-link dropdown-toggle myelements"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Create Yours
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item zone1" href="/createmeal">Create Meal</a>
              </li>
              <li>
                <a class="dropdown-item zone1" href="/createrecipe">Create Recipe</a>
              </li>
              <li><a class="dropdown-item zone2" href="/addmeal">Add Meal</a></li>
              <li><a class="dropdown-item zone2" href="/addrecipe">Add Recipe</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item zone3" href="/deletemeal">Delete Meal</a>
              </li>
              <li>
                <a class="dropdown-item zone3" href="/deleterecipe">Delete Recipe</a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link myelements mx-2" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link myelements mx-2" href="/contact">Contact</a>
          </li>
        </ul>
        <form class="d-flex" v-on:submit.prevent="searchForm">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchElement"
          />
          <button class="btn mybutton" type="submit">Search</button>
        </form>

        <div class="d-flex" v-if="$store.state.user.isAuthenticated">
          <router-link to="/about"
            ><button @click="logout()" class="btn mybutton" type="submit">
              Logout
            </button></router-link
          >
        </div>
        <div class="d-flex mx-5" v-if="!$store.state.user.isAuthenticated">
          <router-link to="/login"
            ><button class="btn mybutton" type="submit">
              Login
            </button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <SearchView v-if="searchResult" v-bind:myelements="searchResult" />
  <router-view></router-view>
</template>
  
<script>
import axios from "axios";
import SearchView from "../views/SearchView.vue";
export default {
  name: "NavBar",
  components: {
    SearchView,
  },
  data() {
    return {
      searchElement: "",
      searchResult: "",

      errors: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async logout() {
      console.log("logout");

      await axios
        .post("/api/myapp/token/logout/")
        .then((response) => {
          console.log("Logged out");
        })
        .catch((error) => {
          console.log(error);
        });

      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      this.$store.commit("removeToken");

      this.$router.push("/");
    },

    searchForm() {
      console.log(this.searchElement);
      axios
        .get(`api/myapp/main/search/?search=${this.searchElement}`)
        .then((response) => {
          console.log(response.data);

          this.searchResult = response.data;
        });
    },
  },
};
</script>

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mynavbar {
  height: 5rem;
  background-color: orange;
}

.navbar-collapse {
  background: orange !important;
}

.mytitle {
  font-size: 20px;
  font-weight: 600;
  color: black;
}

.myelements {
  font-size: 18px;
  letter-spacing: 3px;
  color: #666;
  font-weight: 500;
}

.myelements:hover {
  font-size: 20px;
  text-decoration: underline;
  transition: all ease 1.5s;
}

.mybutton {
  background-color: black;
  border: solid 2px;
  border-radius: 15px;
  color: orange;
  font-size: 18px;
}

.mybutton:hover {
  color: black;
  background-color: orange;
  font-size: 20px;
  transition: all ease 1.5s;
}


.zone3:hover{
  background-color: red;
  transition: all ease 1.5s;
  
}

.zone2:hover{
  background-color: orange;
  transition: all ease 1.5s;
  
}

.zone1:hover{
  background-color: blue;
  transition: all ease 1.5s;
  
}
</style>
  