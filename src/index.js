import "./styles.css";

const onclickAdd = () => {
  // テキストボックスの値を取得し、空にする
  const input = document.getElementById("inputText").value;
  document.getElementById("inputText").value = "";

  //divを生成
  const makeDiv = document.createElement("div");
  makeDiv.className = "listlow";

  // liタグを生成
  const makeLi = document.createElement("li");
  makeLi.innerText = input;

  // button の生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    const deleteParent = deltebutton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteParent);
  });
  const deltebutton = document.createElement("button");
  deltebutton.innerText = "削除";

  // 押したら、親タグを削除
  deltebutton.addEventListener("click", () => {
    const deleteParent = deltebutton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteParent);
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
