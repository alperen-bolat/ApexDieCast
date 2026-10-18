// ===== Model listesi =====
// Yeni model eklemek için bu listeye bir satır eklemeniz yeterli.
// image: assets/cars klasöründeki görsel, link: Instagram paylaşımı,
// status: "soon" → COMING SOON damgası, "stock" → Stokta etiketi
const MODELS = [
    { name: "Nissan Silvia S14 Widebody", brand: "Silvia Series", image: "assets/cars/car-1.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcRl43Xxksm/", status: "soon" },
    { name: "Ferrari Daytona SP3",         brand: "Ferrari",       image: "assets/cars/car-2.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcKMHKlIihq/", status: "soon" },
    { name: "Nissan Silvia S14 Yellow",    brand: "Silvia Series", image: "assets/cars/car-3.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcKKOKjINL7/", status: "soon" },
    { name: "BMW M3 CS (F80) White",       brand: "BMW M",         image: "assets/cars/car-4.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcG3WH3hwJ3/", status: "soon" },
    { name: "Nissan Silvia Green Carbon",  brand: "Silvia Series", image: "assets/cars/car-5.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGynEtS_xp/", status: "soon" },
    { name: "Ferrari 488 Pista",           brand: "Sole 64",       image: "assets/cars/car-6.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGxatpIFPu/", status: "soon" },
    { name: "BMW M3 CS (F80) Yellow",      brand: "BMW M",         image: "assets/cars/car-7.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DcGwUsvIwad/", status: "soon" },
    { name: "Mitsubishi Lancer Evolution", brand: "Mitsubishi",    image: "assets/cars/car-8.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/Db_ofAURTqN/", status: "soon" },
    { name: "Ferrari F40",                 brand: "DMH",           image: "assets/cars/car-9.jpg", link: "https://www.instagram.com/apexdiecasttr/reel/DbyE7mFo9BK/", status: "soon" }
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
function openLightbox(model) {
    $("#lightboxImg").src = model.image;
    $("#lightboxImg").alt = model.name;
    $("#lightboxCaption").textContent = model.name;
    $("#lightboxLink").href = model.link;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lightboxClose").focus();
}
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
    slide.addEventListener("click", () => (i === current ? openLightbox(model) : goTo(i)));
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
    card.querySelector(".model-media").addEventListener("click", () => openLightbox(model));
    rail.appendChild(card);
});

document.querySelectorAll("[data-rail]").forEach((btn) =>
    btn.addEventListener("click", () => {
        const step = rail.querySelector(".model-card").offsetWidth + 22;
        rail.scrollBy({ left: btn.dataset.rail === "next" ? step : -step });
    })
);

// ===== Galeri =====
const gallery = $("#gallery");
MODELS.forEach((model) => {
    const item = document.createElement("a");
    item.className = "gallery-item reveal";
    item.href = model.link;
    item.target = "_blank";
    item.rel = "noopener";
    item.setAttribute("aria-label", `${model.name} videosunu Instagram'da izle`);
    item.innerHTML = `
        <img src="${model.image}" alt="${model.name}" loading="lazy">
        <span class="play"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span>`;
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
