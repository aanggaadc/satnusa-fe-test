import React, { useEffect, useState } from 'react'
import NoData from '../../no-data.gif'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import './Home.css'
import Axios from 'axios'

export default function Home() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState({
        name: "",
        email: ""
    })
    let dataFilter = data

    if (filter.name && filter.email) {
        dataFilter = data.filter(item => item.name.toLowerCase() === filter.name.toLocaleLowerCase() && item.email.toLowerCase() === filter.email.toLowerCase())
    } else if (filter.name) {
        dataFilter = data.filter(item => item.name.toLowerCase() === filter.name.toLocaleLowerCase())
    } else if (filter.email) {
        dataFilter = data.filter(item => item.email.toLowerCase() === filter.email.toLowerCase())
    }

    const getData = () => {
        setIsLoading(true)
        Axios.get("users")
            .then((response) => {
                setData(response.data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            }).catch((error) => {
                console.log(error)
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
                alert(error.message)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Navbar setFilter={setFilter} setIsLoading={setIsLoading} />

            <div className='home-container'>
                {isLoading ? <Loader /> : dataFilter.length > 0 ? dataFilter.map((item, index) => {
                    return <Card key={index} name={item.name}
                        email={item.email}
                        address={`${item.address.street}, ${item.address.suite}, ${item.address.city}`}
                        phone={item.phone}
                        website={item.website}
                        company={item.company.name}
                    />
                }) : <img src={NoData} alt="no-data" />}
            </div>

            <Footer />
        </>
    )
}