import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const DisplayContainer = styled.div`
  background-color: #3b4b69;
  width: 45%;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  @media (max-width: 767px) {
    width: 100%;
    border-radius: 0;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  border: 1px solid #ffd773;
  border-width: 0 0 2px 0;
  padding: 8px;
`

export const DigitalCreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 320px;
  border-radius: 32px;
  padding: 32px 46px 32px 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
`

export const CardNumberEl = styled.p`
  color: #ffffff;
  font-size: 42px;
  font-weight: 500;
`

export const NamePlaceholder = styled.p`
  color: #ffffff;
`

export const NameEl = styled.p`
  color: #ffffff;
  margin-top: 0px;
  font-size: 28px;
`

export const InputContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 46px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const InputInContainer = styled.div`
  padding: 26px;
  box-shadow: 1px 1px 1px 1px #c3cad9;
  border-radius: 18px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const InputHead = styled.h3`
  margin-top: 0;
  color: #344e7a;
  text-align: center;
`

export const InputEl = styled.input`
  border: 0.5px solid #c3cad9;
  margin-bottom: 16px;
  padding: 12px;
  outline: none;
  color: #475569;
`
