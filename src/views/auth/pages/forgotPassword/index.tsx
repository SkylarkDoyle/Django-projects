import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Header, SubHeader } from '../../../../shared/themes/style/stylc/shared/components'
import { ForgotPasswordForm } from '../../components'
import { Wrapper } from './styles'

interface Props {
  //  using `interface` is also ok
  message?: string
}
type State = {
  count?: number // like this
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // optional second annotation for better type inference
    this.state = {}
  }

  render() {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password Page - Gromoni</title>
        </Helmet>
          <Wrapper className="container px-4 d-flex justify-content-start align-items-start flex-column">
            <Header>Forgot password</Header>
            <SubHeader className="pb-4">Please enter your registered email address</SubHeader>
            <ForgotPasswordForm />
          </Wrapper>
          <div className="p-4" />
      </>
    )
  }
}
