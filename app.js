const jokes = document.querySelector('#joke');
const btn = document.querySelector('button');

btn.addEventListener('click', jokeGenerator);

jokeGenerator();
async function jokeGenerator() {
	let res = await fetch('https://v2.jokeapi.dev/joke/Programming');
	let data = await res.json();

	jokes.innerHTML = `
        <p>${data.setup === undefined ? '' : data.setup}</p>
        <p>${data.joke === undefined ? data.delivery : data.joke}</p>
    `;
}
