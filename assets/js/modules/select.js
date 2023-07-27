import select2 from 'select2';
import validate from 'jquery-validation';

const ELEMENTS_SELECTOR = {
    selectBox: '[data-select]',
    selectControl: '[data-select-control]',
};

 function select() {
    const baseOptions = {};

    $(ELEMENTS_SELECTOR.selectControl).each(function (index, select) {
        const $selectBox = $(select).closest(ELEMENTS_SELECTOR.selectBox);

        const placeholder = $(select).data('placeholder');

        const currentOptions = {
            ...baseOptions,
            placeholder,
            dropdownParent: $selectBox,
        };

        $(select).select2(currentOptions).on('change', function (e) {
            $(this).valid();
        });
    });
}

export default select();