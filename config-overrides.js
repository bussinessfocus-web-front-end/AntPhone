/**
 * Created by Lee on 2019/11/17.
 */
const { override, fixBabelImports } = require('customize-cra');

//输出打包提示
if(process.env.RUN_ENV && process.env.RUN_ENV.trim()  == "test"){
    console.log("打包测试环境程序");
}else{
    if(process.env.NODE_ENV=="production"){
        console.log("打包生产环境程序");
        process.env.GENERATE_SOURCEMAP = "false";//配置构建时map文件不生成
    }else if(process.env.NODE_ENV=="development"){
        console.log("打包开发环境程序");
    }else{
        console.log("测试程序");
    }
}

module.exports = override(
       fixBabelImports('import', {
           libraryName: 'antd-mobile',
            style: 'css',
       }),
);