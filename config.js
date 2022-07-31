let USE_SSL = false;

module.exports = {
  USE_SSL,
  CF_SSL: {
    key: "certs/panazic.key",
    cert: "certs/panazic.crt",
  },

  DOMAIN: "icmarkos.com",
  TITLE_SITE: "KTATRADE",
  CONTACT: "",
  MAIL_LOGO: "icmarkos.com/logo.png",
  MAIL_IMG_FOOTER: "icmarkos.com/line.png",

  IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

  SO_GIAY_DEM_NGUOC: 30,
  RATE_NHA_THUONG: 95,
  BET_MAX: 1,

  BINANCE_APIKEY:
    "",
  BINANCE_APISECRET:
    "",

  // THANH TOÁN PAYPAL

  PAYPAL_MODE: "sandbox", //sandbox or live
  PAYPAL_CLIENT_ID:
    "", //'',
  PAYPAL_CLIENT_SECRET:
    "", //'',
  // KẾT THÚC THANH TOÁN PAYPAL

  DATA_HOST: "localhost",
  DATA_USER: "root",
  DATA_PASS: "",//pass sql
  DATA_DB: "bo", // db name
  DATA_PORT: 3306,

  PORT_TRADE: 2096, // default 443 ssl
  PORT_SYS: 2087,
  PORT_NAP: 2083,
  PORT_NOTIFY: 2053,
  PORT_SERVER: 80,

  TELEGRAM_TOKEN: "testbo112", // sử dụng BOT
  TELEGRAM_BET_ID: "testbo112", // là kênh để gửi thông báo
  TELEGRAM_RUT_ID: "testbo112", // là kênh để gửi thông báo
  TELEGRAM_NAP_ID: "testbo112",
  TELEGRAM_BET_AMOUNT: "testbo112",
  TELEGRAM_BET_THONG_BAO: "testbo112",
  TELEGRAM_BET_PHIM_LENH: "testbo112",

  TOKEN_KEY: "ktatrade2022",

  PATH_SYS_CONFIG: "stSys",
  PATH_SYS_COMMISSION: "stCommission",
  PATH_SYS_COMMISSION_VIP: "stCommissionVip",

  ABI_USDT_MAINNET: "USDT_BEP20_mainnet",
  ABI_USDT_TESTNNET: "USDT_BEP20_testnet",
};
