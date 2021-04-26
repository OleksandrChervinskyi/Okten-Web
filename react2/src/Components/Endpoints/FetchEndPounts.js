import { useEffect, useState } from 'react'

export const Fetch = (props) => {
    const url = props.url
    const [data, setData] = useState([])

    const giveData = async () => {
        const endPoint = await fetch(url)
        const newData = await endPoint.json()

        setData(newData)
    }

    useEffect(() => {
        giveData()
        return () => {

        }
    }, [])

    console.log(data);

    return {data}
}