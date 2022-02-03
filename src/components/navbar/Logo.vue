<template>
  <div class="logo-header">
    <div id="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <span>Demo Company</span>
    </div>
  </div>
</template>

<style scoped>
.logo-header {
  padding-left: 15px;
  padding-right: 50px;
  z-index: 100;
}

img {
  border: none;
}
span {
  color: #303133;
  font-size: 20px;
}
#logo img {
  vertical-align: middle;
  margin-right: 5px;
  width: 40px;
  height: 40px;
}
#logo span {
  text-align: center;
  padding: 50% 0;
}
@media only screen and (max-width: 768px) {
  .logo-header {
    padding: 0;
  }
}
</style>
