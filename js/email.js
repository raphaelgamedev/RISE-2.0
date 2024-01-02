emailjs.init("Public Key");

    function sendEmail() {
        emailjs.send("Email Services => Service ID", "Email Templates => Settings => Template ID ", {
            fullName: document.getElementById("fullName").value,
            emailAddress: document.getElementById("emailAddress").value,
            mobileNumber: document.getElementById("mobileNumber").value,
            emailSubject: document.getElementById("emailSubject").value,
            message: document.getElementById("message").value
        })
        .then(
            function(response) {
                console.log("E-mail enviado com sucesso:", response);
                alert("E-mail enviado com sucesso!");
            },
            function(error) {
                console.error("Erro ao enviar e-mail:", error);
                alert("Erro ao enviar e-mail. Por favor, tente novamente.");
            }
        );
    }