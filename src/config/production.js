export default {
  name: 'my_vue_template_prod',
  logging: [
    {
      name: 'main',
      level: 'ERROR',
      // streams: [{ path: "./logs/main.log", period: "1d", count: 7 }]
    },
    {
      name: 'httpLogger',
      level: 'ERROR',
      // streams: [{ path: "./logs/main_http.log", period: "1d", count: 7 }]
    },
  ],
}
