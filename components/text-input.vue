<template>
  <div>
    <label for="samplearea" >enter text:</label>
    <textarea id="samplearea" v-model="sample">some</textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sample: '',
      }
    }
  }

</script>
