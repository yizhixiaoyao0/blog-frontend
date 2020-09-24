<template>
  <section>
    <slot></slot>
  </section>
</template>
<page-query>
query{
  general: allStrapiGeneral{
    edges{
      node {
        id
        title
        subtitle
        fontColor
    useBackgroundImage
    backgroundColorLeft
    backgroundColorRight
    mini
        created_by {
          lastname
          firstname
        }
        created_at
      }
      }
    }

}
</page-query>
<script>
  export default {
    name: 'AppMain',
    computed: {

    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>