var Isotope = require("isotope-layout");
const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 3,
  },
  1000: {
    items: 5,
  },
};
import imageLoaded from "corejs/waitfor";
import "img/banner1-cr-500x150.jpg";
import "img/banner2-cr-500x150.jpg";
document.addEventListener("DOMContentLoaded", function () {
  function PhpPlugin(element) {
    this.element = element;
    this.init();
  }
  PhpPlugin.prototype.init = function () {
    this.setupVariables();
    this.setupEvents();
  };
  PhpPlugin.prototype.setupVariables = function () {
    this.banner = this.element.find("#banner-area");
    this.topSale = this.element.find("#top-sale");
    this.specialPrice = this.element.find("#special-price");
    this.newPhone = this.element.find("#new-phones");
    this.blog = this.element.find("#blog");
  };
  PhpPlugin.prototype.setupEvents = function () {
    var phpPlugin = this;
    //=======================================================================
    //Owl carousel
    //=======================================================================
    phpPlugin.banner.find(".owl-carousel").owlCarousel({
      dots: true,
      items: 1,
      autoplay: true,
    });

    //Top sales
    phpPlugin.topSale.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 15,
      responsive: responsive,
    });

    //new product
    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 15,
      responsive: responsive,
    });
    //blog
    phpPlugin.blog.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
      },
      center: true,
    });

    //=======================================================================
    //Isotope Filter
    //=======================================================================
    function special_price() {
      return new Promise((resolve, reject) => {
        var gridIMG = phpPlugin.specialPrice.find(".grid .grid-item img");
        var elem = document.querySelector(".grid");
        imageLoaded(gridIMG)
          .then(() => {
            resolve(
              new Isotope(elem, {
                itemSelector: ".grid-item",
                layoutMode: "masonry",
                masonry: {
                  columnWidth: 0,
                  isFitWidth: true,
                },
              })
            );
          })
          .catch(() => console.log("error image"));
      });
    }
    special_price()
      .then((mod) => {
        phpPlugin.specialPrice
          .find(".button-group")
          .on("click", "button", function (e) {
            e.preventDefault();
            var filterValue = $(this).attr("data-filter");
            mod.arrange({
              filter: filterValue,
            });
          });
      })
      .catch((e) => console.log(e));
  };

  $.fn.phpPlugin = function (options) {
    new PhpPlugin(this);
    return this;
  };
  $("#main-site").phpPlugin();
});
