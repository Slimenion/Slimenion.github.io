$(function () {

    $('.forms').each(function () {
        var form = $(this),
            btn = $('.button'),
            check = false;

        form.find('.input').addClass('empty_field');

        function checkInput() {
            form.find('.input').each(function () {
                if ($(this).val() != '') {
                    $(this).removeClass('empty_field');
                } else {
                    $(this).addClass('empty_field');
                }
            });
        }

        $('.form-checkbox').on('change', function () {
            if ($('.form-checkbox').prop('checked')) {
                check = true;
            } else {
                check = false;
            }
        });
        setInterval(function () {
            checkInput();
            var sizeEmpty = $('.empty_field').length;
            if (sizeEmpty === 0 && check) {
                if (btn.hasClass('btn-active')) {
                    return false;
                } else {
                    btn.addClass('btn-active');
                }
            } else {
                if(btn.hasClass('btn-active')){
                    btn.removeClass('btn-active');
                } else { 
                    return false;
                }
            }
        }, 500);

        btn.click(function () {
            if ($(this).hasClass('btn-active')) {
                if(checkValidity()){
                    form.submit();
                }
            } else {
                return false
            }
           
        });

    });
});
