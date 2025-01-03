import axios from "axios";
import { useState, useEffect, createContext } from "react"

const GlobalContext = createContext()

const BASE_URI = 'http://localhost:3000'

export let Provider = ({ personaggio }) => {

    const [list, setList] = useState([])

    function fetchList() {
        axios.get(`${BASE_URI}/characters`)
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.error(err))
    }

    const [character, setCharacter] = useState({})

    function fetchCharacter(id) {
        axios.get(`${BASE_URI}/characters/${id}`)
            .then((res) => {
                const characterMap = {
                    ...res.data,
                    shadow: res.data.shadow === 0 ? 'Yes' : 'No'
                }
                setCharacter(characterMap)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <GlobalContext.Provider value={{ list, fetchList, character, fetchCharacter }}>
            {personaggio}
        </GlobalContext.Provider>
    )
}

export default GlobalContext