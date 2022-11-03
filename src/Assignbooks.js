import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
import Listassignbooks from './Listassignbooks';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";


function Assignbooks() {
    const navigate = useNavigate();

    const validateForm = (formData) => {
      var errors = {};
      if (formData.student_name === "") errors.student_name = "Student is Required";
      if (formData.book_name === "") errors.book_name = "Book is Required";
      if (formData.borrowed_date === "") errors.borrowed_date = "Borrowed date is Required";
      if (formData.closed_date === "") errors.closed_date = "Closed date is Required";
      return errors;
    };
 

const handleSubmit = async (formData, { resetForm }) => {
  setTimeout(async () => {
    try {
      await axios.post("https://6341636a20f1f9d7997200a7.mockapi.io/books_student",{
        student_name:formData.student_name,
        book_name:formData.book_name,
        borrowed_date:formData.borrowed_date, 
        closed_date:formData.closed_date,  
    });
   
    alert('created successfully');
    resetForm();
    navigate('/Listassignbooks');
  }catch(error){

  }
    resetForm();
  }, 3000);
};

    return (
    <>    
      <h1>Welcome to Dashboard, Library MANAGEMENT using formik</h1>
      <h4><Link to="/" element={<Dashboard />}>Dashboard</Link> | <Link to="/Listassignbooks" element={<Listassignbooks />}>View Assigned Books</Link></h4>
   
    <div className="col-md-6"></div>    
    <div className="container col-md-12">
    <h2>Assign Book for student</h2>
    <Formik
        initialValues={{
        student_name: "",
        book_name: "",
        borrowed_date : "",
        closed_date:""
        }}
        validate={(formData) => validateForm(formData)}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form  onSubmit={handleSubmit}>
              <Form.Group className="col-md-6"  controlId="exampleForm.ControlInput1">
              <Form.Label>Student name</Form.Label>
              <Form.Control  type="text" placeholder="student_name"  name="student_name" value={values.student_name}  onChange={handleChange}  onBlur={handleBlur}   required /> <span style={{color:"red"}}> {touched.student_name && errors.student_name}</span><br/>
          </Form.Group>
  
        <Form.Group className="col-md-6"   controlId="exampleForm.ControlInput2">
          <Form.Label>Book name</Form.Label>
          <Form.Control  type="text"  placeholder="book_name" name="book_name" value={values.book_name}  onChange={handleChange}  onBlur={handleBlur}   required /> <span style={{color:"red"}}> {touched.book_name && errors.book_name}</span><br/>
        </Form.Group>
  
        <Form.Group className="col-md-6"  controlId="exampleForm.ControlInput3">
          <Form.Label>Borrowed date</Form.Label>
          <Form.Control type="date" placeholder="borrowed_date" name="borrowed_date" value={values.borrowed_date} onChange={handleChange}  onBlur={handleBlur}    required /> <span style={{color:"red"}}> {touched.borrowed_date && errors.borrowed_date}</span><br/>
        </Form.Group>
        <Form.Group className="col-md-6"  controlId="exampleForm.ControlInput3">
          <Form.Label>Closed date</Form.Label>
          <Form.Control type="date" placeholder="closed_date" name="closed_date" value={values.closed_date} onChange={handleChange}  onBlur={handleBlur}    required /> <span style={{color:"red"}}> {touched.closed_date && errors.closed_date}</span><br/>
        </Form.Group>
        <br/><br/>
        <Button type="submit" disabled={isSubmitting} variant="primary">Save</Button>            
            </Form>
        
           )}
          </Formik>
    </div>
   </>
   );
  }   
export default Assignbooks;