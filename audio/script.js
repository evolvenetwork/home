new Vue({
  el: '#app',
  data: {
    text: ''
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
});