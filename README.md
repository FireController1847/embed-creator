# Embed Creator
### This module assumes you have basic knowledge of Discord.js.
A Discord Embed Creator

# Key
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

# Edit Example
```javascript
const createEmbed = require("embed-creator");
message.channel.send("A message with no embed!").then(msg => {
  msg.edit(createEmbed(
    "#FFFFFF", null, "This message has an embed now! :D"
  ));
});
```

# Object Examples
### Hex, Title, Description, Timestamp
#FFFFFF, null, "Title", "Description", null, null, null, false
### Author
```javascript
{"name": "Fire", "icon_url": message.guild.displayAvatarURL, "url": "https://www.google.com"}
```
### Fields
```javascript
[{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}]
```
### Footer
```javascript
{"text": "This is footer text!", "icon_url": message.guild.iconURL()}
```
### Images
```javascript
{"thumbnail": message.guild.iconURL(), "image": message.author.displayAvatarURL}
```

# Example
This example will show you how to use every part of embedCreator.
```javascript
const createEmbed = require("embed-creator");

message.channel.send(createEmbed("#FEAFEA", 
  {"name": "Fire", "icon_url": message.author.displayAvatarURL, "url": "https://www.google.com"}, "Title", "Description",
  [{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}],
  {"text": "This is footer text!", "icon_url": message.guild.iconURL()}, 
  {"thumbnail": message.guild.iconURL(), "image": message.author.displayAvatarURL}, false
));
```
![Example1](https://img.visualfiredev.com/saved/gn6tg.png)
