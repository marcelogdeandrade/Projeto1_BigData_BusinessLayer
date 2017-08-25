define({ "api": [
  {
    "type": "get",
    "url": "/get_dog",
    "title": "Lista todos cachorros",
    "name": "Get_Dog",
    "group": "Dog",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Controller.js",
    "groupTitle": "Dog"
  },
  {
    "type": "post",
    "url": "/get_dog",
    "title": "Adiciona um cachorro",
    "name": "Put_Dog",
    "group": "Dog",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/Controller.js",
    "groupTitle": "Dog"
  }
] });
