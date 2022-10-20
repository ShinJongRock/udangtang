
import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';


const Home = () => {
  const [data, setData] = useState();

  useEffect(()=>{
    (async ()=>{
      const res = await axios.get("/list");
      console.log(res);
      setData(res);
    })()
  },[])

  // axios.post("/list",{
  //   roomName: "10",
  //   roomPw: "123",
  //   roomHost: "123"
  // });

  return (
    <Table responsive="xl">
    <thead>
      <tr>
        <th>번호</th>
        <th>방이름</th>
        <th>관리자 명</th>
        <th>인원</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((e)=>
          <tr>
            <td>{e.key}</td>
            <td>{e.name}</td>
            <td>조창훈</td>
            <td>2</td>
          </tr>
      )
    }

      <tr>
        <td>2</td>
        <td>나도</td>
        <td>양연지</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
      <tr>
      <td>3</td>
        <td>집 왜감?</td>
        <td>락스</td>
        <td>2</td>
      </tr>
    </tbody>
  </Table>
  

  )
}

export default Home