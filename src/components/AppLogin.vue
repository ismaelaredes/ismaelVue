<template>
<v-container>

  <v-alert  type="warning"  color='lime' :value="alert">
         please fill email and password
        </v-alert>       

        <v-form @submit.prevent="submit">
                    <v-text-field
                            v-model="email"
                            label="E-mail"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="password"
                            :rules="password"
                            label="Password"
                            type="password"
                            required
                    ></v-text-field>

                    <v-btn class="green" type="sumit">Sumit</v-btn>
        </v-form>
</v-container>
  </template>

  <script>
  export default {
      data(){
          return{
              email:null,
              password:null,
              alert:false
              }
          },

        methods:{
            submit(){
                if(this.email && this.password){
                    this.alert = false //true
                }
                console.log(`Email is ${this.email} and Passwor is ${this.password}`);
            }
        }

      }
  </script>
  