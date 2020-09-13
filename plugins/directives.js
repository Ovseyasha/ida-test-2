import Vue from 'vue'

//
// Vue.directive("filter", {
//   bind: function(el, binding) {
//     this.inputHandler = function(e) {
//       const ch = String.fromCharCode(e.which);
//       const re = new RegExp(binding.value);
//       if (!ch.match(re)) {
//         e.preventDefault();
//       }
//     };
//     el.addEventListener("keypress", this.inputHandler);
//   },
//   unbind: function(el) {
//     el.removeEventListener("keypress", this.inputHandler);
//   },
//   inputHandler: null
// });
