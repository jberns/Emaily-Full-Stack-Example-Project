//Write a function to retrieve a blob of json
//make an ajax request! Use the 'fetch' function

// function fetchAlbums() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// async function fetchAlbums() {
//   const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
//   const json = await res.json();

//   console.log(json);
// }

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
