import Script from "next/script";
import React from "react";

function AmoCRMWidget() {
  return (
    <div>
      {" "}
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: ` !(function (a, m, o, c, r, m) {
(a[o + c] = a[o + c] || {
  setMeta: function (p) {
    this.params = (this.params || []).concat([p]);
  },
}),
  (a[o + r] =
    a[o + r] ||
    function (f) {
      a[o + r].f = (a[o + r].f || []).concat([f]);
    }),
  a[o + r]({
    id: "1245670",
    hash: "fc98267dbc41d60605169a5108423a2b",
    locale: "ru",
  }),
  (a[o + m] =
    a[o + m] ||
    function (f, k) {
      a[o + m].f = (a[o + m].f || []).concat([[f, k]]);
    });
})(window, 0, "amo_forms_", "params", "load", "loaded");`,
        }}
      ></Script>
      <Script
        id="amoforms_script_1245670"
        async
        charSet="utf-8"
        src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1700767940"
      />
    </div>
  );
}

export default AmoCRMWidget;
