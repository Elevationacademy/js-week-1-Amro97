const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const NewGenes = genes
//-----------------------------------------------
let temp = NewGenes[2]
NewGenes[2] = NewGenes[4]
NewGenes[4] = temp
//------------------------------------------------
NewGenes.splice(3,1)
NewGenes.splice(4,0, "AZIN2", "AZIN2")
//------------------------------------------------
NewGenes.splice(0,0, "FXT")

console.log(NewGenes)