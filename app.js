let allValues=[]

function readFile(input) {

 
for(let i=0;i<input.files.length;i++){
  let file = input.files[i];
  let reader = new FileReader();
 
    reader.onload = function() {
     let fileValues
    fileValues=(reader.result.split('\n'))
    allValues.push(fileValues)
    }

  reader.readAsText(file);
  reader.onerror = function() {
    console.log(reader.error);
  };
} 
} 


const uniqueValues=(allValues)=>{
  let wordCombinations=[]
  for(let i=0;i<allValues.length;i++){
    wordCombinations=wordCombinations.concat(allValues[i])
  }
  count=0
  wordCombinations.sort()
  for(let i=0;i<wordCombinations.length;i++){
    if(wordCombinations[i]!=wordCombinations[i+1]&&wordCombinations[i]!=wordCombinations[i-1]){
     count++
     }  
    }   
  console.log('Unique values : '+count)
  arr=[]
  return count
}

const existInAllFiles=(allValues)=>{
  let count=0
  let result=0
  for(let i=0;i<allValues[0].length;i++){
    for(let j=0;j<allValues.length;j++){
      if (allValues[j].includes(allValues[0][i])){
        count++
      }
      else{ j=arr.length}
          if(count==arr.length){result++}
    }
    count=0
  }
  console.log('Exist in all files : '+result)
  arr=[]
  return result
}

const existInAtLeastTen=(allValues)=>{
let wordCombinations=[]
let count=0
let result=0
for(let i=0;i<allValues.length;i++){
  for(let j=0;j<allValues[i].length;j++){
  if(!wordCombinations.includes(allValues[i][j])){
    wordCombinations=wordCombinations.concat(allValues[i][j])
  }
}
}
for(let i=0;i<wordCombinations.length;i++){
  for(let j=0;j<allValues.length;j++){
      if (allValues[j].includes(wordCombinations[i])){
        count++
      }
      if (count>=10){result++
      j=allValues.length}
    
  }
  count=0

}
console.log('Exist atleast 10 files: '+result)
arr=[]
return result
}
