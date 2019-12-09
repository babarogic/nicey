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
      this.destroy();
    },
    offset: '100%'
  });
});