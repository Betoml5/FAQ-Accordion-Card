const $sections = document.getElementsByClassName('section');
const $sectionText = document.getElementsByClassName('section__text');
const $images = document.getElementsByClassName('image');
const $section_h3 = document.getElementsByClassName('section__container-h3');




for(let i = 0; i < $sections.length; i++){
    $sections[i].addEventListener('click', () => {
        $sectionText[i].classList.toggle('hide')
        $images[i].classList.toggle('rotate')
        $section_h3[i].classList.toggle('strong');
    })
}

// $sections.addEventListener('click', () => {
//    console.log($sections);
// })