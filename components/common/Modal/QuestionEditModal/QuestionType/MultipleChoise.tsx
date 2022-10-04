import * as React from "react"
import { FormControl, InputLabel, MenuItem } from "@mui/material"
import Select from "@mui/material/Select"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import CustomTextField from "../../../CustomTextField/CustomTextField"

export const MultipleChoice = ({ tags }: any) => {
  const { control, handleSubmit } = useForm()
  const [tag, setTag] = React.useState<any>(null)

  const handleChange = (event: any) => {
    setTag(event.target.value as string)
  }
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ width: "58%" }}>
            <Label>Answer {i + 1}</Label>
            <CustomTextField
              control={control}
              name="name"
              label={"Answer " + (i + 1)}
              type="text"
              variant="outlined"
              sx={{ marginBottom: "24px" }}
            />
          </div>
          <div style={{ width: "40%" }}>
            <Label>Tag(s)</Label>
            <FormControl fullWidth>
              <InputLabel>Tag(s)</InputLabel>
              <Select
                value={tag}
                label="Tag"
                onChange={handleChange} // state array should be kept of changed values
                sx={{ borderRadius: "8px", height: "50px" }}
              >
                <MenuItem value={"slider"}>Social</MenuItem>
                <MenuItem value={"multipleChoice"}>Intellectual</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      ))}
    </>
  )
}

const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 12px;
`
