import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 640px;
    padding: 0 0 12px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin: auto;

    img {
        width: 104px;
        height: 58px;
        margin: 24px 128px 16px;
        object-fit: contain;
    }

    `
export const ContainerTitle = styled.div`

    width: 360px;
    height: 42px;
    margin: 16px 0 0;
    padding: 12px 32px;

    h2 {
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000000;
    }
`

export const Form = styled.form`
      
        label {
            position: absolute;
            top: -8%;
            left: 5%;
            background-color: white;
            z-index: 2;
            color: #b8b8b8;
        }

        input {    
            width: 328px;
            height: 56px;
            margin: 8px 0 0;
            padding: 19px 48px 19px 16px;
            border-radius: 4px;
            border: solid 1px #b8b8b8; 

        }
       
        p {
            margin: 10px 10px;
        } 

`
