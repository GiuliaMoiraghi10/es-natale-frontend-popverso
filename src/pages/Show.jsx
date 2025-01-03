import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

export default function Show() {

    const navigate = useNavigate()
    return (
        <main>
            <div className="container">
                <h2>Schede Personaggi</h2>
                <div>
                    <button onClick={() => navigate(-1)}>Torna indietro</button>
                </div>
            </div>
            <Card />
        </main>
    )
}