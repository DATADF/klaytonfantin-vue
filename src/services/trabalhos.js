import { http } from './config'

export default{
    Listar:() => {
        return http.get('trabalhos')
    }
}