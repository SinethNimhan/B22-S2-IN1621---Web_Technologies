document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('book').addEventListener('submit', function (event) {
        event.preventDefault(); 

        if (!validateForm()) {
            return;
        }

        var formData = new FormData(this);

        fetch('backend/book_a_table.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    document.getElementById('thank-you-message').classList.remove('hidden');
                    document.getElementById('error-message').classList.add('hidden');
                    resetForm();
                } else {
                    document.getElementById('error-message').classList.remove('hidden');
                    document.getElementById('thank-you-message').classList.add('hidden');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('error-message').classList.remove('hidden');
                document.getElementById('thank-you-message').classList.add('hidden');
            });
    });
});

function validateForm() {
    var company = document.getElementById("company").value;
    var contactName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var count = document.getElementById("count").value;
    var message = document.getElementById("text").value;

    if (
        company === "" ||
        contactName === "" ||
        email === "" ||
        count === "" ||
        text === ""
    ) {
        alert("All fields must be filled out");
        return false;
    }

 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    return true; 


function resetForm() {
    document.getElementById("book").reset();
}
}
