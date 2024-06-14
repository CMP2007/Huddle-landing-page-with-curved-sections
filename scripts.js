const input = document.querySelector(".inputText");
const alertText = document.querySelector(".alert");
const suscribe = document.querySelector(".suscribe");

suscribe.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = input.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
        alertText.classList.remove("hidden");
        return false;
    } else {
        // Enviar formulario o realizar otra acción
        alertText.classList.add("hidden");
    }
});

/********************************* email validation ********************************* */
const top1 = document.getElementById("top_1");
const bottom1 = document.getElementById("bottom_1");
const top2 = document.getElementById("top_2");
const bottom2 = document.getElementById("bottom_2");
const footerTop = document.getElementById("footerTop");

window.addEventListener("resize", checkWindow)
checkWindow()



/***************************** change of rounded edges ***************************** */
function checkWindow() {
    const windowWid = window.innerWidth;    
    if (windowWid > 650) {
        console.log(windowWid);
        top1.src ="./images/bg-section-top-desktop-1.svg";
        bottom1.src ="./images/bg-section-bottom-desktop-1.svg";
        top2.src ="./images/bg-section-top-desktop-2.svg";
        bottom2.src ="./images/bg-section-bottom-desktop-2.svg";
        footerTop.src = "./images/bg-footer-top-desktop.svg";
    }
    else{
        top1.src ="./images/bg-section-top-mobile-1.svg";
        bottom1.src ="./images/bg-section-bottom-mobile-1.svg";
        top2.src ="./images/bg-section-top-mobile-2.svg";
        bottom2.src ="./images/bg-section-bottom-mobile-2.svg";
        footerTop.src = "./images/bg-footer-top-mobile.svg";
    }
}