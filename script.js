// ===== Model listesi =====
// Yeni model eklemek için bu listeye bir satır eklemeniz yeterli.
// image: assets/cars klasöründeki görsel, link: Instagram paylaşımı,
// status: "soon" → COMING SOON damgası, "stock" → Stokta etiketi
const MODELS = [
    { name: "Nissan Silvia S14 GT-Spec V1",       brand: "Mortal Model",          image: "assets/cars/car-1.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcRl43Xxksm/", status: "soon" },
    { name: "Ferrari Daytona SP3",                brand: "SUHE",                  image: "assets/cars/car-2.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcKMHKlIihq/", status: "soon" },
    { name: "Nissan Silvia S14 GT-Spec V1 Yellow", brand: "Mortal Model",         image: "assets/cars/car-3.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcKKOKjINL7/", status: "soon" },
    { name: "BMW F31 M3 CS Touring White",        brand: "Mortal Model",          image: "assets/cars/car-4.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcG3WH3hwJ3/", status: "soon" },
    { name: "Nissan Silvia S14 GT-Spec V2 Green Carbon", brand: "Mortal Model",   image: "assets/cars/car-5.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGynEtS_xp/", status: "soon" },
    { name: "Ferrari 488 Pista",                  brand: "Rotating Wheel × Sole 64", image: "assets/cars/car-6.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGxatpIFPu/", status: "soon" },
    { name: "BMW F31 M3 CS Touring Yellow",       brand: "Mortal Model",          image: "assets/cars/car-7.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGwUsvIwad/", status: "soon" },
    { name: "Mitsubishi Lancer Evolution IX GSR", brand: "IHCM",                  image: "assets/cars/car-8.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/Db_ofAURTqN/", status: "soon" },
    { name: "Ferrari F40 GTE",                    brand: "DMH",                   image: "assets/cars/car-9.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DbyE7mFo9BK/", status: "soon" }
];

// ===== Galeri (sadece görüntüleme) =====
// Koleksiyondan kareler. Yeni görsel eklemek için assets/gallery klasörüne koyup buraya bir satır ekleyin.
const GALLERY = [
    { name: "Alfa Romeo Giulia GTAm",                    brand: "Alfa Romeo Serisi", image: "assets/gallery/g-01.jpg", link: "https://www.instagram.com/p/DZbUXvCiHWE/" },
    { name: "Ferrari LaFerrari",                         brand: "Demon King",        image: "assets/gallery/g-02.jpg", link: "https://www.instagram.com/p/DZ2dmCvCEqq/" },
    { name: "Nissan Skyline GT-R R34 V-Spec II Digital Camo", brand: "Mini GT",      image: "assets/gallery/g-03.jpg", link: "https://www.instagram.com/p/DZRNPP_iCHd/" },
    { name: "BMW M3 E46 GTR Most Wanted Edition",        brand: "DCM Model",         image: "assets/gallery/g-04.jpg", link: "https://www.instagram.com/p/DZk137RiI0Z/" },
    { name: "Toyota Supra Top Secret 2001",              brand: "BMC",               image: "assets/gallery/g-05.jpg", link: "https://www.instagram.com/p/DZim0uLCBeX/" },
    { name: "Mitsubishi Lancer Evolution IX Widebody",   brand: "Fineclassically",   image: "assets/gallery/g-06.jpg", link: "https://www.instagram.com/p/DZLQwZbEbIK/" },
    { name: "Nissan Skyline GT-R R34 Duo Edition",       brand: "Mortal Model",      image: "assets/gallery/g-07.jpg", link: "https://www.instagram.com/p/DZcayGrCOfD/" },
    { name: "Ford Ranger Raptor Baja 1000",              brand: "MK Miniatures",     image: "assets/gallery/g-08.jpg", link: "https://www.instagram.com/p/DZThpXHCA1l/" },
    { name: "Tofaş Doğan SLX Gümüş Gri",                 brand: "Oto64",             image: "assets/gallery/g-09.jpg", link: "https://www.instagram.com/p/Dbtu9Q7iDnT/" },
    { name: "Honda Civic EG4 Pandem White Edition",      brand: "YM Model",          image: "assets/gallery/g-10.jpg", link: "https://www.instagram.com/p/DZKdEO2CC9w/" },
    { name: "Nissan Skyline GT-R R34 Gulf",              brand: "Demon King",        image: "assets/gallery/g-11.jpg", link: "https://www.instagram.com/p/DZKqU57iDcR/" },
    { name: "Tofaş Doğan SLX Bordo",                     brand: "Oto64",             image: "assets/gallery/g-12.jpg", link: "https://www.instagram.com/p/Dbtuvu3CEbh/" },
    { name: "Ferrari F8 Tributo Rosso Corsa",            brand: "Hone Model",        image: "assets/gallery/g-13.jpg", link: "https://www.instagram.com/p/DZnRiB1iNpN/" },
    { name: "BMW 2002 Alpina Jägermeister Edition",      brand: "YS Model",          image: "assets/gallery/g-14.jpg", link: "https://www.instagram.com/p/DZKeVSnCPeH/" },
    { name: "Ferrari F40 Chinese Edition",               brand: "Demon King",        image: "assets/gallery/g-15.jpg", link: "https://www.instagram.com/p/DbZLnjoCNLX/" }
];

