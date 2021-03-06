function displayEndGame(level) {
    localStorage.setItem("instructionsOpen", false);
    
    $("#game-playable-area").html(
        `<h4 class="flex-item-center text-justify-center">GAME OVER!</h4>
    <h4 class="flex-item-center text-justify-center">You reached level: ${level}</h4>
    <p class="flex-item-center">Send the results to yourself. Enter your email below:</p>
    <form class="flex-container-row" onsubmit="return sendMail(this, ${level});">
        <input class="bg-colour-main flex-item-center flex-item-grow" type="email" id="userEmail" name="userEmail" required>
        <button type="submit">Send</button>
    </form>
    <p class="flex-item-center">Click on RESTART to start a new game:</p>`
    );

    $("#game-footer").addClass("flex-justify-center");

    $("#game-footer").html(
        `<button onclick="gamePlay(1)">Restart  <i class="flex-item fas fa-redo"></i></button>`
    );

    $("#simon-title").addClass("cursor-hover").click(function () {
        location.reload();
    });
}

// Sending Email example from Code Institue Full Stack Course - Interactive FrontEnd Module https://codeinstitute.net/
function sendMail(contactForm, level) {
    $("form button").html("Sending...");

    emailjs.send("service_wofndpb", "template_8yl86a3", {
            "level": level,
            "form_email": contactForm.userEmail.value
        })
        .then(
            function() {
                $("form button").html("Sent!");
            },
            function(error) {
                alert("Email could not be sent. Error:" + error);
            }
        );

    return false;
}