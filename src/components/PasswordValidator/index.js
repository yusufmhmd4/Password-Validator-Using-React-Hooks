import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  MainHeading,
  MainParagraph,
  PasswordInput,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <MainHeading>Password Validator</MainHeading>
        <MainParagraph>
          Check how strong and secure is your password
        </MainParagraph>
        <PasswordInput
          type="password"
          placeholder="Password"
          onChange={changePassword}
        />
        {password.length <= 7 && (
          <ErrorParagraph>
            Your password must be at least 8 characters
          </ErrorParagraph>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
