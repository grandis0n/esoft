import axios from "axios"

export default class EService {
    static async getClients(props){
        const response = await fetch("https://esoft-hiha.onrender.com/api/agent/all", props)
        return response.data
    }
}