function isValidHex(hex) {
  let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return regex.test(hex);
}

module.exports = (color, author, title, description, fields, footer, image, disableTimestamp) => {
  if (!isValidHex(color)) color = "#FFFFFF";
  color = color.replace("#", "0x");
  try {
    color = parseInt(color);
    if (!color || isNaN(color)) color = 0xFFFFFF;
    
    timestamp = new Date();
    if (disableTimestamp) timestamp = undefined;

    return {
      "color": color,
      "author": author,
      "title": title,
      "description": description,
      "timestamp": timestamp,
      "fields": fields,
      "footer": footer,
      "image": {
        "url": image
      }
    }
  } catch(e) {
    return e.stack;
  }
}
