<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.path" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Notes Online</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(null);
const navItems = [
  { title: 'Home', icon: 'mdi-home', path: '/' },
  { title: 'About', icon: 'mdi-information', path: '/about' },
  { title: 'Contact', icon: 'mdi-email', path: '/contact' },
  { title: 'MyApp', icon: 'mdi-myapp', path: '/myapp' },
];
</script>