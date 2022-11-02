/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require("path");
const fs = require("fs");
const { writeResultFile } = require('./src/utils');

function checkEntry(url) {
  let result = "";
  result += `line:22,first:::::::::`
  const sourceDirname = __dirname;
  __dirname = "interface/sdk-js/build-tools/api_check_plugin";
  try {
    const execSync = require("child_process").execSync;
    execSync("cd interface/sdk-js/build-tools/api_check_plugin && npm install");
    const path2 = path.resolve(sourceDirname, '../../../../', "ci_tool/ci_build/readme_file.txt");
    result += `line:33,second:::::::::path2::${path2} is ${fs.existsSync(path2)}`;
    const path3 = path.resolve(__dirname, '../../../../', "ci_tool/ci_build/readme_file.txt");
    result += `line:40,third::::::::::path3::${path3} is ${fs.existsSync(path3)}`;
    const { scanEntry } = require(path.resolve(__dirname, "./src/api_check_plugin"));
    result += scanEntry(url);
    const content = fs.readFileSync(url, "utf-8");
    result += `mdFilePath = ${url}, content = ${content}, __dirname = ${__dirname}, sourceDirname = ${sourceDirname}`;
    const { removeDir } = require(path.resolve(__dirname, "./src/utils"));
    removeDir(path.resolve(__dirname, "node_modules"));
  } catch (error) {
    // catch error
    result += `CATCHERROR : ${error}, mdFilePath = ${url}, __dirname = ${__dirname}, sourceDirname = ${sourceDirname}`;
  }
  writeResultFile(result, path.resolve(__dirname, "./Result.txt"), {});
}
checkEntry(process.argv[2]);
