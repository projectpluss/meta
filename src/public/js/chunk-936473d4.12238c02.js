(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-936473d4"],{"210b":function(t,s,e){t.exports=e.p+"img/paypal-mini.4a147115.png"},4957:function(t,s,e){t.exports=e.p+"img/vnd-mini.cfacb341.svg"},"8f8a":function(t){t.exports=JSON.parse('{"BASE_URL":"http://icmarkos.com/","BASE_URL_SOCKET":"ws://icmarkos.com:2096","BASE_URL_SOCKET_SYS":"ws://icmarkos.com:2087","BASE_URL_SOCKET_NAP":"ws://icmarkos.com:2083","BASE_URL_SOCKET_NOTIFY":"ws://icmarkos.com:2053"}')},ae5b:function(t,s,e){},b72f:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"data-list-container",attrs:{id:"list-tool-setting"}},[[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mb-base"},[t._m(0),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12"},[s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min nạp Paypal"},model:{value:t.settingJson.min_d_paypal,callback:function(s){t.$set(t.settingJson,"min_d_paypal",s)},expression:"settingJson.min_d_paypal"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min rút Paypal"},model:{value:t.settingJson.min_w_paypal,callback:function(s){t.$set(t.settingJson,"min_w_paypal",s)},expression:"settingJson.min_w_paypal"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút Paypal Nội Bộ"},model:{value:t.settingJson.fee_w_paypal_nb,callback:function(s){t.$set(t.settingJson,"fee_w_paypal_nb",s)},expression:"settingJson.fee_w_paypal_nb"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút Paypal Địa chỉ"},model:{value:t.settingJson.fee_w_paypal_acc,callback:function(s){t.$set(t.settingJson,"fee_w_paypal_acc",s)},expression:"settingJson.fee_w_paypal_acc"}})],1),s("div",{staticClass:"vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12"},[s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min nạp USDT"},model:{value:t.settingJson.min_d_usdt,callback:function(s){t.$set(t.settingJson,"min_d_usdt",s)},expression:"settingJson.min_d_usdt"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min rút USDT"},model:{value:t.settingJson.min_w_usdt,callback:function(s){t.$set(t.settingJson,"min_w_usdt",s)},expression:"settingJson.min_w_usdt"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT Nội bộ"},model:{value:t.settingJson.fee_w_usdt_nb,callback:function(s){t.$set(t.settingJson,"fee_w_usdt_nb",s)},expression:"settingJson.fee_w_usdt_nb"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT BEP20 (BSC)"},model:{value:t.settingJson.fee_w_usdt_BEP20,callback:function(s){t.$set(t.settingJson,"fee_w_usdt_BEP20",s)},expression:"settingJson.fee_w_usdt_BEP20"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT ERC 20"},model:{value:t.settingJson.fee_w_usdt_ERC20,callback:function(s){t.$set(t.settingJson,"fee_w_usdt_ERC20",s)},expression:"settingJson.fee_w_usdt_ERC20"}})],1)])]),s("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base"},[t._m(1),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[s("p",{staticClass:"mb-4"},[t._v("Mặc định Ví sử dụng:")]),s("ul",{staticClass:"centerx"},[s("li",{staticClass:"mb-4"},[s("vs-radio",{attrs:{"vs-value":"usdt"},model:{value:t.settingJson.default_wallet_sys,callback:function(s){t.$set(t.settingJson,"default_wallet_sys",s)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví USDT")])],1),s("li",{staticClass:"mb-4"},[s("vs-radio",{attrs:{disabled:"disabled","vs-value":"btc"},model:{value:t.settingJson.default_wallet_sys,callback:function(s){t.$set(t.settingJson,"default_wallet_sys",s)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví BTC")])],1),s("li",{staticClass:"mb-4"},[s("vs-radio",{attrs:{disabled:"disabled","vs-value":"eth"},model:{value:t.settingJson.default_wallet_sys,callback:function(s){t.$set(t.settingJson,"default_wallet_sys",s)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví ETH")])],1)]),t._m(2)]),s("div",{staticClass:"vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[s("p",{staticClass:"mb-4"},[t._v("Hiển thị Ví thanh toán:")]),s("ul",{staticClass:"centerx"},[s("li",{staticClass:"mb-4 relative"},[s("vs-checkbox",{on:{change:function(s){return t.changeWallet("usdt",s)}},model:{value:t.settingJson.show_wallet_usdt,callback:function(s){t.$set(t.settingJson,"show_wallet_usdt",s)},expression:"settingJson.show_wallet_usdt"}},[t._v("Ví USDT")]),s("div",{staticClass:"absolute",staticStyle:{top:"0",right:"0"}},[s("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:"USDT",color:"color",format:"svg"}})],1)],1),s("li",{staticClass:"mb-4 relative"},[s("vs-checkbox",{on:{change:function(s){return t.changeWallet("paypal",s)}},model:{value:t.settingJson.show_wallet_paypal,callback:function(s){t.$set(t.settingJson,"show_wallet_paypal",s)},expression:"settingJson.show_wallet_paypal"}},[t._v("Ví PAYPAL")]),s("div",{staticClass:"absolute",staticStyle:{top:"0",right:"0"}},[s("img",{attrs:{width:"20",src:e("210b")}})])],1),s("li",{staticClass:"mb-4 relative"},[s("vs-checkbox",{on:{change:function(s){return t.changeWallet("vnd",s)}},model:{value:t.settingJson.show_wallet_vnd,callback:function(s){t.$set(t.settingJson,"show_wallet_vnd",s)},expression:"settingJson.show_wallet_vnd"}},[t._v("Ví VNĐ")]),s("div",{staticClass:"absolute",staticStyle:{top:"0",right:"0"}},[s("img",{attrs:{width:"20",src:e("4957")}})])],1),t.settingJson.show_wallet_vnd?s("div",[s("vs-textarea",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{rows:"15","label-placeholder":"Thông tin ngân hàng"},model:{value:t.settingJson.bankInfo,callback:function(s){t.$set(t.settingJson,"bankInfo",s)},expression:"settingJson.bankInfo"}})],1):t._e()]),t._m(3)])])]),s("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base"},[t._m(4),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Auto Update Seconds"},model:{value:t.settingJson.timeLoopUpdateQuote,callback:function(s){t.$set(t.settingJson,"timeLoopUpdateQuote",s)},expression:"settingJson.timeLoopUpdateQuote"}}),t._m(5),s("div",{staticClass:"m-2 block"},[s("vs-switch",{on:{change:function(s){t.checkOnOffAutoQuote=!t.checkOnOffAutoQuote}},model:{value:t.checkOnOffAutoQuote,callback:function(s){t.checkOnOffAutoQuote=s},expression:"checkOnOffAutoQuote"}},[s("span",{attrs:{slot:"on"},slot:"on"},[t._v("Bật")]),s("span",{attrs:{slot:"off"},slot:"off"},[t._v("Tắt")])])],1),t._m(6)],1),s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[s("p",{staticClass:"mb-4"},[t._v("Quote USD:")]),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_BTC,6)," BTC")},model:{value:t.settingJson.quote_USD_BTC,callback:function(s){t.$set(t.settingJson,"quote_USD_BTC",s)},expression:"settingJson.quote_USD_BTC"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_ETH,4)," ETH")},model:{value:t.settingJson.quote_USD_ETH,callback:function(s){t.$set(t.settingJson,"quote_USD_ETH",s)},expression:"settingJson.quote_USD_ETH"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_USDT,2)," USDT")},model:{value:t.settingJson.quote_USD_USDT,callback:function(s){t.$set(t.settingJson,"quote_USD_USDT",s)},expression:"settingJson.quote_USD_USDT"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_PAYPAL,2)," PAYPAL")},model:{value:t.settingJson.quote_USD_PAYPAL,callback:function(s){t.$set(t.settingJson,"quote_USD_PAYPAL",s)},expression:"settingJson.quote_USD_PAYPAL"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(t.settingJson.quote_USD_VND,2)," VNĐ")},model:{value:t.settingJson.quote_USD_VND,callback:function(s){t.$set(t.settingJson,"quote_USD_VND",s)},expression:"settingJson.quote_USD_VND"}}),t._m(7)],1)])]),s("div",{staticClass:"vx-col w-full mb-base"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[t._m(8),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[s("p",{staticClass:"mb-4"},[t._v("\n                              Cài đặt kênh telegram:\n                            ")]),s("div",[s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID báo đặt cược"},model:{value:t.settingJson.TELEGRAM_BET_ID,callback:function(s){t.$set(t.settingJson,"TELEGRAM_BET_ID",s)},expression:"settingJson.TELEGRAM_BET_ID"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID báo rút tiền"},model:{value:t.settingJson.TELEGRAM_RUT_ID,callback:function(s){t.$set(t.settingJson,"TELEGRAM_RUT_ID",s)},expression:"settingJson.TELEGRAM_RUT_ID"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID báo nạp tiền"},model:{value:t.settingJson.TELEGRAM_NAP_ID,callback:function(s){t.$set(t.settingJson,"TELEGRAM_NAP_ID",s)},expression:"settingJson.TELEGRAM_NAP_ID"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID báo khối lượng giao dịch"},model:{value:t.settingJson.TELEGRAM_BET_AMOUNT,callback:function(s){t.$set(t.settingJson,"TELEGRAM_BET_AMOUNT",s)},expression:"settingJson.TELEGRAM_BET_AMOUNT"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID thông báo"},model:{value:t.settingJson.TELEGRAM_BET_THONG_BAO,callback:function(s){t.$set(t.settingJson,"TELEGRAM_BET_THONG_BAO",s)},expression:"settingJson.TELEGRAM_BET_THONG_BAO"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{label:"ID phím lệnh"},model:{value:t.settingJson.TELEGRAM_BET_PHIM_LENH,callback:function(s){t.$set(t.settingJson,"TELEGRAM_BET_PHIM_LENH",s)},expression:"settingJson.TELEGRAM_BET_PHIM_LENH"}})],1)]),s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[s("p",{staticClass:"mb-4"},[t._v("\n                              Token telegram:\n                            ")]),s("div",[s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},model:{value:t.settingJson.TELEGRAM_TOKEN,callback:function(s){t.$set(t.settingJson,"TELEGRAM_TOKEN",s)},expression:"settingJson.TELEGRAM_TOKEN"}})],1)])])]),s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12"},[t._m(9),s("vs-checkbox",{on:{change:function(s){return t.changeActiveBaoTri(s)}},model:{value:t.settingJson.maintenance,callback:function(s){t.$set(t.settingJson,"maintenance",s)},expression:"settingJson.maintenance"}},[t._v("Bảo trì")]),t._m(10),t._m(11),s("vs-radio",{attrs:{"vs-value":"ct"},model:{value:t.settingJson.default_netw_pay,callback:function(s){t.$set(t.settingJson,"default_netw_pay",s)},expression:"settingJson.default_netw_pay"}},[t._v("Chính thức")]),s("p"),s("vs-radio",{attrs:{"vs-value":"tn"},model:{value:t.settingJson.default_netw_pay,callback:function(s){t.$set(t.settingJson,"default_netw_pay",s)},expression:"settingJson.default_netw_pay"}},[t._v("Thử nghiệm")]),s("p",[s("b",[t._v("- Mạng đang sử dụng là: "+t._s("tn"==t.settingJson.default_netw_pay?"Thử nghiệm":"Chính thức"))])]),t._m(12)],1),s("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12"},[t._m(13),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{"label-placeholder":"Địa chỉ Ví nhận tiền"},model:{value:t.settingJson.ADDRESS_ETH_USDT,callback:function(s){t.$set(t.settingJson,"ADDRESS_ETH_USDT",s)},expression:"settingJson.ADDRESS_ETH_USDT"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{"label-placeholder":"Private KEY Ví nhận tiền ( Có thể rỗng )"},model:{value:t.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT,callback:function(s){t.$set(t.settingJson,"PRIVATE_KEY_ADDRESS_ETH_USDT",s)},expression:"settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{"label-placeholder":"Địa chỉ Ví gửi tiền"},model:{value:t.settingJson.ADDRESS_ETH_TRANSACTION,callback:function(s){t.$set(t.settingJson,"ADDRESS_ETH_TRANSACTION",s)},expression:"settingJson.ADDRESS_ETH_TRANSACTION"}}),s("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{"label-placeholder":"Private KEY Ví gửi tiền"},model:{value:t.settingJson.PRIVATE_KEY_ETH_TRANSACTION,callback:function(s){t.$set(t.settingJson,"PRIVATE_KEY_ETH_TRANSACTION",s)},expression:"settingJson.PRIVATE_KEY_ETH_TRANSACTION"}}),t._m(14)],1)])]),s("vs-button",{staticClass:"w-full",attrs:{color:"success",type:"filled"},on:{click:t.clickSubmitSetting}},[t._v("Cập nhật")])],1)]],2)},i=[function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4",staticStyle:{"text-decoration":"overline"}},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP MIN RÚT / NẠP]:")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP VÍ]:")])])},function(){var t=this,s=t._self._c;return s("p",[s("i",[t._v("Ghi chú: Ví sử dụng mặc định dùng để giao dịch tiền tệ giữa Tài Khoản thực và các Ví phụ khác")])])},function(){var t=this,s=t._self._c;return s("p",[s("i",[t._v("Ghi chú: Các Ví chứa các khoản tiền NẠP và Rút")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP QUOTE USD đồng COIN]: ")]),s("i",[t._v("( Mặc định Auto Update )")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"m-2 mb-4"},[s("i",[t._v("Chú ý: Thời gian được tính bằng (giây)")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"m-2"},[s("i",[t._v("Chú ý: Bật / tắt Auto cập nhật USD Quote")])])},function(){var t=this,s=t._self._c;return s("p",[s("i",[t._v("Chú ý: Paypal mặc định là 1")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP GỬI THÔNG BÁO] (Cần restart lại server để áp dụng thay đổi!) ")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP BẢO TRÌ]: ")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("i",[t._v("- Ghi chú: Bảo trì hệ thống")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP MẠNG NẠP TIỀN]: ")])])},function(){var t=this,s=t._self._c;return s("p",[s("i",[t._v("- Ghi chú: Mạng nạp tiền mặc định BSC "),s("br"),s("a",{attrs:{href:"https://bscscan.com"}},[t._v("https://bscscan.com")])])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-4"},[s("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP ĐỊA CHỈ VÍ]: ")])])},function(){var t=this,s=t._self._c;return s("p",[s("i",[t._v("- Ghi chú: Là địa chỉ Ví dùng để chi trả cho người chơi rút tiền "),s("b",[t._v("(Vui lòng liên kết 2 mạng BEP20 và ERC20)")])])])}],a=e("8f8a"),l={components:{},data:function(){return{cnSv:0,checkOnOffAutoQuote:!0,radioBC:"payeer",settingJson:{min_d_paypal:5,min_d_btc:.001,min_d_eth:.02,min_d_usdt:5,min_w_paypal:5,min_w_btc:.001,min_w_eth:.02,min_w_usdt:5,fee_w_paypal_nb:0,fee_w_paypal_acc:2,fee_w_btc_nb:0,fee_w_btc_acc:3e-4,fee_w_eth_nb:0,fee_w_eth_ERC20:.001,fee_w_usdt_nb:0,fee_w_usdt_BEP20:1,fee_w_usdt_ERC20:2,default_wallet_sys:"usdt",default_netw_pay:"tn",show_wallet_paypal:!0,show_wallet_btc:!1,show_wallet_eth:!1,show_wallet_usdt:!1,show_wallet_vnd:!1,timeLoopUpdateQuote:30,quote_USD_USDT:1,quote_USD_BTC:1,quote_USD_ETH:1,quote_USD_PAYPAL:1,quote_USD_VND:1,TELEGRAM_TOKEN:"",TELEGRAM_BET_ID:"",TELEGRAM_RUT_ID:"",TELEGRAM_NAP_ID:"",TELEGRAM_BET_AMOUNT:"",TELEGRAM_BET_THONG_BAO:"",TELEGRAM_BET_PHIM_LENH:"",ADDRESS_ETH_USDT:"",PRIVATE_KEY_ADDRESS_ETH_USDT:"",ADDRESS_ETH_TRANSACTION:"",PRIVATE_KEY_ETH_TRANSACTION:"",maintenance:!1}}},computed:{activeNTB:function(){return""!=this.settingJson.teleChatIDBet},activeNTF:function(){return""!=this.settingJson.teleChatID&&""!=this.settingJson.teleToken}},methods:{formatPrice:function(t,s){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:s});return e.format(t)},changeActiveBaoTri:function(t){var s=t.target.checked;this.settingJson.maintenance=s},changeWallet:function(t,s){var e=s.target.checked;switch(t){case"usdt":this.settingJson.show_wallet_usdt=e;break;case"btc":this.settingJson.show_wallet_btc=e;break;case"eth":this.settingJson.show_wallet_eth=e;break;case"paypal":this.settingJson.show_wallet_paypal=e;break;case"vnd":this.settingJson.show_wallet_vnd=e;break}},clickSubmitSetting:function(){var t={qUSDT:this.settingJson.quote_USD_USDT,qETH:this.settingJson.quote_USD_ETH,qBTC:this.settingJson.quote_USD_BTC,qPaypal:this.settingJson.quote_USD_PAYPAL,qVND:this.settingJson.quote_USD_VND,tCUseSys:this.settingJson.default_wallet_sys.toLowerCase(),mDBTC:this.settingJson.min_d_btc,mDETH:this.settingJson.min_d_eth,mDUSDT:this.settingJson.min_d_usdt,mDPaypal:this.settingJson.min_d_paypal,mWBTC:this.settingJson.min_w_btc,mWETH:this.settingJson.min_w_eth,mWUSDT:this.settingJson.min_w_usdt,mWPaypal:this.settingJson.min_w_paypal,iAWPaypal:this.settingJson.show_wallet_paypal,iAWETH:this.settingJson.show_wallet_eth,iAWUSDT:this.settingJson.show_wallet_usdt,iAWBTC:this.settingJson.show_wallet_btc,iAWVND:this.settingJson.show_wallet_vnd,bankInfo:this.settingJson.bankInfo,fDPaypalNB:this.settingJson.fee_w_paypal_nb,fDPaypalAcc:this.settingJson.fee_w_paypal_acc,fDBTCNB:this.settingJson.fee_w_btc_nb,fDBTCAcc:this.settingJson.fee_w_btc_acc,fDETHNB:this.settingJson.fee_w_eth_nb,fDETHERC20:this.settingJson.fee_w_eth_ERC20,fDUSDTNB:this.settingJson.fee_w_usdt_nb,fDUSDTBEP20:this.settingJson.fee_w_usdt_BEP20,fDUSDTERC20:this.settingJson.fee_w_eth_ERC20,TELEGRAM_TOKEN:this.settingJson.TELEGRAM_TOKEN,TELEGRAM_BET_ID:this.settingJson.TELEGRAM_BET_ID,TELEGRAM_RUT_ID:this.settingJson.TELEGRAM_RUT_ID,TELEGRAM_NAP_ID:this.settingJson.TELEGRAM_NAP_ID,TELEGRAM_BET_AMOUNT:this.settingJson.TELEGRAM_BET_AMOUNT,TELEGRAM_BET_THONG_BAO:this.settingJson.TELEGRAM_BET_THONG_BAO,TELEGRAM_BET_PHIM_LENH:this.settingJson.TELEGRAM_BET_PHIM_LENH,ADDRESS_ETH_USDT:this.settingJson.ADDRESS_ETH_USDT,PRIVATE_KEY_ADDRESS_ETH_USDT:this.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT,ADDRESS_ETH_TRANSACTION:this.settingJson.ADDRESS_ETH_TRANSACTION,PRIVATE_KEY_ETH_TRANSACTION:this.settingJson.PRIVATE_KEY_ETH_TRANSACTION,IS_TEST_SMART_CHAIN:"tn"==this.settingJson.default_netw_pay,timeLoopQuote:this.settingJson.timeLoopUpdateQuote,autoQuote:this.settingJson.checkOnOffAutoQuote,maintenance:this.settingJson.maintenance};this.sendMessage({type:"setDataSys",data:t})},sendMessage:function(t){return this.connection.send(JSON.stringify(t)),this.$vs.notify({text:"Đã cập nhật hệ thống",color:"success",position:"top-right",iconPack:"feather",icon:"icon-message-square"})},connectSever:function(){var t=this;this.connection=new WebSocket(a.BASE_URL_SOCKET_SYS),this.connection.onopen=function(){console.log("Successfully connected to the echo websocket server systems...")},this.connection.onclose=function(){0==t.cnSv?t.$vs.notify({text:"Không kết nối được tới máy chủ. Sẽ kết nối lại sau 5 giây",color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}):t.$vs.notify({text:"Đang kết nối lại lần "+t.cnSv,color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}),6==t.cnSv&&t.$vs.notify({text:"Kết nối thất bại. Vui lòng kiểm tra và bật lại máy chủ",color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}),t.cnSv<=5&&setTimeout((function(){t.connectSever(),t.cnSv++}),5e3)},this.connection.onmessage=function(s){var e=JSON.parse(s.data),n=e.data;"getDataSys"===e.type&&(t.settingJson.min_d_paypal=n.minDepositPaypal,t.settingJson.min_d_btc=n.minDepositBTC,t.settingJson.min_d_eth=n.minDepositETH,t.settingJson.min_d_usdt=n.minDepositUSDT,t.settingJson.min_w_paypal=n.minWithdrawalPaypal,t.settingJson.min_w_btc=n.minWithdrawalBTC,t.settingJson.min_w_eth=n.minWithdrawalETH,t.settingJson.min_w_usdt=n.minWithdrawalUSDT,t.settingJson.fee_w_paypal_nb=n.feeRutPaypalNoiBo,t.settingJson.fee_w_paypal_acc=n.feeRutPaypalAcc,t.settingJson.fee_w_btc_nb=n.feeRutBTCNoiBo,t.settingJson.fee_w_btc_acc=n.feeRutBTCAcc,t.settingJson.fee_w_eth_nb=n.feeRutETHNoiBo,t.settingJson.fee_w_eth_ERC20=n.feeRutETHERC20,t.settingJson.fee_w_usdt_nb=n.feeRutUSDTNoiBo,t.settingJson.fee_w_usdt_BEP20=n.feeRutUSDTBEP20,t.settingJson.fee_w_eth_ERC20=n.feeRutUSDTERC20,t.settingJson.default_wallet_sys=n.typeCurrUseSys.toLowerCase(),t.settingJson.show_wallet_paypal=n.isActiveWalletPaypal,t.settingJson.show_wallet_vnd=n.isActiveWalletVND,t.settingJson.bankInfo=n.bankInfo,t.settingJson.show_wallet_btc=n.isActiveWalletBTC,t.settingJson.show_wallet_eth=n.isActiveWalletETH,t.settingJson.show_wallet_usdt=n.isActiveWalletUSDT,t.settingJson.timeLoopUpdateQuote=n.timeLoop,t.checkOnOffAutoQuote=n.autoQuoteSet,t.settingJson.quote_USD_BTC=n.quotePriceBTC,t.settingJson.quote_USD_ETH=n.quotePriceETH,t.settingJson.quote_USD_USDT=n.quotePriceUSDT,t.settingJson.quote_USD_PAYPAL=n.quotePricePAYPAL,t.settingJson.quote_USD_VND=n.quotePriceVND,t.settingJson.TELEGRAM_TOKEN=n.TELEGRAM_TOKEN,t.settingJson.TELEGRAM_BET_ID=n.TELEGRAM_BET_ID,t.settingJson.TELEGRAM_RUT_ID=n.TELEGRAM_RUT_ID,t.settingJson.TELEGRAM_NAP_ID=n.TELEGRAM_NAP_ID,t.settingJson.TELEGRAM_BET_AMOUNT=n.TELEGRAM_BET_AMOUNT,t.settingJson.TELEGRAM_BET_THONG_BAO=n.TELEGRAM_BET_THONG_BAO,t.settingJson.TELEGRAM_BET_PHIM_LENH=n.TELEGRAM_BET_PHIM_LENH,t.settingJson.ADDRESS_ETH_USDT=n.ADDRESS_ETH_USDT,t.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT=n.PRIVATE_KEY_ADDRESS_ETH_USDT,t.settingJson.ADDRESS_ETH_TRANSACTION=n.ADDRESS_ETH_TRANSACTION,t.settingJson.PRIVATE_KEY_ETH_TRANSACTION=n.PRIVATE_KEY_ETH_TRANSACTION,t.settingJson.default_netw_pay=1==n.IS_TEST_SMART_CHAIN?"tn":"ct",t.settingJson.maintenance=n.maintenance)}}},created:function(){},mounted:function(){this.isMounted=!0,this.connectSever()}},o=l,_=(e("ffd9"),e("2877")),c=Object(_["a"])(o,n,i,!1,null,null,null);s["default"]=c.exports},ffd9:function(t,s,e){"use strict";e("ae5b")}}]);