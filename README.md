# web-learning

プログラミング学習用のリポジトリです。

## GitHub Pages URL

https://tetsuo-koike.github.io/web-learning/

## 内容
HTML,CSS,Git,GitHub Pagesを使って作成した自己紹介ページです

## Week1 振返り

Week1では、VS Code、HTML、CSS、Git、GitHubの基本を学んだ

最初はVS Codeの使い方やターミナル操作から始め、HTMLで自己紹介ページを作成した
その後、CSSで見た目を整え、section、class、Flexbox、レスポンシブ対応を使ってページを改善した

最後にGitで変更履歴を管理し、GitHubにコードをPush（送信）して、GitHub PagesでWebページとして公開した。


## Week1で出来るようになった事
- VS Codeでファイルを作成・編集できる
- HTMLで基本的なWebページを作れる
- CSSで色、余白、文字、レイアウトを調整できる
- section、div、classを使ってページを整理できる
- Flexboxで横並びを作れる
- @mediaを使ってスマホ幅に対応できる
- Gitで変更をcommitできる（コードの変更履歴を加えて、現状をセーブする事）
- GitHubにpush(送信)できる
- GitHub PagesでWebページを公開できる

## Week 2 Day 11

- JavaScriptの配列とリスト表示を学習した(複数のデータをまとめて取り扱う練習)
- HTMLに空のulタグを作り、JavaScriptでliを追加した
- 配列を使って、複数の学習項目をまとめて扱った ➡ 今日のメインテーマ
- 配列の番号は0から始まることを確認した
- studyItems[0]で配列の最初の要素を取り出した
- studyItems.lengthで配列の要素数を取得した
- document.createElementを使って、JavaScriptからliタグを作成した
- textContentを使って、作成したliに文字を入れた
- appendChildを使って、作成したliをulの中に追加した
- for文を使って、配列の中身を1つずつリストとして表示した　➡ 今日のメインテーマ
- CSSでJavaScriptから作ったリストの見た目を整えた

### 今日覚えた言葉

- 配列：複数のデータをまとめて扱うためのもの
- 要素：配列の中に入っている1つ1つのデータ
- index：配列の番号。JavaScriptでは0から始まる
- length：配列の要素数を表すもの
- createElement：JavaScriptからHTML要素を作る命令
- appendChild：親要素の中に子要素を追加する命令
- for文：同じ処理を繰り返すための書き方
- i：繰り返し処理でよく使われる番号用の変数

### 今日理解したこと

配列を使うと、複数のデータをまとめて扱うことができる。

```javascript
const studyItems = ["HTML", "CSS", "JavaScript", "GitHub", "DOM"];
```

配列の番号は0から始まる。
```javascript
studyItems[0] // HTML
studyItems[1] // CSS
studyItems[2] // JavaScript
```

lengthを使うと、配列の要素数を取得できる。

```javascript
studyItems.length
```

for文を使うと、配列の中身を1つずつ取り出して、同じ処理を繰り返すことができる。
```javascript
for (let i = 0; i < studyItems.length; i++) {
    const item = document.createElement("li");
    item.textContent = studyItems[i];
    studyList.appendChild(item);
}
```
このコードでは、配列の中身を1つずつ取り出し、liタグを作って、ulの中に追加している。
これはToDoアプリで、複数のタスクを画面に表示する処理の土台になる。



## Week 2 Day 10

- 入力欄を使ったJavaScriptの練習をした
- inputタグを使って、名前を入力する欄を作成した
- labelタグを使って、入力欄の説明を追加した
- JavaScriptでgetElementByIdを使い、入力欄とボタンを取得した
- .valueを使って、入力欄に入力された文字を取得した
- addEventListenerを使って、ボタンがクリックされた時の処理を書いた
- if文を使って、入力欄が空かどうかを判定した
- elseを使って、入力がある場合とない場合で処理を分けた
- textContentを使って、画面に表示される文章を変更した
- style.backgroundColorを使って、条件によって背景色を変更した

### 今日覚えた言葉

