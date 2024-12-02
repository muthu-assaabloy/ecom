import { Button, Fab, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Delete, Edit } from "@mui/icons-material";
import { AllProducts } from "../Common/DoorConstants";
import Sidebar from "./SideBar/SideBar";

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Stack direction={"row"}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div style={{ width: "100%" }}>
        <h3
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "20px",
            marginTop: "8%",
            marginLeft: "5%",
          }}
        >
          Product List
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            // label="TextField"
            placeholder="Search Product..."
            variant="outlined"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              marginBottom: "20px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Fab
            variant="extended"
            id="add-product-popup-button"
            sx={{
              bgcolor: "#274c91",
              color: "white",
              zIndex: 0,
              ":hover": {
                color: "black",
              },
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Add Product
          </Fab>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            class="relative overflow-x-auto shadow-md sm:rounded-lg"
            style={{ width: "90%" }}
          >
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-auto">
              <thead class="text-xs text-white uppercase bg-[#1C2434] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Company Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 flex justify-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {AllProducts.map((item) => (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td class="px-6 py-4">{item.id}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td class="px-6 py-4">{item.category}</td>
                    <td class="px-6 py-4">{item.Company}</td>
                    <td class="px-6 py-4">{item.price}</td>
                    <td class="px-6 py-4 flex justify-around">
                      <Fab
                        size="small"
                        sx={{
                          bgcolor: "#1C2434",
                          color: "white",
                          ":hover": { bgcolor: "white", color: "#1C2434" },
                        }}
                      >
                        <Edit />
                      </Fab>
                      {/* </td>
                 <td class="px-6 py-4"> */}
                      <Fab
                        size="small"
                        sx={{
                          bgcolor: "#1C2434",
                          color: "white",
                          ":hover": { bgcolor: "white", color: "#1C2434" },
                        }}
                      >
                        <Delete />
                      </Fab>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Products;
