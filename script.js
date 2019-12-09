let slider = {

    el: {
        slider: $("#slider"),
        allSlides: $(".slide"),
        sliderNav: $(".slider-nav"),
        allNavButtons: $(".slider-nav > a")
    },

    timing: 800,
    slideWidth: null,

    init: function() {
        this.slideWidth = slider.el.allSlides.width();
        this.bindUIEvents();
    },

    bindUIEvents: function() {
        // You can either manually scroll...
        this.el.slider.on("scroll", function(event) {
            slider.moveSlidePosition(event);
        });
        // ... or click a thing
        this.el.sliderNav.on("click", "a", function(event) {
            slider.handleNavClick(event, this);
        });
    },

    moveSlidePosition: function(event) {
        // Magic Numbers =(
        this.el.allSlides.css({
            "background-position": $(event.target).scrollLeft() / 6 - 100 + "px 0"
        });
    },

    handleNavClick: function(event, el) {
        event.preventDefault();
        var position = $(el).attr("href").split("-").pop();

        this.el.slider.animate({
            scrollLeft: position * this.slideWidth
        }, this.timing);

        this.changeActiveNav(el);
    },

    changeActiveNav: function(el) {
        this.el.allNavButtons.removeClass("active");
        $(el).addClass("active");
    },

};

slider.init();