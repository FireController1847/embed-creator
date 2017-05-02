# Embed Creator
A Discord Embed Creator

# Simple
## This module assumes you have basic knowledge of Discord.js.
```javascript
const createEmbed = require("embed-creator");

message.channel.send(createEmbed(
  "hex code color", "author object", "title",
  "description",
  "fields object",
  "footer object",
  "image object", "true/false to disable timestamp"
));
```

# Object Examples
### Hex, Title, Description, Timestamp
#FFFFFF, null, "Title", "Description", null, null, null, false
### Author
```javascript
{"name": "Fire", "icon_url": message.guild.avatarURL("png", 2048), "url": "https://www.google.com"}
```
### Fields
```javascript
[{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}]
```
### Footer
```javascript
{"text": "This is footer text!", "icon_url": message.guild.iconURL("png", 2048)}
```
### Images
```javascript
{"thumbnail": message.guild.iconURL("png", 2048), "image": message.author.avatarURL("png", 2048)}
```

# Example
This example will show you how to use every part of embedCreator.
```javascript
const createEmbed = require("embed-creator");

message.channel.send(createEmbed("#FEAFEA", 
  {"name": "Fire", "icon_url": message.author.avatarURL("png", 2048), "url": "https://www.google.com"}, "Title", "Description",
  [{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}],
  {"text": "This is footer text!", "icon_url": message.guild.iconURL("png", 2048)}, 
  {"thumbnail": message.guild.iconURL("png", 2048), "image": message.author.avatarURL("png", 2048)}, false
));
```
![Example1](https://img.visual-fire.com/Saved/gn6tg.png)
