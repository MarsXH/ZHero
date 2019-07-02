<template>
    <div class="z-btn">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'ZBtn'
}
</script>
<style>
.z-btn {
  border: 1px solid #41a259;
  background-color: #41a259;
  display: inline-block;
  border-radius: 2px;
  height: 14px;
  line-height: 14px;
  color: #fff;
  padding: 10px 19px;
  cursor: pointer;
  white-space: nowrap;
}
</style>
