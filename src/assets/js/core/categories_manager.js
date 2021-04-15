export default class Upload {
  constructor(cat) {
    this.categorie = [];
    this.element = cat.element;
  }

  //=======================================================================
  //Manage categories
  //=======================================================================
  _manage = (params = {}) => {
    let plugin = this;
    plugin.element.on("click", ".custom-checkbox", function (e) {
      $(this).find("input").prop("checked", true);
      if ($(this).find("input").prop("checked", true)) {
        console.log("yes");
      } else {
        console.log("no");
      }
      console.log($(this));
    });
  };
}
