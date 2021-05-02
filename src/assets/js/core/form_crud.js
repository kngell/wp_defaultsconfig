import { BASE_URL, isIE } from "./config";

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
      gestion(response, data.params ? data.params : "");
    },
  });
}

//display all Items
export function displayAllItems(data, gestion) {
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
      gestion(response, data.params ? data.params : "");
    },
  });
}

//add Item
export function Add(data, gestion) {
  var formData = new FormData(data.frm[0]);
  formData.append("table", data.table);
  formData.append("notification", data.notification);
  formData.append("frm_name", data.frm_name);
  if (data.hasOwnProperty("start_date"))
    formData.append("start_date", data.start_date);
  if (data.hasOwnProperty("end_date"))
    formData.append("end_date", data.end_date);
  if (data.hasOwnProperty("imageUrlsAry"))
    formData.append("imageUrlsAry", data.imageUrlsAry);
  if (data.hasOwnProperty("select2")) formData.append("select2", data.select2);
  if (data.hasOwnProperty("categorie"))
    formData.append("custom_categorie", data.categorie);
  if (data.hasOwnProperty("files")) {
    for (let i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }
  if (data.hasOwnProperty("select2")) {
    $(data.select2).each(function (key, val) {
      console.log(this);
      formData.append(key, val);
    });
  }
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
  formData.append("isIE", isIE());
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
  if (data.hasOwnProperty("select2")) {
    for (const [key, value] of Object.entries(data.select2)) {
      formData.append(key, JSON.stringify(value));
    }
  }
  if (data.hasOwnProperty("categorie"))
    formData.append("custom_categorie", data.categorie);
  if (data.hasOwnProperty("tbl_options"))
    formData.append("tbl_options", data.tbl_options);
  if (data.hasOwnProperty("files")) {
    for (let i = 0; i < data.files.length; i++) {
      formData.append(data.files[i].name, data.files[i]);
    }
  }
  $.ajax({
    url: BASE_URL + data.url,
    method: "POST",
    processData: false,
    contentType: false,
    dataType: "json",
    data: formData,
    success: function (response) {
      gestion(response, data.params ? data.params : "");
    },
  });
}

//delete
export function Delete(data, displayItem) {
  checkBeforeDelete(data).then((result) => {
    if (result.value) {
      $.ajax({
        url: BASE_URL + data.url,
        method: "post",
        data: data.serverData,
        success: function (response) {
          displayItem(response, data.params ? data.params : "");
        },
      });
    }
  });
}
//function check before delete
function checkBeforeDelete(data) {
  return new Promise((resolve, reject) => {
    if (!data.url_check) {
      const html = () => {
        const htw = document.createElement("div");
        if (data.swal_message) {
          return (htw.innerHTML = data.swal_message);
        } else {
          return (htw.innerHTML = "<p>You won't be able to revert this!</p>");
        }
      };
      data.swal
        .fire({
          title: "Are you sure?",
          showCancelButton: true,
          html: html(),
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: data.swal_button ? data.swal_button : "Delete!",
        })
        .then((result) => {
          resolve(result);
        });
    } else {
      console.log(data);
      $.ajax({
        url: BASE_URL + data.url_check,
        method: "post",
        data: data.serverData,
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
        parentID: data.parentID != "" ? data.parentID : "",
      };
    },
    processResults: function (response) {
      if (response.result == "success") {
        return {
          results: $.map(response.msg, function (obj) {
            if (obj.id != 0) {
              return { id: obj.id, text: obj.text };
            } else {
              return { id: obj.id, text: obj.text };
            }
          }),
        };
      }
    },
    cache: true,
  };
}
