document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for the sake of example
    const songs = [
        {
            title: 'Chaleya',
            artist: 'Arijit',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft24/11607_resize2x_80x80.webp',
        },
        {
            title: 'Heeriye',
            artist: 'Arijit SIngh',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft24/11602_resize2x_80x80.webp',
        },
        {
            title: 'Lut Gaye',
            artist: 'Jubin Nautiyal',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft12/5833_6_resize2x_80x80.webp',
        },
        {
            title: 'Bewafa Tera Masoom Chehra',
            artist: 'Jubin Nautiyal',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft3/1300_6_resize2x_80x80.webp',
        },
        {
            title: 'KaalaStar',
            artist: 'Honey Singh',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft24/11741_resize2x_80x80.webp',
        },
        {
            title: 'Love Dose',
            artist: 'Honey Singh',
            image: 'https://pagalworlld.com/siteuploads/thumb/sft13/6308_4.jpg',
        },
        {
            title: 'Tumse Milke Dilka Jo Haal',
            artist: 'Sonu Nigam',
            image: 'https://www.pagalworld.us/_big/main-hoon-na-2004-250.jpg',
        },{
            title: 'Main Hoon Na',
            artist: 'Sonu Nigam',
            image: 'https://www.pagalworld.us/_big/main-hoon-na-2004-250.jpg',
        },{
            title: 'Dil Meri Na Sune',
            artist: 'Atif Aslam',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft6/2612_6_resize2x_80x80.webp',
        },{
            title: 'Main Rang Sharbaton Ka',
            artist: 'Atif Aslam',
            image: 'https://pagalworld.ink/siteuploads/thumb/sft15/7390_6_resize2x_80x80.webp',
        },
    ];

    const songList = document.getElementById('songList');

    // Populate the song list
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.classList.add('song');

        listItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <h2>${song.title}</h2>
            <p>${song.artist}</p>
        `;

        songList.appendChild(listItem);
    });
});
