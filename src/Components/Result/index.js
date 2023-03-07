function Result({ information }) {

    return (
        <section className="result">
            <div className="aprovacao">
                {information?.message?.apto ? "Aprovado" : "Não aprovado"}
            </div>
            <div className="description">
                {information?.message?.description}
            </div>
            <div className="score">
                {`${information?.message?.score ? information?.message?.score * 100 : "0"}%`}
            </div>
        </section>
    )

}

export default Result