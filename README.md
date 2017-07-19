# Embed Creator
### This module assumes you have basic knowledge of Discord.js.
A Discord Embed Creator

# Key
```javascript
const ce = require("embed-creator");

msg.channel.send(ce(
  "hex code color", "author object", "title",
  "description",
  "fields object",
  "footer object",
  "image object", "true/false to disable timestamp"
));
```

# Edit Example
```javascript
const ce = require("embed-creator");
msg.channel.send("A message with no embed!").then(theM => {
  theM.edit(ce(
    "#FFFFFF", null, "This message has an embed now! :D"
  ));
});
```

# Object Examples
### Hex, Title, Description, Timestamp
#FFFFFF, null, "Title", "Description", null, null, null, false
### Author
```javascript
{"name": "Fire", "icon_url": msg.guild.displayAvatarURL(), "url": "https://www.google.com"}
```
### Fields
```javascript
[{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}]
```
### Footer
```javascript
{"text": "This is footer text!", "icon_url": msg.guild.iconURL()}
```
### Images
```javascript
{"thumbnail": msg.guild.iconURL(), "image": msg.author.displayAvatarURL()}
```

# Example
This example will show you how to use every part of embedCreator.
```javascript
const ce = require("embed-creator");

msg.channel.send(ce("#FEAFEA", 
  {"name": "Fire", "icon_url": msg.author.displayAvatarURL(), "url": "https://www.google.com"}, "Title", "Description",
  [{"name": "Field 1", "value": "Value 1"}, {"name": "Field 2", "value": "Value 2"}],
  {"text": "This is footer text!", "icon_url": msg.guild.iconURL()}, 
  {"thumbnail": msg.guild.iconURL(), "image": msg.author.displayAvatarURL()}, false
));
```
![Example1](https://img.visualfiredev.com/saved/gn6tg.png)
