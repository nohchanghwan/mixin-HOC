<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components: {
    ListItem
  },
  created() {
    // startSpinner
    bus.$emit('start:spinner');
    //스피너확인위해 의도적으로 setTimeout
    setTimeout(()=> {
      this.$store.dispatch('FETCH_JOBS')
        .then(()=>{
          console.log('fetched');
          // endSpinner
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1500);  
  }
}
</script>
