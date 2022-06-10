<template>
  <div>
    <q-layout view="lHr LpR lFr">
      <q-header>
        <router-link to="/"> Home </router-link> |
        <router-link to="/feed"> Feed </router-link> |
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link> |
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: '${{ secrets.FIREBASE_API_KEY }}',
  authDomain: '${{ secrets.FIREBASE_AUTH_DOMAIN }}',
  projectId: '${{ secrets.FIREBASE_PROJECT_ID }}',
  storageBucket: '${{ secrets.FIREBASE_STORAGE_BUCKET }}',
  messagingSenderId: '${{ secrets.FIREBASE_MESSAGING_ID }}',
  appId: '${{ secrets.FIREBASE_APP_ID }}',
  measurementId: '${{ secrets.FIREBASE_MEASUREMENT_ID }}'
}

// Initialize Firebase
initializeApp(firebaseConfig)
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>


