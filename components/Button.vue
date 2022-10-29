<script setup lang="ts">
import { Button } from '~/types/global';

interface Props {
  attr: Button
}

const { attr } = defineProps<Props>();
</script>

<template>
  <button>{{ attr.content }}</button>
</template>

<style scoped lang="scss">
$secondary: #77B28C;

button {
  background-color: $secondary;
  padding: 7px 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}
</style>