<script setup>
// const scrollToHash = () => {
//   const hash = window.location.hash;
//   if (!hash)  return

//   const element = document.querySelector(hash);
//   console.log(element);
//   if (element){
//     console.log(element);
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };

// // onMounted(scrollToHash)

// onMounted(async () => {
//   await nextTick(); // Ждем завершения обновления DOM
//   scrollToHash();
// });
</script>

<template>
  <div>
    <div class="container">
      <Header />
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
