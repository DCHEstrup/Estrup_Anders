var constants = {
  "config": {
    "appTitle": "Gammel Estrups byg-selv-værktøj",
    "appSub": "Vægtæpper",
    "repository":"https://github.com/DCHEstrup/Estrup_Anders",
    "authors": [
      {
        "name": "LeonardA-L",
        "picture": "https:/leonarda-l.github.io/Photo_small.jpg",
        "link": "https:/LeonardA-L.github.io/"
      },
      {
        "name": "Mathieu",
        "picture": "https:/secure.gravatar.com/avatar/e6cfb8715cecf121b64c938268519c50?s=64",
        "link": "https:/thoretton.com"
      },
      {
        "name": "Maria",
        "picture": "https:/avatars3.githubusercontent.com/u/6231239?v=3&s=460",
        "link": "https:/www.linkedin.com/in/metegan/"
      }
    ]
  },
  "colors":[
    "#303030",
    "#871b1b",
    "#141464",
    "#b98c1a",
    "#336600",
    "#7b2b7a",
    "#F4F5F6"
  ],
  "tabs": [
   {
      "title": "Bygninger",
      "images": [
        "content/images/brave/1Herregård.png",
        "content/images/brave/1avlsgård.png",
        "content/images/brave/1hegn.png",
        "content/images/brave/2avlsgård.png",
        "content/images/brave/2hegn.png",
        "content/images/brave/2herregård.png",
        "content/images/brave/3herregård 30 cm høj.png",
        "content/images/brave/4herregård.png",
        "content/images/brave/4landskab.png",
        "content/images/brave/5landskab.png",
        "content/images/brave/6landskab.png"
      ]
    },
   {
      "title": "Dyr",
      "images": [
        "content/images/beasts/1dyr.png",
        "content/images/beasts/2dyr.png",
        "content/images/beasts/3landskab.png",
        "content/images/beasts/4dyr.png",
        "content/images/beasts/4landskab.png",
        "content/images/beasts/5dyr.png",
        "content/images/beasts/6dyr.png",
        "content/images/beasts/7dyr.png",
        "content/images/beasts/7landskab.png",
        "content/images/beasts/8dyr.png",
        "content/images/beasts/9dyr.png",
        "content/images/beasts/10dyr.png",
        "content/images/beasts/11dyr.png"
      ]
    },
   {
      "title": "Landskab",
      "images": [
        "content/images/buildings/1forgrund.png",
        "content/images/buildings/1landskab.png",
        "content/images/buildings/1Skov.png",
        "content/images/buildings/2forgrund.png",
        "content/images/buildings/2landskab.png",
        "content/images/buildings/2skov.png",
        "content/images/buildings/3dyr.png",
        "content/images/buildings/8landskab.png",
        "content/images/buildings/9landskab.png",
        "content/images/buildings/10landskab.png",
        "content/images/buildings/11 landskab.png"
      ]
    },
  ],
  "backgrounds":[
    "content/images/backgrounds/herregård1.jpg",
    "content/images/backgrounds/background_1.jpg",
    "content/images/backgrounds/background_2.jpg",
    "content/images/backgrounds/background_3.jpg",
    "content/images/backgrounds/background_4.jpg",
    "content/images/backgrounds/background_5.jpg"
  ],
  "fonts":[
    {
      font:"Bayeux",
      size: 25,
      uppercase: true
    },
    {
      font:"Augusta",
      size: 35,
      uppercase: false
    }
  ],
  "brushes":[
    {
      name:"Folks",
      icon:"content/images/folc/01_group.png",
      speed:100,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.8,
      mirror: false,
      randMirror: false,
      images:[
        {
          img:"content/images/folc/01_group.png"
        },
        {
          img:"content/images/folc/02_staring-guys.png",
          mirror:true,
          scale: 0.8
        },
        {
          img:"content/images/folc/05_gesturing_guy.png",
          scale:0.9
        },
        {
          img:"content/images/folc/08_woman1.png",
          mirror:true,
          scale: 0.9
        }
      ]
    },
    {
      name:"Folks-Mirror",
      icon:"content/images/folc/02_staring-guys.png",
      speed:100,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.8,
      mirror: true,
      randMirror: false,
      images:[
        {
          img:"content/images/folc/01_group.png"
        },
        {
          img:"content/images/folc/02_staring-guys.png",
          mirror:true,
          scale: 0.8
        },
        {
          img:"content/images/folc/05_gesturing_guy.png",
          scale:0.9
        },
        {
          img:"content/images/folc/08_woman1.png",
          mirror:true,
          scale: 0.9
        }
      ]
    },
    {
      name:"Birds",
      icon:"content/images/beasts/03_bird1.png",
      speed:500,
      randScaleRange: 0.2,
      randRotationRange: 30,
      scale: 0.6,
      randMirror: true,
      images:[
        {
          img:"content/images/beasts/03_bird1.png"
        },
        {
          img:"content/images/beasts/05_bird3.png"
        },
        {
          img:"content/images/beasts/08_bird6.png",
          scale:0.9
        }
      ]
    },
    {
      name:"Corpses",
      icon:"content/images/brave/10_dead_warrior4.png",
      speed:450,
      randScaleRange: 0.2,
      randRotationRange: 10,
      scale: 0.6,
      randMirror: true,
      images:[
        {
          img:"content/images/misc/16_sword.png",
          scale:0.8
        },
        {
          img:"content/images/misc/17_sword_helmet.png",
          scale:0.7
        },
        {
          img:"content/images/misc/09_shield.png",
          scale:0.7
        },
        {
          img:"content/images/brave/06_beheaded_warrior1.png"
        },
        {
          img:"content/images/brave/07_dead_warrior2.png"
        },
        {
          img:"content/images/brave/08_dead_warrior2.png"
        },
        {
          img:"content/images/brave/09_dead_warrior3.png"
        },
        {
          img:"content/images/brave/10_dead_warrior4.png"
        }
      ]
    },
    {
      name:"Fire",
      icon:"content/images/fire/flames_1.png",
      speed:100,
      randScaleRange: 0.2,
      randRotationRange: 5,
      scale: 0.6,
      randMirror: true,
      images:[
        {
          img:"content/images/fire/flames_1.png",
          scale:1
        },
        {
          img:"content/images/fire/flames_2.png",
          scale:0.7
        },
        {
          img:"content/images/fire/flames_3.png",
          scale:1
        },
      ]
    }
  ]
}

