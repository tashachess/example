import { compile } from './helpers'

class Templator {
  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx) {
    return compile(this._template, ctx)
  }
}

export default Templator
