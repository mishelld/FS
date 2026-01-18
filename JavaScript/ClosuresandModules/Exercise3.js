const SongsManager = function () {
  const songs = {};
  const addSong = function (name, url) {
    let new_url = url.replace("https://www.youtube.com/watch?v=", "");
    songs[name] = new_url;
  };
  const getSong = function (name) {
    console.log(`https://www.youtube.com/watch?v=${songs[name]}`);
  };
  return {
    addSong,
    getSong,
  };
};
const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
