$(document).ready(function () {
    $(":checkbox").change(placePeg);

    function placePeg() {
        // p1Sub1 will be true if checkbox is checked
        var p1Sub1 = $("#p1-sub1").is(":checked");

        // create variables for player 1's sub 2 and sub 3

        // Test if player 1's submarine was sunk
        // If it was, then show the message:
        // $("#p1-sub-msg").show();


        // p1Bship1 will be true if checkbox is checked
        var p1Bship1 = $("#p1-bship1").is(":checked");

        // create variables for player 1's battleship 2, 3, and 4

        // Test if player 1's battleship was sunk
        // If it was, then show the message:
        // $("#p1-bship-msg").show();


        // p2Sub1 will be true if checkbox is checked
        var p2Sub1 = $("#p2-sub1").is(":checked");

        // create variables for player 2's sub 2 and sub 3

        // Test if player 2's submarine was sunk
        // If it was, then show the message:
        // $("#p2-sub-msg").show();


        // p2Bship1 will be true if checkbox is checked
        var p2Bship1 = $("#p2-bship1").is(":checked");

        // create variables for player 2's battleship 2, 3, and 4

        // Test if player 2's battleship was sunk
        // If it was, then show the message:
        // $("#p2-bship-msg").show();


        // If both of player 1's ships were sunk
        // OR
        // both of player 2's ships were sunk
        // then:
        // $("#gameOverMsg").show();




    }

});