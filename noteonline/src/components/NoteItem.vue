<template>
  <div class="note-item">
    <h3>{{ note.title }}</h3>
    <p>{{ note.content }}</p>
    <p><strong>Phân loại:</strong> {{ note.category }}</p>
    <div class="actions">
      <button @click="$emit('edit', note)">Chỉnh sửa</button>
      <button @click="$emit('delete', note.id)">Xóa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    note: Object
  }
}
</script>

<style scoped>
.note-item {
  border: 1px solid #ddd;
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.note-item h3 {
  margin: 0 0 0.5em;
}
.note-item p {
  margin: 0.5em 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
.actions button {
  margin-left: 0.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
}
.actions button:hover {
  background-color: #0056b3;
}
.actions button:last-child {
  background-color: #dc3545;
}
.actions button:last-child:hover {
  background-color: #c82333;
}
</style>
