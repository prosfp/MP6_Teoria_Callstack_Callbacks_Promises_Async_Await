// THE CALLBACK VERSION
// Necessitem una URL, què fem si tot ok, i que fem si falla (url, success, failure)
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Oh! Temps d'espera exhaurit! :(");
    } else {
      success(`Yeah! Aquí tens les teves dades de ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  'books.com/page1',
  function (response) {
    console.log('Ha funcionat!');
  },
  function (err) {
    console.log('Error!!!', err);
  }
);

fakeRequestCallback(
  'books.com/page1',
  function (response) {
    console.log('Ha funcionat!!!!');
    console.log(response);
    fakeRequestCallback(
      'books.com/page2',
      function (response) {
        console.log('Ha tornat a funcionar!!!!');
        console.log(response);
        fakeRequestCallback(
          'books.com/page3',
          function (response) {
            console.log('Ha tornat a funcionar (3a vegada)!!!!');
            console.log(response);
          },
          function (err) {
            console.log('ERROR (3a vegada)!!!', err);
          }
        );
      },
      function (err) {
        console.log('ERROR (2a vegada)!!!', err);
      }
    );
  },
  function (err) {
    console.log('ERROR!!!', err);
  }
);
