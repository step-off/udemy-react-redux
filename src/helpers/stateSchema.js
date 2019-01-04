export default {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "comments",
      "isLoggedIn"
    ],
    "properties": {
      "comments": {
        "$id": "#/properties/comments",
        "type": "array",
        "title": "The Comments Schema",
        "items": {
          "$id": "#/properties/comments/items",
          "type": "string",
          "title": "The Items Schema",
          "default": "",
          "examples": [
            "a",
            "b"
          ],
          "pattern": "^(.*)$"
        }
      },
      "isLoggedIn": {
        "$id": "#/properties/isLoggedIn",
        "type": "boolean",
        "title": "The Isloggedin Schema",
        "default": false,
        "examples": [
          true
        ]
      }
    }
  }