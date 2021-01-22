import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

import Home from '../../pages'
import { render } from '@testing-library/react'

describe('Pages > Home', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
