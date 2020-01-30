document.addEventListener('DOMContentLoaded', ( ) => {
  // Creating waypoint
  let waypoint = new Waypoint({
    element: document.querySelector('#lines'),
    handler: function() {
      anime({
        targets: '.lines path',
        easing: 'easeInExpo',
        strokeDashoffset: [0, anime.setDashoffset],
        delay: anime.stagger(300),
        opacity: [1, 0],
        duration: 5000,
        direction: 'reverse'
      });
      anime({
        targets: '.background circle',
        easing: 'easeInExpo',
        opacity: [0, 0.3],
        delay: 1,
        duration: 2000,
      });
      anime({
        targets: '.design',
        direction: 'normal',
        easing: 'easeInOutSine',
        delay: 1000,
        duration: 1600,
        opacity: [0, 1],
      });
      anime({
        targets: '.information',
        direction: 'normal',
        easing: 'easeInOutSine',
        delay: 1000,
        duration: 1600,
        opacity: [0, 1],
      });
      anime({
        targets: '.design-system',
        direction: 'normal',
        easing: 'easeInOutSine',
        delay: 1000,
        duration: 1600,
        opacity: [0, 1],
      });
      anime({
        targets: '.icons',
        translateY: 15,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 1500,
         delay: anime.stagger(100, {start: 0})
      });
      anime({
      targets: '.elements',
        translateY: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 1000,
      });
      // anime({
      //   targets: '.text p',
      //     easing: 'easeInOutSine',
      //     direction: 'reverse',
      //     opacity: [1,0],
      //     duration: 1000,
      //     translateX: -70,
      //     delay: anime.stagger(100) // increase delay by 100ms for each elements.
      // });
      // anime({
      //   targets: '.service-h4',
      //     easing: 'easeInOutSine',
      //     opacity: [0,1],
      //     duration: 700,
      //     delay: anime.stagger(300) // increase delay by 100ms for each elements.
      // });
      this.destroy();
    },
    offset: '100%'
  });
});