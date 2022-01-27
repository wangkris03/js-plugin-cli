#!/usr/bin/env node

const program = require("commander");

program.version(require("../package.json").version, "-v,--version");

// 请求 lib/mirror.js
const setMirror = require("../lib/mirror");

// mirror 切换镜像链接
program
  .command("mirror <template_mirror>")
  .description("Set the template mirror.")
  .action((tplMirror) => {
    setMirror(tplMirror);
  });

// 请求 lib/download.js
const dlTemplate = require("../lib/download");

// template 下载/更新模板
program
  .command("template")
  .description("Download template from mirror.")
  .action(() => {
    dlTemplate();
  });

// 请求 lib/update.js
const updateChk = require("../lib/update");

// upgrade 检测更新
program
  // 声明的命令
  .command("upgrade")
  // 描述信息，在帮助信息时显示
  .description("Check the js-plugin-cli version.")
  .action(() => {
    // 执行 lib/update.js 里面的操作
    updateChk();
  });

program.parse(process.argv);
