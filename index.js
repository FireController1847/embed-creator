function isValidHex(hex) {
  let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return regex.test(hex);
}

/**
 * @deprecated Since Discord v12 editing and sending of embeds has become available and this module is no longer required.
 */
module.exports = (color, author, title, description, fields, footer, images, disableTimestamp) => {
  console.warn("[embed-creator] Since Discord v12 editing and sending of embeds has become available and this module is no longer required.");
  if (!isValidHex(color)) color = "#FFFFFF";
  color = color.replace("#", "0x");
  try {
    color = parseInt(color);
    if (!color || isNaN(color)) color = 0xFFFFFF;
    
    timestamp = new Date();
    if (disableTimestamp) timestamp = undefined;
    
    thumbnail = undefined;
    image = undefined;
    if (images && images.thumbnail) thumbnail = images.thumbnail;
    if (images && images.image) image = images.image;
    return {embed:{
      "color": color,
      "author": author,
      "title": title,
      "description": description,
      "timestamp": timestamp,
      "fields": fields,
      "footer": footer,
      "image": {
        "url": image
      },
      "thumbnail": {
        "url": thumbnail
      }
    }}
  } catch(e) {
    throw new Error(e);
  }
}
