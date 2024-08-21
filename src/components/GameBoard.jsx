
export default function GameBoard({onSelectSquare, board}){
    // let gameBoard = InitialGameBoard;

    // for (const turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square;

    //     gameBoard[row][col] = player;
    // }
    // const [gameBoard, setgameBoard] = useState(InitialGameBoard);
    
    // function handleSelectSquare(rowIndex, columnIndex){
    //     setgameBoard((prevGameBoard)=>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }
    return <ol id="game-board">
            {board.map((row, rowIndex)=>
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columIndex)=>
                            <li key={columIndex}>
                                <button onClick={()=>onSelectSquare(rowIndex,columIndex)} disabled={column} >{column}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>;
    
}