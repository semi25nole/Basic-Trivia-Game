$(document).ready(function() {

    var correct = 1;
    var incorrect = 1;
    var totalGuesses = 1;

    $("button").click(function() {
        var picks = $('input[name=position]:checked').val();
        if (picks == 6 || picks == "Ground-Rule Double" || picks == "Major League Baseball" || picks == 9 || picks == 54 ||
            picks == "Cracker Jacks") {
            $('#correct').html("Correct: " + correct++);
            $('#tot').html("Total: " + totalGuesses++);
        } else {
            $("#incorrect").html("Incorrect: " + incorrect++);
            $("#tot").html("Total: " + totalGuesses++);
        }

        $("#ans").css({ display: "block" });

    })
});