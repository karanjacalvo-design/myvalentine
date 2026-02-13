const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const music = document.getElementById('valentineMusic');
const celebration = document.getElementById('celebration');
const btnGroup = document.getElementById('btnGroup');
const question = document.getElementById('question');

// 1. The "Running No" Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Overrides CSS relative
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The "Yes" Click Logic
yesBtn.addEventListener('click', () => {
    // Hide UI
    btnGroup.style.display = 'none';
    question.style.display = 'none';
    
    // Play music
    music.volume = 0.5;
    music.play();

    // Show celebration
    celebration.classList.remove('hidden');
    document.getElementById('main-emoji').innerText = "💖";
    
    // Start Heart Rain
    setInterval(createHeart, 200);
});

// 3. Floating Hearts Function
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    document.body.appendChild(heart);

    // Clean up heart after animation
    setTimeout(() => { heart.remove(); }, 5000);
}