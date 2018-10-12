document.addEventListener('DOMContentLoaded', function () {

    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
    handleDropdownButton();
});


function handleFloatingLabel() {
    //haal elementen op
    const floatingInputs = document.getElementsByClassName("js-name-input");

    //overloop alle elementen
    Array.from(floatingInputs).forEach(floatingInput => {

        //add events to single events
        floatingInput.addEventListener("blur", function (e) {
            //bepaal class name
            const className = "is-floating";
            //indien veld niet ingevuld is verwijder claas name en ander voeg een toe
            e.target.value.length > 0 ? e.target.classList.add(className) : e.target.classList.remove(className);

        });

    })
}

function handlePasswordSwitcher() {
    //haal elementen op
    const passwordToggles = document.getElementsByClassName("js-password-toggle");

    Array.from(passwordToggles).forEach(passwordToggle => {

        passwordToggle.addEventListener("change", function (e) {

            passwordInput = e.target.previousElementSibling
            e.target.checked ? passwordInput.setAttribute("type", "text") : passwordInput.setAttribute("type", "password");
            console.log(e.target.previousElementSibling);
        });
    });
}

function handleQualityRange() {

    //data slider ophalen
    let slider = document.querySelector(".js-quality-input");


    slider.addEventListener("input", function (e) {
        slider = e.target
        let holder = slider.nextElementSibling

        holder.setAttribute("data-value", slider.value);

        holder.style.transform = "translateX(" + slider.value + "%)";


    })
}



function handleDropdownButton() {
    let button = document.querySelector(".js-dropdown-headbutton")



    button.addEventListener("click", function (e) {
        //toogle container
        let container = e.target.nextElementSibling;
        container.classList.toggle("c-dropdown-buttons--visible");

        //verander icon
        e.target.firstElementChild.classList.toggle("c-button-icon--rotate")

    });

}
    // passwordInput.addEventListener("")

