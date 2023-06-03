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

  const prepDataSAT3 = (currentAnswers, studentName, date) => {

    let Rwrongcounter = 0
    let Mwrongcounter = 0

    let readingwrong = 0
    let mathwrong = 0
    let totalright = 0
    let totalwrong = 0
    let categoriesRW = {}
    let difficultiesRW = {}

    let categoriesM = {}
    let difficultiesM = {}

    let wrongNumbersRWM1 = {}
    let wrongNumbersMM1 = {}

    //MODULE READING 1
    for (let i = 1; i <= 27; i++){
      if (currentAnswers[i] == SAT2023PT3RWM1Q[i].answer){
        totalright++
      } else {
        Rwrongcounter++
        totalwrong++
        readingwrong++
        categoriesRW[SAT2023PT3RWM1BD[i].skill] = categoriesRW[SAT2023PT3RWM1BD[i].skill] + 1  || 1
        difficultiesRW[SAT2023PT3RWM1BD[i].difficulty] = difficultiesRW[SAT2023PT3RWM1BD[i].difficulty] + 1 || 1
      }
    }

    //
    
    //MODULE READING 2
    for (let i = 28; i <= 54; i++){
      if((currentAnswers[i] == SAT2023PT3RWM2AQ[i].answer) && Rwrongcounter >= 12){
        totalright++
      } else if ((currentAnswers[i] == SAT2023PT3RWM2BQ[i].answer) && Rwrongcounter < 12) {
        totalright++
      } else if (Rwrongcounter > 12){
        totalwrong++
        readingwrong++
        categoriesRW[SAT2023PT3RWM2ABD[i].skill] = categoriesRW[SAT2023PT3RWM2ABD[i].skill] + 1  || 1
        difficultiesRW[SAT2023PT3RWM2ABD[i].difficulty] = difficultiesRW[SAT2023PT3RWM2ABD[i].difficulty] + 1 || 1
      } else {
        totalwrong++
        readingwrong++
        categoriesRW[SAT2023PT3RWM2BBD[i].skill] = categoriesRW[SAT2023PT3RWM2BBD[i].skill] + 1  || 1
        difficultiesRW[SAT2023PT3RWM2BBD[i].difficulty] = difficultiesRW[SAT2023PT3RWM2BBD[i].difficulty] + 1 || 1
      }
    }

    //MODULE MATH 1
    for (let i = 55; i <= 76; i++){
      //if right then skip
      //if wrong or blank then add to data
      if(currentAnswers[i] == SAT2023PT3MM1Q[i].answer){
        totalright++
      } else {
        Mwrongcounter++
        totalwrong++
        mathwrong++
        categoriesM[SAT2023PT3MM1BD[i].skill] = categoriesM[SAT2023PT3MM1BD[i].skill] + 1  || 1
        difficultiesM[SAT2023PT3MM1BD[i].difficulty] = difficultiesM[SAT2023PT3MM1BD[i].difficulty] + 1 || 1
      }
    }

    //MODULE MATH 2
    for (let i = 77; i <= 98; i++){
      if(currentAnswers[i] == SAT2023PT3MM2AQ[i].answer && Mwrongcounter >= 10){
        totalright++
      } else if (currentAnswers[i] == SAT2023PT3MM2BQ[i].answer && Mwrongcounter < 10) {
        totalright++
      } else if (Mwrongcounter < 10){
        totalwrong++
        mathwrong++
        categoriesM[SAT2023PT3MM2ABD[i].skill] = categoriesM[SAT2023PT3MM2ABD[i].skill] + 1  || 1
        difficultiesM[SAT2023PT3MM2ABD[i].difficulty] = difficultiesM[SAT2023PT3MM2ABD[i].difficulty] + 1 || 1
      } else {
        totalwrong++
        mathwrong++
        categoriesM[SAT2023PT3MM2BBD[i].skill] = categoriesM[SAT2023PT3MM2BBD[i].skill] + 1  || 1
        difficultiesM[SAT2023PT3MM2BBD[i].difficulty] = difficultiesM[SAT2023PT3MM2BBD[i].difficulty] + 1 || 1
      }
    }

    /*
    console.log(categoriesRW)
    console.log(difficultiesRW)
    console.log(categoriesM)
    console.log(difficultiesM)

    console.log(totalwrong)
    console.log(totalright)
    */

    //calculated scores
    const readingRight = 54 - readingwrong
    const mathRight = 44 - mathwrong
    

    
    //composite
    //reading
    //math
    //rx
    const readingScore = 1600 - (readingwrong * 25)
    const mathScore = 1600 - (mathwrong * 35)
    const compositeScore = readingScore + mathScore

    //composite
    //reading
    //math
    const readingRXadditional = readingwrong * 5
    const mathRXadditional = (mathwrong * 7.5) + 20
    const totalRXadditional = readingRXadditional + mathRXadditional



    //mastery percentages for difficulties math

    


    //skill mastery reading
    //rxhours reading
    console.log(categoriesRW)
    const skillsRW = generateSAT2023PT3Skills(
      categoriesRW, 
      difficultiesRW
    )
    console.log(skillsRW)

    
    const skillsM = generateSAT2023PT3Skills(
      categoriesM,
      difficultiesM
    )

    const bronzepercentrw = 0
    const silverpercentrw = 0
    const goldpercentrw = 0

    //mastery percentages for difficulties reading
    if(Rwrongcounter >= 12){
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 30 * 100)
      silverpercentrw = 100 - Math.round(skillsRW.levels['Silver'] / 22 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 2 * 100)
    } else {
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 17 * 100)
      silverpercentrw = 100 -Math.round(skillsRW.levels['Silver'] / 29 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 6 * 100)
    }

    let bronzepercentm = 0
    let silverpercentm = 0
    let goldpercentm = 0

    //get cate percentages for math
    if(Mwrongcounter >= 10){
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 28 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 14 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 2 * 100)
    } else {
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 20 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 21 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 3 * 100)
    }


    const skillsObject = {
      skillsRW,
      skillsM,
    }


    //

    const testData = {
      studentName,
      date,
      readingRight,
      mathRight,
      readingScore,
      mathScore,
      compositeScore,
      readingRXadditional,
      mathRXadditional,
      totalRXadditional,
      skillsObject
    }

    console.log(testData)

    return testData
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
      switch(key){
        case 'Words in Context':
          wordsincontext+=value
          break;
        case 'Text Structure and Purpose':
          textstructureandpurpose+=value
          break;
        case 'Central Ideas and Details':
          centralideasanddetails+=value
          break;
        case 'Central Ideas and Purpose':
          centralideasandpurpose+=value
          break;
        case 'Cross-Text Connections':
          crosstext+=value
          break;
        case 'Command of Textual Evidence':
          commandoftext+=value
          break;
        case 'Inferences':
          inferences+=value
          break;
        case 'Boundaries':
          boundaries+=value
          break;
        case 'Form Structure and Sense':
          formstructure+=value
          break;
        case 'Transitions':
          transitions+=value
          break;
        case 'Rhetorical Synthesis':
          rhetorical+=value
          break;
        case 'Command of Quantiative Evidence':
          commandofquant+=value
          break;
        case 'One-Variable Equations':
          onevariable+=value
          break;
        case 'Interpreting Linear Functions':
          interpretinglinear+=value
          break;
        case 'Systems of Linear Equations':
          systemsoflinear+=value
          break;
        case 'Building Linear Functions':
          buildinglinear+=value
          break;
        case 'Creating one-variable equations':
          creatingone+=value
          break;
        case 'Linear Inequalities':
          linearinequal+=value
          break;
        case 'Graphing Linear Relationships':
          graphinglinear+=value
          break;
        case 'Expressions and Equations in Context':
          expressionsincontext+=value
          break;
        case 'Rational Expressions and Equations':
          rationalexpressions+=value
          break;
        case 'Rational Exponents and Radicals':
          rationalexponents+=value
          break;
        case 'Graphing Nonlinear Functions':
          graphingnonlinear+=value
          break;
        case 'Creating Quadratic and Exponential Functions':
          creatingquadratic+=value
          break;
        case 'Systems of Quadratic and Linear Functions':
          systemsofquadratic+=value
          break;
        case 'Algebraic Expressions':
          algebraicexpressions+=value
          break;
        case 'Function Notation':
          functionnotation+=value
          break;
        case 'Solving Quadratic Equations':
          solvingquadraticequations+=value
          break;
        case 'Inferences and Conclusions From Reports':
          inferencesfromreports+=value
          break;
        case 'Ratios, Rates and Proportions':
          ratiosrates+=value
          break;
        case 'Linear vs. Exponential Growth':
          linearvsexpo+=value
          break;
        case 'Measurement and Unit Conversion':
          measurement+=value
          break;
        case 'Handling Categorical Data':
          handlingcategorical+=value
          break;
        case 'Statistics - Shape, Center, Spread':
          statistics+=value
          break;
        case 'Scatterplots and Graphs':
          scatter+=value
          break;
        case '2D Shapes':
          shapes+=value
          break;
        case 'Triangles, Lines and Angles':
          triangles+=value
          break;
        case 'Volume':
          volume+=value
          break;
        case 'Trig. Ratios and Pythagorean Thm.':
          trigratios+=value
          break;
        case 'Circle Equations and Graphing':
          circleequations+=value
          break;
        case 'Circle Arcs, Angles and Chords':
          circlearcs+=value
          break;
      }
    })

    Object.entries(difficulties).map(([key, value]) => {
      switch(key){
        case 'Bronze':
          bronze+=value
          break;
        case 'Silver':
          silver+=value
          break;
        case 'Gold':
          gold+=value
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

  return {prepDataSAT3}
}

export default useGrade