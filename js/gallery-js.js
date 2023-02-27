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
		destroy: () => {
			console.log(document.querySelectorAll(".modal"))
		},
	  },

	
};

Fancybox.bind('[data-fancybox="gallery"]', options);
Fancybox.bind('[data-fancybox ="invitation"]', options);

const refs = {
	body: document.querySelector("[data-last-element]"),
	alaska: document.querySelector('[data="alaska"]'),
	rio: document.querySelector('[data="rio"]'),
	turkey: document.querySelector('[data="turkey"]'),
	indonesia: document.querySelector('[data="indonesia"]'),
};

refs.alaska.addEventListener("click", onAlaskaClick);
refs.rio.addEventListener("click", onRioClick);
refs.turkey.addEventListener("click", onTurkeyClick);
refs.indonesia.addEventListener("click", onIndoClick);

function onAlaskaClick(event) {
	makeModal(hotels[0]), Fancybox.show([{ src: `#${hotels[0].id}`,type: "inline"}], modOptions );
	
}

function onRioClick(event) {
	makeModal(hotels[1]), Fancybox.show([{ src: `#${hotels[1].id}`, modOptions }]);
}

function onTurkeyClick(event) {
	makeModal(hotels[2]), Fancybox.show([{ src: `#${hotels[2].id}`, modOptions }]);
}

function onIndoClick(event) {
	
	// modal.innerHTML = "";
	makeModal(hotels[3]), Fancybox.show([{ src: `#${hotels[3].id}`, modOptions }]);
}

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

function callback (){

}