import styled from "styled-components";

export const Tela  = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin: auto;

p {
   
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #000;
  letter-spacing: -0.39px;
  line-height: 180%;
    
}

img {
    width: 24px;
    height: 24px;
    
}

h2{
  margin: 10px;
  margin-top: 30px;
  margin-bottom:10px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding: 10px;
}

h3{
  color: grey;
}

h4 {
  margin: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  

}


`
export const Rectangle  = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  background-color: #eee;
`
export const Endereco  = styled.div`
 
  color: var(--greyish);
`

export const Informacoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;




`



    
    