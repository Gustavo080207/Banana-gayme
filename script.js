let score = 0;
const scoreElement = document.getElementById('score');
const bananaElement = document.getElementById('banana');
const bodyElement = document.body;

bananaElement.addEventListener('click', function() {
    score++;
    scoreElement.innerText = score;

    if (score === 100) {
        bananaElement.src = 'apple.png';
        bananaElement.alt = 'Apple';
        bodyElement.style.backgroundColor = 'red';
    }
    if (score === 200) {
        bananaElement.src = 'orange.png';
        bananaElement.alt = 'Orange';
        bodyElement.style.backgroundColor = 'orange';
    }
    if (score === 300) {
        bananaElement.src = 'pera.png';
        bananaElement.alt = 'Pera';
        bodyElement.style.backgroundColor = 'green';
    }
    if (score === 400) {
        bananaElement.src = 'kiwi.png';
        bananaElement.alt = 'Kiwi';
        bodyElement.style.backgroundColor = '#8B4513';
    }
    if (score === 500) {
        bananaElement.src = 'pitaya.webp';
        bananaElement.alt = 'Pitaya';
        bodyElement.style.backgroundColor = '#EE82EE';
    }
  
    }

);
