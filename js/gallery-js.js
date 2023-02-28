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

Fancybox.bind('[data-fancybox="gallery"]', options);
Fancybox.bind('[data-fancybox ="invitation"]', options);

const refs = {
	body: document.querySelector("[data-last-element]"),
	pointers: document.querySelectorAll(".pointer"),
};

refs.pointers.forEach((event, key, array) => {
	event.addEventListener("click", () => {
		makeModal(hotels[key]), Fancybox.show([{ src: `#${hotels[key].id}`, type: "inline" }], modOptions);;
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
