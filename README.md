# Embed Creator
A Discord Embed Creator

# Simple
```javascript
const createEmbed = require("embed-creator");

message.channel.sendEmbed(createEmbed(
  "hex code color", "author object", "title",
  "description",
  "fields object",
  "footer object",
  "image URL", "true/false to disable timestamp"
));
```

# Examples
## This is assuming you have basic knowledge of Discord.js

Below is an example of how to do an extremely basic embed.
```javascript
const createEmbed = require("embed-creator");

message.channel.sendEmbed(createEmbed(
  "#ffffff", null, "This is your title",
  "This is the description of the embed. I like to keep it short, by doing "
  + "this! Because it allows you to be able to see what the embed is going "
  + "to look like much easier than one long line."
));
```
![Embed1](https://www.visual-fire.com/uploader/Images/Fire/j2ihi.png)

And there's your first simple embed! But lets say we want to get a bit more complex. Maybe including an author?
```javascript
const createEmbed = require("embed-creator");

message.channel.sendEmbed(createEmbed(
  "#ffffff", {
    "name": "Google",
    "icon_url": "https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg",
    "url": "https://www.google.com"
  }, "Google Is A Great Company",
  "It's been discovered that google owns a good 40% of the world by now "
  + "and that they could take control at any time!"
));
```
![Embed2](https://www.visual-fire.com/uploader/Images/Fire/aku4t.png)

And while this is great and all, let's say we want to add more fields. Basically, we're adding sections to the embed. For example, sometimes they can look like this.

![Embed3](https://www.visual-fire.com/uploader/Images/Fire/whnu0.png)

Let's try and create some using the embed creator.
```javascript
const createEmbed = require("embed-creator");

message.channel.sendEmbed(createEmbed(
  "#ffffff", {
    "name": "Google",
    "icon_url": "https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg",
    "url": "https://www.google.com"
  }, "Google Is A Great Company",
  "Feilds are an array and can take three options, Name, Value, and Inline. "
  + "We'll get into inline a few from now.", [
    {
      "name": "Feild 1",
      "value": "This is my first field!"
    },
    {
      "name": "Feild 2",
      "value": "This is my second field!"
    }
  ]
));
```

While fields are not the easiest to make with this (It'd be easier to use the Discord.RichEmbed creator), it can be handy. That will be the only example of fields though. Basically, for inline (which will display them side by side), add `"inline": true`.

Now we'll move onto the footer. Here's an example of creating a footer, and adding an image to our embed.

```javascript
const createEmbed = require("embed-creator");

message.channel.sendEmbed(createEmbed(
  "#ffffff", {
    "name": "Google",
    "icon_url": "https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg",
    "url": "https://www.google.com"
  }, "Google Is A Great Company",
  "We have to add the null after our description, because otherwise we'd "
  + "be setting our fields as the footer!", null, {
    "text": "This will display in the footer, along with the timestamp."
  }, "https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg"
));
```
![Embed4](https://www.visual-fire.com/uploader/Images/Fire/9uhlv.png)

I like to use this function for things such as my music bot, which uses almost 100% embeds. Using this function, I made this now playing message.

![Embed5](https://www.visual-fire.com/uploader/Images/Fire/u5936.png)

So try it for yourself and see how you'll end up using it!
