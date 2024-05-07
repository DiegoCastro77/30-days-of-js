class Playlist {
    constructor() {
        this.stack = [];
    }

    addSong(song) {
        this.stack.push(song);
    }

    playSong() {
        if (this.stack.length === 0) {
            throw new Error("No hay canciones en la lista");
        }
        return this.stack.pop();
    }

    getPlaylist() {
        return this.stack.slice().reverse();
    }
}


const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.playSong());
console.log(playlist.playSong());
console.log(playlist.playSong());
try {
    console.log(playlist.playSong());
} catch (error) {
    console.log(error.message);
}

console.log(playlist.getPlaylist());