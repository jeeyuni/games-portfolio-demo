export default function RandomPage({gamesList}) {
    
    const randaomGame = gamesList [ Math.floor(Math.random() * gamesList.length)]
    return (
        <div>
            <h5>You should play...</h5>
            <h2 className = "display-1">{randaomGame.name}</h2>
        </div>
    )
}