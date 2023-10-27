// Question no 40:


function make_album(artist: string, albumTitle: string, numTracks?: number) {

    const album: any = {
        artist: artist,
        albumTitle: albumTitle,
    };

    if (numTracks !== undefined) {
        album.numTracks = numTracks
    };
    return album;

};
let album1 = make_album("Artist 1", "Album Title 1");
let album2 = make_album("Artist 2", "Album Title 2", 10);
let album3 = make_album("Artist 3", "Album Title 3");

console.log(album1);
console.log(album2);
console.log(album3);


