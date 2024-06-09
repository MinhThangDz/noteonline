<template>
  <div>
    <h1>Contact Us</h1>
    <p>Get in touch with us for more information.</p>
    <v-form>
      <v-text-field label="Name" v-model="name"></v-text-field>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-textarea label="Message" v-model="message"></v-textarea>
      <v-btn color="primary" @click="submitContact">Submit</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitContact = () => {
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Message:', message.value);
};
</script>