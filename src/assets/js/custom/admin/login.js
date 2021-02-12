document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const login = await import(/* webpackChunkName: "login" */ "corejs/logreg");
  })();
});
