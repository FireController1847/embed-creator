module.exports = function createEmbed(color, author, title, description, fields, footer, images, disableTimestamp) {
  if (!color || /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) color = '#FFFFFF';
  color = parseInt(color.replace('#', '0x'));
  if (!color || isNaN(color)) color = 0xFFFFFF;
  return {embed: {
    'color': color || null,
    'author': author || null,
    'title': title || null,
    'description': description || null,
    'timestamp': (disableTimestamp ? null : new Date()),
    'fields': fields || null,
    'footer': footer || null,
    'image': {
      'url': (images && images.image ? images.image : null)
    },
    'thumbnail': {
      'url': (images && images.thumbnail ? images.thumbnail : null)
    }
  }};
};