import "plugins/flexadmin/js/ecommerce";

class Checkout {
  constructor(element) {
    this.element = element;
  }

  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };

  _setupVariables = () => {
    this.oDetails = this.element.find(".order-details");
  };

  _setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //Autogrow tewtarea
    //=======================================================================
    // phpPlugin.oDetails.find("form textarea").on("keyup", function () {
    //   $(this).prop("style").cssText = "height:auto;";
    //   $(this).prop("style").cssText =
    //     "height:" + $(this).prop("scrollHeight") + "px";
    // });
  };
}

document.addEventListener("DOMContentLoaded", function () {
  new Checkout($("#main-site"))._init();
});
