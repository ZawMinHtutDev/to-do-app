$(document).ready(function () {
    if(window.location.pathname === "/todo") {
        let form = $("form");
        
        form.on('submit', function() {
            let data = {item: $("form input#item").val()};

            $.ajax({
                type: "POST",
                url: "/todo",
                data: data,
                success: function(data) {
                    // the data here is the response from controller post method.
                    // console.log(data);

                    // refreshing to do a get routing
                    location.reload();
                }
            });

            return false;
        });

        let toDoItem = $("#todo ul li");

        toDoItem.on("click", function(e) {
            let item = e.target.innerText.replace(/ /g, "-");

            $.ajax({
                type: "DELETE",
                url: "/todo/" + item,
                data: item,
                success: function(data) {
                    // the data here is the response from controller delete method.
                    // console.log(data);

                    // refreshing to do a get routing
                    location.reload();
                }
            })
        });
    }
});