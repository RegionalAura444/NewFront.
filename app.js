document.addEventListener('DOMContentLoaded', () => {

    //////////////////////////////
    ////Terminal Text Effect//////
    //////////////////////////////
    consoleText(['Reliability.', 'Competence.','Innovation.'], 'text', ['#ff4c0c']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];

        let visible = true;
        let con = document.getElementById('console');
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        let target = document.getElementById(id);

        target.setAttribute('style', 'color:' + colors[0]);
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);

                window.setTimeout(function () {
                    let usedColor = colors.shift();
                    colors.push(usedColor);
                    let usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0]);
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 120);

        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden';
                visible = false;
            } else {
                con.className = 'console-underscore';

                visible = true;
            }
        }, 400);
    }

    ////////////////////////////////////
    ////NAV animation///////////////////
    ////////////////////////////////////
    const navSlide =()=>{
        const burger =document.querySelector(".hamburger");
        const nav =document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll('.nav-links li')

    
        burger.addEventListener("click",() =>{
            //Nav toggle
            nav.classList.toggle('nav-active');
            //Animate Links
            navLinks.forEach((link, index) =>{
                if(link.style.animation){
                    link.style.animation = '';
                } else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5 }s`;
                }
            });
            //Animate Burger
            burger.classList.toggle('toggle');
        });

       
    }
    navSlide();

    ////////////////////////////////////
    ////Copyright&Date Footer Script////
    ////////////////////////////////////
    const thisYear = new Date();

    let footerYear = thisYear.getFullYear();
    let fullYear = footerYear.toString();

    const footerSpan = document.getElementById('copyright');
    let copyrightSpan = `<p>Copyright</p><span>&copy NewFront ${ fullYear }</span>`;

    footerSpan.innerHTML = copyrightSpan;
});