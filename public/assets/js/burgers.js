// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").submit(function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerarea").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("new burger created");
            location.reload();
        });
    });

    $(".change-devoured").click(function() {
        const id = $(this).data("id");
        const isDevouredState = {
            isDevoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevouredState
        }).then(() => {
            console.log("changed isDevoured to true");
            location.reload();
        })
    })
});