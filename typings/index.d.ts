interface RichEmbed {
  color?: number,
  author?: {name: string, url?: string, icon_url?: string},
  title?: string,
  description?: string,
  timestamp?: Date,
  fields?: {name: string, value: string, inline?: boolean}[],
  footer?: {text?: string, icon_url?: string},
  image?: {url: string, proxy_url?: string, height?: number, width?: number},
  thumbnail?: {url: string, height?: number, width?: number}
}

declare function createEmbed(
  color?: string,
  author?: {name: string, url?: string, icon_url?: string},
  title?: string,
  description?: string,
  fields?: {name: string, value: string, inline?: boolean}[],
  footer?: {text?: string, icon_url?: string},
  images?: {image?: string, thumbnail?: string},
  disableTimestamp?: boolean
): RichEmbed;

export = createEmbed;