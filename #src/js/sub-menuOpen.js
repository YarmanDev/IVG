var myData = localStorage['objectToPass'];
localStorage.removeItem('objectToPass');

let buttons = document.querySelectorAll('.buttons-gallery__btn');
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    if (`.${myData}` == element.getAttribute("data-filter")) {
        let mixer = mixitup('.home-gallery__inner', {
            load: {
                filter: `.${myData}`
            }
        });
    }
}

