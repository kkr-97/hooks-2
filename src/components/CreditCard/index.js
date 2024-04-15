import {useState} from 'react'

import {
  InputEl,
  InputHead,
  InputInContainer,
  InputContainer,
  NameEl,
  NamePlaceholder,
  CardNumberEl,
  DigitalCreditCardContainer,
  MainHeading,
  DisplayContainer,
  BgContainer,
} from './styledComponents'

function CreditCard() {
  const [cardNumber, updateCardNumber] = useState('')
  const [name, updateName] = useState('')

  const onChangeCardNumber = event => updateCardNumber(event.target.value)
  const onChangeCardName = event => updateName(event.target.value)

  return (
    <BgContainer>
      <DisplayContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <DigitalCreditCardContainer data-testid="creditCard">
          <CardNumberEl>{cardNumber}</CardNumberEl>
          <NamePlaceholder>CARDHOLDER NAME</NamePlaceholder>
          <NameEl>{name.toUpperCase()}</NameEl>
        </DigitalCreditCardContainer>
      </DisplayContainer>
      <InputContainer>
        <InputInContainer>
          <InputHead>Payment Method</InputHead>
          <InputEl onChange={onChangeCardNumber} placeholder="Card Number" />
          <InputEl onChange={onChangeCardName} placeholder="Cardholder Name" />
        </InputInContainer>
      </InputContainer>
    </BgContainer>
  )
}

export default CreditCard
