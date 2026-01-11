console.log("Hello Vibe Coding!");

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('omikuji-btn');
    const resultDisplay = document.getElementById('omikuji-result');

    const fortues = [
        { text: "大吉 🌟", color: "#ff4081" },
        { text: "中吉 ✨", color: "#ffa000" },
        { text: "小吉 🌱", color: "#4caf50" },
        { text: "吉 👍", color: "#2196f3" },
        { text: "末吉 ☁️", color: "#607d8b" },
        { text: "大凶 ⚡️", color: "#000000" } // レア！
    ];

    if (btn && resultDisplay) {
        btn.addEventListener('click', () => {
            // くるくる演出
            let count = 0;
            btn.disabled = true;
            btn.textContent = "占い中...";

            const interval = setInterval(() => {
                const randomTemp = fortues[Math.floor(Math.random() * fortues.length)];
                resultDisplay.textContent = randomTemp.text;
                resultDisplay.style.color = "#ccc";
                count++;

                if (count > 10) {
                    clearInterval(interval);
                    const finalFortune = fortues[Math.floor(Math.random() * fortues.length)];

                    resultDisplay.textContent = finalFortune.text;
                    resultDisplay.style.color = finalFortune.color;

                    // アニメーション再適用
                    resultDisplay.classList.remove('pop-animation');
                    void resultDisplay.offsetWidth; // リフロー
                    resultDisplay.classList.add('pop-animation');

                    btn.disabled = false;
                    btn.textContent = "もう一回引く！";
                }
            }, 100);
        });
    }
});
