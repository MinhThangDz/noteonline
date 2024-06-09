<template>
    <div class="note-form">
      <h2>{{ isEdit ? 'Chỉnh sửa ghi chú' : 'Thêm ghi chú mới' }}</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="title">Tiêu đề:</label>
          <input type="text" v-model="note.title" required />
        </div>
        <div class="form-group">
          <label for="content">Nội dung:</label>
          <textarea v-model="note.content" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">Phân loại:</label>
          <select v-model="note.category" required>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <button type="submit">{{ isEdit ? 'Cập nhật' : 'Thêm' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NoteForm',
    props: {
      note: {
        type: Object,
        default: () => ({ title: '', content: '', category: 'Công Việc' })
      },
      isEdit: {
        type: Boolean,
        default: false
      },
      categories: {
        type: Array,
        default: () => ['Công Việc', 'Cá Nhân', 'Khác']
      }
    },
    emits: ['save-note'],
    methods: {
      onSubmit() {
        this.$emit('save-note', { ...this.note });
        this.note = { title: '', content: '', category: 'Công Việc' };
      }
    }
  }
  </script>
  
  <style scoped>
  .note-form {
    margin: 1em 0;
    padding: 1em;
    border-radius: 8px;
    background-color: #f8f9fa;
  }
  .note-form h2 {
    margin-bottom: 1em;
  }
  .form-group {
    margin-bottom: 1em;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.5em;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form-group textarea {
    resize: vertical;
  }
  button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  