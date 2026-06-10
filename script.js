// CHANGE SUN MOON ICON + CHANGE MENU BARS COLOR + LOGO
const icon = document.getElementById("theme_icon");
const iconbars = document.getElementById("openSidebar");
const logo = document.getElementById("logo");

icon.addEventListener("click", () => {
	if (icon.src.includes("moon.svg")) {
		icon.src = "/IMG/UI/sun.svg";
		iconbars.src = "/IMG/UI/menu_bars_sun.svg";
		logo.src = "/IMG/UI/logo_sun.png";
	} else {
		icon.src = "/IMG/UI/moon.svg";
		iconbars.src = "/IMG/UI/menu_bars_moon.svg";
		logo.src = "/IMG/UI/logo_moon.png";
	}
});







// CHANGE PAGE THEME
const toggleBtn = document.getElementById("theme_icon");

toggleBtn.addEventListener("click", () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");

	if (currentTheme === "dark") {
		document.documentElement.removeAttribute("data-theme");
		localStorage.setItem("theme", "light");
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	}
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");

    icon.src = "/IMG/UI/moon.svg";
    iconbars.src = "/IMG/UI/menu_bars_moon.svg";
	logo.src = "/IMG/UI/logo_moon.png";
} else {
    document.documentElement.setAttribute("data-theme", "light");

    icon.src = "/IMG/UI/sun.svg";
    iconbars.src = "/IMG/UI/menu_bars_sun.svg";
	logo.src = "/IMG/UI/logo_sun.png";
}









// SIDEBAR
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});






// CHANGE BACKGROUND IMAGE ON NOV 18TH
// const now = new Date();

// const isNov18 = now.getDate() === 18 && now.getMonth() === 10;

// if (isNov18) {
// 	document.getElementById("main").style.backgroundImage = 'url("/IMG/18nov.jpg")';
// }








// BACK TO TOP
const button = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
});

button.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
