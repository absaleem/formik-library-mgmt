import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Createstudent from './Createstudent';

function Liststudents(){
    const navigate = useNavigate();

    const [userdata,setUserdata]=useState([]);
    const [loading, setLoading] = useState(true);
    
useEffect(() => { 
    async function getData(){
      setLoading(true);
      try {
            const response=await axios.get("https://6341636a20f1f9d7997200a7.mockapi.io/student");
        setUserdata(response.data);  
      }
      catch(error){

      }
      setLoading(false);
    }        
    getData();//call user data when loading the file
    
},[]);

const handleProceed = (id,status) => {
    if(status===1){  navigate(`/Editstudent/${id}`); }else{  }
  };

  async function onDeleteData(id){
    setLoading(true);
    try {
     await axios.delete(`https://6341636a20f1f9d7997200a7.mockapi.io/student/${id}`);
    var responseData=userdata.filter(item => id !== item.id);
    setUserdata(responseData);  
     alert('deleted successfully');
    }catch(error){

    }
    setLoading(false);
  }  

    return (
        <>
         <h1>Welcome to Dashboard, Library MANAGEMENT using formik</h1>
         <h4><Link to="/" element={<Dashboard />}>Dashboard</Link> |<Link to="/Createstudent" element={<Createstudent />}>Create Student</Link></h4>
         <h2 style={{textAlign:"center"}}>List Student</h2>
         {loading && <div className='loading'>Loading</div>}
    {!loading && (
         
    <Table striped bordered hover className='table'>
    <thead>
     <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Age</th>
       <th>Email</th>
       <th>Gender</th>
       <th>Mobile number</th>
       <th>Education</th>
       <th>Courses</th>
       <th>Joining date</th>
       <th>Address</th>
       <th>Action</th>
       </tr>
       </thead> 
       <tbody>   
       {userdata ? (
         userdata.map((row) => (   
       <tr key={row.id}>
       <td>{row.id}</td>
       <td>{row.name}</td>
       <td>{row.age}</td>
       <td>{row.email}</td>
       <td>{row.gender}</td>
       <td>{row.mobile_number}</td>
       <td>{row.courses}</td>
       <td>{row.education}</td>
       <td>{row.joined_date}</td>
       <td>{row.address}</td>
       <td>
          <Button onClick={(e)=>handleProceed(row.id,1)}>Update</Button><br/>
          <Button onClick={()=>onDeleteData(row.id)}>Delete</Button>
       </td>
       </tr>
     )))
     :" Loading..." }
     </tbody>
    </Table>
    )}
    </>
  );
}

export default Liststudents;