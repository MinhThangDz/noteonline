<template>
    <div class="category-form">
      <h2>Thêm loại phân loại mới</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="category">Loại phân loại:</label>
          <input type="text" v-model="category" required />
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryForm',
    data() {
      return {
        category: ''
      };
    },
    emits: ['add-category'],
    methods: {
      onSubmit() {
        this.$emit('add-category', this.category);
        this.category = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .category-form {
    margin: 1em 0;
    padding: 1em;
    border-radius: 8px;
    background-color: #f8f9fa;
  }
  .category-form h2 {
    margin-bottom: 1em;
  }
  .form-group {
    margin-bottom: 1em;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.5em;
  }
  .form-group input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #28a745;
    color: #fff;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  