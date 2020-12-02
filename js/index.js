const $sections = document.getElementsByClassName('main__questions-item');
const $sectionText = document.getElementsByClassName('main__question-item-hidden');
const $images = document.getElementsByClassName('arrowDown-image');
const $section_h3 = document.getElementsByClassName('main-question-item-h3');




for(let i = 0; i < $sections.length; i++){
    $sections[i].addEventListener('click', () => {
        $sectionText[i].classList.toggle('main__question-item-show')
        $images[i].classList.toggle('rotate')
        $section_h3[i].classList.toggle('strong');
    })
}

// $sections.addEventListener('click', () => {
//    console.log($sections);
// })