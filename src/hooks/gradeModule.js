import { SAT2023PT3RWM1Q, SAT2023PT4RWM1Q } from "../data"

const gradeModule = (currentAnswers, currentTest) => {

  let numCorrect = 0
  Object.entries(currentTest).map(([key, value]) => {
    console.log(key, value)
    if(currentAnswers[key] == currentTest[key].answer){
      numCorrect++
    }

  }) 
  console.log('number correct = ' + numCorrect)
  if(numCorrect < 12){
    console.log('user will take easy module')
  }

  if(numCorrect >= 12){
    console.log('user will take hard module')
  }

  return numCorrect
}

export default gradeModule