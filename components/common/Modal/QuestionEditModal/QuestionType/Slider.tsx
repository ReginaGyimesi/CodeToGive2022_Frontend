import * as React from "react"
import { FormControl, InputLabel, MenuItem } from "@mui/material"
import Select from "@mui/material/Select"
import styled from "@emotion/styled"

export const Slider = ({ tags }: any) => {
  const [tag, setTag] = React.useState<any>(null)

  const handleChange = (event: any) => {
    setTag(event.target.value as string)
  }
  return (
    <>
      <Label>Tag(s)</Label>
      <FormControl fullWidth>
        <InputLabel>Tag(s)</InputLabel>
        <Select
          value={tag}
          label="Tag"
          onChange={handleChange}
          sx={{ borderRadius: "8px", height: "50px" }}
        >
          <MenuItem value={"slider"}>Social</MenuItem>
          <MenuItem value={"multipleChoice"}>Intellectual</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 12px;
`
