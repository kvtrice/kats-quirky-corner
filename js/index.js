const getJoke = async () => {
	const response = await fetch("https://icanhazdadjoke.com/", {
		headers: {
			Accept: "application/json",
		},
	});
	const data = await response.json();
	document.querySelector(
		".joke__response"
	).innerHTML = `<p>${data.joke}</p>`;
};
