$(document).ready(function () {
    $(".forms").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: form_data,
            success: function (response) {
                if(response.status == "success"){
                alert("Успешно!");
                } else{
                    alert ("Не успешно: " + response.message);
                }
            },
            error: function () {
                alert("Такое сообщение от вас уже существует. Создайте нечто новое)");
            }
        });
    });
});
