export async function fetchYouTubeVideos(channelId) {
  try {
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xml = await response.text();
    
    // Simple regex to extract video info from YouTube RSS
    // Note: YouTube RSS is very stable in its format
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const videoIdRegex = /<yt:videoId>(.*?)<\/yt:videoId>/;
    const titleRegex = /<title>(.*?)<\/title>/;
    const linkRegex = /<link [^>]*href="(.*?)"/;
    const publishedRegex = /<published>(.*?)<\/published>/;
    const descriptionRegex = /<media:description>([\s\S]*?)<\/media:description>/;

    const items = [];
    let match;
    
    // Limit to 15 videos to avoid excessive processing
    let count = 0;
    while ((match = entryRegex.exec(xml)) !== null && count < 15) {
      const entry = match[1];
      const videoIdMatch = entry.match(videoIdRegex);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      
      if (videoId) {
        const titleMatch = entry.match(titleRegex);
        const linkMatch = entry.match(linkRegex);
        const publishedMatch = entry.match(publishedRegex);
        const descriptionMatch = entry.match(descriptionRegex);

        items.push({
          id: videoId,
          title: titleMatch ? decodeHTMLEntities(titleMatch[1]) : '',
          link: linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${videoId}`,
          pubDate: publishedMatch ? publishedMatch[1] : '',
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          description: descriptionMatch ? decodeHTMLEntities(descriptionMatch[1]) : ''
        });
        count++;
      }
    }
    
    return items;
  } catch (error) {
    console.error('Error fetching YouTube RSS:', error);
    return [];
  }
}

// Basic helper to decode common HTML entities that might appear in titles/descriptions
function decodeHTMLEntities(text) {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
