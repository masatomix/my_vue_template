export default {
  name: 'my_vue_template_dev',
  logging: [
    {
      name: 'main',
      level: 'debug',
      // streams: [{ path: "./logs/main.log", period: "1d", count: 7 }]
    },
    {
      name: 'httpLogger',
      level: 'debug',
      // streams: [{ path: "./logs/main_http.log", period: "1d", count: 7 }]
    },
  ],
}
