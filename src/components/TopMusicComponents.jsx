function TopMusicComponents (props) {
    return (
        <div>
            <div>
                <img src={props.foto} width={150} />
            </div>
            <div>
                Ranking: {props.ranking}
            </div>
        </div>
    )
};

export default TopMusicComponents;