- input：ユーザーが文字などを入力するためのHTMLタグ
- label：入力欄の説明を表すHTMLタグ
- value：入力欄に入っている値を取得するためのもの
- if：条件が成り立つ時だけ処理を実行する書き方
- else：ifの条件に当てはまらなかった時の処理を書く場所
- ===：左右の値が同じかどうかを比較する記号
- 空文字：`""` のこと。何も文字が入っていない状態
- 条件分岐：条件によって実行する処理を分けること

### 今日理解したこと

JavaScriptでは、入力欄に入っている文字を`.value`で取得できる。

```javascript
const inputName = nameInput.value;
```

これは、id="nameInput"の入力欄に入力された文字をinputNameとして使えるようにしている。
ifを使うと、条件によって処理を分けることができる。

```javascript
if (inputName === "") {
    message.textContent = "名前を入力してください";
    message.style.backgroundColor = "#fee2e2";
} else {
    message.textContent = `こんにちは、${inputName}さん`;
    message.style.backgroundColor = "#dbeafe";
}
```
このコードでは、入力欄が空の場合は注意メッセージと赤い背景を表示し、名前が入力されている場合はあいさつ文と青い背景を表示している。
=は代入、===は比較に使う。



## Week2 Day9

- JavaScriptの変数と価について学習した
- constを使って、文字列や数値に名前を付けた
- console.logを使って、Consoleに値を表示して確認した
- 文字列と数値の違いを確認した
- +を使って文字列を連結した
- テンプレートリテラルを使って、文章の中に変数を埋め込んだ
- JavaScriptで作った文章を、textContentを使って画面に表示した

### 今日覚えた言葉

- 変数：値に名前を付けて扱うためのもの
- const: あとから別の値に入れ替えない前提で名前を付ける書き方
- string:文字列、ダブルクォートなどで囲まれた文字
- number:数値。計算に使える数字
- console.log:Consoleに値を表示して確認する命令
- 文字列連結:文字と文字をつなげること
- テンプレートリテラル：バッククォートで囲み、${}を使って変数を文章に埋め込む書き方
- textContent:HTML要素の文字内容

###　今日理解した事

JavaScriptでは、`const`を使って値に名前を付けることができる

