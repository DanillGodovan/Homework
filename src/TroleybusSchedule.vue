<template>
<div>
<link rel="stylesheet" href="style.css">

<form enctype="multipart/form-data" method="post">
   <p><input type="file" name="f">
   <input type="submit" value="Отправить"></p>
   </form>

<br>
Розклад руху тролейбусів.xlsx<b-button variant="success">Імпортувати</b-button><b-button variant="danger">Видалити файл</b-button>
<br><br>

 <p>Будь-ласка, почекайте, Рух тролейбусів завантаживається.</p>
     <progress id="progress" value="100" max="300">
         Загружено <span id="percent">0</span>%
     </progress>
<br><br>

 <b-tabs>
   <b-tab title="1:ЧЛФЗ:Аврора-Санаторій Украіна" active>
     <br>
   </b-tab>
   <b-tab title="1A:вул Пацаєва-Санаторій Украіна" >
     <br><a href="#"></a>
   </b-tab>
   </b-tabs>

 <b-table striped hover :items="items">
</b-table>

  </div>
</template>


<script>
export default {
  data () {
    return {
      counter: 45,
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

<script>
export default {
  data () {
    return {
      items: [
        {
          'Напрямок': 'ЧЛФЗ "Аврора"-Сан Україна',
          'ЧЛФЗ "Аврора"': '10:00',
          'Завод "Химреактив"': '10:05',
          'ДОК': '10:10',
          'Хлібозавод': '10:15',
          'Вул.Добровольского': '10:20',
          'пл. 700-річчя Черкасс': '10:25',
          'Університет': '10:30',
          'Depot center': '10:35',
          'Вул. Новопречистенська': '10:40'
        },
        {
        'Напрямок': 'Сан Україна-ЧЛФЗ"Аврора"',
        'ЧЛФЗ "Аврора"': '10:00',
        'Завод "Химреактив"': '10:05',
        'ДОК': '10:10',
        'Хлібозавод': '10:15',
        'Вул.Добровольского': '10:20',
        'пл. 700-річчя Черкасс': '10:25',
        'Університет': '10:30',
        'Depot center': '10:35',
        'Вул. Новопречистенська': '10:40'
        },
      ]
    }
  }
  }
</script>
