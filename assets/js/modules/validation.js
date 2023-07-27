import validate from 'jquery-validation';

const ELEMENTS_SELECTOR = {
    form: '[data-validate]',
    modalForm: '[data-modal-form]'
};

function validation() {
    const $form = $(ELEMENTS_SELECTOR.form);
    const $modalForm = $(ELEMENTS_SELECTOR.modalForm);

    $form.validate({
        rules: {
            email: {
                email: true
            },
            email2: {
                email: true
            },
        },
        errorPlacement: function (error, element) {
            if (element.parent('.form__select')) {
                error.insertAfter(element.parent());
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
                email: "E-mail указан неверно",
            },
            email2: {
                email: "E-mail указан неверно",
            },
            name: {
                required: "Это поле обязательно для заполнения",
            },
            surename: {
                required: "Это поле обязательно для заполнения",
            },
            specialization: {
                required: "Это поле обязательно для заполнения",
            },
            tel: {
                required: "Это поле обязательно для заполнения",
            },
        },
    });

    $modalForm.validate({
        rules: {
            emailModal: {
                email: true
            },
        },
        errorPlacement: function (error, element) {
            if (element.parent('.form__select')) {
                error.insertAfter(element.parent());
            }
        },
        messages: {
            emailModal: {
                required: "Это поле обязательно для заполнения",
                email: "E-mail указан неверно",
            },
            selectModal: {
                required: "Это поле обязательно для заполнения",
            },
        },
    });
}

export default validation();