```javascript

const userName = "Tetsuo";
const studyDay = 9;



## Week2 Day8

- Week2のJavaScript学習を開始した
- week2-javascriptフォルダを作成した
- index.html,style.css,script.jsファイルを作成した
- HTMLにCSS,JavaScriptを読み込むタグを設定した(link rel/script src="script.js)
- id="message"とid="changebutton"をHTMLに付けた
- JavaScriptでdocument.getElementById("・・・")を使い、HTML要素を取得した
- addEventListener("click",function(){・・・})を使って、ボタンのクリックに反応する処理を書いた
- textContentを使って、画面の文章を変更した
- style.backgroundColorを使って、JavaScriptから背景色を変更した


## 今日覚えた言葉

- JavaScript:Webページに動きや反応を付けるための言語
- script.js:JavaScriptを書くためのファイル
- scriptタグ:HTMLタグからJavaScriptファイルを読み込むためのタグ
- const:JavaScript内で名前を付けて値を扱うための書き方
- document:ブラウザが持っているHTML全体を表す物
- getElementById:：指定したidを持つHTML要素を探し、取得する命令
- addEventListener:クリックなどの出来事を持って、処理を実行する命令
- click:クリックされた時を表すイベント
- textContent:HTML要素の文字内容
- style.backgroundColor:HTML要素の背景色をJavaScriptから変更する指定

## 今日理解した事

JavaScriptでは、まずHTMLの中から操作したい要素を探して、取得するところから始まる

```javascript
const message = document.getElementById("message");
```


## Week1復習ドリル２
- GitHubリポジトリ風の学習ログページを作成した
- header,nav,main,section,divを使ってページ構造を作った
- navとul/liを使って,Code/Issues/Pull Requests/Actionsのタブメニューを作った
- .tab-list ulにdisplay:flexを使って、メニューを横並びにした
- file-listというclassを使って、ファイル一覧だけにCSSを当てた
- border,boder-radius,overflow:hiddenを使ってGitHub風の格子状リストを作った
- idとclassを同じタグに着けて、それぞれリンク用・CSS指定用として使い分けた
- 二重枠の原因を確認し、code-sectionを使って不要な枠を消した
- スマホ幅でも表示が崩れないか確認した

## 今日覚えた言葉

- border:枠線を指定するCSS
- solid:実線を表すboderの種類
- overflow:hidden:中身が角丸の外にはみ出さないようにする指定
- last-child:最後の要素だけ指定するCSS

## 今日理解した事
idはページ内リンクの移動先を作るために使い、classはCSSで見た目を整えるために使う

同じHTMLタグにidとclassを両方つけることもできる

```
<section id = "readme" class="readme">
```



## Week1復習ドリル１
- 学習ドキュメント風のWebページを作成した
- header,nav,mainを使ってページの構造を作った
- サイドメニューと本文をFlexboxで横並びにした
- idとリンクを使って、ページ内を移動できるようにした
- :hoverを使って、マウスが乗ったリンクの色を変更した
- メディアクエリを使って、スマホでは横並びになるようにした
- Gitでコミットし、GitHub Pagesへ公開した

##　今日覚えた言葉
- nav:メニューや移動用リンクをまとめるタグ
- main:ページの中心となる内容をまとめるタグ
- id:HTML要素に固有の名前を付けるもの
- hover:マウスが乗っている間だけCSSを適用する指定
- column:要素を縦方向に並べる指定

## idとclassの違い

idとclassは共に、HTML要素に名前を付けるために使う。
idはページ内で１つの要素を特定するための固有の名前。基本的に１ページで１回だけ使う。
classは複数の要素をまとめて指定することができる。

```html
<section id="html" class="card">...</section>
<section id="css" class="card">...</section>
```

とした場合
・idで指定されたhtmlとcssは、それぞれ固有の名詞
・classで指定されたcardは、２つに共通するグループ名

というような使い分けとなる。


## Day 1

- VS Codeをインストールした
- web-learningフォルダを作った
- VS Codeでフォルダを開いた
- ターミナルでpwdを使って現在作業しているフォルダを確認した（Path）
- ターミナルでlsを使って作業中フォルダの中身を確認した
- GitHubにログインした
- GitHubのUsenameを設定した

## 今日覚えた言葉
- VS Code: コードを書くための無料ソフト
- GitHub: コードを保存・公開し、ポートフォリオ的にも使える場所
- pwd: Print working directoryの略。現在作業中のフォルダを表示してという命令コマンド
- cd: Change directoryの略。作業フォルダを指定されたフォルダへ変更する命令子マンド
- ls: Listの略。作業フォルダ内の中身を一覧表示させるコマンド
- Path: PC内の住所（Web上でも同じ？）
- prompt:命令入力を促す表示 or AIの場合、行動を促す指示そのもの

## Day 2

- index.htmlファイルを作成した
- HTMLで自己紹介ページを書いた
- ブラウザで表示し、確認した
- 自身のGitHubプロフィールへのリンクを追加した
- HTMLでのコードの効率の良い書き方を学んだ
- 基本となるHTMLタグの役割を確認した

## 今日覚えた言葉
- HTML: Webページの骨組みを作る言語
- HTMLタグ <>: HTMLで「これは見出し」「これは文章」などの意味を宣言する印
- index.html: Webページの入り口になるファイル
- !DOCTYPE html:　基本はHTMLファイルの一番上に書く宣言(このドキュメントはHTMLで書かれてますよっていう宣言)
- html:文章全体を包むタグ。ここからここまでがHTMLですよという意味
- head: 画面には直接表示されないページ設定を書く場所
- meta charset = "UTF-8":日本語などの文字を正しく表示するための設定
- title:ブラウザのタブに表示されるページタイトル
- body:実際にブラウザ画面に表示される内容を書く場所
- h1:ページで１番の見出し
- h2:セクションごとの中見出し
- p:文書、段落
- ul:順番のない箇条書きリスト全体の宣言
- li:箇条書きの１項目ごとを表す
- a: リンクを作るタグ
- href:リンク先のURLを指定する部分

## Day 3
- style.cssを作成した
- index.htmlからstyle.cssを読みこむ設定を追加した
- CSSでページ全体の背景色、文字色、フォントを変更した
- h1の文字色を変更した
- h2に下線をつけた
- bodyにmax-width、margin、paddingを使ってページ全体の余白と横幅を整えた
- aタグにCSSを当てて、GitHubリンクをボタンのような見た目に変更した
- VS Codeのカラーピッカーで色を選べることを確認した

## 今日覚えた言葉

- CSS:Webページの見た目を整えるための物
- style.css:CSSを書くためのファイル
- link タグ:HTMLのheadタグ内に記載。外部ファイルを読みこむためのタグ
- selector:どのHTMLにデザインを当てるか指定する部分（選ぶ）
- property:何を変更するか指定する部分
- value:どのように変更するかを指定する部分
- background-color:背景色を指定する(property)
- color:文字色を指定する(property)
- font-family:文字の種類を指定する(property)
- max-width:要素の最大横幅を指定する(property)
- margin:要素の外側の余白を指定する(property)
- padding:要素の内側の余白を指定する(property)
- border-bottom:要素の下側に線を付ける
- border-radius:角を丸くする
- text-decoration:文字の装飾を指定する

## 今日理解した事

CSSはHTMLに書いた内容の見た目を変えるために使う
HTML側でstyle.cssを読みこむことで、CSSに書いた内容がブラウザの表示に反映される。

CSSは基本的に次の形で書く

selector {
    property:value;
}

example h1タグの文字色を青にする

h1{
    color:#2563eb;
}

また、色を確認する時は、最初に赤などの分かり易い色に変えると、CSSが効いているか確認し易い。

CSSで指定するpxサイズがどんなものなのか、実際にどう使っていくのかを学んだ。

現状、余白を選ぶ場合はこんな感じで意識
8px　：ちょっと離す（かなり小さ目）
16px :普通　迷ったらコレ！
24px :ゆったりした広さ　時点でコレ！
40px :ガッツリ大きく切り分けたい時！コレ！

また文字のフォントに関しても学んだ
h1 : 32px 一番大きい見出し
h2 : 24px　中見出し
h3 : 19px　小見出し
p  : 16px　通常の文章

ul / li など箇条書きリストのデフォルトも16px
ただCSSにてフォントサイズや、リストの形を変更することもできる。

max-width / margin / paddingの３つの概念は文字だけじゃなく図式的に理解できるように再度、図形を書いての復習を行う。

## Day 4
- sectionタグを使って、ページ内の内容をまとまりごとに分けた
- section全体にCSSを当てて、カードのような見た目に変更した
- classを使って、特定のHTMLだけに名前をつけた
- class="profile"を使って、自己紹介部分だけ中央寄せと背景色を変更した
- class="goals"を使って、学習目標のsectionだけ左側に線をつけた
- div class="two-column"を使って、今学んでいる事とできるようになった事の２つのsectionをまとめた
- display:flexを使って、2つのsectionを横並びにした
- gapを使って、横並びの要素同士の間隔を調整した
- flex:1を使って、横並びのsectionを同じ幅にした
- list-style-type:none;を使って、箇条書きの点を消した
- ctrl+Shift+P → Wrap → sectionで囲い込んでsection化することを覚えた
- Shift+Alt+Fで各コードの階層を自動で合わせる機能を覚えた
- Ctrl+Fで指定した単語をファイル内のコードから検索・ハイライト表示できることを覚えた
- Ctrl+Shift+Fで指定した単語をindex.htmlやstyle.cssなどプロジェクトをまたいで単語を検索することができる

## 今日覚えた言葉
- section:ページ内の意味のあるまとまりを作るタグ
- div:レイアウトやCSSのために使う意味を持たない箱
- class:HTMLに名前をつけて、CSSで指定し易くするためのもの
- .profile: class ="profile"がついたHTMLをCSSで指定する書き方
- .goals:class="goals"がついたHTMLをCSSで指定する書き方
- display: flex:要素を横並びにし易くする指定
- gap:要素同士の間隔を指定する
- flex:1:横並びの要素同士を同じくらいの幅にする
- list-style-type:箇条書きの記号の種類を指定する
- padding-left:左側の内側余白を指定する
- text-align: center;:文字やインライン要素を中央寄せにするCSS。他にもleft/rightなどの指定がある

## 今日理解した事

HTMLでは、sectionやdivを使ってページの内容をまとまりごとに整理できる

sectionは意味のあるまとまりを作るために使う
divはレイアウトやCSSのために使う、１まとまりの箱を用意するために使う

classを使うと特定のHTMLに名前を付けられる
HTMLではclass="profile"のように書き、CSSでは.profileのように先頭にドットを付けて指定する

example

```html
<section class="profile">
    <h1>Tetsuo Koike</h1>
