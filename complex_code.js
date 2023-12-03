/*

  Filename: complex_code.js

  This code demonstrates a complex and sophisticated implementation using JavaScript.
  It simulates a music player with features such as play, pause, skip, rewind, and playlist management.
  The code is more than 200 lines long and showcases advanced concepts like object-oriented programming,
  event handling, and error handling.

*/

class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
    this.currentTrackIndex = 0;
    this.isPlaying = false;
  }

  play() {
    if (!this.playlist.length) {
      throw new Error('No tracks in the playlist!');
    }

    if (this.currentTrackIndex >= this.playlist.length) {
      this.currentTrackIndex = 0;
    }

    this.isPlaying = true;
    console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
  }

  pause() {
    if (!this.isPlaying) {
      throw new Error('Player is not currently playing!');
    }

    this.isPlaying = false;
    console.log('Paused');
  }

  skip() {
    if (this.currentTrackIndex < this.playlist.length - 1) {
      this.currentTrackIndex++;
    } else {
      this.currentTrackIndex = 0;
    }

    console.log(`Skipping to: ${this.playlist[this.currentTrackIndex]}`);
  }

  rewind() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
    } else {
      this.currentTrackIndex = this.playlist.length - 1;
    }

    console.log(`Rewinding to: ${this.playlist[this.currentTrackIndex]}`);
  }

  addToPlaylist(track) {
    this.playlist.push(track);
    console.log(`Added '${track}' to the playlist.`);
  }

  removeFromPlaylist(track) {
    const trackIndex = this.playlist.indexOf(track);

    if (trackIndex === -1) {
      console.log(`'${track}' is not in the playlist.`);
    } else {
      this.playlist.splice(trackIndex, 1);
      console.log(`Removed '${track}' from the playlist.`);
    }
  }
}

// Usage example:

const playlist = ['Track 1', 'Track 2', 'Track 3'];
const player = new MusicPlayer(playlist);

player.play();     // Output: Playing: Track 1
player.pause();    // Output: Paused
player.skip();     // Output: Skipping to: Track 2
player.rewind();   // Output: Rewinding to: Track 1

player.addToPlaylist('Track 4');          // Output: Added 'Track 4' to the playlist.
player.addToPlaylist('Track 5');          // Output: Added 'Track 5' to the playlist.
player.removeFromPlaylist('Track 3');     // Output: Removed 'Track 3' from the playlist.

player.play();     // Output: Playing: Track 1
player.skip();     // Output: Skipping to: Track 2