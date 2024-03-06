<template>
  <div id="app">
    <b-container>
      <b-form @submit.stop.prevent @submit="onSubmit">
        <b-form-group label="First name:" label-for="first_name">
          <b-form-input
            :state="validatorFName"
            id="first_name"
            v-model="form.first_name"
            type="text"
            placeholder="First name"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validatorFName">
            First name must contain more than 3 character.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Last name:" label-for="last_name">
          <b-form-input
            :state="validatorLName"
            id="lastName"
            v-model="form.last_name"
            type="text"
            placeholder="Last name"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validatorLName">
            Last name must contain more than 3 character.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Email:" label-for="email">
          <b-form-input
            :state="validatorEmail"
            id="email"
            v-model="form.email"
            type="email"
            placeholder="email@example.com"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validatorEmail">
            That is not a valid email address.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Password:" label-for="password">
          <b-form-input
            :state="validatorPassword"
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validatorPassword">
            Password must be between 5 and 256 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback
            :state="
              validatorPassword &&
              validatorEmail &&
              validatorFName &&
              validatorLName
            "
          >
          </b-form-valid-feedback>
        </b-form-group>
        <b-button-group>
          <b-button type="submit" variant="dark" id="submit">Sign Up</b-button>
        </b-button-group>
      </b-form>
    </b-container>
  </div>
</template>
  
  <script>
import { mapActions } from 'vuex';

    export default {      
      data() {
        return {
          form: {
            password: "",
            email: "",
            first_name: "",
            last_name: ""
      },
        }
      },
      methods: {

        ...mapActions([
          'register'
        ]),


        onSubmit(event) {
          event.preventDefault();
          if (
            this.validatorEmail &&
            this.validatorFName &&
            this.validatorLName &&
            this.validatorPassword
          ){
            this.register({
                        ime: this.form.first_name,
                        prezime: this.form.last_name,
                        email: this.form.email,
                        sifra: this.form.password
                      });
            this.$router.push({ name: "AllProductsView" });
          }
          
        },
        
      },
      
    computed: {
      validatorPassword() {
        return this.form.password.length >= 5 && this.form.password.length <= 256;
      },
      validatorEmail() {
        if (this.form.email.includes("@") && this.form.email.includes(".")) return true;
        return false;
      },
      validatorFName() {
        return this.form.first_name.length >= 4 && this.form.first_name.length <= 128;
      },
      validatorLName() {
        return this.form.last_name.length >= 4 && this.form.last_name.length <= 128;
      }
    },
  }

  </script>
  <style scoped>
  #app {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  }
  #submit {
    margin-top: 50px;
  }
  #goToSignIn {
    margin-top: 50px;
    margin-left: 5px;
  }
  </style>