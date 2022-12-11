<template>
  
  <div class="col">
  <div class="card shadow-sm" >
    <img src="../assets/sunny.jpg" class="card-img-top bd-placeholder-img " alt="..." width="80%" height="270" />

    <div class="card-body">
      <p class="card-text mytitle">
        BreakFast
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group ">
          <a href="/detailcards"><button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button></a>
          <a href="/detailpage"><button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </a>
          
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  props: {},
};
</script>

<style scoped>

.mytitle{
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 15px;
}


</style>