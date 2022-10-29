<script setup lang="ts">
import { InputType } from '~/types/global';

interface FormElement<T extends InputType> {
  type: string;
  name?: string;
  attr: T;
}

const props = defineProps<FormElement<any>>();
</script>

<template>
  <TextField v-if="type === 'TextField'" :attr="attr" />
  <Button v-else-if="type === 'Button'" :attr="attr" />
</template>
