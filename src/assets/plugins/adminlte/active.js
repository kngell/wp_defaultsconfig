// /** add active class and stay opened when selected */
var url = window.location.href.split("?")[0];
// for single sidebar menu
$("ul.nav-sidebar a")
  .removeClass("active")
  .filter(function () {
    return this.href == url;
  })
  .addClass("active");
// for sidebar menu and treeview
$("ul.nav-treeview a")
  .filter(function () {
    return this.href == url;
  })
  .parents(".nav-treeview")
  .css({ display: "block" })
  .prev("a")
  .addClass("active")
  .parent()
  .addClass("menu-open");
