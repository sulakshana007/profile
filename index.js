


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop:true,
})

  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 0,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 600,
    easing: "easeOutExpo",
    delay: 1000000000000000
  });



  anime.timeline({loop: true})
    .add({
      targets: '.ml5 .line',
      opacity: [0.5,1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 1000
    }).add({
      targets: '.ml5 .line',
      duration: 0,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    }).add({
      targets: '.ml5 .ampersand',
      opacity: [0,1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600'
    }).add({
      targets: '.ml5 .letters-left',
      opacity: [0,1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 2000,
      offset: '-=300'
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0,1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 1000,
      offset: '-=600'
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 10000000000000000000,
      easing: "easeOutExpo",
      delay: 2000
    });


    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 300,
        elasticity: 50,
        delay: (el, i) => 45 * (i+1)
      }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 10000,
        easing: "easeOutExpo",
        delay: 1000000000000000000000000
      });



      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml14 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: true})
        .add({
          targets: '.ml14 .line',
          scaleX: [0,1],
          opacity: [0.5,1],
          easing: "easeInOutExpo",
          duration: 1500
        }).add({
          targets: '.ml14 .letter',
          opacity: [0,1],
          translateX: [40,0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 2500,
          offset: '-=300',
          delay: (el, i) => 150 + 25 * i
        }).add({
          targets: '.ml14',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
          .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
          })
          .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
          }).add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1000,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
