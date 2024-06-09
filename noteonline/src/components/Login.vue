<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === this.username && user.password === this.password);
  
        if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          alert('Login successful');
          this.$router.push('/');
        } else {
          alert('Invalid username or password');
        }
      }
    }
  };
  </script>
  
  <style>
  .login {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .login h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  