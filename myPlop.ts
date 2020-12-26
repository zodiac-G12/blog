process.stdin.resume();
process.stdin.setEncoding('utf8');

import * as fs from "fs";
import * as readline from "readline";

//keypressイベントを使用可能にする
readline.emitKeypressEvents(process.stdin);

type Color = string | null;

const black   : Color = '\u001b[30m';
const red     : Color = '\u001b[31m';
const green   : Color = '\u001b[32m';
const yellow  : Color = '\u001b[33m';
const blue    : Color = '\u001b[34m';
const magenta : Color = '\u001b[35m';
const cyan    : Color = '\u001b[36m';
const white   : Color = '\u001b[37m';
const reset   : Color = '\u001b[0m';

const targetFileNameWithFullPath = "./components/fileLists.json";

interface logProps {
  color: Color
  content: any
}

const readlineD = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ユーザからのキーボード入力を取得する Promise を生成する
function readUserInput (props: logProps): Promise<string> {
  return new Promise((resolve, reject) => {
    readlineD.question(props.color + props.content + reset, (answer) => {
      resolve(answer);
      readlineD.close();
    });
  });
}

const log = async (props: logProps): Promise<void> => {
  console.log(props.color + props.content + reset);
}

const comment = `
  How do you make title?

`;

(async () => {
  try {
    const blogConfig = JSON.parse(fs.readFileSync(targetFileNameWithFullPath, "utf-8"));

    // log({color: white, content: blogConfig});

    const blogList = fs.readdirSync("./pages/");

    // log({color: white, content: blogList});

    const contentCount = blogList.filter((item) => item.match("content")).length;

    const newFile = "content" + (contentCount + 1).toString() + ".vue";

    const fileContent = fs.readFileSync('./templates/contentX.vue', 'utf8').replace("contentX", `content${contentCount + 1}`);

    fs.writeFileSync(`./pages/${newFile}`, fileContent, 'utf8');

    const userInput = await readUserInput({color: green, content: comment});

    log({color: blue, content: userInput});

    blogConfig[("content" + (contentCount + 1).toString())] = {"title": userInput, "samn": "nuxt.jpeg", "time": (new Date().toLocaleDateString().replace(/\//, "年").replace(/\//, "月") + "日" + "公開"), "link": ("content" + (contentCount + 1).toString())};

    fs.writeFileSync("./components/fileLists.json", JSON.stringify(blogConfig), 'utf8');

  } catch (error) {
    log({color: red, content: error});
  }
})();
