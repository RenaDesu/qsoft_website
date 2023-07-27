import SimpleBar from 'simplebar';


function scrollbar() {
    $('select').on('select2:open', function () {
        const $optionsContainer = $('.select2-results__options');
        const length = $optionsContainer.length;

        setTimeout(() => {
            new SimpleBar($optionsContainer.get(length - 1));
        }, 0);
    });
}

export default scrollbar();