const express=require("express")
const router=express.Router()

let object = [{ id: 1, nom: "imed", prenom: "beji" }, { id: 2, nom: "omar", prenom: "jemaai" }, { id: 3, nom: "thamer", prenom: "chaabi" }]

router.get("/all", (req, res) => {

  res.json(object)
})

router.get("/:id", (req, res) => {
  const objectId = parseInt(req.params.id);
  const Object = object.find(elem => elem.id === objectId);
  res.json(Object)
})


module.exports=router