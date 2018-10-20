document.addEventListener("DOMContentLoaded", function () {

    let button = document.querySelector('.js-save');
    let form = document.querySelector('.js-form');

    button.addEventListener('click', function (e) {
        var json = {
            "name": document.getElementById("name").value,
            "firstName": document.getElementById("firstname").value,
            "email": document.getElementById("email").value,
            "zipCode": document.getElementById("zipcode").value,
            "age": parseInt(document.getElementById("age").value),
            "isFirstTime": (document.getElementById("first_timer").value == 'on' ? true : false)
        };
        postData(json);
        form.reset();
    });

    function postData(data) {
        var url = "https://registratie.azurewebsites.net/api/v1/registrations";

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(data),
                Headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error: ', error));
    }
});