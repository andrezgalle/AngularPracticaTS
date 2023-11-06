interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string;
    details: Details;
}

interface Details {
    author: string,
    year: number;

}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {
    song:anotherSong,
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details

/* console.log('song',anotherSong)
console.log('duration',duration)
console.log('author',author) */


//Destructuring de arrreglos

const [,,trunks ='not found']: string[] = ['Goku','Vegeta',/* 'Trunks' */]
console.log(trunks)



export {

}