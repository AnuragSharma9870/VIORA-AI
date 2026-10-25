/* ==========================================
   VIORA RESCUE AI
   FRONTEND DEMO LOGIC
========================================== */


/* ================= SOS ================= */

function sendSOS() {

    const modal = document.getElementById("sosModal");

    modal.classList.add("active");

    const text = document.getElementById("sosText");

    text.innerHTML =
        "VIORA has activated emergency mode. " +
        "Your location and emergency information " +
        "are being prepared for response.";

}


/* ================= CLOSE SOS ================= */

function closeSOS() {

    document
        .getElementById("sosModal")
        .classList.remove("active");

}


/* ================= LOCATION ================= */

function getLocation() {

    if (!navigator.geolocation) {

        alert(
            "Location services are not supported by this browser."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            alert(
                "VIORA Location Detected!\n\n" +
                "Latitude: " + latitude +
                "\nLongitude: " + longitude
            );

        },

        function(error) {

            alert(
                "VIORA could not access your location. " +
                "Please allow location permission."
            );

        }

    );

}


/* ================= OPEN AI ================= */

function openAI() {

    document
        .querySelector(".ai-section")
        .scrollIntoView({
            behavior: "smooth"
        });


    setTimeout(function() {

        document
            .getElementById("chatInput")
            .focus();

    }, 800);

}


/* ================= ENTER KEY ================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


/* ================= CHAT ================= */

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const messages =
        document.getElementById("chatMessages");


    const text =
        input.value.trim();


    if (text === "") {
        return;
    }


    /* USER MESSAGE */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "message user-message";

    userMessage.innerText =
        text;

    messages.appendChild(
        userMessage
    );


    input.value = "";


    messages.scrollTop =
        messages.scrollHeight;


    /* AI RESPONSE */

    setTimeout(function() {

        const response =
            getAIResponse(text);


        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "message ai-message";

        aiMessage.innerHTML =
            response;


        messages.appendChild(
            aiMessage
        );


        messages.scrollTop =
            messages.scrollHeight;

    }, 700);

}


/* ================= DEMO AI RESPONSE ================= */

function getAIResponse(text) {

    const message =
        text.toLowerCase();


    if (
        message.includes("flood") ||
        message.includes("water")
    ) {

        return `
        🚨 <strong>Flood Emergency Detected</strong><br><br>

        1. Move to higher ground immediately.<br>
        2. Avoid walking or driving through flood water.<br>
        3. Keep your phone charged.<br>
        4. Carry essential medicines and documents.<br>
        5. Use VIORA's nearby shelter feature.<br><br>

        <strong>VIORA Recommendation:</strong>
        Activate SOS if you are in immediate danger.
        `;

    }


    if (
        message.includes("fire") ||
        message.includes("burning")
    ) {

        return `
        🔥 <strong>Fire Emergency Detected</strong><br><br>

        1. Leave the building immediately.<br>
        2. Do not use elevators.<br>
        3. Stay low if there is smoke.<br>
        4. Do not return for belongings.<br>
        5. Contact emergency services.<br><br>

        <strong>VIORA:</strong>
        Activate SOS if you cannot safely exit.
        `;

    }


    if (
        message.includes("earthquake") ||
        message.includes("earthquake")
    ) {

        return `
        🌎 <strong>Earthquake Emergency Detected</strong><br><br>

        Follow the <strong>Drop, Cover and Hold On</strong> procedure.<br><br>

        Stay away from windows and unstable structures.
        After the shaking stops, move carefully to a
        safe open area.
        `;

    }


    if (
        message.includes("medicine") ||
        message.includes("medical") ||
        message.includes("hospital")
    ) {

        return `
        🏥 <strong>Medical Assistance</strong><br><br>

        VIORA recommends locating the nearest hospital
        or emergency medical facility.<br><br>

        Use the <strong>Nearby Emergency Resources</strong>
        feature to identify available medical assistance.
        `;

    }


    if (
        message.includes("sos") ||
        message.includes("help")
    ) {

        return `
        🚨 <strong>Emergency Assistance</strong><br><br>

        If you are in immediate danger, activate the
        <strong>SOS</strong> button.<br><br>

        VIORA can then prepare an emergency response,
        location information and an action plan.
        `;

    }


    return `
        🤖 <strong>VIORA AI</strong><br><br>

        I understand that you may need emergency
        assistance.<br><br>

        Please describe the situation, for example:<br>

        • "There is a flood near me"<br>
        • "There is a fire"<br>
        • "I need medical help"<br>
        • "There was an earthquake"<br><br>

        I will help you determine the next steps.
    `;

}


/* ================= CLOSE MODAL ON OUTSIDE CLICK ================= */

document
    .getElementById("sosModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeSOS();

        }

    });