const $ = (sel) => document.querySelector(sel);

// ===== Mobil menü =====
const menuToggle = $("#menuToggle");
const nav = $("#nav");
menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    })
);

// ===== Lightbox =====
const lightbox = $("#lightbox");
let lightboxList = [];
let lightboxIndex = 0;

function showLightboxItem() {
    const model = lightboxList[lightboxIndex];
    $("#lightboxImg").src = model.image;
    $("#lightboxImg").alt = model.name;
    $("#lightboxBrand").textContent = model.brand;
    $("#lightboxCaption").textContent = model.name;
    $("#lightboxLink").href = model.link;
    $("#lightboxLink").textContent = model.link.includes("/reel/") ? "Videoyu izle" : "Instagram'da gör";
    $("#lightboxCount").textContent = `${lightboxIndex + 1} / ${lightboxList.length}`;
}

function openLightbox(model, list = [model]) {
    lightboxList = list;
    lightboxIndex = Math.max(0, list.indexOf(model));
    lightbox.classList.toggle("single", list.length < 2);
    showLightboxItem();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lightboxClose").focus();
}

function stepLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxList.length) % lightboxList.length;
    showLightboxItem();
}
$("#lightboxPrev").addEventListener("click", () => stepLightbox(-1));
$("#lightboxNext").addEventListener("click", () => stepLightbox(1));
document.addEventListener("keydown", (e) => {
    if (lightbox.hidden || lightboxList.length < 2) return;
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
});
function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
}
$("#lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

// ===== Öne çıkan vitrin (otomatik dönen 3D slider) =====
const stage = $("#showcaseStage");
const dots = $("#showcaseDots");
let current = 0;
let timer;

MODELS.forEach((model, i) => {
    const slide = document.createElement("div");
    slide.className = "showcase-slide";
    slide.innerHTML = `
        <img src="${model.image}" alt="${model.name}" draggable="false" ${i > 2 ? 'loading="lazy"' : ""}>
        ${model.status === "soon" ? '<span class="stamp-big">COMING SOON</span>' : ""}`;
    slide.addEventListener("click", () => (i === current ? openLightbox(model, MODELS) : goTo(i)));
    stage.appendChild(slide);

    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `${i + 1}. model`);
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
});

function goTo(index) {
    const n = MODELS.length;
    current = (index + n) % n;
    stage.querySelectorAll(".showcase-slide").forEach((slide, i) => {
        let pos = i - current;
        if (pos > n / 2) pos -= n;
        if (pos < -n / 2) pos += n;
        slide.dataset.pos = Math.abs(pos) <= 2 ? pos : "hidden";
    });
    dots.querySelectorAll("button").forEach((d, i) => d.classList.toggle("active", i === current));
    $("#showcaseBrand").textContent = MODELS[current].brand;
    $("#showcaseName").textContent = MODELS[current].name;
    restartTimer();
}

function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4000);
}

$("#showcasePrev").addEventListener("click", () => goTo(current - 1));
$("#showcaseNext").addEventListener("click", () => goTo(current + 1));
$("#showcase").addEventListener("mouseenter", () => clearInterval(timer));
$("#showcase").addEventListener("mouseleave", restartTimer);

