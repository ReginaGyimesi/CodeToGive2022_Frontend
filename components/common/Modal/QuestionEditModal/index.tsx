import * as React from "react"
import CloseIcon from "@mui/icons-material/Close"
import styled from "@emotion/styled"
import { Dialog, FormControl, Input, InputLabel, MenuItem } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

import { useForm } from "react-hook-form"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import CustomButton from "../../CustomButton/CustomButton"
import CustomTextField from "../../CustomTextField/CustomTextField"
import { Slider } from "./QuestionType/Slider"
import { MultipleChoice } from "./QuestionType/MultipleChoise"

type ModalProps = {
  onClick: () => void
}

const QuestionEditModal = ({ onClick }: ModalProps) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { control, handleSubmit } = useForm()
  const [type, setType] = React.useState<any>("slider")
  const [file, setFile] = React.useState<any>(null)

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  const hiddenFileInput = React.useRef<any>(null)

  const handleClick = (e: any) => {
    hiddenFileInput.current?.click()
  }

  const handleFileChange = (e: any) => {
    const fileUploaded = e.target.files[0]
    setFile(fileUploaded)
  }

  return (
    <div>
      <AddButtonContainer>
        <CustomButton
          onClick={() => {
            onClick
            handleOpen()
          }}
          variant="contained"
        >
          Add New
          <AddIcon
            sx={{ color: "white", fontSize: "20px", marginLeft: "5px" }}
          />
        </CustomButton>
      </AddButtonContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          style: {
            padding: 24,
            borderRadius: 16,
            background: "#FFFFFF",
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.1)",
            boxShadow:
              "0px 0px 7px rgba(0, 0, 0, 0.04), 0px 15px 17px -1px rgba(0, 0, 0, 0.05); }",
            width: "100%",
            height: "fit-content",
          },
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <IconWrapper>
            <CloseIcon
              sx={{
                cursor: "pointer",
                color: "rgba(0, 0, 0, 0.54);",
              }}
              onClick={handleClose}
            />
          </IconWrapper>
          <div style={{ marginBottom: 48 }}>
            <Title>Add/modify question</Title>
          </div>
          <Label>Question</Label>
          <CustomTextField
            control={control}
            name="name"
            label="Question"
            type="text"
            variant="outlined"
            sx={{ marginBottom: "24px" }}
          />
          <Label>Type</Label>
          <FormControl sx={{ marginBottom: "24px" }} fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              label="Type"
              onChange={handleChange}
              sx={{ borderRadius: "8px", height: "50px" }}
            >
              <MenuItem value={"slider"}>Slider</MenuItem>
              <MenuItem value={"multipleChoice"}>Multiple choice</MenuItem>
            </Select>
          </FormControl>

          {type === "slider" && <Slider />}
          {type === "multipleChoice" && <MultipleChoice />}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 48,
            }}
          >
            <div>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <CustomButton
                variant="outline"
                style={{ border: "2px solid #0097F2", width: "198px" }}
                onClick={handleClick}
              >
                Attach Image
                <AttachFileIcon style={{ height: "20px", marginLeft: "6px" }} />
              </CustomButton>
              {file && (
                <Text>
                  {file.name}{" "}
                  <CloseIcon
                    style={{
                      width: 18,
                      color: "red",
                      cursor: "pointer",
                      marginTop: "2px",
                      marginLeft: "4px",
                    }}
                    onClick={() => setFile(null)}
                  />
                </Text>
              )}
            </div>
            <CustomButton variant="contained" style={{ width: "87px" }}>
              Save
            </CustomButton>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default QuestionEditModal

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
`
const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  line-height: 40px;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: black;
  align-items: center;
  display: flex;
`

const AddButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 40px 0;
`
const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 12px;
`
