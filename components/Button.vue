<script setup lang="ts">
import { Button } from '~/types/global';

interface Props {
  attr: Button
}

const { attr } = defineProps<Props>();
</script>

<template>
  <FormKit type="button" input-class="button" :label="attr.content" />
</template>
