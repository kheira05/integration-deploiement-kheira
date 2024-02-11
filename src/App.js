import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, Snackbar,Alert } from "@mui/material";
import SendIcon from "@mui/material/Button";
import {nomValide, prenomValide,emailValide, dateNaissanceValide, codePostalValide} from "./module"



function App() {
  const [form,setForm] =  useState({ nom: "", prenom:"", email: "", dateNaissance:"", ville:"", codePostal:"" });
  const [open,setOpen] =  useState(false);
  const [errorState, setErrorState] = useState({
    nom: false,
    prenom: false,
    email: false,
    dateNaissance: false,
    ville: false,
    codePostal: false,
  });

  const [errorText, setErrorText] = useState({
    nom: "",
    prenom: "",
    email: "",
    dateNaissance: "",
    ville: "",
    codePostal: "",
  });
  const [alertSeverity, setAlertSeverity] =  useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange =  (champ) => (e) => {
    setForm({...form,[champ]:e.target.value,})
    setErrorState({
      ...errorState,
      [champ]: false,
    });

    setErrorText({
      ...errorText,
      [champ]: "",
    });
   }
   const setFieldError = (champ, error, text) => {
    setErrorState((prevState) => ({
      ...prevState,
      [champ]: error, 
    }));
    setErrorText((prevState) => ({
      ...prevState,
      [champ]: text,
    }));
  };
   const handleSubmit = (e) => {
    e.preventDefault();
   if (estValide()){
    localStorage.setItem("formulaire",JSON.stringify(form));
    setForm({nom:"",prenom:"",email:"",dateNaissance:"",ville:"",codePostal:""});
    setOpen(true);
    setAlertSeverity("success");
    setAlertMessage("Formulaire valide");
   }else{
    setAlertSeverity("error");
    setAlertMessage("Formulaire invalide");
    setOpen(true);
   }
   };
   const estValide = () => {
    let boolean = true;
    try {
      if (form.nom !== '' ||  form.prenom !== '' || form.email !=='' || form.dateNaissance !== '' ||  form.ville !=='' || form.codePostal !== '') {
        if (!nomValide(form)){
          setFieldError("nom", true, "nom inavalide");
          boolean = false ;
        }
        if (!prenomValide(form)){
          setFieldError("prenom", true, "prénom inavalide");
          boolean = false ;
        }
        if (!emailValide(form)){
          setFieldError("email", true, "email inavalide");
          boolean = false ;
        }
        if (!dateNaissanceValide(form)){
          setFieldError("dateNaissance", true, "date de naissance inavalide");
          boolean = false ;
        }
        if (!codePostalValide(form)){
          setFieldError("codePostal", true, "code postal inavalide");
          boolean = false ;
        }
        return  boolean;
      } 
    } catch (error) {
      
    }
   }
   const estDesactiver = () => {

    if(form.nom !== '' &&  form.prenom !== '' && form.email !=='' && form.dateNaissance !== '' &&  form.ville !=='' && form.codePostal !== '') {
       return false;
    }
    return true;
} 
   const handleClose = (e,reason) => {
      if (reason === 'clickway'){
        return;
      }
      setOpen(false)
   }

  return (
    <>
    <FormControl sx={{m:1, p:1, textAlign:'center', width:'50%'}}>
    <TextField  inputProps={{ "data-testid": "nom" }} sx={{m:2}}fullWidth label="Nom" value={form.nom} error={errorState.nom} helperText={errorText.nom} onChange={handleChange("nom")} required />
    <TextField inputProps={{ "data-testid": "prenom" }} sx={{m:2}}fullWidth label="Prénom" value={form.prenom} error={errorState.prenom} helperText={errorText.prenom} onChange={handleChange("prenom")} required/>
    <TextField inputProps={{ "data-testid": "email" }} sx={{m:2}}fullWidth label="Email" value={form.email} error={errorState.email} helperText={errorText.email} onChange={handleChange("email")} required/>
    <TextField inputProps={{ "data-testid": "dateNaissance" }} sx={{m:2}}fullWidth label="Date de naissance" type="date" value={form.dateNaissance} error={errorState.dateNaissance} helperText={errorText.dateNaissance} onChange={handleChange("dateNaissance")} required />
    <TextField inputProps={{ "data-testid": "ville" }} sx={{m:2}}fullWidth label="Ville" value={form.ville} error={errorState.ville} helperText={errorText.ville} onChange={handleChange("ville")} required/>
    <TextField inputProps={{ "data-testid": "codePostal" }} sx={{m:2}}fullWidth label="Code postal" value={form.codePostal} error={errorState.codePostal} helperText={errorText.codePostal} onChange={handleChange("codePostal")} required/>
    <Button sx={{m:2}}fullWidth variant="contained" endIcon={<SendIcon />} onClick={handleSubmit} disabled={estDesactiver(form)}>Envoyer</Button>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={alertSeverity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
    </FormControl>
    </>
  );
}

export default App;
