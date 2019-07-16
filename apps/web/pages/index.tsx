import React, { FC, ReactElement } from 'react'
import { TestComponent } from '@monext/webby'

const IndexPage: FC = (): ReactElement => (
  <div>
    <h1>This is Monext!</h1>
    <TestComponent />
  </div>
)

export default IndexPage
