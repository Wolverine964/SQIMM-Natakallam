const settings = {
  "name": "Natakallam",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Nataklam",
      "description": "Learn a language. Change a life."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Learn Language",
              "/conversation-sessions/"
            ],
            [
              "Academic Programs",
              ""
            ],
            [
              "Refugee Voices",
              "/refugee-voices/"
            ],
            [
              "About Us",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://natakallam.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
