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
import { get_visitors_data, send_visitors_data } from "corejs/visitors";
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
    //Get Visitors Data
    //=======================================================================
    let visitor = get_visitors_data().then((visitors_data) => {
      var data = {
        url: "visitors/track",
        table: "visitors",
        ip: visitors_data.ip,
      };
      send_visitors_data(data, manageR);
      function manageR(response) {}
    });

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
      responsive: responsive,
    });

    //new phones
    phpPlugin.newPhone.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
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
    });
    //=======================================================================
    //Isotope Filter
    //=======================================================================
    function special_price() {
      return new Promise((resolve, reject) => {
        var gridIMG = phpPlugin.specialPrice.find(".grid .grid-item img");
        imageLoaded(gridIMG)
          .then(() => {
            resolve(
              new Isotope("#special-price .grid", {
                itemSelector: ".grid-item",
                layoutMode: "fitRows",
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
