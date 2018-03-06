<template>
<<<<<<< HEAD
<div>
<link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
=======
    <div>
        Розклад руху тролейбусів.xlsx
        <b-button variant="success">Імпортувати</b-button>
        <b-button variant="danger">Видалити файл</b-button>
>>>>>>> a781f239333c0ec54f48093d8a3d3291becb6959

        <p>Будь-ласка, почекайте, Рух тролейбусів завантаживається.</p>
        <progress id="progress" value="100" max="300">
            Загружено <span id="percent">0</span>%
        </progress>

        <b-tabs>
            <b-tab title="1:ЧЛФЗ:Аврора-Санаторій Украіна" active></b-tab>
            <b-tab title="1A:вул Пацаєва-Санаторій Украіна">
                <a href="#"></a>
            </b-tab>
        </b-tabs>

        <b-table striped hover :items="items"></b-table>
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
  // TODO: does it work?
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
