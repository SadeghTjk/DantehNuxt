<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" dismissible>
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="dismiss" >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<script>

export default {
    methods:{
        dismiss(){
           document.querySelector(".alert").parentElement.removeChild(document.querySelector(".alert")); 
        }
    }
}
</script>