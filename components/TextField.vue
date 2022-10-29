<script setup lang="ts">
import { TextField } from '~/types/global';

interface Props {
  attr: TextField
}

const { attr } = defineProps<Props>()
</script>

<template>
  <div class="textfield">
    <label for="name">{{ attr.label }}</label>
    <input id="name" type="text" class="input" :placeholder="attr.placeholder" />
  </div>
</template>

<style scoped lang="scss">
.textfield {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .input {
    padding: 7px;
    min-width: 400px;
    border-radius: 5px;
    border: none;
  }
}
</style>
