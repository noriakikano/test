import "./styles.css";

const onclickAdd = () => {
  // テキストボックスの値を取得し、空にする
  const input = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  createIncompeleteList(input);
};

//未完了
const createIncompeleteList = (text) => {
  //divを生成
  const makeDiv = document.createElement("div");
  makeDiv.className = "listlow";

  // liタグを生成
  const makeLi = document.createElement("li");
  makeLi.innerText = text;

  // button の生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    delteFromIncompleteList(deltebutton.parentNode);

    //完了リストに入れる
    const addTarget = completebutton.parentNode;
    // todo 内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    const makeLi = document.createElement("li");
    makeLi.innerText = text;

    const backBut = document.createElement("button");
    backBut.innerText = "戻す";
    backBut.addEventListener("click", () => {
      const deleteTarget = backBut.parentNode;
      document.getElementById("compeltedList").removeChild(deleteTarget);

      //テキストを取得
      const text = backBut.parentNode.firstElementChild.innerText;
      createIncompeleteList(text);
    });

    // divタグの子様相に各種を設定
    addTarget.append(makeLi);
    addTarget.appendChild(backBut);

    // 完了リストに追加
    document.getElementById("compeltedList").appendChild(addTarget);
  });
  const deltebutton = document.createElement("button");
  deltebutton.innerText = "削除";

  // 押したら、親タグを削
  deltebutton.addEventListener("click", () => {
    //タグを消す
    delteFromIncompleteList(deltebutton.parentNode);
  });

  //divの中にlistを生成
  makeDiv.appendChild(makeLi);
  makeDiv.appendChild(completebutton);
  makeDiv.appendChild(deltebutton);

  document.getElementById("incomplete-list").appendChild(makeDiv);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onclickAdd());

// 指定の要素を削除
const delteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
