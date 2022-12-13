<template>
  <div class="form">
    <p class="logo">kzforms</p>
    <div class="elements">
      <FormElement v-for="element in form.elements" :key="element.id" :type="element.type" :attr="element.attr" />
    </div>
  </div>
</template>
  
<script setup lang="ts">

import { Form } from "~/types/global";

const config = useRuntimeConfig();

const route = useRoute();
const id = route.params.id;

const { data } = await useFetch(`${config.public.apiBase}/form/${id}`);
const form = data.value as Form;

if (!form) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

onBeforeMount(() => {
  document.documentElement.style.setProperty("--primary-color", form.theme.primary);
  document.documentElement.style.setProperty("--secondary-color", form.theme.secondary);
})

</script>
  
<style lang="scss">
body {
  background-color: var(--primary-color);
}

.form {
  .logo {
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }

  .elements {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>