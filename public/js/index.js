const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const select1 = document.getElementById("docencia");

btn1.addEventListener("click", () =>
	window.scrollTo({
		top: 700,
		behavior: "smooth",
	})
);

btn2.addEventListener("click", () =>
	window.scrollTo({
		top: 1460,
		behavior: "smooth",
	})
);

btn3.addEventListener("click", () =>
	window.scrollTo({
		top: 3060,
		behavior: "smooth",
	})
);

btn4.addEventListener("click", () =>
	window.scrollTo({
		top: 3860,
		behavior: "smooth",
	})
);

select1.addEventListener("change", (event) => {
	getvaluegrade(event.target.value);
});

let inicial = [
	{ text: "3 añitos", value: 3, selected: true },
	{ text: "4 añitos", value: 4 },
	{ text: "5 añitos", value: 5 },
];
let primaria = [
	{ text: "1°", value: 1, selected: true },
	{ text: "2°", value: 2 },
	{ text: "3°", value: 3 },
	{ text: "4°", value: 4 },
	{ text: "5°", value: 5 },
	{ text: "6°", value: 6 },
];
let secundaria = [
	{ text: "1 año", value: 1, selected: true },
	{ text: "2 año", value: 2 },
	{ text: "3 año", value: 3 },
	{ text: "4 año", value: 4 },
	{ text: "5 año", value: 5 },
];

let optionList = document.getElementById("select-grado").options;
let optionvalue = document.getElementById("select-grado");

function getvaluegrade(enseñanza) {
	while (optionList.length > 0) {
		optionList.remove(0);
	}
	switch (enseñanza) {
		case "1":
			inicial.forEach((option) =>
				optionList.add(new Option(option.text, option.value, option.selected))
			);
			break;
		case "2":
			primaria.forEach((option) =>
				optionList.add(new Option(option.text, option.value, option.selected))
			);
			break;

		case "3":
			secundaria.forEach((option) =>
				optionList.add(new Option(option.text, option.value, option.selected))
			);
			break;
		default:
			optionList.add(new Option("Grado Cursando", "Grado Cursando", true));
			break;
	}
}

/* optionvalue.addEventListener("change", (event) => {
	console.log(event.target.value);
}); */

let clickInscribirme = document.getElementById("inscribirme");
let MensajeTextarea = document.getElementById("floatingTextarea");
let NombreInput = document.getElementById("nombres");
let CorreoInput = document.getElementById("email");

clickInscribirme.addEventListener("click", () => {
	let textopost = {
		nombres: NombreInput.value,
		email: CorreoInput.value,
		docenciadeenseñanza: select1.value,
		gradocursando: optionvalue.value,
		mensaje: MensajeTextarea.value,
	};

	Swal.fire({
		title: "Enviado!!! Muchas Gracias",
		icon: "success",
		showClass: {
			popup: "animate__animated animate__fadeInDown",
		},
		hideClass: {
			popup: "animate__animated animate__fadeOutUp",
		},
	});
	console.log(textopost);
});
