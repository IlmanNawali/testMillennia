import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '.'


const BarangList = () => {
    const [barang, setBarang] = useState([])

    useEffect(() => {
        const getBarang = async () => {
            const response = await axios.get(`http://localhost:8081/barang`)
            setBarang(response.data.data)
            console.log(response.data.data)
        }

        getBarang()
    }, [])
    return (
        
        <div className="container d-flex justify-content-center align-items-center h-100">
            
        <div className="row">
        <a href='/barang_input'>Masukan Barang Baru</a>
        {barang.map(({ namaBarang, image, jumlah, id })=> {
            return(
                <div className="col-md-4">
                    <Card 
                    urlToImage={`http://localhost:8081/images/${image}`} 
                    title={namaBarang} 
                    id = {id}/>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default BarangList
