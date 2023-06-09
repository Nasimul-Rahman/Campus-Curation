function validateForm() {
    var fullName = document.getElementById("fullName").value;

    if (fullName.trim() === "") {
        alert("Please enter your full name");
        return false;
    }

    return true; 
}

let typesOfEvents;
// Call JSON file.
function getBookNowJsonAJAX() {
        console.log("Hello")
        var xhttp = new XMLHttpRequest();
        console.log(xhttp)
        xhttp.onreadystatechange = function () { 
            if (xhttp.readyState == 4 && xhttp.status == 200) {   // value 4 - means the load is complete ##  200 Code informs about successful processing of the request.
                processResult(xhttp);
            }
        }
        xhttp.open("GET", "JS/book_now.json", true);   // async: true (asynchronous) or false (synchronous)
        xhttp.send();
}
// This function process the content of JSON file.     
function processResult(xhttp) {
        var jsonText = xhttp.responseText;        // Get JSON text.     
        bookNowJson = JSON.parse(jsonText);   // convert the response text to JSON object.

        // Filling in types of events through JSON

        for (let i = 0; i < bookNowJson.types_of_events.length; i++) {
            document.getElementById('events').innerHTML += "<option value=\" \">" + bookNowJson.types_of_events[i] + "</option> \n";
        }

        // Filling in how we can help selection section through JSON

        for (let i = 0; i < bookNowJson.how_can_we_help.length; i++) {
            document.getElementsByClassName('selection-option')[0].innerHTML += "<div class=\"selection\">" + 
            "<input style=\"margin-right: 5px;\" type=\"checkbox\" id=" + bookNowJson.how_can_we_help[i][1] + " name=" + bookNowJson.how_can_we_help[i][2] + ">" + 
            "<label for=\"" + bookNowJson.how_can_we_help[i][2] + "\">" + bookNowJson.how_can_we_help[i][0] + "</label>" + 
        "</div><br>\n"
        }

        // Filling in how can we reach you section through JSON

        for (let i = 0; i < bookNowJson.how_can_we_reach_you.length; i++) {
            document.getElementById('contact').innerHTML += "<option value=" + bookNowJson.how_can_we_reach_you[i][1] + " \">" + bookNowJson.how_can_we_reach_you[i][0] + "</option> \n";
        }

        // Filling in venue type section through JSON

        for (let i = 0; i < bookNowJson.venue_type.length; i++) {
            document.getElementById('venue').innerHTML += "<option value=" + bookNowJson.venue_type[i][1] + " \">" + bookNowJson.venue_type[i][0] + "</option> \n";
        }

        // Filling in best time section through JSON

        for (let i = 0; i < bookNowJson.best_time.length; i++) {
            document.getElementById('time').innerHTML += "<option value=" + bookNowJson.best_time[i][1] + " \">" + bookNowJson.best_time[i][0] + "</option> \n";
        }
}

getBookNowJsonAJAX();