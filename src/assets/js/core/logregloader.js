export default class Logreg {
  constructor(editors) {
    this.isLoad = false;
  }
  check() {
    return this.isLoad == true;
  }

  async load() {
    const { default: createEditor } = await import(
      /* webpackMode: "lazy" */
      /* webpackChunkName: "logAndReg" */
      "./login_register.class"
    );
    $.each(this.editors, async (i, ed) => {
      this.editor[ed] = await createEditor(ed);
    });
    this.isLoad = true;
  }
}
