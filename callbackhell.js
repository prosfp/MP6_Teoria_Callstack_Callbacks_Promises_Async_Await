// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "indigo";
//             setTimeout(() => {
//               document.body.style.backgroundColor = "violet";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const canviColors = (nouColor, delay) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = nouColor;
//   }, delay);
// };

// searchMoviesAPI('Matrix', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })

const canviColors = (nouColor, delay, continua) => {
  setTimeout(() => {
    document.body.style.backgroundColor = nouColor;
    continua && continua(); // Si continua és true, executa la funció continua
  }, delay);
};

canviColors('red', 1000, () => {
  canviColors('yellow', 3000, () => {
    canviColors('violet', 1000, () => {
      canviColors('blue', 3000);
    });
  });
});
