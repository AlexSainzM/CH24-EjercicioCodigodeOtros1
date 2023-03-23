const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//ERROR
//Es necesario hacer correcciones, para que todos los elementos busquen a la clase con un ".", porque algunos buscaban un id. 
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//ERROR
//Si hay un await la funcion debe ser asincrona, es necesario agregar "async"

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //ERROR: Ese console.log, ahí no va.
  //console.log(data);
  
  
  //ERROR: Faltaba el await que devuelve la promesa y parsearla a un JSON.
  const data = await response.json();

  //ERROR: Es necesario utilizar ` y no '

  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;

  //Falta agregar una funcion catch, en caso de que haya problemas. 

}
 

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);