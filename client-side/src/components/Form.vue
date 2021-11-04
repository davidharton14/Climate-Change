<template>
  <v-layout row wrap justify-center align-center class="main">
    <v-layout
      row
      wrap
      justify-center
      align-center
      class="main"
      v-if="hasAccount"
    >
      <v-form ref="form" v-model="valid" lazy-validation>
        <h2>AFISEAZA RAPORT</h2>
        <v-select
          v-model="statia"
          :items="statia_items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Statia"
          required
        ></v-select>

        <v-select
          v-model="anul"
          :items="anul_items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Anul"
          required
        ></v-select>

        <v-select
          v-model="luna"
          :items="luna_items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Luna"
          required
        ></v-select>

        <v-select
          v-model="indice"
          :items="indice_items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Indice"
          required
        ></v-select>
        <v-btn color="error" @click="reset"> Submit </v-btn>
      </v-form>
    </v-layout>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hasAccount: true,
      loginData: new Object(),
      registerData: new Object(),
      valid: true,
      statia: null,
      statia_items: ["Calarasi", "Slobozia", "Bucuresti", "Craiova"],

      anul: null,
      anul_items: [
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
      ],

      luna: null,
      luna_items: [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Noiembrie",
        "Decembrie",
      ],

      indice: null,
      indice_items: [
        "Temperatura maxima",
        "Temperatura minima",
        "Viteza maxima a vantului",
        "Viteza minima a vantului",
      ],
    };
  },
  methods: {
    login() {
      let data = {
        email: this.loginData.email,
        password: this.loginData.password,
      };
      axios
        .post("http://localhost:8080/api/login", data)
        .then((res) => {
          console.log("asd");
          let user = res.data.user;
          if (user != null) {
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/user");
          }
        })
        .catch((error) => {
          console.log("error");
        });
    },
    register() {
      let data = {
        name: this.registerData.name,
        email: this.registerData.email,
        password: this.registerData.password,
      };
      axios.post("http://localhost:8080/api/users", data).then((res) => {
        console.log(res.data.user);
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100vh;
}
</style>
