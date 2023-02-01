import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
const Swal = require('sweetalert2');

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    let email = document.querySelector("#username").value;
    console.log(email)
    let password = document.querySelector("#password").value;
    console.log(password)
    await axios.get("http://localhost:8081/login?username="+email+"&password="+password).then((response) => 
    {
        if (response.data.message === 'Success') { 
            window.location.href = '/barang';
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Password Atau Username Salah',
              text: response.data.display_message,
            });
          }
        });
    }
  return (
    <Row>
      <Col md={6} className="my-auto mx-auto">
        <Col className="mx-auto w-75 form-in-mobile">
          <h1 className="fw-bold">Masuk</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="username" className="mt-3">
              <Form.Label>username</Form.Label>
              <Form.Control name="username" id="username" type="text" placeholder="Contoh: admin" className="custom-rounded p-2" {...register("username", { required: "username is required" })} />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Masukkan password" className="custom-rounded p-2" {...register("password", { required: "password is required" })} />
            </Form.Group>
            <Col className="d-grid gap-2 mt-4">
              <button className="btn text-dark purple-bg custom-rounded p-2" type="submit">
                Masuk
              </button>
            </Col>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

export default Login;
