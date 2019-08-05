import $ from 'jquery';
import Swiper from 'swiper';

export class SliderWidget {
    constructor (opts) {
        this.slider = opts.slider
    }
    init () {
        $(() => {
            return new Swiper(this.slider, {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
    }
}
