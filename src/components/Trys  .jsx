import styled from "styled-components"

export default function Trys ({completed}) {
  const handleTryImg = () => {

  }

  return (
    <TrysArea>
      {completed.map( (response, index) => <TryImg key = {index} src={response.asnwerIcon} data-test ={response.test}/>)}
    </TrysArea>
  )
}

const TrysArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TryImg = styled.img`
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`