const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", function () {
    localStorage.clear();
    console.log("reset");
    alert("LocalStorage has been cleared!");
    location.reload(); // 화면 새로고침
}); 