</section>    
```


## Day 5

- ブラウザ幅を狭くして。スマホ表示に近い状態を確認した
- PC幅ではtwo-columnが横並びになっている事を確認した
- スマホ幅ではtwo-columnが狭くなり、読みづらくなることを確認した
- @media(max-width:600px){}を使って、600px以下の時に中のCSSを指定するような条件を追加した
- @media(max-width:600px){.two-column{flex-direction:column;}}を使って、スマホ幅の時には横並びを縦並びになるように設定した
- @media(max-width:600px){body{margin:16px auto; padding:12px;}}に設定し、スマホサイズの時は外側の余白と内側の余白を小さくなるよう設定した
- @media(max-width:600px){h1{font-size:28px;}}にし、スマホサイズの時、大見出しのフォントサイズが28pixelになるように設定した
- PC幅に戻すと、横並びや余白が元に戻る事を確認した。

## 今日覚えた言葉
- responsive:画面サイズに合わせて表示を調整すること
- media query:条件によってCSSを切り替える仕組み@mediaの部分
- @media:media queryを書くためのCSS
- max-width:指定した幅以下のとき、という条件を作るのに使った。最大の幅
- flex-direction:Flexbox内の並び方向を指定する
- column:縦並び
- font-size:文字サイズを指定する

## 今日理解した事
レスポンシブ対応とは、PCやスマホなど画面サイズが違っても見易く表示されるように調整すること。

PCでは横並びが見易くても、スマホでは横幅が狭くなるため、縦並びにした方が読みやすいことがある。

CSSでは@mediaを使う事で、画面幅が一定以下の時だけ別のCSSを適用できる

example

```css
@media(max-width:600px){
    .two-column{
        flex-direction:　column;
    }
}
```
これは画面幅が600px以下の時だけ、.two-columnの中身を縦並びに表示するという意味。

今回はこれに加えて、bodyタグとh1タグも指定して変更を加えた。

```css
@media(max-width:600px){
    body{
        margin:16px auto;
        padding:12px;
    }

    h1{
        font-size:28px;
    }

    .two-column{
        flex-direction:column;
    }
}
```

## Day 6

- `git --version` でGitが入っているか確認した
- Git for Windowsをインストールした
- Gitのユーザー名とメールアドレスを設定した
- `git init` でweb-learningフォルダをGit管理にした
- `git status` で状態を確認した
- `git add` でファイルをcommit対象に追加した
- `git commit` で最初の変更履歴を保存した
- GitHubに `web-learning` リポジトリを作成した
- `git remote add origin` でPCとGitHubをつないだ
- `git branch -M main` でブランチ名をmainにした
- `git push -u origin main` でGitHubにアップロードした
- GitHub Pagesで自己紹介ページをWebページとして公開した
- README.mdに公開URLを追加した

## 今日覚えた言葉

- Git: ファイルの変更履歴を管理する道具
- GitHub: コードを保存・共有・公開できるサービス
- repository: コードと履歴を入れる場所
- commit: 変更を履歴として保存すること
- push: PCのcommitをGitHubに送ること
- remote: GitHub上の接続先
- branch: 作業ライン
- GitHub Pages: HTML/CSSをWebページとして公開できる機能

## 今日理解したこと

Gitで変更履歴を記録し、GitHubにpushすることで、PC内のコードをネット上に公開できる。

基本の流れ:

```bash
git status
git add README.md index.html style.css
git commit -m "Create profile page"
git push -u origin main
```