<template>
  <div class="container mycontainer">
    
    <h1 class="title">{{recipe.title}}</h1>
    <p class="mycontext">
      {{recipe.longDesc}}
    </p>
    <div class="col-12 imagecontainer ">

      <div class="d-flex justify-content-around myimage">
        <img :src="`http://127.0.0.1:8000${recipe.image}`" 
                class="card-img-top bd-placeholder-img"
                alt="..."
                
                
              />
      </div>
   </div>

    <div class="mycontainer">
      <h1 class="title">materials</h1>
      <p class="mycontext">
          <ul >
              <li>{{recipe.meterials}}</li>
              
          </ul>  
      </p>
    </div>

    <div class="comments">
      <h1 class="title">comments</h1>
      <div class="inside" >

        <div v-for="comment in comments" v-bind:key="comment.id" class="insidecomment">
          <h1 class="commentname" >{{ comment.name }}</h1>
          
          <p class="commentcontext">{{ comment.content }}</p>
        </div>
      </div>

    </div>


    <div class="comments mb-5">
      <form v-on:submit.prevent="submitComment()" v-if="$store.state.user.isAuthenticated">
          <div class="field">
              <label class="label my-1 title">Name</label>
              <div class="control">
                  <input type="text" class="input form-control" v-model="comment.name">
              </div>
          </div>

          <div class="field">
              <label class="label my-1 title">Content</label>
              <div class="control">
                  <textarea rows="7" class="textarea form-control" v-model="comment.content"></textarea>
              </div>
          </div>

          <div class="field">
              <div class="control">
                  <button class="button is-link my-2 mybutton">Submit</button>
              </div>
          </div>
      </form>
    </div>

    
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "DetailPageView",
  data() {
    return {
      recipe: [],
      comments: [],
      comment: {
        name: "",
        content: "",
      },
    };
  },
  mounted() {
    console.log("mounted");
    const slug = this.$route.params.slug;

    axios.get(`api/myapp/main/recipe/${slug}`).then((response) => {
      console.log(response.data);

      this.recipe = response.data.recipe;

      axios
        .get(`/api/myapp/main/recipes/${this.recipe.slug}/allcomments/`)
        .then((response) => {
          console.log(response.data);

          this.comments = response.data;
        });
    });
  },
  methods: {
    submitComment() {
      console.log("submitComment");

      axios
        .post(
          `/api/myapp/main/recipes/${this.recipe.slug}/newcomment/`,
          this.comment
        )
        .then((response) => {
          this.comment.name = "";
          this.comment.content = "";

          alert("The comment was added!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.mycontainer {
  margin-top: 2rem;
}
.title {
  text-align: center;
  font-size: 18px;
  text-transform: capitalize;
}

.mycontext {
  font-size: 15px;
  letter-spacing: 2px;
  text-align: justify;
}

.comments {
  margin-top: 2rem;
  text-align: center;
}

.commentname {
  font-size: 15px;
  font-weight: 600;
  background-color: orange;
  border-radius: 25px;
}

.commentcontext {
  font-size: 13px;
  background-color: #888;
}

.inside {
  padding: 3px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}

.insidecomment {
  margin: 3px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 15px;
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


.form-control{
  border:1px solid  rgba(0, 0, 0, 0.7)
}


.imagecontainer{
  margin:20px;

}
.myimage{
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

}
</style>