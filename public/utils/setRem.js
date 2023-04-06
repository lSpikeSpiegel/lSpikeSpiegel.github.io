// 设置 rem 函数
function setRem() {
	const doc = document.documentElement;
	const width = doc.clientWidth;
	width && (doc.style.fontSize = width / 192 + "px");
	window.__REM_SETTED__ = true;
}
// 改变窗口大小时重新设置 rem
window.onload = setRem;
window.addEventListener("resize", setRem);
