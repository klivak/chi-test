<template>
  <section class="container">
    <div>
  
      <img src="~assets/images/chilindo.png" alt="logo">
      <h1 class="title">
        chilindo.com - test
      </h1>
      <div class="links">
        <a href='task1' class="button--green">TASK 1</a>
        <!-- <nuxt-link to='task1' class="button--grey">TASK 1</nuxt-link> -->
       

      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
