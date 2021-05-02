export default class Logreg {
  constructor(editors = {}) {
    this.isLoad = false;
    this.editors = editors;
  }
  check() {
    return this.isLoad == true;
  }

  async load() {
    const login = await import(
      /* webpackMode: "lazy" */
      /* webpackChunkName: "logAndReg" */
      "./login_register.class"
    );
    // $.each(this.editors, async (i, ed) => {
    //   this.editor[ed] = await createEditor(ed);
    // });
    this.isLoad = true;
  }
}
