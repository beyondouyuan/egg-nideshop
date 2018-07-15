/*
 * @Author: qiao
 * @Date: 2018-06-28 15:18:18
 * @Last Modified by: qiao
 * @Last Modified time: 2018-07-15 15:29:42
 * 插件加载开关配置，所有插件都需要在这里设置开关
 */

import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  validate: {
    package: 'egg-validate',
  },
};

export default plugin;
