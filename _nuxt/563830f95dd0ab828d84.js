(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{272:function(n,t,e){"use strict";e.r(t);var r=e(77),l=e.n(r),c={data:function(){return{link:"content3",prekiji:'\n## Rustのコード\n\n```rust\nuse std::io;\n\nfn main() {\n    let mut input = String::new();\n    match io::stdin().read_line(&mut input) {\n        Ok(n) => {\n            let s: Vec<&str> = input.trim().split(" ").collect();\n            let c0: &str = &s[0];\n            let c1: &str = &s[1];\n            let i: usize = c0.parse().unwrap();\n            let j: usize = c1.parse().unwrap();\n            println!("{} bytes read", n);\n            println!("{}", i + j);\n        }\n        Err(error) => {\n            println!("error: {}", error);\n        }\n    }\n}\n```\n　\n\n## 実行例\n\n```sh\n$ cargo run\n12 27\n6 bytes read\n39\n```\n\n'}},computed:{kiji:function(){return l()(this.prekiji)}},components:{DefaultArticle:function(){return e.e(0).then(e.bind(null,283))}}},o=e(20),component=Object(o.a)(c,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("DefaultArticle",{attrs:{content:{link:this.link,kiji:this.kiji}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);