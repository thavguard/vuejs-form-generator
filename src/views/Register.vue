<template>
  <div class="page">
    <h1>Register</h1>
    <FormGenerator :fields="fields" v-model="formData" @save="onSave" @cancel="onCancel" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';

const fields = [
  { name: 'name', label: 'Имя', type: 'input', inputType: 'text' },
  { name: 'email', label: 'Email', type: 'input', inputType: 'email' },
  { name: 'subscribe', label: 'Подписка', type: 'checkbox' }
];

const formData = reactive({ name: '', email: '', subscribe: false });

function onSave() {
  console.log('Save:', formData);
}

function onCancel() {
  console.log('Cancel');
}
</script>
