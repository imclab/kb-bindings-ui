// # vim: set shiftwidth=2 tabstop=2 softtabstop=2 expandtab:
  
var datgui = require('dat-gui');

module.exports = function(game, opts) {
  return new BindingsUI(game, opts);
};

function BindingsUI(game, opts) {
  this.game = game;

  opts = opts || {};

  this.kb = opts.kb;
  if (!this.kb) throw 'kb-bindings-ui requires "kb" option set to kb-bindings instance';
  this.gui = opts.gui || new datgui.GUI();
  this.folder = this.gui.addFolder('keys');

  for (var key in this.kb) {
    if (isReserved(key)) continue;
    this.addKey(key);
  }
}

function isReserved(s) {
  return s === 'enabled' ||
       s === 'enable' ||
       s === 'disable' ||
       s === 'destroy' ||
       s === 'down' ||
       s === 'up';
}

BindingsUI.prototype.addKey = function (name) {
  var item = this.folder.add(this.kb, name);
  //item.onChange(updateBinding(this, name));
};

