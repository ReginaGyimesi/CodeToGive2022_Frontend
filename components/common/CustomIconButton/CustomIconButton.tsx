import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"

type CustomIconButtonProps = {
  _onClick?: any
  icon: any
  align?: string
}

export const CustomIconButton = ({
  _onClick,
  icon,
  align,
  ...props
}: CustomIconButtonProps) => {
  return (
    <IconWrapper onClick={_onClick} style={{ alignSelf: align, ...props }}>
      <IconContainer style={{ padding: "20px" }}>
        <SvgIcon sx={{ fontSize: "30px", color: "#0097F2" }}>{icon}</SvgIcon>
      </IconContainer>
    </IconWrapper>
  )
}

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
  cursor: pointer;
`
