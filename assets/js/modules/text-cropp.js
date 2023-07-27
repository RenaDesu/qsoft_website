import dotdotdot from 'dotdotdot-js'

const ELEMENTS_SELECTOR = {
    title: '[data-card-mini-title]',
    description: '[data-card-mini-description]',
    cardTitle: '[data-card-title]',
    cardDescription: '[data-card-description]',
    reviewDescription: '[data-review-description]',
    reviewName: '[data-review-name]',
};


function checkWindowWidth() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(ELEMENTS_SELECTOR.cardDescription).dotdotdot({
            ellipsis: "...",
            height: 105,
            truncate: "letter",
        });

        $(ELEMENTS_SELECTOR.cardTitle).dotdotdot({
            ellipsis: "...",
            height: 48,
            truncate: "letter",
        });
    } else {
        $(ELEMENTS_SELECTOR.cardDescription).dotdotdot({
            ellipsis: "...",
            height: 63,
            truncate: "letter",
        });

        $(ELEMENTS_SELECTOR.cardTitle).dotdotdot({
            ellipsis: "...",
            height: 54,
            truncate: "letter",
        });
    }

    return
};

export default function () {
    checkWindowWidth()

    $(ELEMENTS_SELECTOR.title).dotdotdot({
        ellipsis: "...",
        height: 24,
        truncate: "letter",
    });

    $(ELEMENTS_SELECTOR.description).dotdotdot({
        ellipsis: "...",
        height: 51,
        truncate: "letter",
    });

    $(ELEMENTS_SELECTOR.reviewDescription).dotdotdot({
        ellipsis: "...",
        height: null,
        truncate: "letter",
    });
    
    $(ELEMENTS_SELECTOR.reviewName).dotdotdot({
        ellipsis: "...",
        height: null,
        truncate: "letter",
    });
}

export {checkWindowWidth};