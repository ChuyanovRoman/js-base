function chess() {
    let container = document.createElement('div');
    container.style.width = '1500px';
    container.style.margin = '0 auto';
    container.style.textAlign = 'center';
    document.body.appendChild(container);
    container.innerHTML = '<h1>Chess.</h1>';
    let board = document.createElement('div');
    board.style.width = '560px';
    board.style.height = '560px';
    board.style.border = '2px solid black';
    board.style.cssFloat = 'right';
    board.style.marginRight = '470px';
    container.appendChild(board);
    let flag = 1;
    for (let z = 1; z <= 8; z++) {
        flag = !flag;
        for (let n = 0; n < 8; n++) {
            let block = document.createElement('div');
            block.style.width = '70px';
            block.style.height = '70px';
            let blackOfficers = ['153px 240px', '153px -89px', '153px -165px', '156px 155px', '157px 72px', '153px -165px', '153px -89px', '153px 240px'];
            if (z == 1) {
                block.style.background = 'url(chess.png)';
                block.style.backgroundPosition = blackOfficers[n];
            }
            if (z == 2) {
                block.style.background = 'url(chess.png)';
                block.style.backgroundPosition = '148px -10px';
            }
            if (z == 7) {
                block.style.background = 'url(chess.png)';
                block.style.backgroundPosition = '-5px -10px';
            }
            let whiteOfficers = ['-5px 240px', '-5px -89px', '-5px -165px', '-9px 155px', '-9px 74px', '-5px -165px', '-5px -89px', '-5px 240px'];
            if (z == 8) {
                block.style.background = 'url(chess.png)';
                block.style.backgroundPosition = whiteOfficers[n];
            }
            if (flag == 1) {
                block.style.backgroundColor = 'white';
            } else {
                block.style.backgroundColor = 'grey';
            }
            flag = !flag;
            block.style.cssFloat = 'left';
            board.appendChild(block);
        }
    }
    let arr = ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H'];
    for (let z = 0; z < 8; z++) {
        let block = document.createElement('div');
        block.style.width = '70px';
        block.style.height = '70px';
        block.style.cssFloat = 'left';
        block.innerHTML = arr[z];
        board.appendChild(block);
    }
    let number = document.createElement('div');
    number.style.cssFloat = 'right';
    container.appendChild(number);
    for (let z = 8; z >= 1; z--) {
        let block = document.createElement('div');
        block.style.width = '70px';
        block.style.height = '70px';
        block.innerHTML = z;
        block.style.lineHeight = '70px';
        block.style.textAlign = 'right';
        block.style.paddingRight = '10px';
        number.appendChild(block);
    }
}
chess();