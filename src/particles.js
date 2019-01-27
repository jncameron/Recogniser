const params =
  {
    "fps_limit": 28,
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 30,
            "opacity": 0.4,
        },
        "move": {
            "speed": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "opacity_min": 0.05,
                "speed": 2,
                "sync": false
            },
            "value": 0.4
        }
    },
    "color": {
      "value": "#82A7B2"
    },
    "polygon": {
        "enable": true,
        "scale": .5,
        "type": "inline",
        "move": {
            "radius": 30
        },
        "url": "brain_03.svg",
        "inline": {
            "arrangement": "equidistant"
        },
        "draw": {
            "enable": true,
            "stroke": {
                "color": "#fff"
            }
        }
    },
    "retina_detect": false,
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "size": 6,
                "distance": 40
            }
        }
  }
}

export default params;