/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('particles.js loaded - callback');
// });


/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {

    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "color": {
          "value": ["#A3CC4A",
            "#BAE6ED",
            "#21549F",
            "#FEC755",
            "#ffab00",
            "#EC1100"]
          // "value": ["#80BA3B",
          //   "#71B637",
          //   "#96C94A",
          //   "#478A0B",
          //   "#357106"]
        }
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffdfa9"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },

      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.8,
          "sync": false
        }
      },

      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },

      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffaa00",
        "opacity": 0.4,
        "width": 1
      },

      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 60,
          "size": 20,
          "duration": 0.7,
          "opacity": 0.5,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": true,
      "background_color": "#373737",
      "background_image": "img/icon.png",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "20%"
    }
  }

);