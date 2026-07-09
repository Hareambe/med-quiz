const select = document.getElementById('categorySelect');

// Populate the dropdown
[...new Set(quizData.map(q => q.category))].forEach(c => {
    select.innerHTML += `<option value="${c}">${c}</option>`;
});

function checkAnswer(btn, selected, correctString) {
    // 1. Split correct answers using the separator
    const correctAnswers = correctString.split('|||').map(ans => 
        ans.trim().replace(/\u00a0/g, ' ')
    );
    
    // 2. Disable all buttons in this specific container so the user can't keep clicking
    const container = btn.parentElement;
    const allButtons = container.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);

    // 3. Highlight Logic
    allButtons.forEach(b => {
        const btnText = b.innerText.trim().replace(/\u00a0/g, ' ');
        
        // If the button is one of the correct answers, turn it green
        if (correctAnswers.includes(btnText)) {
            b.style.backgroundColor = '#34C759'; // Apple Green
            b.style.color = 'white';
        } 
        // If the user clicked this button and it WAS NOT correct, turn it red
        else if (b === btn) {
            b.style.backgroundColor = '#FF3B30'; // Apple Red
            b.style.color = 'white';
        }
    });
}

function startQuiz() {
    const cat = document.getElementById('categorySelect').value;
    const count = parseInt(document.getElementById('countInput').value) || quizData.length;
    const container = document.getElementById('quiz-area');
    
    container.innerHTML = '';
    
    let filtered = (cat === 'all' ? quizData : quizData.filter(q => q.category === cat))
                   .sort(() => 0.5 - Math.random())
                   .slice(0, count);

    filtered.forEach((q, i) => {
        let opts = [...q.options].sort(() => 0.5 - Math.random());
        let btnHTML = opts.map(o => 
            `<button onclick="checkAnswer(this, '${o.replace(/'/g, "\\'")}', '${q.correctAnswer.replace(/'/g, "\\'")}')">
                ${o}
            </button>`
        ).join('');
        
        container.innerHTML += `
            <div class="question-container">
                <div class="question-text"><b>${i+1}.</b> ${q.question}</div>
                ${btnHTML}
            </div>`;
    });
}