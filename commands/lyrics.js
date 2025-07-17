const axios = require('axios');

module.exports = {
  name: "lyrics",
  alias: ["songlyrics", "getlyrics"],
  category: "media",
  desc: "Fetch lyrics for any song using artist and title.",
  use: "<artist> | <title>",

  async execute(m, { text, args, command, prefix }) {
    try {
      if (!text.includes("|")) {
        return m.reply(`❌ Use format:\n${prefix + command} <artist> | <title>\n\nExample:\n${prefix + command} eminem | lose yourself`);
      }

      const [artist, title] = text.split("|").map((str) => str.trim());
      const apiUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`;
      const response = await axios.get(apiUrl);
      const result = response.data;

      if (!result || !result.lyrics) {
        return m.reply("❌ Lyrics not found. Try another song.");
      }

      const caption = `🎤 *Lyrics for ${title} by ${artist}*:\n\n${result.lyrics.substring(0, 4000)}`;
      return m.reply(caption);

    } catch (err) {
      console.error(err);
      return m.reply("❌ Error fetching lyrics. Make sure the artist/title is correct.");
    }
  }
};