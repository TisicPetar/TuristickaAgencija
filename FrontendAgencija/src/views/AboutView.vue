<template>
    <div class="card">
      <h1 class="card-header">Welcome, {{ user.ime}}</h1>
      <div class="card-body">
        <p class="card-text">Email: {{ user.email }}</p>
        <!-- <p class="card-text">Privilegija: {{ user.privilegija }}</p> -->
        <p class="card-text">Phone: {{"0644039225"  }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      };
    },
    mounted(){
        fetch('http://localhost:7000/admin/korisinik', {
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Authorization" : `Bearer ${this.$store.state.token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.msg){
                    alert(data.msg);
                } else{
                    this.user = data
                }
                } )
    }

  };
  
  </script>
  <style>
  .card {
    width: 500px;
    margin: 20px auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
  }
  
  .card-header {
    background-color: #ffc0cb;
    color: rgb(217, 175, 211);
    padding: 20px;
    text-align: center;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-text {
    margin: 0;
    font-size: 16px;
  }