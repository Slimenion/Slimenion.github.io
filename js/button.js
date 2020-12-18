$(function () {

    $('.forms').each(function () {
        // Объявляем переменные (форма и кнопка отправки)
        var form = $(this),
            btn = $('.button'),
            check = false;

        // Добавляем каждому проверяемому полю, указание что поле пустое
        form.find('.input').addClass('empty_field');

        // Функция проверки полей формы
        function checkInput() {
            form.find('.input').each(function () {
                if ($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');
                } else {
                    // Если поле пустое добавляем класс-указание
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
        // Проверка в режиме реального времени
        setInterval(function () {
            // Запускаем функцию проверки полей на заполненность
            checkInput();
            // Считаем к-во незаполненных полей
            var sizeEmpty = $('.empty_field').length;
            // Вешаем условие-тригер на кнопку отправки формы
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

        // Событие клика по кнопке отправить
        btn.click(function () {
            if ($(this).hasClass('btn-active')) {
                // Все хорошо, все заполнено, отправляем форму
                if(checkValidity()){
                    form.submit();
                }
            } else {
                return false
            }
           
        });

    });
});
