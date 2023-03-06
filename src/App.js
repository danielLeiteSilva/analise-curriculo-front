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
      <aside>
        <section>
          <section className="area">
            <h2>Vaga</h2>
            <textarea onChange={getVaga} placeholder="Digite ou cole a descrição da vaga"></textarea>
          </section>
          <section className="area">
            <h2>Currículo</h2>
            <textarea onChange={getCurriculo} placeholder="Digite ou cole a descrição do currículo"></textarea>
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
            {`${information?.message?.score ? information?.message?.score * 100 : "0"}%`}
          </div>
        </section>
      </aside>
      <nav>
        <ul>
          <li>Análise currículo</li>
          <li>Análise seu currículo por pdf</li>
          <li>Search currículum for vaga</li>
        </ul>
      </nav>
      <footer></footer>
    </div>
  );
}

export default App;
