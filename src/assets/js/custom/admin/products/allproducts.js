import "plugins/flexadmin/js/ecommerce";
import Cruds from "corejs/crud_interface";
import media from "corejs/upload_interface";
import Categories from "corejs/categories_manager";
// const { addStatusToPromise } = require("status-for-promise");
class AllProducts {
  constructor(element) {
    this.element = element;
  }
  _init = () => {
    this._setupVariables();
    this._setupEvents();
  };
  _setupVariables = () => {
    this.wrapper = this.element.find("#allproducts-wrapper");
    this.modalbox = this.element.find("#modal-box");
    this.modalform = this.element.find("#modal-box #new-product-frm");
  };
  _setupEvents = () => {
    var phpPlugin = this;
    //=======================================================================
    //Init Cruds operations
    //=======================================================================
    let cruds = new Cruds({
      table: "products",
      wrapper: phpPlugin.wrapper,
      form: phpPlugin.modalform,
      modal: phpPlugin.modalbox,
      select_tag: ".select2-shipping",
    });

    //=======================================================================
    //display all Items
    //=======================================================================
    cruds._displayAll({ datatable: true });
    //=======================================================================
    //Ajax Select2
    //=======================================================================
    cruds._select2({
      tbl_options: "products",
      placeholder: "Please select a shipping class",
    });
    //=======================================================================
    //Set / Create Add Btn
    //=======================================================================
    cruds._set_addBtn();

    //=======================================================================
    //Upload files
    //=======================================================================
    let dropzone = new media({
      dz_element: phpPlugin.modalbox.find(".dragAndDrop__wrapper"),
    })._upload();
    //=======================================================================
    //Manage categories
    //=======================================================================
    // let categories = new Categories({
    //   element: phpPlugin.modalform.find("#check-box-wrapper"),
    // })._manage();
    //=======================================================================
    //Add or update Data
    //=======================================================================
    cruds._add_update({
      frm_name: "new-product-frm",
      datatable: true,
      swal: true,
      modal: true,
      categorie: phpPlugin.modalbox.find(".categorie"),
      media: phpPlugin.modalbox.find("#p_media"),
      dropzone: dropzone, //myDropzone,
    });

    //=======================================================================
    //Edit Data
    //=======================================================================
    cruds._edit({
      frm_name: "new-product-frm",
      std_fields: [
        "pdtID",
        "p_title",
        "p_short_descr",
        "p_descr",
        "p_regular_price",
        "p_compare_price",
        "p_cost_per_item",
        "p_charge_tax",
        "p_media",
        "p_sku",
        "p_barre_code",
        "p_track_qty",
        "p_continious_sell",
        "p_qty",
        "p_back_border",
        "p_stock_threshold",
        "p_weight",
        "p_lenght",
        "p_width",
        "p_height",
        "p_shipping_class",
        "created_at",
        "updated_at",
        "deleted",
      ],
      inputElement: phpPlugin.modalbox.find("#myfile"),
      dropzone: dropzone, //myDropzone,
      categorieElement: phpPlugin.modalform.find("#check-box-wrapper"),
      tbl_options: "categories",
    });
    //=======================================================================
    //Clean Forms
    //=======================================================================
    cruds._clean_form({
      dropzone: dropzone, //myDropzone,
    });
    //=======================================================================
    //Delete data
    //=======================================================================
    cruds._delete({
      swal: true,
      datatable: true,
      url_check: "forms/checkdelete",
    });
    //=======================================================================
    //Categorie Status
    //=======================================================================
    cruds._active_inactive_elmt({ table: "categories" });
  };
}
// Dropzone.autoDiscover = false;
document.addEventListener("DOMContentLoaded", () => {
  new AllProducts($(".page-container"))._init();
});
