function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

function changeBg(bg,title) {
const banner=document.querySelector('banner');
const content=document.querySelectorAll('.content');
banner.style.backgroundImage = `url("../image/${bg}")`;
banner.style.backgroundsize='Conver';
banner.style.backgroundposition='center';

content.forEach(content =>{
    content.classList.remove('active');
    if(content.classList.contains(title)){
        content.classList.add('active');
       }
    });
}
