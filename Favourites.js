document.addEventListener("DOMContentLoaded", function () {
    const songList = document.getElementById("songList");

    // Sample songs
    const songs = [
        { title: "Chaleya", artist: "Arijit Singh" ,},
        { title: "Bewafa Tera Masoom Chehra", artist: "Jubin Nautiyal" },
        { title: "KalaaStar", artist: "Honey SIngh" },
        { title: "Main Hoon Na", artist: "Sonu Nigam" },
        { title: "Jeene Laga Hoon", artist: "Atif Aslam" },
    ];

    // Display songs 
    function displaySongs() {
        songList.innerHTML = "";
        songs.forEach((song, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${song.title} - ${song.artist}</span>
                <button onclick="removeSong(${index})">Remove</button>
            `;
            songList.appendChild(li);
        });
    }

    // Remove a song
    window.removeSong = function (index) {
        songs.splice(index, 1);
        displaySongs();
    };

    displaySongs();
});
