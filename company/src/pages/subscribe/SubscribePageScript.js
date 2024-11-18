function appendElements() {
    if (window.jQuery && window.bootstrap) {


        $(document).ready(function () {
            // Load the header from another file
            $('#header-placeholder').load('../../components/header/header.html', function (response, status, xhr) {
                if (status === "error") {
                    console.log("Error loading header:", xhr.status, xhr.statusText);
                } else {
                    console.log("Header loaded successfully!");
                }
            });
        });

        $(document).ready(function () {
            // Load the header from another file
            $('#footer-placeholder').load('../../components/footer/footer.html', function (response, status, xhr) {
                if (status === "error") {
                    console.log("Error loading header:", xhr.status, xhr.statusText);
                } else {
                    console.log("Header loaded successfully!");
                }
            });
        });


    } else {
        setTimeout(() => {
            appendElements()
        }, 100)
    }
}

appendElements()

function addValidation() {

    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')

            if (form.checkValidity())
            alert("Welcome")
        
            event.preventDefault()
        }, false)
    })


}

addValidation()


