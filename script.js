const categorySelect = document.getElementById('categorySelect');
const fileSelect = document.getElementById('fileSelect');

// Populate categories based on selected file
function updateCategories() {
    const activeData = (fileSelect.value === 'data') ? quizData : examQuestions;
    const categories = [...new Set(activeData.map(q => q.category))];
    
    categorySelect.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(c => {
        categorySelect.innerHTML += `<option value="${c}">${c}</option>`;
    });
}

fileSelect.addEventListener('change', updateCategories);
updateCategories();

function checkAnswer(btn, selectedIndex, correctAnswer) {
    const container = btn.parentElement;
    const allButtons = container.querySelectorAll('button');
    const correctArray = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
    
    allButtons.forEach(b => b.disabled = true);
    const isCorrect = correctArray.includes(selectedIndex);
    
    allButtons.forEach((b, idx) => {
        if (correctArray.includes(idx)) {
            b.style.backgroundColor = '#34C759';
            b.style.color = 'white';
        } else if (idx === selectedIndex && !isCorrect) {
            b.style.backgroundColor = '#FF3B30';
            b.style.color = 'white';
        }
    });
}

function startQuiz() {
    const activeData = (fileSelect.value === 'data') ? quizData : examQuestions;
    const cat = categorySelect.value;
    const count = parseInt(document.getElementById('countInput').value) || activeData.length;
    const container = document.getElementById('quiz-area');
    
    container.innerHTML = '';
    
    let filtered = (cat === 'all' ? activeData : activeData.filter(q => q.category === cat))
                   .sort(() => 0.5 - Math.random())
                   .slice(0, count);

    filtered.forEach((q, i) => {
        let optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIdx: idx }));
        optionsWithIndex.sort(() => 0.5 - Math.random());
        
        const correctArray = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
        const shuffledCorrectIndices = optionsWithIndex
            .map((o, newIdx) => correctArray.includes(o.originalIdx) ? newIdx : -1)
            .filter(idx => idx !== -1);
        
        let btnHTML = optionsWithIndex.map((o, idx) => 
            `<button onclick="checkAnswer(this, ${idx}, ${JSON.stringify(shuffledCorrectIndices)})">
                ${o.text}
            </button>`
        ).join('');
        
        container.innerHTML += `
            <div class="question-container">
                <div class="question-text"><b>${i+1}.</b> ${q.question}</div>
                ${btnHTML}
            </div>`;
    });
}