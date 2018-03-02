<template>
<div>
<p><ul><b-button variant="primary">
  Додати файл
</b-button></ul></p>
</p>

<br>

    <p>Пожалуйста, подождите, пока загрузится розклад руху тролейбусів.</p>
    <progress id="progress" value="0" max="300">
        Загружено <span id="percent">0</span>%
    </progress>
    <p id="done"></p>




Розклад руху тролейбусів.xlsx<b-button onclick="changeProgress()" variant="success">Імпортувати</b-button><b-button variant="danger">Видалити файл</b-button>
<br>
 <br>
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
var progress = document.getElementById('progress'),
    percent = document.getElementById('percent'),
    done = document.getElementById('done');
// Old browser support
if ( ! progress.value)
    progress.value = +progress.getAttribute("value");
if ( ! progress.max)
    progress.max = +progress.getAttribute("max");

function changeProgress() {
    if (progress.value >= progress.max) {
        done.innerHTML = "Готово!";
        return;
    }
    progress.value++;
    percent.innerHTML = Math.floor(progress.value / progress.max * 100);
    setTimeout(changeProgress, 10);
}
changeProgress();

</script>

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
