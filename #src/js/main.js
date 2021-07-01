@@include('mobileCheck.js');
@@include('mixitup.js');
@@include('sub-menuOpen.js');




let mixer = mixitup('.home-gallery__inner', {
    load: {
        filter: '.stairs'
    }
});




let subList = document.querySelectorAll(".menu__sub-list");


for (let index = 0; index < subList.length; index++) {
    const element = subList[index];
    element.addEventListener('click', function (event) {
        let target = event.target;
        let myData = target.id;
        localStorage.setItem('objectToPass', myData);
    });
}


