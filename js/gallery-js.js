import { hotels } from "./hotels.js";

const options = {
	contentClick: "iterateZoom",

	Images: {
		Panzoom: {
			maxScale: 1,
		},
	},
	Toolbar: {
		display: {
			left: [],
			middle: [],
			right: ["iterateZoom", "close"],
		},
	},
	Thumbs: {
		type: "none",
	},
};

const modOptions = {
	on: {
		close: () => {
			setTimeout(deleteMarkup, 1000);
		},
	},
};

const formOptions = {
	on: {
		close: () => {
			setTimeout(deleteForm, 1000);
		},
	},
};
Fancybox.bind('[data-fancybox="gallery"]', options);
Fancybox.bind('[data-fancybox ="invitation"]', options);

const refs = {
	body: document.querySelector("[data-last-element]"),
	pointers: document.querySelectorAll(".pointer"),
	loginButton: document.querySelector(".nav---btn"),
};

refs.pointers.forEach((event, key, array) => {
	event.addEventListener("click", () => {
		makeModal(hotels[key]), Fancybox.show([{ src: `#${hotels[key].id}`, type: "inline" }], modOptions);;
		makeModal(hotels[key]), Fancybox.show([{ src: `#${hotels[key].id}`, type: "inline" }], modOptions);
	});
});


function makeModal(array) {
	const { location, photo, address, description, hotelName, link, id, addressUrl } = array;
	refs.body.insertAdjacentHTML(
		"afterend",
		`<div id=${id} data-fancybox="modal" class="modal" style="display:none; min-width:800px; min-height:433px">
			<h2 class="modal__title">Welcome to '${hotelName}'</h2>
			<p class="location">
				<svg class="location-svg" width="32" height="32">
					<use href="./images/symbol-defs.svg#planet"></use>
				</svg>
				${location}
			</p>
			<div class="modal__container">
				<a href=${link} target="_blank" >
					<img
						class=""
						alt="hotel wiew"
						src=${photo}
						
					/>
				</a>
				<div class="modal__descr">
					<h3>${hotelName}</h3>
					<p>${description}</p>
				</div>
			</div>
			<a class="address" href=${addressUrl} target="_blank">
				<svg class="pointer--modal" width="32" height="32">
					<use href="./images/symbol-defs.svg#pointer"></use>
				</svg>
				${address}
			</a>
		</div>
`,
	);
}

function deleteMarkup() {
	const el = document.querySelector(".modal");
	el.parentElement.removeChild(el);
}

function deleteForm() {
	const el = document.querySelector(".form");
	el.parentElement.removeChild(el);
}

refs.loginButton.addEventListener("click", () => {
	makeForm(), Fancybox.show([{ src: "#form", type: "inline" }]);
	setTimeout(validationForm, 500)
});

function makeForm() {
	refs.body.insertAdjacentHTML(
		"afterend",
		`		
	<form class="form" id="form">
			<img src="./images/e7f30519174d8fa83955e6fcde111ddd.png" alt="logo" width="300">
			<div class="form-thumb">
			<label>
				<span class="labels">Login</span>
				<input class="form-field login" type="login" placeholder=" "/>
			</label>
			<label>
				<span class="labels ">Password</span>
				<input class="form-field password" type="password" name="password"placeholder=" "/>
			</label>
			<label class="checkbox">
				<span class="chk-lbl">do you agree with <a href="" style="
				text-underline-offset: 4px;
				color: inherit;
				margin-left: 6px;
			">License</a></span>
				<input class="chkbx" type="checkbox" name="agree" />
			</label>
			<button class="button form-button" type="submit" disabled >login</button>
		</div>
	</form>`,
	);
}

function validationForm(){
	const login = document.querySelector('.login');
	const password = document.querySelector('.password');
	const chkBox = document.querySelector('.chkbx');
	const submitBrtn = document.querySelector('.form-button');
	// console.dir(new FormData)
}