import owasp from 'owasp-password-strength-test'

owasp.config({
  allowPassphrases: true,
  maxLength: 128,
  minLength: 8,
  minOptionalTestsToPass: 1
})

export default owasp