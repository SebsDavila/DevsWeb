jQuery(document).ready(function ($) {
    $('#user').focus();

    $('#enter').on('click', function () {
        if ($('#user').val() != "" & $('#pass').val() != "") {
            Validate($('#user').val(), $('#pass').val());
        } else {
            Swal.fire(
                'error',
                'favor de ingresar usuario y contraseña',
                'error'
            );
        }
    });

    function Validate(Users, Password) {
        var record = {
            Usuario: Users,
            Contraseña: Password
        };

        $.ajax({
            url: '/Usuarios/GetUser',
            async: false,
            type: 'POST',
            data: record,
            beforeSend: function (xhr, opts) {

            },
            complete: function () {

            },
            succes: function (data) {
                if (data.status == true) {
                    window.location.href = "/Index/Home";
                } else if (data.status == false) {
                    Swal.fire(
                        'error',
                        data.message,
                        'error'
                    );
                    console.log("Algo falló");
                }
            
            },
            error: function (data) {
                Swal.fire(
                    'error',
                    data.message,
                    'error'
                );
            }
        })
    }
})