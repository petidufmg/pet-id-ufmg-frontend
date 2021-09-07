import React, { useEffect, useState } from "react";
import CustomTypography from "../components/CustomTypography.js";
import CustomSearchForm from "../components/CustomSearchForm.js";
import { useHistory } from "react-router-dom";
import instance from "../helpers/axiosConfig";
import CustomSnackBar from "../components/CustomSnackBar";
import _ from "lodash";
import { useCookies } from "react-cookie";

function Search() {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [snackOpen, setSnackOpen] = useState({ state: false, type: "error" });
  const [petData, setPetData] = useState({});
  const [cookies, setCookie] = useCookies(["x-access-token", "user-type"]);

  console.log(cookies["x-access-token"]);

  useEffect(() => {
    if (!_.isEmpty(petData)) {
      history.push({ pathname: "/pet-info", state: petData, from: "/search" });
    }
  }, [petData]);

  function handleSubmit(e) {
    e.preventDefault();
    getPetInfo();
  }

  function setEndpoint() {
    switch (cookies["user-type"]) {
      case "2":
        return `/pets/${input}/owner`;
      case "3":
        return `/pets/${input}/owner-full`;
      default:
        return `/pets/${input}`;
    }
  }

  function getPetInfo() {
    instance
      .get(setEndpoint())
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.data.length > 0) {
          setPetData(response.data[0]);
        } else {
          setSnackOpen({ state: true, type: "warning"})
        }
      })
      .catch((err) => {
        setSnackOpen({ state: true, type: "error"})
        console.log(err);
      });
  }

  return (
    <div>
      <CustomSnackBar
        state={snackOpen.state}
        type={snackOpen.type}
        setState={setSnackOpen}
      />
      <CustomTypography />
      <CustomSearchForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Search;
