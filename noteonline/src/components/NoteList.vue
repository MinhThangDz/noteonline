<template>
    <div class="note-list">
      <h2>Danh sách ghi chú</h2>
      <div class="filter">
        <label for="filter">Lọc theo phân loại:</label>
        <select v-model="selectedCategory">
          <option value="all">Tất cả</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div v-for="note in filteredNotes" :key="note.id">
        <NoteItem :note="note" @edit="onEdit" @delete="onDelete" />
      </div>
    </div>
  </template>
  
  <script>
  import NoteItem from './NoteItem.vue';
  
  export default {
    name: 'NoteList',
    components: {
      NoteItem
    },
    props: {
      notes: Array,
      categories: Array
    },
    data() {
      return {
        selectedCategory: 'all'
      };
    },
    computed: {
      filteredNotes() {
        if (this.selectedCategory === 'all') {
          return this.notes;
        }
        return this.notes.filter(note => note.category === this.selectedCategory);
      }
    },
    emits: ['edit-note', 'delete-note'],
    methods: {
      onEdit(note) {
        this.$emit('edit-note', note);
      },
      onDelete(noteId) {
        this.$emit('delete-note', noteId);
      }
    }
  }
  </script>
  
  <style scoped>
  .note-list {
    margin: 1em 0;
  }
  .note-list h2 {
    margin-bottom: 1em;
  }
  .filter {
    margin-bottom: 1em;
  }
  .filter label {
    margin-right: 0.5em;
  }
  .filter select {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  