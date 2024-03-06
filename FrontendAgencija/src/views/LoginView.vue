<template>
    <div class="login-container">
        <div class="login">
            <h1>Login</h1>
            <div class="login-image">
                <!-- <img src="/slike/128.jpg" alt="Profile Picture"> -->
            </div>

            <form @submit.prevent="onSubmit">
                <div>
                    <input v-model="username" class="login-form-control" id="usernameInput" name="username" type="text" placeholder="Username">
                    <input v-model="password" class="login-form-control" id="passwordInput" name="password" type="password" placeholder="Password">
                    <button type="submit" class="login-button" id="login" name="login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name:'Login',
        data(){
           return {
            username: '',
            password: ''
           }
        },
        methods: {
            ...mapActions([
                'login'
            ]),

            onSubmit(e) {
                e.preventDefault()
                if(this.username !== ''){
                    let next = this.login({ime: this.username, sifra:this.password})
                    if (next) {
                        this.$router.push({name:'AllProductsView'})
                    }else{
                        this.$router.push({name:'Register'})
                    }
                }
            }
        }
    }

   
</script>


<style >
 body {
    font-family: Arial, sans-serif;
    }
    .login-container {
        max-width: 800px;
        margin: 100px auto;
        padding: 10px;
        border: 5px solid black;
        border-radius: 10px;
    }
    .login-form-control {
        width: 97%;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    .login-button {
        padding: 10px 20px;
        border-radius: 3px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }
    .login-button:hover {
        background-color: #45a049;
    }
    .login-image {
        text-align: center;
    }
    .login-image img {
        width: 120px;
        border-radius: 50%;
    }
</style>