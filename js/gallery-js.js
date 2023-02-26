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

Fancybox.bind('[data-fancybox="gallery"]', options);
Fancybox.bind('[data-fancybox ="invitation"]', options);

const refs = {
	body: document.querySelector("[data-last-element]"),
	alaska: document.querySelector('[data="alaska"]'),
	rio: document.querySelector('[data="rio"]'),
    turkey: document.querySelector('[data="turkey"]'),
    indonesia: document.querySelector('[data="indonesia"]')
    
};


refs.alaska.addEventListener("click", onClick(hotels[0]));
// refs.rio.addEventListener("click", onClick(hotels[1]));
// refs.turkey.addEventListener("click", onClick(hotels[2]));
// refs.indonesia.addEventListener("click", onClick(hotels[3]));

function onClick(hotel) {
    makeModal(hotel),
	Fancybox.show([{ src: `#${hotel.id}`, type: "inline" }]);
}


function makeModal(array) {
	const { location, photo, address, description, hotelName, link, id } = array;
	refs.body.insertAdjacentHTML(
		"afterend",
		`<div id=${id} class="modal" style="display:none; min-width:800px; min-height:433px">
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
						width="350"
					/>
				</a>
				<div class="modal__descr">
					<h3>${hotelName}</h3>
					<p>${description}</p>
				</div>
			</div>
			<a class="address" href="#">
				<svg class="pointer--modal" width="32" height="32">
					<use href="./images/symbol-defs.svg#pointer"></use>
				</svg>
				${address}
			</a>
		</div>
`,
	);
}
