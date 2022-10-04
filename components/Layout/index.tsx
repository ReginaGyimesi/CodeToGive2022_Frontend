import styled from "@emotion/styled"
import React, { ReactNode, useState } from "react"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Head from "next/head"

import dynamic from "next/dynamic"
import { CircularProgress } from "@mui/material"
import { AccessibilityPanel } from "../common/AccessibilityPanel"

type Props = {
  children: ReactNode
  commands?: any
  message?: string
  title?: string
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

const Layout = ({ commands, message, title, children }: Props) => {
  const [assisstant, setAssisstant] = useState(false)
  const VoiceAssisstant = dynamic(
    () => import("../common/VoiceAssisstant/VoiceAssisstant"),
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
      <Head>
        <title>{title && `${title} | `}SalvaVita Alapítvány</title>
      </Head>
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
