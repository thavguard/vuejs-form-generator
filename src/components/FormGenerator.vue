<template>
  <form class="form-generator">
    <div v-for="field in fields" :key="field.name" class="form-field">
      <label :for="field.name">{{ field.label }}</label>

      <slot :name="field.name" :field="field" :value="modelValue[field.name]" 
            :updateValue="(val: any) => updateField(field.name, val)">
        <input v-if="field.type === 'input'" :type="field.inputType || 'text'" :id="field.name"
               :value="modelValue[field.name]"
               @input="updateField(field.name, $event.target.value)"
               v-bind="field.attrs" />

        <select v-else-if="field.type === 'select'" :id="field.name"
                :value="modelValue[field.name]"
                @change="updateField(field.name, $event.target.value)">
          <option v-for="opt in field.options || []" :key="opt" :value="opt">{{ opt }}</option>
        </select>

        <input v-else-if="field.type === 'checkbox'" type="checkbox" :id="field.name"
               :checked="modelValue[field.name]"
               @change="updateField(field.name, $event.target.checked)" />

        <textarea v-else-if="field.type === 'textarea'" :id="field.name"
                  :value="modelValue[field.name]"
                  @input="updateField(field.name, $event.target.value)"
                  v-bind="field.attrs" />
      </slot>
    </div>

    <div class="form-actions">
      <button type="button" @click="$emit('cancel')">Отмена</button>
      <button type="button" @click="$emit('save', modelValue)">Сохранить</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  fields: any[];
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(['update:modelValue', 'save', 'cancel']);

function updateField(name: string, value: any) {
  emit('update:modelValue', { ...props.modelValue, [name]: value });
}
</script>

<style lang="scss" scoped>
.form-generator {
  padding: 1rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  .form-field {
    margin-bottom: 1rem;
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
    input, select, textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  }
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
}
</style>
