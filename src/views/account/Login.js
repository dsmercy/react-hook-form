import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import axios from "axios";
import services from '../../services/apis';

function Login() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setValidated(true);

        services.Account.login(data).then(result => console.log(result)).catch((error) => {
            // Error
            console.log(error.message);
        });
    
        // Do further processing if needed
      };
    
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>User Name</Form.Label>
        <Form.Control placeholder="1234 Main St"   {...register("username", { required: true })}
          isInvalid={!!errors.username} />
        <Form.Control.Feedback type="invalid">
            Please provide username.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" {...register("password", { required: true, minLength: 8 })}
          isInvalid={!!errors.password}  />
        <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      </Form.Group>

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" {...register("agree", {required: true})}  />
        <Form.Control.Feedback type="invalid" >
            Please provide a valid city.
          </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;