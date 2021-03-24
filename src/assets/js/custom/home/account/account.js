import { displayAllDetails, select2AjaxParams } from "corejs/form_crud";
import { readurl } from "corejs/profile_img";
class Account {
  constructor(element) {
    this.element = element;
  }

  init = () => {
    this.setupVariables();
    this.setupEvents();
  };

  setupVariables = () => {
    this.wrapper = this.element.find(".row.transaction-menu");
  };

  setupEvents = () => {
    var phpPlugin = this;

    //=======================================================================
    //display the menu
    //=======================================================================
    phpPlugin.wrapper.on("click", ".card", function (e) {
      e.preventDefault();
      let data = {
        url: "forms/showDetails",
        table: $(this).find("form input[name=template]").val(),
        id: $(this).find("form input[name=userID]").val(),
        data_type: "template",
        return_mode: "index",
        token: $(this).find("form input[name=csrftoken]").val(),
        frm_name: "user_form" + $(this).find("form input[name=userID]").val(),
        params: $(this).find("form input[name=template]").val(),
      };
      displayAllDetails(data, manageR);
      function manageR(response, table) {
        if (response.result == "success") {
          phpPlugin.wrapper.html(response.msg);
          switch (table) {
            case "users":
              manageUsers();
              break;
            default:
              break;
          }
        }
      }
    });
    //=======================================================================
    //Manage user profile
    //=======================================================================
    function manageUsers(table = "") {
      //Read upload profile
      phpPlugin.wrapper
        .find('.upload-box input[type="file"]')
        .on("change", function () {
          readurl(
            this,
            phpPlugin.wrapper.find(".upload-box .img"),
            phpPlugin.wrapper.find(".upload-box .camera-icon")
          );
        });

      let data = {
        url: "forms/showDetails",
        data_type: "json",
        table: table,
      };
      //Activate select2 box for contries
      phpPlugin.wrapper.find(".select_country").select2({
        placeholder: "Please select a country",
        minimumInputLength: 1,
        allowClear: true,
        width: "100%",
        ajax: select2AjaxParams({
          url: "guests/get_countries",
        }),
      });
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  new Account($("#main-site")).init();
});
