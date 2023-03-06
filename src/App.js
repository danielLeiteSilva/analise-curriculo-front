import { useState } from "react";
import "./index.css"

import Load from "./Components/Loading/loading";

import GptService from "./Services/GptServices";

function App() {

  const [information, setInformation] = useState({})
  const [loading, setLoading] = useState(false)

  const [curriculo, setCurriculo] = useState("")
  const [vaga, setVaga] = useState("")

  function getVaga(event) {
    setVaga(event.target.value)
  }

  function getCurriculo(event) {
    setCurriculo(event.target.value)
  }

  function handlerAnalise() {

    const data = {
      vacancy: vaga,
      resulm: curriculo
    }
    setLoading(true)
    GptService.post("/api/v1/gpt/analisys", data)
      .then(response => {
        setInformation(response.data)
        console.log(information)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <Load loading={loading} />
      <header>
        <h1>Análise de Currículo</h1>
      </header>
      <article>
        <section>
          <section className="area">
            <h2>Vaga</h2>
            <h3>Digite ou cole a descrição da vaga</h3>
            <textarea onChange={getVaga}></textarea>
          </section>
          <section className="area">
            <h2>Currículo</h2>
            <h3>Digite ou cole a descrição do currículo</h3>
            <textarea onChange={getCurriculo}></textarea>
          </section>
        </section>
        <section className="button">
          <button onClick={handlerAnalise}>Analisar</button>
        </section>

        <section className="result">
          <div className="aprovacao">
            {information?.message?.apto ? "Aprovado" : "Não aprovado"}
          </div>
          <div className="description">
            {information?.message?.description}
          </div>
          <div className="score">
          {`${information?.message?.score * 100 != NaN ? information?.message?.score * 100 : "0"}%`}
          </div>
        </section>
      </article>
      <footer></footer>
    </div>
  );
}

export default App;
