<script setup lang="ts">
import { TextField } from '~/types/global';

interface Props {
  attr: TextField
}

const { attr } = defineProps<Props>()
</script>

<template>
  <FormKit type="text" :label="attr.label" :placeholder="attr.placeholder" input-class="textfield" />
</template>
