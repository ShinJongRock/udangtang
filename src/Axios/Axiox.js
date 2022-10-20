// import React, {useState, useEffect} from 'react'

// import axios from 'axios';

// const Axiox = () => {

//     const [roomhost,setroomhost] = useState("");
//     const [roompw,setroompw] = useState("");
//     const [roomname,setroomname] = useState("");


//     useEffect(async () =>{
//         try {
//             const response = await axios.post('http://Udangtangtangapp-env.eba-xaipu9ej.ap-northeast-2.elasticbeanstalk.com/createRoom');
//             setroomhost(response.data);
//             setroomname(response.data);
//             setroompw(response.data);
//         } catch (error) {
//             console.log(error)
//         }
//     })

    
//     let content = 
//     <dic>
//         {}<button onClick={() =>   setroomhost(response.data)}> 방장</button>
//     </dic>



    
//   return (
//     <div>


//              <TextField 
//                 label="방장"
//                 value = {iroomhostd}
//                 onChange = {(event)=>{setroomhost(event.target.value);
//                     console.log(event.target.value);
//                 }}/>

//                 <TextField 
//                 label="아이디"
//                 value = {roompw}
//                 onChange = {(event)=>{setroomname(event.target.value);
//                     console.log(event.target.value);
//                 }}
//                 />
//                 <TextField 
//                 label="비밀번호"
//                 value = {roomname}
//                 onChange = {(event)=>{setroompw(event.target.value);
//                     console.log(event.target.value);
//                 }}
//                 />


//                 <Button type = "submit" variant="contained" onClick={register}>Sign in</Button>

//                 {content}
//     </div>
//   )
// }

// export default Axiox