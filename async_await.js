// //Promise
// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// // Però pel que fa a l'encadenament realment canvia molt la manera i la facilitat amb com ho podem expressar (a més de poder gestionar els errors
// // amb un sol "catch")

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('violet', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000));

// Vale... tenim doncs el següent esquema general de les promeses:
// PROMISE CREATOR
// function getData(){
//     return new Promise(...)
// }

// //PROMISE RECEIVER
// getData()
//     .then(result=>{...})
//     .catch(error => {...})

// I si poguéssim tractar això sense haver d'encadenar .then, com si es tractès d'una funció més?

// const result = getData(); // Això és sincron!!!

///////////////////////// ASYNC - AWAIT ////////////////////////

// Async és una mà de pintura sobre les promeses, ens ajuda a "netejar" encara una mica més el procés asíncron

// 1. Les funcions "Async" sempre retornen "Promise"
// 2. Quan la funció retorna un valor, la promesa es resoldrà ("resolve") amb aquest valor
// 3. Si en canvi llança una excepció (throw exception), la promesa serà rebutjada ("rejected")

// async function hello() {
//   //throw new Error('Meu error');
//   throw 'Error';
// }

// hello()
//   .then((data) => {
//     console.log('PROMISE RESOLTA AMB DATA:', data);
//   })
//   .catch((err) => {
//     console.log('PROMISE REBUTJADA');
//     console.log(err);
//   });

// Exemple més real

// const login = async (username, password) => {
//   if (!username || !password) throw 'Manquen credencials';
//   if (password === '1234') return 'Benvingut';
//   throw 'invalid password';
// };

// login('pablo', '1234')
//   .then((msg) => {
//     console.log('Logged in');
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log('Login Failed');
//     console.log(err);
//   });

// Vale, però això no és res asíncron en realitat.
// Anem a veure com gestionem una funció realment async.
// --> AWAIT

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

//COM HO FEIEM
//   delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('violet', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))

// //COM HO FEM AMB AWAIT?

// async function rainbow() {
//   await delayedColorChange('red', 1000);
//   await delayedColorChange('yellow', 1000);
//   await delayedColorChange('orange', 1000);
//   console.log('Hi!');
//   await delayedColorChange('blue', 1000);
//   await delayedColorChange('violet', 1000);
//   return 'End of Rainbow';
// }

// //rainbow();

// // No m'he de preocupar ni de fer diferents callbacks,
// // ni de encadenar thens, retornar promeses...

// rainbow().then((data) => console.log(data));

// // Es poden encapsular diferents funcions sota una sola promesa:

// async function printRainbow() {
//   await rainbow();
//   await rainbow();
//   console.log('End of Rainbows');
// }

// printRainbow();

// Tornem a l'exemple d'una petició "fake" que triga un temps random retornar

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Oh! Temps d'espera exhaurit! :(");
      } else {
        resolve(`Yeah! Aquí tens les teves dades de ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest('/page1');
    console.log(data1);
    let data2 = await fakeRequest('/page2');
    console.log(data2);
  } catch (e) {
    console.log('ERRROR!');
    console.log(e);
  }
}

makeTwoRequests();
// Molt més net, fàcil de seguir, lògica
// IMPORTANT
// 1. async i await s'ha d'utilitzar conjuntament
// 2. async/await només afecta al receptor, com gestionem el retorn de la promesa.
// 3. Pots fer "await" a qualssevol funció que retorna una Promesa (fetch)
// 4. Qualssevol funció es pot converitr a async.
// 5. Totes les funcions async, immediatament passarà a retornar una promesa.
// 6. Error handling amb try/catch
