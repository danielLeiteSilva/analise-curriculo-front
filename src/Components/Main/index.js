import { useState } from "react";

import Load from "../Loading";
import Menu from "../Menu"
import Result from "../Result";

import './styles.css'

import GptService from "../../Services/GptServices";


function Main() {

    const [information, setInformation] = useState({})
    const [loading, setLoading] = useState(false)

    const [curriculum, setCurriculum] = useState("")
    const [vacancy, setVacancy] = useState("")

    function getVacancy(event) {
        setVacancy(event.target.value)
    }

    function getCurriculum(event) {
        setCurriculum(event.target.value)
    }

    function handlerAnalysis() {

        const data = {
            vacancy,
            resulm: curriculum
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
                        <textarea onChange={getVacancy} placeholder="Digite ou cole a descrição da vaga"></textarea>
                    </section>
                    <section className="area">
                        <h2>Currículo</h2>
                        <textarea onChange={getCurriculum} placeholder="Digite ou cole a descrição do currículo"></textarea>
                    </section>
                </section>
                <section className="button">
                    <button onClick={handlerAnalysis}>Analisar</button>
                </section>

                <Result information={information} />
            </aside>
            <Menu />
            <footer></footer>
        </div>
    )

}

export default Main