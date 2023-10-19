//VERSIÓ DE PROMISE
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Oh! Temps d'espera exhaurit! :(");
      } else {
        resolve(`Yeah! Aquí tsens les teves dades de ${url}`);
      }
    }, delay);
  });
};

// // Tenim 3 estats - pending, resolved, rejected
// // Només un dels casos s'executarà: success/failed (then/catch)

// const request = fakeRequestCallback('API_url');
// request
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log('Petició Fallida');
//   });

// //Podem anar encandenant noves peticions

// const request2 = fakeRequestPromise('meva_api_1');
// request2
//   .then(() => {
//     console.log('Petició 1 resolta');
//     fakeRequestPromise('meva_api_2')
//       .then(() => {
//         console.log('Petició 2 resolta');
//       })
//       .catch(() => {
//         console.log('Petició fallida');
//       });
//   })
//   .catch(() => {
//     console.log('Peticio fallida');
//   });

// Ja no estem passant les funcions de callback a través de la pròpia crida

// Les Promises són acceptades i rebutjades AMB VALORS

const request3 = fakeRequestPromise('API_1');
request3
  .then((data) => {
    console.log('Petició 1 resolta');
    console.log(data);
    //enlloc de encadenar ara aqui el que puc és RETORNAR AQUESTA PROMESA
    return fakeRequestPromise('meva_api_2');
  })
  .then(() => {
    console.log('Petició 2 resolta');
    return fakeRequestPromise('meva_api_3');
  })
  .then(() => {
    console.log('Petició 3 resolta');
  })
  // It's "Flat"!!! I només necessitem un sol catch!
  .catch(() => {
    console.log('La petició ha fallat! ');
  });
