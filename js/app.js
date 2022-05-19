(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("click", (function(e) {
        let click = e.target;
        if (click.closest(`.burger`)) Classes(`header`, `toggle`, `header-active`); else Classes(`header`, `del`, `header-active`);
    }));
    function Classes(myElement, method, newClass) {
        myElement = document.querySelectorAll(`.${myElement}`);
        myElement.forEach((i => {
            "add" === method ? method = i.classList.add(newClass) : "del" === method ? method = i.classList.remove(newClass) : "toggle" === method ? i.classList.toggle(newClass) : alert("Ты Ошибся в функции классов");
        }));
    }
    mixitup(".portfolio__content");
    window["FLS"] = true;
    isWebp();
})();