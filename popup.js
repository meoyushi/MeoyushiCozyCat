document.addEventListener('keydown', (event) => {
    const catBody = document.querySelector('.cat-body');
    const catTail = document.querySelector('.cat-tail');
    const catHead = document.querySelector('.cat-head');

    switch (event.key.toLowerCase()) {
        case 'r':
            catBody.style.backgroundColor = '#e90e4b';
            catTail.style.backgroundColor = '#e90e4b';
            catHead.style.backgroundColor = '#e90e4b';
            break;
        case 'g':
            catBody.style.backgroundColor = '#50c878';
            catTail.style.backgroundColor = '#50c878';
            catHead.style.backgroundColor = '#50c878';
            break;
        case 'b':
            catBody.style.backgroundColor = '#4682b4';
            catTail.style.backgroundColor = '#4682b4';
            catHead.style.backgroundColor = '#4682b4';
            break;
        default:
            catBody.style.backgroundColor = '#b68973';
            catTail.style.backgroundColor = '#b68973';
            catHead.style.backgroundColor = '#b68973';
    }
});