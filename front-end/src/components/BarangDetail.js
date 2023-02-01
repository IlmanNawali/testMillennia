import {
  Col,
  Row,
  Image,
  Form,
  Card,
  Container,
  Button,
} from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import axios from "axios";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { useState } from "react";
// import { NavbarSearch } from "../../components";
// import { useForm } from "react-hook-form";
// import Router, { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
// export const getStaticPaths = async () => {
//   let response = await axios.get("http://localhost:8081/barang");
//   const data = await response.data.data;
//   console.log("data");
//   console.log(data);
//   const paths = data.map((Barang) => {
//     return {
//       params: { id: Barang.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     let response = await axios.get("http://localhost:8081/barang/" + id);
//     const data = await response.data.data;
//     console.log("data");
//     console.log(data);
//     return {
//       props: { products: data},
//     };
//   };
  
const BarangDetail = () => {
    let { id } = useParams();
    const [articles, setArticles] = useState([])
    console.log(id)
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`http://localhost:8081/barang/`+id)
            setArticles(response.data.data)
            console.log(response.data.data)
        }
        getArticles()
    }, [])
  return (
          <Row style={{ width: 1000, padding: 30, justify: "center", align: "center",display: "block", justify: "center", align: "center", margin: "auto"}}>
            <Col>
              <Card className="card-description">
                <Card.Body>
                    {articles.map(({ namaBarang, image, jumlah, id })=> {
                        return(
                            <div style={{ width: 1000, padding: 30, justify: "center", align: "center", textAlign: "center", display: "block", justify: "center", align: "center", margin: "auto"}}>
                                <Card.Title style={{fontSize: "60px"}}>Detail Barang</Card.Title>
                                <Card.Img src={`http://localhost:8081/images/${image}`} alt="a wallpaper" style={{ width:"500px" }}></Card.Img>
                                <Card.Text style={{fontSize: "25px"}}>Nama Barang:</Card.Text>
                                <Card.Text style={{fontSize: "20px"}}>{namaBarang}</Card.Text>
                                <Card.Text style={{fontSize: "25px"}}>Jumlah Barang Tersedia:</Card.Text>
                                <Card.Text style={{fontSize: "20px"}}>{jumlah}</Card.Text>
                                <Button variant="outlined">Edit Barang</Button>
                            </div>
                            )
                    })}
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
    //     </Container>
    //   </Row>
    // </Row>
  );
};

export default BarangDetail;
