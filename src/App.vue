<template>
  <div class="p-24 flex space-x-2 mb-5">
    <btn>Primary</btn>
    <btn level="secondary">Secondary</btn>
    <btn level="danger">Danger</btn>
    <btn level="success">Success</btn>
    <btn level="warning">Warning</btn>
  </div>

  <div class="p-24 mb-5 space-y-16">
    <div class="flex space-x-2">
      <text-input name="fname" placeholder="First Name" />
      <text-input name="lname" placeholder="Last Name" />
    </div>

    <text-input name="email" icon="bx bx-search" />
    
    <div class="space-x-2">
      <text-input size="large" placeholder="Large" />
      <text-input size="normal" placeholder="normal" />
      <text-input size="small" placeholder="small" />
    </div>
  
    <text-input name="email" disabled placeholder="Disabled" />

  </div>
</template>

<script>
import TextInput from './components/Form/TextInput.vue'
// import Button from './components/Button/Button.vue';
export default {
  components: { TextInput },
  name: 'App',
  data() {
    return {
      num: 0
    }
  }
  // components: {
  //   'Btn': Button,
  // }
}
</script>