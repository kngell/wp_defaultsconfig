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
class Product {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  _setupVariables = () => {
    this.banner = this.element.find("#banner-area");
    this.product = this.element.find("#product");
    this.topSale = this.element.find("#top-sale");
    this.qty = this.element.find("#qty");
  };
  _setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //Owl carousel
    //=======================================================================
    //Top sales
    phpPlugin.topSale.find(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: responsive,
    });
    //=======================================================================
    //Qty section
    //=======================================================================
    phpPlugin.qty.on("click", ".qty-up", function (e) {
      e.preventDefault();
      let input = phpPlugin.qty.find("input");
      if (input.val() >= 1 && input.val() <= 9) {
        input.val(function (i, oldval) {
          return ++oldval;
        });
      } else {
      }
    });
    phpPlugin.qty.on("click", ".qty-down", function (e) {
      e.preventDefault();
      let input = phpPlugin.qty.find("input");
      if (input.val() > 1 && input.val() <= 10) {
        input.val(function (i, oldval) {
          return --oldval;
        });
      } else {
      }
    });
  };
}
document.addEventListener("DOMContentLoaded", function () {
  new Product($("#main-site"))._init();
});
