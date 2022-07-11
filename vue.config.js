module.exports={
   chainWebpack: (config)=>{
      const svgRule = config.module.rule("svg");

      svgRule.users.clear();

      svgRule
      .use("babel-loader")
      .loader("baber-loader")
      .end()
      .use("use-svg-loader")
      .loader("vue-svg-loader")
   },
};