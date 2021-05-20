anime.timeline({loop: true})
  .add({
    targets: '.ml55 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
  }).add({
    targets: '.ml55 .line',
    duration: 1000,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml55 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600'
  }).add({
    targets: '.ml55 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=300'
  }).add({
    targets: '.ml55 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600'
  }).add({
    targets: '.ml55',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
  });




  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml12');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 6500,
      delay: (el, i) => 100 + 30 * i
    });
