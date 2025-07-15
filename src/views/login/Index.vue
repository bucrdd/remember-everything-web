<script setup lang="ts">
import { ref } from "vue";
import type { LoginParams } from "@/http/user";
import { userApi } from "@/http/user";

const loading = ref(false);

const loginForm = ref<LoginParams>({
  username: "",
  password: "",
});

const login = async () => {
  console.log("start login");
  try {
    loading.value = true;
    const data = await userApi.login(loginForm.value);
    console.log("login successfully", data);
  } catch (e) {
    console.error("login failed", e);
  } finally {
    loading.value = false;
  }
};

const listSessions = async () => {
  console.log("listSessions");
  try {
    loading.value = true;
    const data = await userApi.listSessions();
    console.log("listSessions successfully", data);
  } catch (e) {
    console.error("listSessions failed", e);
  } finally {
    loading.value = false;
  }
};
const currentSession = async () => {
  console.log("currentSession");
  try {
    loading.value = true;
    const data = await userApi.currentSession();
    console.log("currentSession successfully", data);
  } catch (e) {
    console.error("currentSession failed", e);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <b-page>
    <v-form @submit.prevent="login">
      <v-text-field label="Username" v-model="loginForm.username"></v-text-field>
      <v-text-field label="Password" v-model="loginForm.password" type="password"></v-text-field>
      <v-btn :disable="loading" type="submit">Sign In</v-btn>
    </v-form>
    <br />
    <v-btn @click="listSessions">Show Sessions</v-btn>
    <v-btn @click="currentSession">Show Sessions</v-btn>
  </b-page>
</template>

<style scoped>

</style>