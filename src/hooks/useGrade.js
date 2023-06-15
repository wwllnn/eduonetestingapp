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
  const MATHV = 6
  const READV = 5


  const prepDataSAT3 = (currentAnswers, studentName, date) => {

    //for module change
    let Rwrongcounter = 0
    let Mwrongcounter = 0

    //total wrong
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
        categoriesRW[SAT2023PT3RWM1BD[i].skill] = categoriesRW[SAT2023PT3RWM1BD[i].skill] + READV  || READV
        difficultiesRW[SAT2023PT3RWM1BD[i].difficulty] = difficultiesRW[SAT2023PT3RWM1BD[i].difficulty] + 1 || 1
      }
    }

    //
    
    //MODULE READING 2
    for (let i = 28; i <= 54; i++){
        if((currentAnswers[i] == SAT2023PT3RWM2AQ[i].answer) && Rwrongcounter > 12){
          totalright++
        } else if ((currentAnswers[i] == SAT2023PT3RWM2BQ[i].answer) && Rwrongcounter <= 12) {
          totalright++
        } else if (Rwrongcounter <= 12){
          totalwrong++
          readingwrong++
          categoriesRW[SAT2023PT3RWM2BBD[i].skill] = categoriesRW[SAT2023PT3RWM2BBD[i].skill] + READV  || READV
          difficultiesRW[SAT2023PT3RWM2BBD[i].difficulty] = difficultiesRW[SAT2023PT3RWM2BBD[i].difficulty] + 1 || 1
        } else if (Rwrongcounter > 12){
          totalwrong++
          readingwrong++
          categoriesRW[SAT2023PT3RWM2ABD[i].skill] = categoriesRW[SAT2023PT3RWM2ABD[i].skill] + READV  || READV
          difficultiesRW[SAT2023PT3RWM2ABD[i].difficulty] = difficultiesRW[SAT2023PT3RWM2ABD[i].difficulty] + 1 || 1
        }
    }

    //MODULE MATH 1
    for (let i = 55; i <= 76; i++){
      //if right then skip
      //if wrong or blank then add to data

      //letter choices
      //if 
      if(!/\d/.test(currentAnswers[i]))
      {
        if(currentAnswers[i] == SAT2023PT3MM1Q[i].answer){
          totalright++
        } else {
          Mwrongcounter++
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM1BD[i].skill] = categoriesM[SAT2023PT3MM1BD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM1BD[i].difficulty] = difficultiesM[SAT2023PT3MM1BD[i].difficulty] + 1 || 1
        }
      }

      //free response math
      if(/\d/.test(currentAnswers[i])){

        const floated = eval(currentAnswers[i])
        if(floated == SAT2023PT3MM1Q[i].answer){
          totalright++
        } else {
          Mwrongcounter++
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM1BD[i].skill] = categoriesM[SAT2023PT3MM1BD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM1BD[i].difficulty] = difficultiesM[SAT2023PT3MM1BD[i].difficulty] + 1 || 1
        }
      }
    }

    //MODULE MATH 2
    for (let i = 77; i <= 98; i++){

      if(!/\d/.test(currentAnswers[i])){
        if(currentAnswers[i] == SAT2023PT3MM2AQ[i].answer && Mwrongcounter > 10){
          totalright++
        } else if (currentAnswers[i] == SAT2023PT3MM2BQ[i].answer && Mwrongcounter <= 10) {
          totalright++
        } else if (Mwrongcounter <= 10){
          //hard version
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM2BBD[i].skill] = categoriesM[SAT2023PT3MM2BBD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM2BBD[i].difficulty] = difficultiesM[SAT2023PT3MM2BBD[i].difficulty] + 1 || 1
        } else if (Mwrongcounter > 10){
          //easy version
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM2ABD[i].skill] = categoriesM[SAT2023PT3MM2ABD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM2ABD[i].difficulty] = difficultiesM[SAT2023PT3MM2ABD[i].difficulty] + 1 || 1
        }
      }

      if(/\d/.test(currentAnswers[i])){
        const floated = eval(currentAnswers[i])
        if(floated == SAT2023PT3MM2AQ[i].answer && Mwrongcounter > 10){
          totalright++
        } else if(floated == SAT2023PT3MM2BQ[i].answer && Mwrongcounter <= 10) {
          totalright++
        } else if (Mwrongcounter > 10){
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM2ABD[i].skill] = categoriesM[SAT2023PT3MM2ABD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM2ABD[i].difficulty] = difficultiesM[SAT2023PT3MM2ABD[i].difficulty] + 1 || 1
        } else if(Mwrongcounter < 10){
          //hard version
          totalwrong++
          mathwrong++
          categoriesM[SAT2023PT3MM2BBD[i].skill] = categoriesM[SAT2023PT3MM2BBD[i].skill] + MATHV  || MATHV
          difficultiesM[SAT2023PT3MM2BBD[i].difficulty] = difficultiesM[SAT2023PT3MM2BBD[i].difficulty] + 1 || 1
        }
      }
    }

    
    //calculated scores
    const readingRight = 54 - readingwrong
    const mathRight = 44 - mathwrong
    
    
    //composite
    //reading
    //math
    //rx
    const readingScore = Math.floor((800 - (readingwrong * 11.111111)) / 10) * 10
    const mathScore = Math.floor((800 - (mathwrong * 13.636363)) / 10) * 10
    const compositeScore = readingScore + mathScore

    //composite
    //reading
    //math
    let readingRXadditional = readingwrong * READV
    let mathRXadditional = (mathwrong * MATHV) + 20

    if(readingRXadditional > 275){
      readingRXadditional = 275
    }

    if(mathRXadditional > 275){
      mathRXadditional = 275
    }

    const totalRXadditional = readingRXadditional + mathRXadditional


    //mastery percentages for difficulties math


    //skill mastery reading
    //rxhours reading
    const skillsRW = generateSAT2023PT3Skills(
      categoriesRW, 
      difficultiesRW
    )
    
    const skillsM = generateSAT2023PT3Skills(
      categoriesM,
      difficultiesM
    )

    let bronzepercentrw = 0
    let silverpercentrw = 0
    let goldpercentrw = 0

    //mastery percentages for difficulties reading
    if(Rwrongcounter > 12){
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 30 * 100)
      silverpercentrw = 100 - Math.round(skillsRW.levels['Silver'] / 22 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 2 * 100)
    } else {
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 17 * 100)
      silverpercentrw = 100 -Math.round(skillsRW.levels['Silver'] / 29 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 8 * 100)
    }

    let bronzepercentm = 0
    let silverpercentm = 0
    let goldpercentm = 0

    //get cate percentages for math
    if(Mwrongcounter > 10){
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 28 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 14 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 2 * 100)
    } else {
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 20 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 21 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 3 * 100)
    }

    const difficultyPercents = {
      bronzepercentrw,
      silverpercentrw,
      goldpercentrw,
      bronzepercentm,
      silverpercentm,
      goldpercentm
    }


    const skillsObject = {
      skillsRW,
      skillsM,
    }

    const skillsPercents = generatePercentsSAT3(Rwrongcounter, Mwrongcounter, skillsRW, skillsM)

    const testData = {
      test: 'SAT Diagnostic',
      studentName,
      currentAnswers,
      date,
      readingRight,
      mathRight,
      readingScore,
      mathScore,
      compositeScore,
      readingRXadditional,
      mathRXadditional,
      totalRXadditional,
      skillsObject,
      difficultyPercents,
      skillsPercents
    }

    return testData
  }

  const generatePercentsSAT3 = (Rwrongcounter, Mwrongcounter, skillsRW, skillsM) => {
    //get skill percentages for reading


    let wordsincontextp = 0
    let textstructureandpurposep = 0
    let crosstextp = 0
    let centralideasp = 0
    let commandquantp = 0
    let commandoftextualp = 0
    let formstructurep = 0
    let boundariesp = 0
    let transitionsp = 0
    let inferencesp = 0
    let rhetoricalsynthesisp = 0

    
    if(Rwrongcounter > 12){
      //easy verison
      wordsincontextp = 100 - Math.round(skillsRW.skills['Words in Context'] / (11 * READV) * 100)
      textstructureandpurposep = 100 - Math.round(skillsRW.skills['Text Structure and Purpose'] / (3 * READV) * 100)
      crosstextp = 100 - Math.round(skillsRW.skills['Cross-Text Connections'] / READV * 100)
      centralideasp = 100 - Math.round(skillsRW.skills['Central Ideas and Details'] / (5 * READV) * 100)
      commandquantp = 100 - Math.round(skillsRW.skills['Command of Quantitative Evidence'] / (3 * READV) * 100)
      commandoftextualp = 100 - Math.round(skillsRW.skills['Command of Textual Evidence'] / (4 * READV) * 100)
      formstructurep = 100 - Math.round(skillsRW.skills['Form Structure and Sense'] / (7 * READV) * 100)
      boundariesp = 100 - Math.round(skillsRW.skills['Boundaries'] / (6 * READV) * 100)
      transitionsp = 100 - Math.round(skillsRW.skills['Transitions'] / (5 * READV) * 100)
      rhetoricalsynthesisp = 100 - Math.round(skillsRW.skills['Rhetorical Synthesis'] / (6 * READV) * 100)
      inferencesp = 100 - Math.round(skillsRW.skills['Inferences'] / (3 * READV) * 100)
    } else if (Rwrongcounter <= 12) {
      //rw module 2b
      wordsincontextp = 100 - Math.round(skillsRW.skills['Words in Context'] / (10 * READV) * 100)
      textstructureandpurposep = 100 - Math.round(skillsRW.skills['Text Structure and Purpose'] / (3 * READV) * 100)
      crosstextp = 100 - Math.round(skillsRW.skills['Cross-Text Connections'] / READV * 100)
      centralideasp = 100 - Math.round(skillsRW.skills['Central Ideas and Details'] / (4 * READV) * 100)
      commandquantp = 100 - Math.round(skillsRW.skills['Command of Quantitative Evidence'] / (3 * READV) * 100) 
      commandoftextualp = 100 - Math.round(skillsRW.skills['Command of Textual Evidence'] / (4 * READV) * 100)
      formstructurep = 100 - Math.round(skillsRW.skills['Form Structure and Sense'] / (4 * READV) * 100)
      boundariesp = 100 - Math.round(skillsRW.skills['Boundaries'] / (8 * READV) * 100)
      transitionsp = 100 - Math.round(skillsRW.skills['Transitions'] / (4 * READV) * 100)
      rhetoricalsynthesisp = 100 - Math.round(skillsRW.skills['Rhetorical Synthesis'] / (8 * READV) * 100)
      inferencesp = 100 - Math.round(skillsRW.skills['Inferences'] / (4 * READV) * 100)
    }

    let onevariablep = 0
    let interpretlinp = 0
    let systemslinp = 0
    let buildinglinp = 0
    let expresscontextp = 0 
    let rationalexpressp = 0
    let createquadp = 0
    let systemsquadp = 0
    let algebrexpressp = 0
    let solvingquadp = 0
    let ratiosp = 0
    let linearvsp = 0
    let statsp = 0
    let scatterp = 0
    let trianglesp = 0
    let circlearcsp = 0
    let creatingonep = 0
    let linearinequalp = 0
    let graphinglinearp = 0
    let graphingnonlinearp = 0
    let functionnotationp = 0
    let shapesp = 0 
    let trigratiosp = 0 
    let volumep = 0
    let rationalexpop = 0

    //get skill percentages for math
    if(Mwrongcounter > 12){
      //easy version
      algebrexpressp = 100 - Math.round(skillsM.skills['Algebraic Expressions'] / (2 * MATHV) * 100)
      buildinglinp = 100 - Math.round(skillsM.skills['Building Linear Functions'] / (3 * MATHV) * 100)
      circlearcsp = 100 - Math.round(skillsM.skills['Circle Arcs, Angles and Chords'] / MATHV * 100)
      createquadp = 100 - Math.round(skillsM.skills['Creating Quadratic and Exponential Functions'] / (2 * MATHV) * 100)
      creatingonep = 100 - Math.round(skillsM.skills['Creating One-Variable Equations'] / MATHV * 100)
      expresscontextp = 100 - Math.round(skillsM.skills['Expressions and Equations in Context'] / MATHV * 100)
      functionnotationp = 100 - Math.round(skillsM.skills['Function Notation'] / MATHV * 100)
      graphinglinearp = 100 - Math.round(skillsM.skills['Graphing Linear Relationships'] / MATHV * 100)
      graphingnonlinearp = 100 - Math.round(skillsM.skills['Graphing Nonlinear Functions'] / MATHV * 100)
      interpretlinp = 100 - Math.round(skillsM.skills['Interpreting Linear Functions'] / (2 * MATHV) * 100)
      linearinequalp = 100 - Math.round(skillsM.skills['Linear Inequalities'] / (2 * MATHV) * 100)
      linearvsp = 100 - Math.round(skillsM.skills['Linear vs. Exponential Growth'] / MATHV * 100)
      onevariablep = 100 - Math.round(skillsM.skills['One-Variable Equations']  / (6 * MATHV) * 100)
      rationalexpressp = 100 - Math.round(skillsM.skills['Rational Expressions and Equations'] / (2 *MATHV) * 100)
      ratiosp = 100 - Math.round(skillsM.skills['Ratios, Rates and Proportions'] / (2 * MATHV) * 100)
      scatterp = 100 - Math.round(skillsM.skills['Scatterplots and Graphs'] / (3 * MATHV) * 100)
      shapesp = 100 - Math.round(skillsM.skills['2D Shapes'] / (2 * MATHV) * 100)
      solvingquadp = 100 - Math.round(skillsM.skills['Solving Quadratic Equations'] / (3 * MATHV) * 100)
      statsp = 100 - Math.round(skillsM.skills['Statistics - Shape, Center, Spread'] / (2 * MATHV) * 100)
      systemslinp = 100 - Math.round(skillsM.skills['Systems of Linear Equations'] / (2 * MATHV) * 100)
      systemsquadp = 100 - Math.round(skillsM.skills['Systems of Quadratic and Linear Functions'] / MATHV * 100)
      trianglesp = 100 - Math.round(skillsM.skills['Triangles, Lines and Angles'] / (3 * MATHV) * 100)
    } else if (Mwrongcounter <= 12){
      //hard version
      algebrexpressp = 100 - Math.round(skillsM.skills['Algebraic Expressions'] / MATHV * 100)
      buildinglinp = 100 - Math.round(skillsM.skills['Building Linear Functions'] / (3 * MATHV) * 100)
      createquadp = 100 - Math.round(skillsM.skills['Creating Quadratic and Exponential Functions'] / (4 * MATHV) * 100)
      interpretlinp = 100 - Math.round(skillsM.skills['Interpreting Linear Functions'] / (2 * MATHV) * 100)
      linearinequalp = 100 - Math.round(skillsM.skills['Linear Inequalities'] / (2 * MATHV) * 100)
      linearvsp = 100 - Math.round(skillsM.skills['Linear vs. Exponential Growth'] / MATHV * 100)
      onevariablep = 100 - Math.round(skillsM.skills['One-Variable Equations'] / (2 * MATHV) * 100)
      rationalexpop = 100 - Math.round(skillsM.skills['Rational Exponents and Radicals'] / (2 * MATHV) * 100)
      rationalexpressp = 100 - Math.round(skillsM.skills['Rational Expressions and Equations'] / (3 * MATHV) * 100)
      ratiosp = 100 - Math.round(skillsM.skills['Ratios, Rates and Proportions'] / (2 * MATHV) * 100)
      scatterp = 100 - Math.round(skillsM.skills['Scatterplots and Graphs'] / MATHV * 100)
      solvingquadp = 100 - Math.round(skillsM.skills['Solving Quadratic Equations'] / (5 * MATHV) * 100)
      statsp = 100 - Math.round(skillsM.skills['Statistics - Shape, Center, Spread'] / (3 * MATHV) * 100)
      systemslinp = 100 - Math.round(skillsM.skills['Systems of Linear Equations'] / (3 * MATHV) * 100)
      systemsquadp = 100 - Math.round(skillsM.skills['Systems of Quadratic and Linear Functions'] / (3 * MATHV) * 100)
      trianglesp = 100 - Math.round(skillsM.skills['Triangles, Lines and Angles'] / (3 * MATHV) * 100)
      trigratiosp = 100 - Math.round(skillsM.skills['Trig. Ratios and Pythagorean Thm.'] / MATHV * 100)
      volumep = 100 - Math.round(skillsM.skills['Volume'] / MATHV * 100)
    }

    const categoryPercentages = {
      readingP: {
        wordsincontextp,
        textstructureandpurposep,
        crosstextp,
        centralideasp,
        commandquantp,
        commandoftextualp,
        formstructurep,
        boundariesp,
        transitionsp,
        inferencesp,
        rhetoricalsynthesisp,
      },
      mathP: {
        onevariablep,
        interpretlinp,
        systemslinp,
        buildinglinp,
        expresscontextp,
        rationalexpressp,
        createquadp,
        systemsquadp,
        algebrexpressp,
        solvingquadp,
        ratiosp,
        linearvsp,
        statsp,
        scatterp,
        trianglesp,
        circlearcsp,
        creatingonep,
        linearinequalp,
        graphinglinearp,
        graphingnonlinearp,
        functionnotationp,
        shapesp,
        trigratiosp,
        volumep,
        rationalexpop
      }
    }
    
    
    return categoryPercentages
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
        case 'Command of Quantitative Evidence':
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
        case 'Creating One-Variable Equations':
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