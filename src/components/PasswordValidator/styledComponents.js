// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`
export const PasswordContainer = styled.div`
  background-color: #383a4e;
  width: 90%;
  max-width: 520px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 5px;
`
export const MainHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
  margin-top: 30px;
  color: #edeeff;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const MainParagraph = styled.p`
  font-family: Roboto;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  color: #ffffff;
  margin: 10px;
  color: #edeeff;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const PasswordInput = styled.input`
  height: 42px;
  width: 80%;

  outline: none;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: roboto;
  font-size: 13px;
  padding: 4px 10px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const ErrorParagraph = styled.p`
  font-family: Roboto;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  margin: 10px;
  margin-bottom: 30px;
  color: #ef4444;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
