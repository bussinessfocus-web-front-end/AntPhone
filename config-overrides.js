/**
 * Created by Lee on 2019/11/17.
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
       fixBabelImports('import', {
           libraryName: 'antd-mobile',
            style: 'css',
       }),
);