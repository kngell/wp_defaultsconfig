import { BASE_URL } from "./config";
import { add_inputs_errors, error, inputsArray } from "./inputErrManager";

//display all details
export function displayAllDetails(data, gestion) {
  $.ajax({
    url: BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      id: data.id,
      user: data.user ? data.user : "",
      session_id: data.session_id ? data.session_id : "",
      data_type: data.data_type ? data.data_type : "",
      return_mode: data.return_mode ? data.return_mode : "",
      token: data.token ? data.token : "",
      frm_name: data.frm_name ? data.frm_name : "",
    },
    success: function (response) {
      gestion(response, data.params ? data.params : "");
    },
  });
}
//edit data
export function editForm(data, gestion) {
  $.ajax({
    url: BASE_URL + data.url,
    method: "post",
    data: data.formData,
    success: function (response) {
      gestion(response);
    },
  });
}

//display all Items
export function displayAllItems(data) {
  $.ajax({
    url: BASE_URL + data.url,
    method: "post",
    data: {
      table: data.table,
      id: data.id != "" ? data.id : "",
      start: 0,
      max: data.max != "" ? data.max : "",
      user: data.user != "" ? data.user : "",
      query: data.query != "" ? data.query : "",
      page: data.page != "" ? data.page : "",
      pagination: data.pagination != "" ? data.pagination : "",
      data_type: data.data_type ? data.data_type : "",
      return_mode: data.return_mode ? data.return_mode : "",
    },
    success: function (response) {
      if (response.result == "success") {
        // debugger;
        if (data.table === "comments") {
          data.displayid.html(response.msg);
        } else {
          data.displayid.html(response.msg);
          if (data.datatable) loadDatatables();
        }
      } else {
        $(data.displayid).html(response.msg);
      }
    },
  });
}
async function loadDatatables() {
  const DataTable = await import(
    /* webpackChunkName: "datatables" */ "datatables.net"
  );
  $("table").DataTable({
    order: [0, "desc"],
  });
}
//add Item
export function Add(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("table", data.table);
  formData.append("notification", data.notification);
  formData.append("frm_name", data.frm_name);
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  $.ajax({
    url: BASE_URL + data.url,
    method: "post",
    data: formData,
    cache: false,
    processData: false,
    contentType: false,
    success: function (response) {
      gestion(response, data.params ? data.params : "");
    },
  });
}
//update
export function Call_controller(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("frm_name", data.frm_name);
  if (data.table) formData.append("table", data.table);
  if (data.notification) formData.append("notification", data.notification);
  if (data.url_data) formData.append("url_data", data.url_data);
  if (data.action) formData.append("action", data.action);
  if (data.imageUrlsAry) formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.freedata) formData.append("freedata", data.freedata);
  if (data.start_date) formData.append("start_date", data.start_date);
  if (data.end_date) formData.append("end_date", data.end_date);
  if (data.id) formData.append("id", data.id);
  if (data.user_id) formData.append("id", data.user_id);
  if (data.method) formData.append("method", data.method);
  if (data.select2) formData.append("select2", data.select2);
  $.ajax({
    url: BASE_URL + data.url,
    method: "post",
    processData: false,
    contentType: false,
    data: formData,
    success: function (response) {
      gestion(response, data.params ? data.params : "");
    },
  });
}
//Manage item added/updated
export function ManageResponse(response, data) {
  switch (response.result) {
    case "error-field":
      add_inputs_errors(inputsArray(data.frm), error(data.frm, response.msg));
      break;
    case "success":
      data.frm.trigger("reset");
      if (data.login) {
        data.loginbox.modal("hide");
        window.location.reload();
      }
      if (data.swal) {
        data.modalbox.modal("hide");
        data.swal.fire("Success!", response.msg, "success");
      } else {
        if (data.alertsuccess) data.alertid.html(response.msg);
      }
      if (data.hasOwnProperty("imgarea")) {
        data.imgarea.attr("src", data.imgvalue);
      }
      if (data.prepend) {
        data.nested.prepend(response.msg);
      } else {
        if (data.prepend === false) {
          data.nested.before(response.msg);
          data.nested.hide();
        }
      }
      if (data.display) data.display();
      break;
    case "error":
      data.alertid.html(response.msg);
      data.frm.trigger("reset");
      break;
  }
}

//delete
export function Delete(data, displayItem) {
  checkBeforeDelete(data).then((result) => {
    if (result.value) {
      $.ajax({
        url: BASE_URL + data.url,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification,
        },
        success: function (response) {
          if (response.result === "success") {
            data.swal
              ? data.swal.fire("Deleted!", response.msg, "success")
              : "";
            displayItem(data.params ? data.params : "");
          } else {
            data.alertID.html(response.msg);
          }
        },
      });
    }
  });
}
//function check before delete
function checkBeforeDelete(data) {
  return new Promise((resolve, reject) => {
    if (!data.url_check) {
      data.swal
        .fire({
          title: "Are you sure?",
          showCancelButton: true,
          html: "<p>You won't be able to revert this!</p>",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Delete!",
        })
        .then((result) => {
          resolve(result);
        });
    } else {
      $.ajax({
        url: BASE_URL + data.url_check,
        method: "post",
        data: {
          id: data.id,
          table: data.table,
          notification: data.notification,
        },
      })
        .done((response) => {
          data.swal
            .fire({
              title: "Are you sure?",
              showCancelButton: true,
              html: "<p>You won't be able to revert this!</p>" + response.msg,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Delete!",
            })
            .then((result) => {
              resolve(result);
            });
        })
        .fail((error) => {
          reject(error);
        });
    }
  });
}
export function displayMultisellect(data) {
  $.ajax({
    url: BASE_URL + "forms/fillMultiselect",
    method: "post",
    data: {
      table: data.table,
    },
    success: function (response) {
      if (response.result === "success") {
        data.displayID.append(response.msg);
      } else {
        data.alertID.html(response.msg);
      }
    },
  });
}

export function addCategorrie(catField, alertID) {
  let cat = document.querySelector(catField);
  if (cat.value.length == 0) {
    alert("Le champs catégorie est vide");
  } else {
    $.ajax({
      url: BASE_URL + "forms/addcategorie",
      method: "post",
      data: {
        categorie: cat.value,
      },
      success: function (response) {
        if (response != "success") {
          $(alertID).html(response);
        }
      },
    });
  }
}
export function select2AjaxParams(data) {
  return {
    url: BASE_URL + data.url,
    type: "post",
    dataType: "json",
    delay: 250,
    data: function (params) {
      return {
        searchTerm: params.term, // search term
        table: data.table != "" ? data.table : "",
        data_type: data.data_type != "" ? data.data_type : "",
      };
    },
    processResults: function (response) {
      if (response.result == "success") {
        // var data = $.map(response.msg, function (obj) {
        //   obj.id = obj.id || obj.text; // replace pk with your identifier
        //   return obj;
        // });
        // //console.log(data);

        return {
          results: $.map(response.msg, function (obj) {
            if (obj.id != 0) {
              console.log(obj);
              return { id: obj.id, text: obj.text };
            } else {
              return { id: obj.id, text: obj.text };
            }
          }),
        };

        // return {
        //   results: data,
        // };
      }
    },
    cache: true,
  };
}
