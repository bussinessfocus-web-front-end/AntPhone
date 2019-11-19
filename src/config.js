/**
 * Created by Medicon on 2019/11/19.
 */

let config={};

//开发环境下的配置
config.baseUrl="开发环境url";

//测试环境下的配置
if(process.env.RUN_ENV && process.env.RUN_ENV.trim() == "test"){
    config.baseUrl=""
}

//生产环境下的配置
if(process.env.NODE_ENV == "production"){
    config.baseUrl=""
}

export default config;