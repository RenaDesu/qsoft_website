const ELEMENTS_SELECTOR = {
    spoiler: '[data-spoiler]',
    button: '[data-spoiler-toggle]',
    content: '[data-spoiler-content]',
};

 function spoiler() {
    $(document).on('click', ELEMENTS_SELECTOR.button, function() {
        const $parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);
        const $content = $parent.find(ELEMENTS_SELECTOR.content);

        $parent.toggleClass('spoiler__item--opened');
        $content.slideToggle();
    });
}

export default spoiler();