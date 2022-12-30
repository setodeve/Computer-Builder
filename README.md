## **Computer Builder**

<br>

### **概要**
Recursionの課題で、APIで取得したデータを加工、表示するアプリです。
コンピューターの各パーツ（CPU/GPU/RAM/HDD・SSD）を選択することで、この構成がゲーム用・作業用にどれだけ適しているかをベンチマークとして表示します。

![Alt Text]('/../src/assets/app.gif)

<br>

### **工夫した点**
1.TypeScript×Vueによる実装を行った

Typescriptの練習、Vueの復習のため開発を行いました。
コンポーネントの分割、Piniaを使用したデータ処理部分に特に注力しました。

2.Jestでユニットテストを行った

初めてJestを触って、コンポーネントに対しテストを行いました。
テストパッケージ(Vitest,Vue-test-utilisなど)の練習ができました。


<br>

### **改善点**

1.any型を乱用してしまった

Typescriptの恩恵である型安全性を根本的に無視する形で開発を進めてしまった。
開発の最初の段階でどんな型を使用すべきか判断するようにする。

<br>

### **ソースコード**
https://github.com/setodeve/Computer-Builder

<br>

### **URL**
https://setodeve.github.io/Computer-Builder/

