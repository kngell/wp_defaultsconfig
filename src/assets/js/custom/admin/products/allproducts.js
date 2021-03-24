import "plugins/flexadmin/js/ecommerce.js";
class AllProducts {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  _setupVariables = () => {
    this.wrapper = this.element.find("#users");
    this.modalbox = this.element.find("#modal-box");
    this.modalform = this.element.find("#modal-box #add-user-frm");
  };
  _setupEvents = () => {
    var phpPlugin = this;
  };
}
document.addEventListener("DOMContentLoaded", () => {
  new AllProducts($(".page-container"))._init();
});
