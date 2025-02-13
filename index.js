

$(document).ready(function () {
    var envelope = $("#envelope");
    var nextButton = $("#next-button");
    var backgroundMusic = document.getElementById("background-music");

    // Pokreni muziku čim se stranica učita
    backgroundMusic.play().catch(function (error) {
        // Ako pregledač blokira automatsko reprodukovanje, prikaži upozorenje
        console.log("Muzika nije mogla biti reprodukovana automatski. Kliknite bilo gde na stranici da biste je pokrenuli.");
    });

    // Dodajte event listener za klik na celu stranicu
    document.addEventListener("click", function () {
        backgroundMusic.play(); // Pokreni muziku nakon klika
    });
    var choiceButtons = $("#choice-buttons");
    var greeting = $("#greeting");
    var valentineQuestion = $("#valentine-question");

    // Niz poruka koje se prikazuju preko "Next" dugmeta
    var messages = [
        "Like rain to the Earth, I have fallen for you more than a million times",
        "You are the pulse that never fades within me,",
        "And the echo in my mind that makes me nervous every time.",
        "My dreams are filled with thoughts of me and you. I awake and smile.",
        "I no longer search for the stars, I look toward the horizon in your direction,",
        "Hoping to find you from afar.",
        "My candle will always burn for you,",
        "Because you are truly something special to me. 💞",
        "So"
    ];

    var currentMessageIndex = 0;

    // Otvaranje i zatvaranje koverte
    envelope.click(function () {
        if (envelope.hasClass("close")) {
            openEnvelope();
        } else {
            closeEnvelope();
        }
    });

    function openEnvelope() {
        envelope.removeClass("close").addClass("open");
        nextButton.fadeIn(); // Prikaz "Next" dugmeta
        showNextMessage(); // Prikaz prve poruke
    }

    function closeEnvelope() {
        envelope.removeClass("open").addClass("close");
        nextButton.hide(); // Sakrij "Next" dugme
        choiceButtons.hide(); // Sakrij dugmad "Yes" i "Of Course"
        greeting.text("So, hello there, handsome").show(); // Vrati originalni tekst
        valentineQuestion.text("Will you be my Valentine?").show(); // Vrati originalni tekst
        currentMessageIndex = 0; // Resetuj indeks poruka
    }

    // Funkcija za prikazivanje sledeće poruke
    function showNextMessage() {
        if (currentMessageIndex < messages.length) {
            if (currentMessageIndex === messages.length - 1) {
                // Ako je poslednja poruka, prikaži dugmad "Yes" i "Of Course"
                greeting.text("So, hello there, handsome");
                valentineQuestion.text("Will you be my Valentine?");
                nextButton.hide(); // Sakrij "Next" dugme
                choiceButtons.fadeIn(); // Prikaz dugmadi "Yes" i "Of Course"
            } else {
                // Prikaz trenutne poruke
                greeting.text(messages[currentMessageIndex]);
                valentineQuestion.text(""); // Očisti drugi red
            }
            currentMessageIndex++;
        }
    }

    // Klik na "Next" dugme
    $("#next").click(function () {
        showNextMessage();
    });

    // Klik na "Yes" dugme
    $("#yes").click(function () {
        greeting.hide(); // Sakrij pozdrav
        valentineQuestion.text("YESSS! I kinda knew you'd say that !🫢 🎉"); // Prikaz završne poruke
        choiceButtons.hide(); // Sakrij dugmad
    });

    // Klik na "Of Course" dugme
    $("#ofCourse").click(function () {
        greeting.hide(); // Sakrij pozdrav
        valentineQuestion.text("Of Course! I knewww it, you are amazing!😊 💖"); // Prikaz završne poruke
        choiceButtons.hide(); // Sakrij dugmad
    });
});