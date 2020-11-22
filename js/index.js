const $sections = document.getElementsByClassName('section');
const $sectionText = document.getElementsByClassName('section__text');
const $images = document.getElementsByClassName('image');




for(let i = 0; i < $sections.length; i++){
    $sections[i].addEventListener('click', () => {
        $sectionText[i].classList.toggle('hide')
        $images[i].classList.toggle('rotate')
    })
}

// $sections.addEventListener('click', () => {
//    console.log($sections);
// })