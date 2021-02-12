export const add_inputs_errors = (InputArr, arrErr) => {
  InputArr.forEach((input) => {
    if (arrErr.indexOf(input.id) == -1) {
      input.classList.remove("is-invalid");
      input.nextElementSibling.innerHTML = "";
    }
  });
};

export const reset_invalid_input = (form) => {
  form.find(".is-invalid").removeClass("is-invalid");
  form.find("div.invalid-feedback").html("");
};

//remove invalid input on focus
export function removeInvalidInput(Myform) {
  Myform.on("focus", "input,textarea, .ck, .note-editor", function () {
    $(this).removeClass("is-invalid");
    $(this).parent().children("div.invalid-feedback").html("");
  });
}

export const error = (form, InputErr) => {
  var arrErr = [];
  for (const [key, value] of Object.entries(InputErr)) {
    var input = form.find("#" + key).addClass("is-invalid");
    input.parent().children("div.invalid-feedback").html(value);
    arrErr.push(key);
  }
  return arrErr;
};

export const inputsArray = (form) => {
  var arr = [];
  form.each(function () {
    const inputsArr = $(this).find(":input").toArray();
    inputsArr.forEach(function (input) {
      if (
        ["submit", "hidden", "checkbox", "button", "file"].indexOf(
          input.type
        ) == -1 &&
        input.nextElementSibling
      ) {
        arr.push(input);
      }
    });
  });
  return arr;
};
