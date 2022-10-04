import styled from "@emotion/styled"
import React, { ReactNode, useState } from "react"
import Header from "./Header/Header"
import Main from "./Main/Main"

import dynamic from "next/dynamic"
import { CircularProgress } from "@mui/material"
import { AccessibilityPanel } from "../Common/AccessibilityPanel"

type Props = {
  children: ReactNode
  commands?: any
  message?: string
}

/**
 * Provide a children React to use this component. Use at pages
 * @example
 * <Layout>
 *  <Component1/>
 *  <div></div>
 *  ...
 * </Layout>
 */

const Layout = ({ commands, message, children }: Props) => {
  const [assisstant, setAssisstant] = useState(false)
  const VoiceAssisstant = dynamic(
    () => import("../../components/Common/VoiceAssisstant/VoiceAssisstant"),
    {
      loading: () => (
        <IconWrapper>
          <IconContainer style={{ padding: "20px" }}>
            <CircularProgress />
          </IconContainer>
        </IconWrapper>
      ),
      ssr: false,
    }
  )

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <AccessibilityPanel onClick={() => setAssisstant(!assisstant)} />
      {assisstant && (
        <VoiceAssisstant
          assisstant={assisstant}
          specificCommands={commands}
          specificMessage={message}
        />
      )}
    </>
  )
}

export default Layout

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`
const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  right: 2vh;
  cursor: pointer;
`
