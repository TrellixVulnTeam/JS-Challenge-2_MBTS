"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  "use strict";

  var e,
      t,
      n,
      i = "https://picsum.photos/v2/list?page".concat(t, "2&limit=100");
  var l = document.getElementById("image-parent");

  function o(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
  }

  function a(e, t) {
    var n = document.createElement("div");
    n.classList.add("tile"), n.setAttribute("id", "thisTile");
    var i = document.createElement("img");
    i.src = "https://picsum.photos/id/".concat(e, "/400/400"), t.appendChild(n), n.appendChild(i);
  }

  function s() {
    for (var e = document.getElementsByClassName("tile"); e.length > 0;) {
      var t = e[0];
      t.parentNode.removeChild(t);
    }
  }

  function d() {
    var e = document.getElementById("email").value;
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()) ? (document.getElementById("email").style.borderColor = "green", !0) : (document.getElementById("email").style.borderColor = "red", !1);
  }

  var m = function m(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, m);

    this.email = e, this.images = t;
  };

  var c = [];
  var u = document.getElementById("image-parent");
  document.getElementById("refresh-btn").addEventListener("click", function () {
    s(), function (a) {
      t = o(1, 10), n = o(0, 100), axios.get(i).then(function (t) {
        a(t.data[n].id, l), e = t.data[n].id, document;
      })["catch"](function (e) {
        console.log(e);
      });
    }(a);
  }), document.getElementById("assign-btn").addEventListener("click", function () {
    if (1 == d()) {
      var _t,
          _n = document.getElementById("email").value,
          _i = e,
          _l = !1;

      if (0 != c.length) for (var _e = 0; _e < c.length; _e++) {
        c[_e].email == _n ? (console.log("found " + c[_e].email), _l = !0, _t = _e) : _l = !1;
      }
      if (_l) c[_t].images.includes(_i) ? console.log("image is a duplicate so has not been added") : (c[_t].images.push(_i), console.log("image is not duplicate and so has been added"));else {
        var _e2 = new m();

        _e2.email = _n, _e2.images.push(_i), c.push(_e2);
      }

      if (0 == c.length) {
        var _e3 = new m();

        _e3.email = _n, _e3.images.push(_i), c.push(_e3);
      }
    }

    console.log(c);
  }), document.getElementById("show-btn").addEventListener("click", function () {
    if (s(), 1 == d()) for (var _t2 = 0; _t2 < c.length; _t2++) {
      var e = document.getElementById("email").value;
      if (c[_t2].email == e) for (var _e4 = 0; _e4 < c[_t2].images.length; _e4++) {
        a(c[_t2].images[_e4], u);
      }
    }
  });
})();