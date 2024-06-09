<template>
  <div id="app" class="app-container">
    <div v-if="loggedInUser">
      <button @click="logout">Logout</button>
      <NoteForm :note="currentNote" :isEdit="isEdit" :categories="categories" @save-note="saveNote" />
      <CategoryForm @add-category="addCategory" />
      <NoteList :notes="notes" :categories="categories" @edit-note="editNote" @delete-note="deleteNote" />
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import NoteForm from './NoteForm.vue';
import NoteList from './NoteList.vue';
import CategoryForm from './CategoryForm.vue';

export default {
  name: 'App',
  components: {
    NoteForm,
    NoteList,
    CategoryForm
  },
  setup() {
    const notes = ref([]);
    const categories = ref(['work', 'personal', 'other']);
    const currentNote = ref({ title: '', content: '', category: 'work' });
    const isEdit = ref(false);
    const loggedInUser = ref(JSON.parse(localStorage.getItem('loggedInUser')));

    const loadNotes = () => {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        notes.value = JSON.parse(storedNotes);
      }
    };

    const saveNotesToLocalStorage = () => {
      localStorage.setItem('notes', JSON.stringify(notes.value));
    };

    const saveNote = (note) => {
      if (isEdit.value) {
        const index = notes.value.findIndex(n => n.id === note.id);
        notes.value[index] = note;
      } else {
        note.id = Date.now().toString();
        notes.value.push(note);
      }
      saveNotesToLocalStorage();
      resetForm();
    };

    const editNote = (note) => {
      currentNote.value = { ...note };
      isEdit.value = true;
    };

    const deleteNote = (noteId) => {
      notes.value = notes.value.filter(note => note.id !== noteId);
      saveNotesToLocalStorage();
    };

    const resetForm = () => {
      currentNote.value = { title: '', content: '', category: 'work' };
      isEdit.value = false;
    };

    const addCategory = (category) => {
      if (!categories.value.includes(category)) {
        categories.value.push(category);
      }
    };

    const logout = () => {
      localStorage.removeItem('loggedInUser');
      loggedInUser.value = null;
      window.location.reload();
    };

    onMounted(loadNotes);

    return {
      notes,
      categories,
      currentNote,
      isEdit,
      saveNote,
      editNote,
      deleteNote,
      addCategory,
      loggedInUser,
      logout
    };
  }
}
</script>

<style>
html, body {
  height: auto;
  margin: auto;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.app-container {
  flex: 1;
  padding: 1em;
  max-width: 800px;
  margin: 2em auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.auth-link {
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  display: inline-block;
}

.auth-link:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-logout {
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  border: 1px solid #dc3545;
  border-radius: 4px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
