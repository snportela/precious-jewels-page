/* scroll behavior */

function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
          const anchors = document.querySelectorAll('a[href^="#"]');
          anchors.forEach(function (anchor) {
              anchor.addEventListener('click', (event) => {
                  event.preventDefault();
                  const target = anchor.getAttribute('href').substring(1);
                  smoothScroll(target);
              });
          });
      });



/* active nav items */

const navLink = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');

let currentSection = 'section_1';

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200) {
            currentSection = section.id;
        }
    });
    navLink.forEach(navLink => {
        if(navLink.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLink.classList.add('active');
        }
    });
});


