import { useEffect, useState } from "react"

const getUsers = async () => {

}
const useGetUser = () => {
    const [data, setData] = useState<any>()
    useEffect(() => {
        fetch("https://ybiapi.fresh-app.com/api/demo_profile").then(res => res.json()).then(data => setData(data))


    }, [])
    return data
}

export default useGetUser