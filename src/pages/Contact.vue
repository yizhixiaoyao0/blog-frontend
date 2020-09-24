<template>
  <Layout>
    
  </Layout>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const {data} = await axios({
          method: 'POST',
          url: 'http://localhost:1337/contacts',
          data: this.form
        })
      } catch (error) {
        console.log('发送失败')
      }
    }
  }
};
</script>

<style></style>
