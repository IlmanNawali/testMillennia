import { Col, Row, Form, Image } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import FormData from "form-data";

const BarangInput = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        let namaBarang = document.querySelector("#namaProduk");
        let jumlah = document.querySelector("#jumlah");
        const image = document.querySelector('#image');
        console.log(image);
        data.append('namaBarang', namaBarang.value);
        data.append('jumlah', jumlah.value);
        data.append('image', image.files[0]);
        
        const config = {
            method: 'POST',
            url: "http://localhost:8081/barang",
            data,
          };
          axios(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              window.location.href = '/barang';
            })
            .catch((error) => {
              console.log(error);
            });
        };
  
    return (
      <Row>
        <ToastContainer />
        <Col md={6} className="my-auto mx-auto">
          <Col className="mx-auto w-75 spacing">
            <Form onSubmit={onSubmit}  action="http://localhost:8081/barang">
              <Form.Group controlId="namaProduk" className="mt-3">
                <Form.Label className="fw-bold">Nama Produk</Form.Label>
                <Form.Control type="text" name='namaBarang' placeholder="Nama Produk" className="custom-rounded p-2" />
              </Form.Group>
              <Form.Group controlId="jumlah" className="mt-3">
                <Form.Label className="fw-bold">Jumlah Produk</Form.Label>
                <Form.Control type="number" name='jumlah' placeholder="0" className="custom-rounded p-2" />
              </Form.Group>
              {/* <Col>{errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}</Col> */}
              <Form.Group controlId="image-product" className="mt-3">
                <Form.Label className="fw-bold">Foto Produk</Form.Label>
                <Form.Control type="file" name='image' id="image" placeholder="Rp 0,00" className="custom-rounded p-2" />
                <br></br>
              </Form.Group>
              <Col className="d-grid gap-2 mt-4">
                <Col className="btn-group" role="group">
                  <button className="btn text-dark purple-bg custom-rounded p-2 ms-2" type="submit">
                    Terbitkan
                  </button>
                </Col>
              </Col>
            </Form>
          </Col>
        </Col>
      </Row>
    );
};

export default BarangInput;
