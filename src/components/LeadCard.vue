<template>
  <div class="card-container">
    <div class="card-icon" :style="`background-color: ${color}`">
      <img :src="'images/'+icon" :alt="iconAlt">
    </div>
    <div class="card-description">
      <span class="value">{{value}}</span>
      <span class="name">{{name}}</span>
    </div>
    <VTooltip class="tooltip">
      <div class="tooltip-icon">
        i
      </div>

      <template #popper>
        <span class="tooltip-text">{{tooltip}}</span>
      </template>
    </VTooltip>
  </div>
</template>

<script>

export default {
  props: ['icon', 'iconAlt', 'value', 'name', 'tooltip', 'color']
}
</script>

<style scoped>
  .card-container {
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px #0000000D;
    border-radius: 8px;
    width: 240px;
    height: 128px;
    padding: 10px;

    display: flex;
    align-items: center;

    position: relative;
  }

  .card-icon {
    /* background-color: rgba(30, 147, 255, 0.3); */
    border-radius: 50%;
    width: 55px;
    height: 55px;
    margin: 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-icon img{
    height: 18px;
  }

  .card-description{
    text-align: left;
  }

  .card-description span.value{
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    display: block;
    color: #203B43;
  }

  .card-description span.name{
    font-weight: 400;
    font-size: 16px;
    display: block;
    color: #88979B;
  }

  .tooltip-icon{
    border: 2px solid #608289;
    color: #608289;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 12px;
  }

  .tooltip-text {
    font-family: 'DM Sans', sans-serif;
  }

  .tooltip{
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>