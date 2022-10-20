import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';







const HomeLest = ({show , onHide}) => {
  const [inputs, setInputs] = useState({  
    roomhost: '',
    roompw: '',
    roomname: '',


    
})
  // const [roomhost,setroomhost] = useState("");
//   const [roompw,setroompw] = useState("");
//   const [roomname,setroomname] = useState("");


//   useEffect(async () =>{
//     try {
//         const response = await axios.post('http://Udangtangtangapp-env.eba-xaipu9ej.ap-northeast-2.elasticbeanstalk.com/createRoom');
//         setroomhost(response.data);
//         setroomname(response.data);
//         setroompw(response.data);
//     } catch (error) {
//         console.log(error)
//     }
// })
  const onChange = (event) =>{
    console.log(event.target.value);
  }


  return (
    <Modal
    show = {show}
    onHide = {onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >

    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        방 만들기
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>


    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>방제목 </Form.Label>
        <Form.Control type="text" placeholder="방제목 입력하세요" onChange = {onChange}/>
        <Form.Text className="text-muted"  />


      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>방이름(key)</Form.Label>
        <Form.Control type="text" placeholder="방이름 입력하세요" onChange = {onChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력 하세요"  onChange = {onChange}/>
      </Form.Group>
      
      
      
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={onHide} >Close</Button>
    </Modal.Footer>
     
  </Modal>

  )
}

export default HomeLest