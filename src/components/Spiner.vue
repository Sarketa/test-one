<template>
  <div class="spin"></div>
  <p>Loading....</p>
</template>

<script>
export default {};
</script>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8800;
  animation: spiner 1s ease infinite;
}
p {
  text-align: center;
}

@keyframes spiner {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
