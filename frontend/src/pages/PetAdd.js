import { Button, Grid, Divider } from "@material-ui/core";
import PetEnum from "../attributes/pet/Pet";
import OwnerEnum from "../attributes/owner/Owner";
import PetAddStyles from "../styles/hooks/petAddStyles";
import addPetFormSwitcher from "../helpers/addPetFormSwitcher";
import ImageUploader from "react-images-upload";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import instance from "../helpers/axiosConfig";
import CustomSnackBar from "../components/CustomSnackBar";
import { useCookies } from "react-cookie";

function PetAdd() {
  const petAddClasses = PetAddStyles();
  const location = useLocation();
  const history = useHistory();
  const defaultImageLabel =
    "Tamanho máximo do arquivo: 5mb, formatos: jpg, gif, png";
  const [imageLabel, setImageLabel] = useState(defaultImageLabel);
  const [form, setForm] = useState(location.state || {
    image: [],
    radio: "male",
    dates: {},
    date: {},
    height: "",
    textField: {},
  });
  const [snackOpen, setSnackOpen] = useState({ state: false, type: "error" });
  const [cookies, setCookie] = useCookies(["x-access-token", "user-id"]);

  useEffect(() => {
    if (history.location.from === "/pet-info") {
      getPetInfo();
    }
  }, []);

  function setEndpoint() {
    switch (cookies["user-type"]) {
      case "2":
        return `/pets/${history.location.state.microchipNumber}/owner`;
      case "3":
        return `/pets/${history.location.state.microchipNumber}/owner-full`;
      default:
        return `/pets/${history.location.state.microchipNumber}`;
    }
  }

  function getValueForPetPost(type, index) {
    switch (type) {
      case "numeric":
        return Number(form.textField[index]);
      case "text":
        return form.textField[index];
      case "dropdown":
        return form.height;
      case "boolean":
        return form.radio;
      case "date":
        return form.date[index];
      case "dates":
        return form.dates[index];
      default:
        return "";
    }
  }

  function convertToPetPost() {
    let body = {};
    Object.keys(PetEnum).forEach((key) => {
      body = {
        ...body,
        [key]: getValueForPetPost(PetEnum[key][2], PetEnum[key][3]),
      };
    });
    Object.keys(OwnerEnum).forEach((key) => {
      body = {
        ...body,
        owner: {
          ...body.owner,
          [key]: getValueForPetPost(OwnerEnum[key][2], OwnerEnum[key][3]),
        },
      };
    });
    body = {
      ...body,
      image: {
        data: form.image.data,
        contentType: form.image.contentType
      },
      captureLocalization: {
        coordinates: form.coordinates,
      },
    };
    return body;
  }

  function handleForm(data) {
    let formData = {
      image: [],
      radio: "male",
      dates: {},
      date: {},
      height: "",
      textField: {},
    };

    Object.keys(data).forEach((key) => {
      if (PetEnum.hasOwnProperty(key)) {
        switch (PetEnum[key][2] || "") {
          case "numeric":
          case "text":
            formData.textField[PetEnum[key][3]] = data[key];
            break;
          case "dropdown":
            formData.height = data[key];
            break;
          case "boolean":
            formData.radio = data[key];
            break;
          case "date":
            formData.date[PetEnum[key][3]] = data[key];
            break;
          case "dates":
            formData.dates[PetEnum[key][3]] = data[key];
            break;
          default:
            break;
        }
      }
      if (key === "owner") {
        Object.keys(data[key]).forEach((ownerKey) => {
          if (OwnerEnum.hasOwnProperty(ownerKey)) {
            formData.textField[OwnerEnum[ownerKey][3]] = data[key][ownerKey];
          }
        });
      }
      formData.image = new File([data["image"]], "default.png", { type: "image/png"});
      console.log(formData.image);
    });
    setForm(formData);
  }

  function getPetInfo() {
    instance
      .get(setEndpoint())
      .then((response) => {
        let data = {};
        Object.assign(data, response.data[0]);
        handleForm(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlePetInfoSave() {
    instance
      .post("/pets", convertToPetPost(), {
        params: {
          id: cookies["user-id"],
        },
      })
      .then((response) => {
        setSnackOpen({ state: true, type: "success" });
        console.log(response);
      })
      .catch((err) => {
        setSnackOpen({ state: true, type: "error" });
        console.log(err);
      });
    if (location.from === "/pet-info") {
      history.goBack();
    }
  }

  function handleGoBackClick() {
    if (location.from === "/pet-info") {
      history.goBack();
    }
  }

  function handleOnDrop(picture) {
    console.log(picture);
    setImageLabel(picture[0] ? picture[0].name : defaultImageLabel);
    picture[0].arrayBuffer().then((buffer) => {
      console.log(buffer);
      setForm((prev) => ({
        ...prev,
        image: {
          data: Buffer.from(new Uint8Array(buffer)),
          contentType: picture[0].type
        },
      }));
    });
    console.log(form)
  }

  return (
    <div className={petAddClasses.root}>
      <CustomSnackBar
        state={snackOpen.state}
        type={snackOpen.type}
        setState={setSnackOpen}
      />
      <form>
        <h2 align="center">Informações do animal</h2>
        <Grid container spacing="5">
          <Grid xs={12} item>
            <ImageUploader
              buttonText="Escolher foto do animal"
              label={imageLabel}
              singleImage={true}
              onChange={handleOnDrop}
              withPreview={true}
            />
          </Grid>
          {Object.values(PetEnum).map((pet, index) => (
            <Grid item spacing="5" md={6} xs={12} align="center">
              {addPetFormSwitcher(pet, form, setForm, index)}
            </Grid>
          ))}
          <Grid xs={12} item>
            <Divider />
          </Grid>
          <Grid item spacing="5" align="center" xs={12}>
            <h2>Informações do Tutor</h2>
          </Grid>
          {Object.values(OwnerEnum).map((owner, index) => (
            <Grid item spacing="5" md={6} xs={12} align="center">
              {addPetFormSwitcher(
                owner,
                form,
                setForm,
                index + Object.keys(PetEnum).length
              )}
            </Grid>
          ))}
          <Grid container item spacing={2}>
            <Grid xs={12} item>
              <Divider />
            </Grid>
            <Grid
              className={petAddClasses.clearButtonContainer}
              item
              xs={12}
              md={4}
            >
              <Button
                className={petAddClasses.actionButton}
                color="primary"
                variant="contained"
                onClick={() => {
                  history.replace("/pet-add", {
                    radio: "male",
                    dates: {},
                    date: {},
                    height: "",
                    textField: {},
                  });
                  history.go(0);
                }}
              >
                Limpar
              </Button>
            </Grid>
            <Grid
              className={petAddClasses.cancelButtonContainer}
              item
              xs={12}
              md={4}
            >
              <Button
                onClick={handleGoBackClick}
                className={petAddClasses.actionButton}
                color="primary"
                variant="contained"
              >
                Cancelar
              </Button>
            </Grid>
            <Grid
              className={petAddClasses.saveButtonContainer}
              item
              xs={12}
              md={4}
            >
              <Button
                onClick={handlePetInfoSave}
                className={petAddClasses.actionButton}
                color="secondary"
                variant="contained"
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default PetAdd;
