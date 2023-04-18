没开发过后端，只有之前写uniapp时写过云函数操作云数据库，进行增删改查
1.查找
database.collection("uni-id-log").get().then((res)=>{})
2.增
database.collection("uni-id-log").add({user_id:123})
3.改
database.collection("uni-id-log").where({user_id: token}).update({date: new Date().getTime()})
4.删
database.collection("uni-id-log").where({user_id: token}).remove()

接口使用axios请求


配置跨域，我之前在webpack的config使用 proxy配置了本地，开发环境是服务端设置了cors请求头
 proxy: {
      '/': {
        target: 'http://192.168.2.231:8088', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: false,
        pathRewrite: {
          '^/': '/' //需要rewrite的,
        }
      },
    }