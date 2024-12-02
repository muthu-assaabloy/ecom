import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { PureComponent } from "react";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import UploadIcon from "@mui/icons-material/Upload";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Viewer from "../components/3d/Viewer";
import { ColorTypes } from "../Common/DoorConstants";
import Sidebar from "./SideBar/SideBar";

const menuItemStyle = { display: "flex", justifyContent: "space-between" };

class Configurator extends PureComponent {
  constructor(props) {
    super(props);
    this.ViewerRef = React.createRef();
    this.state = {
      open: false,
      width: 0,
      height: 0,
      sidebarOpen: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {}
  loadfiles() {
    const uploadedFile = document.getElementById("selectedModel").files[0];
    console.log(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    console.log(url);
    this.ViewerRef.current.loadModel(url);
  }
  render() {
    return (
      <div className="w-screen grid grid-cols-10">
        {/* <div
          style={{
            backgroundColor: "#2A518C",
            // width: "15%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            float: "left",
          }}
        >
          <Stack
            gap={3}
            sx={{ width: 200, marginTop: 20 }}
            direction={"column"}
          >
            <Fab variant="extended">
              <ArchitectureIcon sx={{ mr: 1 }} />
              Config
            </Fab>
            <Fab
              variant="extended"
              onClick={() => this.setState({ open: !this.state.open })}
            >
              <UploadIcon sx={{ mr: 1 }} />
              Upload
            </Fab>
            <Fab variant="extended">
              <DocumentScannerIcon sx={{ mr: 1 }} />
              Scan
            </Fab>
          </Stack>
        </div> */}
        <div className="col-span-8 h-screen">
          <Viewer ref={this.ViewerRef} />
        </div>

        <div
          className="col-span-2"
          style={{
            backgroundColor: "#7DA6D9",
            // width: "15%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            float: "right",
          }}
        >
          <Stack
            gap={3}
            sx={{ width: 200, marginTop: 15 }}
            direction={"column"}
          >
            <Stack
              gap={3}
              sx={{ width: 200, marginTop: 1 }}
              direction={"column"}
            >
              {/* <Fab variant="extended">
                  <ArchitectureIcon sx={{ mr: 1 }} />
                  Config
                </Fab> */}
              <Fab
                variant="extended"
                onClick={() => this.setState({ open: !this.state.open })}
                sx={{
                  backgroundColor: "#274c91",
                  color: "white",
                  ":hover": { color: "black" },
                }}
              >
                <UploadIcon sx={{ mr: 1 }} />
                Upload
              </Fab>
              {/* <Fab variant="extended">
                  <DocumentScannerIcon sx={{ mr: 1 }} />
                  Scan
                </Fab> */}
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 2,
              }}
            >
              <p style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                Width:
              </p>
              <input
                style={{
                  width: 100,
                  color: "black",
                  paddingLeft: 10,
                  borderRadius: 10,
                }}
                className="shadow-xl"
                value={this.state.width}
                onChange={(e) => this.setState({ width: e.target.value })}
              />
              <p style={{ color: "white", fontSize: 20 }}>ft</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <p style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                Height:
              </p>
              <input
                style={{
                  width: 100,
                  color: "black",
                  paddingLeft: 10,
                  borderRadius: 10,
                }}
                className="shadow-xl"
                value={this.state.height}
                onChange={(e) => this.setState({ height: e.target.value })}
              />{" "}
              <p style={{ color: "white", fontSize: 20 }}>ft</p>
            </Box>
            <FormControl fullWidth sx={{ marginTop: 3 }}>
              <Box
                sx={{
                  color: "black",
                  width: 120,
                  height: 35,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "wheat",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "22%",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "black",
                    color: "white",
                    transition: "0.3s",
                  },
                }}
              >
                <p
                  onClick={() => {
                    this.ViewerRef.current.UpdateWidthHeight(
                      this.state.width,
                      this.state.height
                    );
                  }}
                >
                  Update
                </p>
              </Box>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: 5 }}>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Door Color
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Door Material"
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline:hover": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                {ColorTypes.map((item) => (
                  <MenuItem
                    sx={menuItemStyle}
                    onClick={() =>
                      this.ViewerRef.current.UpdateDoorColor(item.color)
                    }
                  >
                    <Box>{item.name}</Box>
                    <Box
                      sx={{
                        height: "25px",
                        width: "45px",
                        backgroundColor: item.color,
                        border: 1,
                      }}
                    ></Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Frame Color
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Door Material"
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline:hover": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                {ColorTypes.map((item) => (
                  <MenuItem
                    sx={menuItemStyle}
                    onClick={() =>
                      this.ViewerRef.current.UpdateFrameColor(item.colorvalue)
                    }
                  >
                    <Box>{item.name}</Box>
                    <Box
                      sx={{
                        height: "25px",
                        width: "45px",
                        backgroundColor: item.color,
                        border: 1,
                      }}
                    ></Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Locks
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Door Material"
                sx={{
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline:hover": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem sx={menuItemStyle}>Yale</MenuItem>
                <MenuItem sx={menuItemStyle}>Sargent</MenuItem>
                <MenuItem sx={menuItemStyle}>Corbin Russwin</MenuItem>
                <MenuItem sx={menuItemStyle}>Arrow</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </div>
        <Dialog onClose={this.handleClose} open={this.state.open}>
          <DialogTitle>Upload File</DialogTitle>
          <DialogContent>
            <input
              type="file"
              id="selectedModel"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button id="add-product-cancel" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button
              id="add-product-save"
              onClick={() => {
                this.handleClose();
                this.loadfiles();
              }}
            >
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Configurator;