// Fare veya parmakla tutup kaydırma
// Sürükleme mesafesine göre birden fazla model atlanabilir.
const SLIDE_STEP = 120; // bir model atlamak için gereken piksel
let dragStartX = null;
let dragX = 0;
let dragged = false;

stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStartX = e.clientX;
    dragX = 0;
    dragged = false;
    clearInterval(timer);
    stage.setPointerCapture(e.pointerId);
    stage.classList.add("dragging");
});

stage.addEventListener("pointermove", (e) => {
    if (dragStartX === null) return;
    dragX = e.clientX - dragStartX;
    if (Math.abs(dragX) > 6) dragged = true;
    // Sürüklerken vitrin parmağı/fareyi takip eder
    stage.style.setProperty("--drag", `${dragX * 0.35}px`);
    // Uzun sürüklemede modeller anlık değişir
    if (Math.abs(dragX) >= SLIDE_STEP) {
        const dir = dragX < 0 ? 1 : -1;
        goTo(current + dir);
        clearInterval(timer);
        dragStartX = e.clientX;
        dragX = 0;
        stage.style.setProperty("--drag", "0px");
    }
});

function endDrag() {
    if (dragStartX === null) return;
    if (Math.abs(dragX) > 40) goTo(current + (dragX < 0 ? 1 : -1));
    dragStartX = null;
    dragX = 0;
    stage.style.setProperty("--drag", "0px");
    stage.classList.remove("dragging");
    if (!$("#showcase").matches(":hover")) restartTimer();
}
stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);

// Sürükleme bittiğinde tıklama olarak sayılmasın (lightbox açılmasın)
stage.addEventListener("click", (e) => {
    if (dragged) {
        e.stopPropagation();
        e.preventDefault();
        dragged = false;
    }
}, true);

// Klavye ile ok tuşları
$("#showcase").setAttribute("tabindex", "0");
$("#showcase").addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
});

goTo(0);

// ===== Yakında gelecek modeller rayı =====
const rail = $("#rail");
MODELS.forEach((model) => {
    const card = document.createElement("article");
    card.className = "model-card reveal";
    card.innerHTML = `
        <div class="model-media">
            <img src="${model.image}" alt="${model.name}" loading="lazy">
            ${model.status === "soon" ? '<span class="stamp">COMING SOON</span>' : ""}
        </div>
        <div class="model-body">
            <div class="model-brand">${model.brand}</div>
            <h3 class="model-name">${model.name}</h3>
            <div class="model-meta">
                <span class="tag">1:64</span>
                <a class="model-link" href="${model.link}" target="_blank" rel="noopener">İncele →</a>
            </div>
        </div>`;
    card.querySelector(".model-media").addEventListener("click", () => openLightbox(model, MODELS));
    rail.appendChild(card);
});

document.querySelectorAll("[data-rail]").forEach((btn) =>
    btn.addEventListener("click", () => {
        const step = rail.querySelector(".model-card").offsetWidth + 22;
        rail.scrollBy({ left: btn.dataset.rail === "next" ? step : -step });
    })
);

// ===== Galeri =====
// Tıklayınca büyük görsel açılır, oklarla galeride gezilir.
const gallery = $("#gallery");
GALLERY.forEach((model) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "gallery-item reveal";
    item.setAttribute("aria-label", `${model.name} görselini büyüt`);
    item.innerHTML = `
        <img src="${model.image}" alt="${model.name}" loading="lazy">
        <span class="gallery-caption">
            <small>${model.brand}</small>
            <strong>${model.name}</strong>
        </span>
        <span class="zoom" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M10 3a7 7 0 0 1 5.6 11.2l5.1 5.1-1.4 1.4-5.1-5.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm1 2v2h2v2h-2v2H9v-2H7V9h2V7h2z"/></svg></span>`;
    item.addEventListener("click", () => openLightbox(model, GALLERY));
    gallery.appendChild(item);
});

// ===== Kaydırınca belirme animasyonu =====
document.querySelectorAll(".feature, .cta-card, .section-head").forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    }),
    { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

$("#year").textContent = new Date().getFullYear();
