<template>
  <v-layout row wrap justify-center align-center class="main">
    <v-app-bar app color="error">
      <v-layout row wrap justify-end>
        <v-btn @click="istoric()">Istoric</v-btn>
        <v-btn @click="logout()">Logout</v-btn>
      </v-layout>
    </v-app-bar>
    <v-layout
      row
      wrap
      justify-center
      align-center
      class="main"
      v-if="hasAccount"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Data</th>
              <th class="text-left">Temperatura</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.d }}</td>
              <td>{{ item.t }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
      items: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/items")
      .then((res) => {
        this.items = res.data;
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    istoric() {
      this.$router.push("/form");
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100vh;
}
v-simple-table {
  align-content: center;
}
</style>
