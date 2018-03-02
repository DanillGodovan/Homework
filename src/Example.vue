<template>
<div>
<p><ul><b-button variant="primary">
  Додати файл
</b-button></ul></p>
</p>

<br><br><br>



Розклад руху тролейбусів.xlsx<b-btn variant="success" class="mt-4" @click="clicked">Імпортувати</b-btn><b-button variant="danger">Видалити файл</b-button>




  <b-progress :value="counter" :max="max" show-progress animated></b-progress>

    </b-progress>

  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      max: 100
    }
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
      console.log('Change progress to ' +
        Math.round(this.counter * 100) / 100)
    }
  }
}
</script>
