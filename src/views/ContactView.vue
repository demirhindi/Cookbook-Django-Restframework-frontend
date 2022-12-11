<template>
  <div class="container mycontainer">
    <h1 class="title">this is contact view</h1>
    <p class="mycontext">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      atque eos qui aliquam incidunt, explicabo fugit tempore sapiente ipsam
      perspiciatis dignissimos, laudantium doloremque ducimus commodi
      consectetur molestiae. Fugiat, corrupti tenetur. Lorem ipsum, dolor sit
      amet consectetur adipisicing elit. Voluptate tenetur minus quo neque
      quidem optio nihil omnis laborum mollitia, aliquid excepturi maiores
      repellendus odit aspernatur ipsam, cumque nulla possimus ab?
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>

.mycontainer{
  margin-top:2rem;
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
</style>