/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';



/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';

import tabs from './modules/tabs';
import textCropp from './modules/text-cropp';
import menu from './modules/menu';
import swiper from './modules/swiper';
import select from './modules/select';
import scrollbar from './modules/scrollbar';
import tooltip from './modules/tooltip';
import spoiler from './modules/spoiler';
import showMore from './modules/show-more';
import maskInput from './modules/mask';
import validation from './modules/validation';
import modal from './modules/modal';


const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();
        tabs();
        textCropp();
        menu();
        swiper();
        select();
        scrollbar();
        tooltip();
        spoiler();
        showMore();
        maskInput();
        validation();
        modal();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
