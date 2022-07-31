(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d219ff9"],{ba48:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"list-demo"}},[e("list-basic"),e("list-header"),e("list-icon"),e("list-content"),e("list-avatar")],1)},l=[],a=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{title:"Basic","code-toggler":""}},[e("p",[t._v("A basic list of items with "),e("code",[t._v("title")]),t._v(" and "),e("code",[t._v("subtitle")])]),e("div",{staticClass:"demo-alignment"},[e("vs-list",[e("vs-list-item",{attrs:{title:"One text"}}),e("vs-list-item",{attrs:{title:"Another text",subtitle:"A little text"}}),e("vs-list-item",{attrs:{title:"Some more text"}}),e("vs-list-item",{attrs:{title:"Even more text",subtitle:"Another little text"}})],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-item title="One text"></vs-list-item>\n  <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>\n  <vs-list-item title="Some more text"></vs-list-item>\n  <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>\n</vs-list>\n      ')])],2)},n=[],o=i("2877"),r={},c=Object(o["a"])(r,a,n,!1,null,null,null),v=c.exports,u=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{title:"Header","code-toggler":""}},[e("p",[t._v("A "),e("code",[t._v("vs-list-header")]),t._v(" separator with custom "),e("code",[t._v("color")])]),e("div",{staticClass:"demo-alignment"},[e("vs-list",[e("vs-list-header",{attrs:{title:"Group 1"}}),e("vs-list-item",{attrs:{title:"Snickerdoodle",subtitle:"An excellent companion"}}),e("vs-list-item",{attrs:{title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}}),e("vs-list-header",{attrs:{title:"Group 2",color:"success"}}),e("vs-list-item",{attrs:{title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}}),e("vs-list-item",{attrs:{title:"Veronika Ossi",subtitle:"Has not watched anything recently"}})],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Group 1"></vs-list-header>\n\n  <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>\n  <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>\n  <vs-list-header title="Group 2" color="success"></vs-list-header>\n  <vs-list-item title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>\n  <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>\n</vs-list>\n        ')])],2)},d=[],h={},m=Object(o["a"])(h,u,d,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{title:"Icon","code-toggler":""}},[e("p",[t._v("The list items and the headers can have a "),e("code",[t._v("icon")]),t._v(" as well")]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),e("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),e("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),e("div",{staticClass:"demo-alignment"},[e("vs-list",[e("vs-list-header",{attrs:{"icon-pack":"feather",icon:"icon-users",title:"Group 1"}}),e("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-check",title:"Snickerdoodle",subtitle:"An excellent companion"}}),e("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-check",title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}}),e("vs-list-header",{attrs:{"icon-pack":"feather",icon:"icon-user-plus",title:"Group 2",color:"success"}}),e("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-shield",title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}}),e("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-shield",title:"Veronika Ossi",subtitle:"Has not watched anything recently"}})],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n\n    <vs-list-header icon-pack="feather" icon="icon-users" title="Group 1"></vs-list-header>\n    <vs-list-item icon-pack="feather" icon="icon-check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>\n    <vs-list-item icon-pack="feather" icon="icon-check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>\n\n    <vs-list-header icon-pack="feather" icon="icon-user-plus" title="Group 2" color="success"></vs-list-header>\n    <vs-list-item icon-pack="feather" icon="icon-shield" title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>\n    <vs-list-item icon-pack="feather" icon="icon-shield" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>\n</vs-list>\n        ')])],2)},g=[],f={},y=Object(o["a"])(f,b,g,!1,null,null,null),x=y.exports,k=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{title:"Content","code-toggler":""}},[e("p",[t._v("You can add custom content to the item. It will be pushed to the right side")]),e("div",{staticClass:"demo-alignment"},[e("vs-list",[e("vs-list-header",{attrs:{title:"Group 1"}}),e("vs-list-item",{attrs:{title:"Snickerdoodle",subtitle:"An excellent companion"}},[e("vs-button",{attrs:{color:"danger"}},[t._v("One action")])],1),e("vs-list-item",{attrs:{title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}},[e("vs-checkbox",{attrs:{color:"danger"}})],1),e("vs-list-header",{attrs:{title:"Group 2",color:"success"}}),e("vs-list-item",{attrs:{title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}},[e("vs-chip",{attrs:{color:"warning mr-0"}},[t._v("Another component")])],1),e("vs-list-item",{attrs:{title:"Veronika Ossi",subtitle:"Has not watched anything recently"}},[e("vs-switch",{attrs:{color:"warning"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Group 1"></vs-list-header>\n\n  <vs-list-item title="Snickerdoodle" subtitle="An excellent companion">\n    <vs-button color="danger">One action</vs-button>\n  </vs-list-item>\n\n  <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals">\n    <vs-checkbox color="danger"/>\n  </vs-list-item>\n\n  <vs-list-header title="Group 2" color="success"></vs-list-header>\n  <vs-list-item title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot.">\n    <vs-chip color="warning">Another component</vs-chip>\n  </vs-list-item>\n\n  <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">\n    <vs-switch color="warning" v-model="val"/>\n  </vs-list-item>\n</vs-list>\n        ')])],2)},_=[],A={data:function(){return{val:!1}}},w=A,S=Object(o["a"])(w,k,_,!1,null,null,null),C=S.exports,O=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{title:"Avatar","code-toggler":""}},[e("p",[t._v("You can implement an avatar in the list with the "),e("code",[t._v('slot="avatar"')]),t._v(" by putting a [vs-avatar] component")]),e("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[e("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),e("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),e("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),e("div",{staticClass:"demo-alignment"},[e("vs-list",[e("vs-list-header",{attrs:{title:"Users",color:"danger"}}),e("vs-list-item",{attrs:{title:"Steve Jobes",subtitle:"Top Contributor"}},[e("template",{slot:"avatar"},[e("vs-avatar")],1)],2),e("vs-list-item",{attrs:{title:"Matt",subtitle:"11 Points"}},[e("template",{slot:"avatar"},[e("vs-avatar",{attrs:{"vs-text":"Vuexy"}})],1)],2),e("vs-list-header",{attrs:{title:"Profile photo",color:"warning"}}),e("vs-list-item",{attrs:{title:"Xian Famous Foods",subtitle:"A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers."}},[e("template",{slot:"avatar"},[e("vs-avatar",{attrs:{"vs-text":"Vue"}})],1)],2)],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Users" color="danger"></vs-list-header>\n\n  <vs-list-item title="Steve Jobes" subtitle="Top Contributor">\n    <template slot="avatar">\n      <vs-avatar />\n    </template>\n  </vs-list-item>\n\n  <vs-list-item title="Matt" subtitle="11 Points">\n    <template slot="avatar">\n      <vs-avatar vs-text="Vuexy"/>\n    </template>\n  </vs-list-item>\n\n  <vs-list-header title="Profile photo" color="warning"></vs-list-header>\n\n  <vs-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi\'s delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">\n    <template slot="avatar">\n      <vs-avatar vs-text="Vue"/>\n    </template>\n  </vs-list-item>\n</vs-list>\n        ')])],2)},G=[],H={},V=Object(o["a"])(H,O,G,!1,null,null,null),F=V.exports,j={components:{ListBasic:v,ListHeader:p,ListIcon:x,ListContent:C,ListAvatar:F}},E=j,I=Object(o["a"])(E,s,l,!1,null,null,null);e["default"]=I.exports}}]);