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

const route = useRoute();
const id = route.params.id;

const forms: Form[] = [
  {
    id: "UfvnFGGEwu",
    name: "Registration Form",
    elements: [{ id: 1, type: "TextField", attr: { label: "Name", placeholder: "What should we call you?" } },
    { id: 2, type: "TextField", attr: { label: "Registration Number", placeholder: "Your unique identification!" } },
    { id: 3, type: "Button", attr: { content: "Lets Go!" } }],
    theme: {
      id: "1",
      primary: "#CED3DC",
      secondary: "#95B46A"
    }
  },
  {
    id: "rPFdvPJTOo",
    name: "Feedback Form",
    elements: [{ id: 1, type: "TextField", attr: { label: "Name", placeholder: "Your Name!" } },
    { id: 2, type: "TextField", attr: { label: "Feedback", placeholder: "How did it for for you!" } },
    { id: 3, type: "TextField", attr: { label: "Rate it", placeholder: "Rate the speaker!" } },
    { id: 4, type: "Button", attr: { content: "Send!" } }],
    theme: {
      id: "1",
      primary: "#C2C5BB",
      secondary: "#77B28C"
    }
  }
]

const form = forms.find((form) => form.id === id);

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