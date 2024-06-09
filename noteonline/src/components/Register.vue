<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit" class="btn">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      register() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.username === this.username);
  
        if (userExists) {
          alert('Username already exists');
        } else {
          users.push({ username: this.username, password: this.password });
          localStorage.setItem('users', JSON.stringify(users));
          alert('User registered successfully');
          this.$router.push('/login');
        }
      }
    }
  };
  </script>
  
  <style>
  .register {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .register h2 {
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
  