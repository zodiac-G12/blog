(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{266:function(n,t,e){"use strict";e.r(t);var o=e(77),r=e.n(o),c={data:function(){return{link:"content11",prekiji:'\n## 想定読者\n　Reactをある程度理解していて、興味がある人。Chart.jsに興味がある人\n## 使用技術\n- [React](https://ja.reactjs.org/)\n- [Chart.js](https://www.chartjs.org/)([react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2))\n\n## 内容\n- ReactとChart.jsのちょっとしたコード解説\n- Chart.jsでのグラフの横幅をレスポンシブに調整する手段\n\n## 長くて読まないよ\n- アプリ: https://zodiac-g12.github.io/crysistear/\n- ソースコード: https://github.com/zodiac-G12/crysistear\n\n## 動機\n　以前自分で作っていた都内コロナ感染者数のアプリに関して、課題が幾つかあったので、改善にトライした\n\n## 課題\n- 初回サイト内でグラフの全てが表示出来るようにサイズ調整\n- グラフの幅の調整がユーザーの手で出来るようにスライダーの実装\n\n## ソースコード\n\n```typescript\nimport React, { useState, useEffect } from \'react\';\nimport Chart, { Bar } from \'react-chartjs-2\';\nimport axios from \'axios\';\n\nconst getData = async (setData, setLook) => {\n  try {\n    const res = await axios.get("https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/daily_positive_detail.json");\n    const json = res.data;\n    console.log(json);\n    const jsonData = json.data;\n    const dates = jsonData.map(item=>item.diagnosed_date);\n    const counts = jsonData.map(item=>item.count);\n    console.log(dates, counts);\n\n    const data = {\n      labels: dates,\n      datasets: [\n        {\n          label: "COVID-19 in TOKYO",\n          backgroundColor: \'rgba(255,99,132,0.2)\',\n          borderColor: \'rgba(255,99,132,1)\',\n          borderWidth: 1,\n          hoverBackgroundColor: \'rgba(255,99,132,0.4)\',\n          hoverBorderColor: \'rgba(255,99,132,1)\',\n          data: counts\n        }\n      ]\n    };\n\n    setData(data);\n    setLook({date: json.date, count: counts.slice(-1)[0]});\n  } catch (err) {\n    console.error(err);\n  }\n};\n\nfunction App() {\n  // 感染者の過去全データ\n  const [data, setData] = useState({});\n  // 今日の日付・感染者数\n  const [look, setLook] = useState({date: "", count: null});\n  const [range, setRange] = useState(0);\n\n  useEffect(() => {\n    getData(setData, setLook);\n  }, []);\n\n  return (\n    <>\n      <h2\n        style={{\n          position: "fixed",\n          width: "100vw",\n          textAlign: "center",\n          color: "black",\n          fontSize: "5vh",\n        }}\n      >\n        {look.date.split(" ")[0].replace("/", "年 ").replace("/", "月")+"日"}\n      </h2>\n      <h1\n        style={{\n          position: "fixed",\n          width: "100vw",\n          textAlign: "center",\n          color: "crimson",\n          fontSize: "10vh",\n          top: "8vh",\n        }}\n      >\n        <a style={{fontSize: "5vh", color:"black"}}>感染者 </a>\n        {look.count}\n        <a style={{fontSize: "5vh", color:"black"}}> 人</a>\n      </h1>\n      <div style={{width: `${100 + 700 * (range / 100)}vw`, height: "50vh", overflowX: "scroll", overflowY: "hidden", paddingTop: "30vh"}}>\n        <Bar\n          data={data}\n          width={window.innerWidth + (1 + 7 * (range / 100))}\n          redraw={true}\n          height={window.innerHeight * 0.5}\n          options={{\n            responsive: true,\n            maintainAspectRatio: false\n          }}\n        />\n      </div>\n      <div style={{position: "fixed", width: "100vw", textAlign: "center", marginTop: "5vh"}}>\n        <input type="range" id="dataRange" name="dataRange" min="0" max="100" value={range} step="1" onChange={(e)=>setRange(parseInt(e.target.value))} />\n        <label htmlFor="dataRange">Range</label>\n      </div>\n    </>\n  );\n}\n\nexport default App;\n```\n<br>\n## ソースコード解説\n\n- getData()\n  - [東京都 新型コロナウイルス感染症対策サイト](https://github.com/tokyo-metropolitan-gov/covid19)のRepositoryにあるデータをaxiosを使って取得\n  - データを[Chart.jsの形式](https://www.chartjs.org/docs/latest/getting-started/usage.html)に整形\n  - 引数として受け取ったReactフックを使ってデータを更新(登録)\n\n- &lt;Bar&gt;コンポーネント\n  - data: 描画するデータを渡す\n    - labels: X軸の値\n    - datasets.data: Y軸の値\n  - redraw: Boolean、trueのときに更新されたタイミングでもう一度描画アニメーションが挿入される\n  - height: 固定\n  - width: rangeの値が更新されるごとに長さが再調整され更新される\n  - [options](https://www.chartjs.org/docs/latest/general/responsive.html)\n    - responsive: Boolean、プロパティが更新されたときに、レスポンシブに変更されるかどうかの値、ここをfalseにするとグラフが横に伸びない\n    - maintainAspectRatio: Boolean、今回は横幅だけ伸ばしたいのでfalse、trueにすると縦も伸びてしまう\n\n- inputタグ\n  - MDNを参考にしながら実装、https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/range\n\n## 改善した点\n　高さを固定にして、グラフ以外の要素をfixedにした。それに伴って一旦 mata viewport を user-scalable: none にしていて、\nこれはUXの観点で非常にまずいので、今後直したい。\n\n　BarコンポーネントはCanvasタグに変換されるが、これをdivタグで囲い、両方の要素の横の長さをrangeの値を使って調整することで、\nグラフの横幅調節を可能にした。この点をあまり理解しておらず、謎挙動に感じたので、今後調べてまとめたい。\n\n## 感想\n　パフォーマンス改善はしたものの、結構汚いコードなので、リファクタの余地ありだと感じている。\nわかったこととしては、react-chartjs-2も所詮はChart.jsのラッパーであるが、なんにしてもChart.jsの公式ドキュメントが読みづらくてかなわなかった。\n非常に有用性のあるツールなだけに残念。stackoverflowなどや公式issueでも露頭に迷っている人が多く見られた。\nこういう人たちのためにも、自分がアウトプットするか、contributeしたい。\n'}},computed:{kiji:function(){return r()(this.prekiji)}},components:{DefaultArticle:function(){return e.e(0).then(e.bind(null,283))}}},l=e(20),component=Object(l.a)(c,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("DefaultArticle",{attrs:{content:{link:this.link,kiji:this.kiji}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);