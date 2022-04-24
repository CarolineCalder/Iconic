const settings = {
  "name": "iconic",
  "state": {
    "frontity": {
      "url": "https://iconicmotif.dreamhosters.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
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
              "Projects",
              "/projects/"
            ],
            [
              "Blog",
              "/blog/"
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
      "url": "https://iconicmotif.dreamhosters.com/",
      "homepage": "/home",
      "postsPage": "/blog",
    }
  }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

