import { 
  SAT2023PT3RWM1Q,
  SAT2023PT3RWM1BD,

  SAT2023PT3RWM2AQ,
  SAT2023PT3RWM2ABD,

  SAT2023PT3RWM2BQ,
  SAT2023PT3RWM2BBD,

  SAT2023PT3MM1Q,
  SAT2023PT3MM1BD,

  SAT2023PT3MM2AQ,
  SAT2023PT3MM2ABD,

  SAT2023PT3MM2BQ,
  SAT2023PT3MM2BBD,

} from '../data.js' 

const useGrade = () => {

  const prepDataSAT3 = (currentAnswers) => {

    let Rwrongcounter = 0
    let Mwrongcounter = 0
    let categoriesRW = {}
    let difficultiesRW = {}

    let categoriesM = {}
    let difficultiesM = {}

    let wrongNumbersRWM1 = {}
    let wrongNumbersMM1 = {}

    for (let i = 1; i <= 27; i++){
      if (currentAnswers[i] == SAT2023PT3RWM1Q[i].answer){
        console.log('right')
      } else {
        Rwrongcounter++
        console.log('wrong')
        categoriesRW[i] = SAT2023PT3RWM1BD[i].skill
        difficultiesRW[i] = SAT2023PT3RWM1BD[i].difficulty
      }
    }

    for (let i = 28; i <= 54; i++){
      if(currentAnswers[i] == SAT2023PT3RWM2AQ[i].answer && Rwrongcounter >= 12){
        console.log('right2A')
      } else if (currentAnswers[i] == SAT2023PT3RWM2BQ[i].answer && Rwrongcounter < 12) {
        console.log('right2B')
      } else {
        console.log('wrong2')
      }
    }

    for (let i = 55; i <= 76; i++){
      if(currentAnswers[i] == SAT2023PT3MM1Q[i].answer){
        console.log('rightM')
      } else {
        Mwrongcounter++
        console.log('wrongM')
      }
    }

    for (let i = 77; i <= 98; i++){
      if(currentAnswers[i] == SAT2023PT3MM2AQ[i].answer && Mwrongcounter >= 10){
        console.log('right2AM')
      } else if (currentAnswers[i] == SAT2023PT3MM2BQ[i].answer && Mwrongcounter < 10) {
        console.log('right2BM')
      } else {
        console.log('wrong2M')
      }
    }

    
    console.log(categoriesRW)
    console.log(difficultiesRW)
  }

  //check current answers and creates object with incorrect question numbers and answers
  const gradeSAT2023PT3 = (currentanswers) => {

    const categoriesRW = {}
    const difficultiesRW = {}

    const categoriesM = {}
    const difficultiesM = {}

    
    let wrongNumbers = {}
    let wrongNumbersRWM1 = {}
    let wrongNumbersRWM2 = {}

    let wrongNumbersMM1 = {}
    let wrongNumbersMM2 = {}

    let rightNumbers = {}

    //grade the first module of reading
    Object.entries(currentanswers).map(([key, value], i) => {
      //add object pair into rightNumbers if correct, wrongNumbers if incorrect
      console.log(i)
      if(key <= 27){
        if(value == SAT2023PT3RWM1Q[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbers[key] = value
          wrongNumbersRWM1[key] = value
        }
      }
    })

    for(let i = 0; i <= 27; i++){
      if(currentanswers[i] == SAT2023PT3RWM1Q[i].answer){
        console.log('right')
      } else {
        console.log('wrong')
        //wrongNumbers[i] = value
      //  wrongNumbersRWM1[i] = value
      }
    }

    for(let i = 28; i <= 54; i++){
      if(currentanswers[i]){
        console.log('exists')
      } else {
        console.log('does not')
      }
    }

    for(let i = 55; i <= 76; i++){
      if(currentanswers[i]){
        console.log('exists')
      } else {
        console.log('does not')
      }
    }

    for(let i = 77; i <= 98; i++){
      if(currentanswers[i]){
        console.log('exists')
      } else {
        console.log('does not')
      }
    }


    //grade the next module of reading easy
    if(Object.keys(wrongNumbersRWM1).length >= 10){
      Object.entries(currentanswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(key >= 28 && key <= 54){
          if(value == SAT2023PT3RWM2AQ[key].answer){
            rightNumbers[key] = value
          } else {
            wrongNumbers[key] = value
            wrongNumbersRWM2[key] = value
          }
        }
      }) //or hard
    } else if(Object.keys(wrongNumbersRWM1).length <= 10) {
      Object.entries(currentanswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect

        if(key >= 28 &&  key <= 54){
          if(value == SAT2023PT3RWM2BQ[key].answer){
            rightNumbers[key] = value
          } else {
            wrongNumbers[key] = value
            wrongNumbersRWM2[key] = value
          }
        }
      })
    }


    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(wrongNumbersRWM1.hasOwnProperty(q)){
        categoriesRW[q] = SAT2023PT3RWM1BD[q].skill
        difficultiesRW[q] = SAT2023PT3RWM1BD[q].difficulty
      }
    })

    if(Object.keys(wrongNumbersRWM1).length >= 10){
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categoriesRW[q] = SAT2023PT3RWM2ABD[q].skill
          difficultiesRW[q] = SAT2023PT3RWM2ABD[q].difficulty
        }
      })
    }

    if(Object.keys(wrongNumbersRWM1).length <= 10){
      Object.keys(SAT2023PT3RWM2BBD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categoriesRW[q] = SAT2023PT3RWM2BBD[q].skill
          difficultiesRW[q] = SAT2023PT3RWM2BBD[q].difficulty
        }
      })
    }

    //grade the first module of math
    Object.entries(currentanswers).map(([key, value]) => {

      if(key >= 55 && key <= 76){

        if(value == SAT2023PT3MM1Q[key].answer){
          console.log(key + 'right')
          rightNumbers[key] = value
        } else {
          console.log(key + 'wrong')
          wrongNumbers[key] = value
          wrongNumbersMM1[key] = value
        }
      }
    })

    //grade the next module of math easy
    if(Object.keys(wrongNumbersMM1).length >= 10){
      Object.entries(currentanswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        
        if(key >= 77){
          if(value == SAT2023PT3MM2AQ[key].answer){
            rightNumbers[key] = value
          } else {
            wrongNumbers[key] = value
            wrongNumbersMM2[key] = value
          }
        }

      }) //or hard
    } else if(Object.keys(wrongNumbersMM1).length <= 10) {
      Object.entries(currentanswers).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect

        if(key >= 77){
          if(value == SAT2023PT3MM2BQ[key].answer){
            rightNumbers[key] = value
          } else {
            wrongNumbers[key] = value
            wrongNumbersMM2[key] = value
          }
        }
      })
    }

    //see which category each wrong answer matches to for module 1 math
    Object.keys(SAT2023PT3MM1BD).map((q) => {
      if(wrongNumbersMM1.hasOwnProperty(q)){
        categoriesM[q] = SAT2023PT3MM1BD[q].skill
        difficultiesM[q] = SAT2023PT3MM1BD[q].difficulty
      }
    })

    //categorize module 2a for math
    if(Object.keys(wrongNumbersMM1).length >= 10){
      Object.keys(SAT2023PT3MM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categoriesM[q] = SAT2023PT3MM2ABD[q].skill
          difficultiesM[q] = SAT2023PT3MM2ABD[q].difficulty
        }
      })
    }

    //categorize module 2b for math
    if(Object.keys(wrongNumbersMM2).length >= 10){
      Object.keys(SAT2023PT3MM2BBD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categoriesM[q] = SAT2023PT3MM2BBD[q].skill
          difficultiesM[q] = SAT2023PT3MM2BBD[q].difficulty
        }
      })
    }

    //get nested object of labeled skills and number pair

    for(let key in categoriesRW) {
      console.log(key + ":", categoriesRW[key]);
    }
    console.log('crw' + categoriesRW[1])

    const skillsRW = generateSAT2023PT3Skills(
      categoriesRW, 
      difficultiesRW
    )


    const skillsM = generateSAT2023PT3Skills(
      categoriesM,
      difficultiesM
    )


    const skillsObject = {
      skillsRW,
      skillsM,
    }
    
    return {
      rightNumbers, 
      wrongNumbers, 
      skillsObject
    }
  }

  const generateSAT2023PT3Skills = (categories, difficulties) => {

    let wordsincontext = 0
    let textstructureandpurpose = 0
    let centralideasanddetails = 0
    let centralideasandpurpose = 0
    let commandoftext = 0
    let inferences = 0
    let boundaries = 0
    let formstructure = 0
    let transitions = 0
    let rhetorical = 0
    let commandofquant = 0
    let crosstext = 0

    let onevariable = 0
    let interpretinglinear = 0
    let systemsoflinear = 0
    let buildinglinear = 0
    let creatingone = 0
    let linearinequal = 0
    let graphinglinear = 0
    let expressionsincontext = 0
    let rationalexpressions = 0
    let rationalexponents = 0
    let graphingnonlinear = 0
    let creatingquadratic = 0
    let systemsofquadratic = 0
    let algebraicexpressions = 0
    let functionnotation = 0
    let solvingquadraticequations = 0
    let inferencesfromreports = 0
    let ratiosrates = 0
    let linearvsexpo = 0
    let measurement = 0
    let handlingcategorical = 0
    let statistics = 0
    let scatter = 0
    let shapes = 0
    let triangles = 0
    let volume = 0
    let trigratios = 0
    let circleequations = 0
    let circlearcs = 0

    let bronze = 0
    let silver = 0
    let gold = 0
    
    Object.entries(categories).map(([key, value]) => {
      switch(value){
        case 'Words in Context':
          wordsincontext+=1
          break;
        case 'Text Structure and Purpose':
          textstructureandpurpose+=1
          break;
        case 'Central Ideas and Details':
          centralideasanddetails+=1
          break;
        case 'Central Ideas and Purpose':
          centralideasandpurpose+=1
          break;
        case 'Cross-Text Connections':
          crosstext+=1
          break;
        case 'Command of Textual Evidence':
          commandoftext+=1
          break;
        case 'Inferences':
          inferences+=1
          break;
        case 'Boundaries':
          boundaries+=1
          break;
        case 'Form Structure and Sense':
          formstructure+=1
          break;
        case 'Transitions':
          transitions+=1
          break;
        case 'Rhetorical Synthesis':
          rhetorical+=1
          break;
        case 'Command of Quantiative Evidence':
          commandofquant+=1
          break;
        case 'One-Variable Equations':
          onevariable+=1
          break;
        case 'Interpreting Linear Functions':
          interpretinglinear+=1
          break;
        case 'Systems of Linear Equations':
          systemsoflinear+=1
          break;
        case 'Building Linear Functions':
          buildinglinear+=1
          break;
        case 'Creating one-variable equations':
          creatingone+=1
          break;
        case 'Linear Inequalities':
          linearinequal+=1
          break;
        case 'Graphing Linear Relationships':
          graphinglinear+=1
          break;
        case 'Expressions and Equations in Context':
          expressionsincontext+=1
          break;
        case 'Rational Expressions and Equations':
          rationalexpressions+=1
          break;
        case 'Rational Exponents and Radicals':
          rationalexponents+=1
          break;
        case 'Graphing Nonlinear Functions':
          graphingnonlinear+=1
          break;
        case 'Creating Quadratic and Exponential Functions':
          creatingquadratic+=1
          break;
        case 'Systems of Quadratic and Linear Functions':
          systemsofquadratic+=1
          break;
        case 'Algebraic Expressions':
          algebraicexpressions+=1
          break;
        case 'Function Notation':
          functionnotation+=1
          break;
        case 'Solving Quadratic Equations':
          solvingquadraticequations+=1
          break;
        case 'Inferences and Conclusions From Reports':
          inferencesfromreports+=1
          break;
        case 'Ratios, Rates and Proportions':
          ratiosrates+=1
          break;
        case 'Linear vs. Exponential Growth':
          linearvsexpo+=1
          break;
        case 'Measurement and Unit Conversion':
          measurement+=1
          break;
        case 'Handling Categorical Data':
          handlingcategorical+=1
          break;
        case 'Statistics - Shape, Center, Spread':
          statistics+=1
          break;
        case 'Scatterplots and Graphs':
          scatter+=1
          break;
        case '2D Shapes':
          shapes+=1
          break;
        case 'Triangles, Lines and Angles':
          triangles+=1
          break;
        case 'Volume':
          volume+=1
          break;
        case 'Trig. Ratios and Pythagorean Thm.':
          trigratios=+1
          break;
        case 'Circle Equations and Graphing':
          circleequations+=1
          break;
        case 'Circle Arcs, Angles and Chords':
          circlearcs+=1
          break;
      }
    })

    Object.entries(difficulties).map(([key, value]) => {
      switch(value){
        case 'Bronze':
          bronze+=1
          break;
        case 'Silver':
          silver+=1
          break;
        case 'Gold':
          gold+=1
          break;
      }
    })

    let skillImprovement = {
      skills:{},
      levels:{}
    }
  
    skillImprovement.skills['Words in Context'] = wordsincontext
    skillImprovement.skills['Text Structure and Purpose'] = textstructureandpurpose
    skillImprovement.skills['Central Ideas and Details'] = centralideasanddetails
    skillImprovement.skills['Central Ideas and Purpose'] = centralideasandpurpose
    skillImprovement.skills['Command of Textual Evidence'] = commandoftext
    skillImprovement.skills['Inferences'] = inferences
    skillImprovement.skills['Boundaries'] = boundaries
    skillImprovement.skills['Form Structure and Sense'] = formstructure
    skillImprovement.skills['Transitions'] = transitions
    skillImprovement.skills['Rhetorical Synthesis'] = rhetorical
    skillImprovement.skills['Command of Quantitative Evidence'] = commandofquant
    skillImprovement.skills['Cross-Text Connections'] = crosstext
    skillImprovement.skills['One-Variable Equations'] = onevariable
    skillImprovement.skills['Interpreting Linear Functions'] = interpretinglinear
    skillImprovement.skills['Systems of Linear Equations'] = systemsoflinear
    skillImprovement.skills['Systems of Quadratic and Linear Functions'] = systemsofquadratic
    skillImprovement.skills['Building Linear Functions'] = buildinglinear
    skillImprovement.skills['Creating One-Variable Equations'] = creatingone
    skillImprovement.skills['Linear Inequalities'] = linearinequal
    skillImprovement.skills['Graphing Linear Relationships'] = graphinglinear
    skillImprovement.skills['Expressions and Equations in Context'] = expressionsincontext
    skillImprovement.skills['Rational Expressions and Equations'] = rationalexpressions
    skillImprovement.skills['Rational Exponents and Radicals'] = rationalexponents
    skillImprovement.skills['Graphing Nonlinear Functions'] = graphingnonlinear
    skillImprovement.skills['Creating Quadratic and Exponential Functions'] = creatingquadratic
    skillImprovement.skills['Algebraic Expressions'] = algebraicexpressions
    skillImprovement.skills['Function Notation'] = functionnotation
    skillImprovement.skills['Solving Quadratic Equations'] = solvingquadraticequations
    skillImprovement.skills['Inferences and Conclusions From Reports'] = inferencesfromreports
    skillImprovement.skills['Ratios, Rates and Proportions'] = ratiosrates
    skillImprovement.skills['Linear vs. Exponential Growth'] = linearvsexpo
    skillImprovement.skills['Measurement and Unit Conversion'] = measurement
    skillImprovement.skills['Handling Categorical Data'] = handlingcategorical
    skillImprovement.skills['Statistics - Shape, Center, Spread'] = statistics
    skillImprovement.skills['Scatterplots and Graphs'] = scatter
    skillImprovement.skills['2D Shapes'] = shapes
    skillImprovement.skills['Triangles, Lines and Angles'] = triangles
    skillImprovement.skills['Volume'] = volume
    skillImprovement.skills['Trig. Ratios and Pythagorean Thm.'] = trigratios
    skillImprovement.skills['Circle Equations and Graphing'] = circleequations
    skillImprovement.skills['Circle Arcs, Angles and Chords'] = circlearcs

    skillImprovement.levels['Bronze'] = bronze
    skillImprovement.levels['Silver'] = silver
    skillImprovement.levels['Gold'] = gold

    return skillImprovement
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills, prepDataSAT3}
}

export default useGrade