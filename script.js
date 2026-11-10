/* page switching */
function switchPage(pageId) {

    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.target.classList.add('active');
}

/* cursor stuff */
const cursorBox = document.getElementById('custom-cursor');
const cursorImg = document.getElementById('cursor-img');

document.addEventListener('mousemove', (e) => {
    if (cursorBox) {
        cursorBox.style.left = e.clientX + 'px';
        cursorBox.style.top = e.clientY + 'px';
    }
});

function setCursor(type) {
    if (!cursorImg) return;

    if (type === 'link') {
        cursorImg.src = 'cursors/fishingrodlink.gif';
    } else if (type === 'size1') {
        cursorImg.src = 'cursors/fishingrodsize1.gif';
    } else if (type === 'size2') {
        cursorImg.src = 'cursors/fishingrodsize2.gif';
    } else if (type === 'parallel') {
        cursorImg.src = 'cursors/fishingrodparallel.gif';
    } else if (type === 'noresponse') {
        cursorImg.src = 'cursors/fishingrodnoresponse.gif';
    } else if (type === 'move') {
        cursorImg.src = 'cursors/fishingrodmove.gif';
    } else {
        cursorImg.src = 'cursors/fishingrodbagground.gif';
    }
}

document.querySelectorAll('nav a, .nav-link, .social-item, button, input[type="submit"]').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('link'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.querySelectorAll('h1').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('size1'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.querySelectorAll('p, span, label, li').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('parallel'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.querySelectorAll('h2, h3, .logo, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('size2'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.querySelectorAll('footer').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('noresponse'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.addEventListener('mousedown', () => setCursor('move'));
document.addEventListener('mouseup', () => setCursor('default'));

document.querySelectorAll('.showcase-item, .showcase-img').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('link'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

document.querySelectorAll('.column-title').forEach(el => {
    el.addEventListener('mouseenter', () => setCursor('size2'));
    el.addEventListener('mouseleave', () => setCursor('default'));
});

/* rain */
const rainVideo = document.getElementById('simple-rain-bg');
if (rainVideo) {
  rainVideo.playbackRate = 0.4;
}