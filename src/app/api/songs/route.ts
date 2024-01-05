// export async function GET() {
//   const response = await fetch(
//     "https://api.spotify.com/v1/me/player/currently-playing",
 
//   );

//   const data = await response.json();
//   if (response.ok) {
//     return {
//       body: {
//         song: data.item.name,
//         artist: data.item.artists[0].name,
//         album: data.item.album.name,
//         image: data.item.album.images[0].url,
//       },
//     };
//   }
// }
