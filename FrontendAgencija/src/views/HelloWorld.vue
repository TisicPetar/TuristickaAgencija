<template>
  <div class="hello">
    <p></p>
    <h1>  Welcome to Travel  Agency!</h1>
    <p></p>
    <div class="proba">
      <img class="slikica" alt="logo" src ="../assets/travelAgency.png"/>
  </div>
    <br>
    <p class="text">Travel with us, all around the world! <br>
      Visit more than 100 countries, and book best hotels! <br>
      More informations about travelling, you can find on our website. <br>
      Enjoy!
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  position: center;
  margin-top: 15px;
  font-family: "Courier New", Courier, monospace;
  font-size: 78px;
  color: rgb(215, 185, 15);
}

.proba{
  width: 1200px;
} 
.slikica{
  width: 1200px;
  position: static;
}

.text{
  font-family: "Courier New", Courier, monospace;
  color: rgb(0, 0, 0);
  font: 80px;
}
</style>
