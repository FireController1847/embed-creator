function isValidHex(hex) {
  let regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return regex.test(hex);
}

module.exports = (color, author, title, description, fields, footer, image, disableTimestamp) => {
  if (!isValidHex(color)) return "Invalid Color";
  color = color.replace("#", "0x");
  try {
    parseInt(color);
    if (!title) return "No Title";
    
    timestamp = new Date();
    if (disableTimestamp) timestamp = undefined;

    return {
      "color": color,
      "author": author,
      "title": title,
      "description": description,
      "timestamp": timestamp,
      "footer": footer,
      "image": {
        "url": image
      }
    }
  } catch(e) {
    return e.stack;
  }
}
