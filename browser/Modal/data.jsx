const data = {
  "children": [
    {
      "name": "Main Folder",
      "type": "folder",
      "children": [
        {
          "name": "Sub Folder 1",
          "type": "folder",
          "children": [
            {
              "name": "Nested Folder",
              "type": "folder",
              "children": [
                {
                  "name": "Super Nested Folder",
                  "type": "folder",
                  "children": [
                    {
                      "name": "Deep File",
                      "type": "file"
                    },
                    {
                      "name": "Deep File 2",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Empty Folder",
              "type": "folder"
            },
            {
              "name": "Simple Folder",
              "type": "folder",
              "children": [
                {
                  "name": "File",
                  "type": "file"
                }
              ]
            },
            {
              "name": "Empty Folder",
              "type": "folder"
            },
            {
              "name": "Nested File",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "Private folder",
      "type": "folder",
      "private": true,
      "children": [
        {
          "name": "Private document",
          "type": "file"
        },
        {
          "name": "Another folder",
          "type": "folder",
          "children" : [
            {
              "name": "Super secret document",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "Empty Folder",
      "type": "folder"
    },
    {
      "name": "Empty Folder",
      "type": "folder"
    },
    {
      "name": "Simple Folder",
      "type": "folder",
      "children": [
        {
          "name": "File",
          "type": "file"
        }
      ]
    },
    {
      "name": "Poorly Named Folder",
      "type": "folder",
      "children": [
        {
          "name": "Extremely long file name 3847283948383837472738690283472394256982734982349871203984569872340981234",
          "type": "file"
        }
      ]
    }
  ]
}

export default data;