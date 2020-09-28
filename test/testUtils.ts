import { ComponentClass, FunctionComponent, ReactElement } from 'react'
import { render } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

interface ProviderProps {
  children?: FunctionComponent<{}> | ComponentClass<{}, any> | undefined | any
}

const Providers = ({ children }: ProviderProps) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui: ReactElement<any, string>, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
