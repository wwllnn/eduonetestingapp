import font from "./IBMPlexSans-Regular.ttf"
import bold from "./IBMPlexSans-Medium.ttf"
import semibold from "./IBMPlexSans-SemiBold.ttf"

import { Image, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import slogan from "./slogan.png"

//generates a PDF for SAT2023 PT3 results
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    margin: 10,
  },
  categories: {
  },
  row: {
    flexDirection: 'row',
  },
  sectiongrow:{
    flexGrow: 1
  },
  sectionrowdiffbronze:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  },
  sectionrowdiffsilver:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  },
  sectionrowdiffgold:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  }
});

Font.register({
  family: 'IBM Plex Sans-SemiBold',
  src: semibold
})

const TestPrint = ({ info }) => {
  console.log(info)

  return (
    <Document>
    <Page size='A4' style={styles.page}>
    <View style={{margin: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
            </View>

            <View>
              <Text style={{fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.date}</Text>
            </View>
        </View>

        <View style={{marginTop: 10}} >
          <Text style={{fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.studentName}</Text>
          <Text style={{fontFamily: 'IBM Plex Sans-SemiBold'}}>SAT 2023</Text>
        </View>
    </View>

      <View style={{textAlign: 'center', margin: 10, border: '1px solid black'}}>
        <Text style={{backgroundColor: '#2d556b', fontFamily: 'IBM Plex Sans-SemiBold', padding: 5, color: 'white'}}>SAT Insight Scores</Text>
        <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Composite Score</Text>
        <Text style={{fontSize: 20, margin: 5, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.compositeScore}</Text>
      </View>

      <View style={{border: '1px solid black', margin: 10}}>
        <View style={{
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: '#2d556b',
                color: 'white',
                padding: 5,
                fontFamily: 'IBM Plex Sans-SemiBold',
              }}>
          <Text style={{borderRight:'1px solid white', flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>Reading/Writing</Text>
          <Text style={{flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>Math</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', paddingTop: 5}}>
          <Text style={{borderRight:'1px solid black', flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.readingScore}</Text>
          <Text style={{flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.mathScore}</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', padding: 5, marginLeft: 100}}>
          <View style={{flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 12, flexDirection: 'row'}}>
            <Text style={{color: 'maroon', marginLeft: '5px'}}>{info.readingRight}</Text>
            <Text>/54</Text>
          </View>

          <View style={{flex: 1, fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 12, flexDirection: 'row', marginLeft: 110}}>
            <Text style={{color: 'maroon', marginLeft: '5px'}}>{info.mathRight}</Text>
            <Text>/44</Text>
          </View>
        </View>
      </View>

      <View style={{marginLeft: 10, marginTop: 10, marginRight: 10, backgroundColor: 'lightgray'}}>
        <Text style={{fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 13, padding: 5}}>Recommended Hours of Study for Mastery</Text>
      </View>

      <View style={{border: '1px solid black', marginLeft: 10, marginRight: 10}}>
        <View style={{
                display: 'flex', 
                flexDirection: 'row',
                color: 'white'
              }}>
          <View style={{borderRight:'1px solid white', backgroundColor: '#2d556b', flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 13, padding: 5}}>
            <Text> Read/Write RX </Text>
          </View>
          <View style={{borderRight:'1px solid white', backgroundColor: '#2d556b', flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 13, padding: 5}}>
            <Text> Math RX </Text>
          </View>
          <View style={{backgroundColor: '#2d556b', flex: 1, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold', fontSize: 13, padding: 5}}>
            <Text style={{fontFamily: 'IBM Plex Sans-SemiBold'}}> Total Hours </Text>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{borderRight:'1px solid black', flex: 1, textAlign: 'center', padding: 5}}>{info.readingRXadditional}</Text>
          <Text style={{borderRight:'1px solid black', flex: 1, textAlign: 'center', padding: 5}}>{info.mathRXadditional}</Text>
          <Text style={{ flex: 1, textAlign: 'center', padding: 5}}>{info.totalRXadditional}</Text>
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
        </View>
        <View style={{textAlign: 'flex-end'}}>
          <Text style={{fontSize: 14, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.date}</Text>
        </View>
      </View>
      <View style={{border: '1px solid black', marginTop: 10}}>
        <View>
            <View style={{flexGrow: 1, margin: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.studentName}</Text>
              <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>SAT 2023 - Practice Test 3</Text>
            </View>

            <View style={{backgroundColor: 'maroon', color: 'white', marginLeft: 10, marginRight: 10, padding: 5, }}>
              <Text style={{fontSize: 13, marginLeft: 10, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>Reading and Writing</Text>
            </View>
        </View>


      <View style={{margin: '0 10'}}>
        <View style={{marginBottom: 10, border: '1px solid black'}}>
          <View style={{flexDirection: 'row', backgroundColor: 'lightgray', padding: 5}}>
            <Text style={{flexGrow: 1, fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Difficulty Levels</Text>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Mastery</Text>
          </View>
          <View style={styles.sectionrowdiffbronze}>
            <Text style={{flexGrow: 1, fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 1</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.bronzepercentrw}%</Text>
          </View>

          <View style={styles.sectionrowdiffsilver}>
            <Text style={{flexGrow: 1,fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 2</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.silverpercentrw}%</Text>
          </View>

          <View style={styles.sectionrowdiffgold}>
            <Text style={{flexGrow: 1, fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 3</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.goldpercentrw}%</Text>
          </View>
        </View>

        <View style={{backgroundColor: 'maroon', color: 'white', flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Category</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Mastery</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>RX Hours</Text>
          </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray'}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Craft and Structure</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Words in Context</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.wordsincontextp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Words in Context']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Text Structure and Purpose</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.textstructureandpurposep}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Text Structure and Purpose']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Cross-Text Connections</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.crosstextp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Cross-Text Connections']}</Text>
            </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray', marginTop: 5}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Information and Ideas</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Central Ideas and Details</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.centralideasp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Central Ideas and Details']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Using Textual Evidence</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.commandoftextualp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Command of Textual Evidence']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Using Quantitative Evidence</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.commandquantp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Command of Quantitative Evidence']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Inferences</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.inferencesp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Inferences']}</Text>
            </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray', marginTop: 5}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Standard English Conventions</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Boundaries</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.boundariesp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Boundaries']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Form, Structure, and Sense</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.formstructurep}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Form Structure and Sense']}</Text>
            </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray', marginTop: 5}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Expression of Ideas</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Rhetorical Synthesis</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.rhetoricalsynthesisp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Rhetorical Synthesis']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Transitions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.readingP.transitionsp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsRW.skills['Transitions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
            <View style={{flex: 1, borderTop: '1px solid black', borderLeft: '1px solid black', borderBottom: '1px solid black', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}>Total</Text>
            </View>
            <View style={{flex: 1, borderTop: '1px solid black', borderBottom: '1px solid black', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}></Text>
            </View>
            <View style={{flex: 1, borderTop: '1px solid black', borderRight: '1px solid black', borderBottom: '1px solid black', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.readingRXadditional}</Text>
            </View>
        </View>
        
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
        </View>
        <View style={{textAlign: 'flex-end'}}>
          <Text style={{fontSize: 14, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.date}</Text>
        </View>
      </View>
      <View style={{border: '1px solid black', marginTop: 10}}>
        <View>
            <View style={{flexGrow: 1, margin: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.studentName}</Text>
              <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>SAT 2023 - Practice Test 3</Text>
            </View>

            <View style={{backgroundColor: '#005427', color: 'white', marginLeft: 10, marginRight: 10, padding: 5, }}>
              <Text style={{fontSize: 13, marginLeft: 10, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>Math</Text>
            </View>
        </View>


      <View style={{margin: '0 10'}}>

        <View style={{marginBottom: 10, border: '1px solid black'}}>
          <View style={{flexDirection: 'row', backgroundColor: 'lightgray', padding: 5}}>
            <Text style={{flexGrow: 1, fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Difficulty Levels</Text>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Mastery</Text>
          </View>
          <View style={styles.sectionrowdiffbronze}>
            <Text style={{flexGrow: 1, fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 1</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.bronzepercentm}%</Text>
          </View>

          <View style={styles.sectionrowdiffsilver}>
            <Text style={{flexGrow: 1,fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 2</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.silverpercentm}%</Text>
          </View>

          <View style={styles.sectionrowdiffgold}>
            <Text style={{flexGrow: 1, fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Level 3</Text>
            <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.difficultyPercents.goldpercentm}%</Text>
          </View>
        </View>

        <View style={{backgroundColor: '#005427', color: 'white', flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Category</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>Mastery</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'IBM Plex Sans-SemiBold'}}>RX Hours</Text>
          </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray'}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Heart of Algebra</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>One-Variable Equations</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.onevariablep}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['One-Variable Equations']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Interpreting Linear Functions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.interpretlinp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Interpreting Linear Functions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Systems of Linear Equations</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.systemslinp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Systems of Linear Equations']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Building Linear Functions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.buildinglinp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Building Linear Functions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Creating One-Variable Eqns.</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.creatingonep}%</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Creating One-Variable Equations']}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Linear Inequalities</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.linearinequalp}%</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Linear Inequalities']}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Graphing Linear Relationships</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.graphinglinearp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Graphing Linear Relationships']}</Text>
            </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray', marginTop: 5}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Passport to Advanced Math</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Expressions in Context</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.expresscontextp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Expressions and Equations in Context']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Rational Expressions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.rationalexpressp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Rational Expressions and Equations']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Rational Exponents</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.rationalexpop}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Rational Exponents and Radicals']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Graphing Nonlinear Functions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.graphingnonlinearp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Graphing Nonlinear Functions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Creating Exponential Functions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.createquadp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Creating Quadratic and Exponential Functions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Systems of Quad. & Lin. Funcs.</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.systemsquadp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Systems of Quadratic and Linear Functions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Algebraic Expressions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.algebrexpressp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Algebraic Expressions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Function Notation</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.functionnotationp}%</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Function Notation']}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginBottom: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Solving Quadratic Equations</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.solvingquadp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Solving Quadratic Equations']}</Text>
            </View>
        </View>

        
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
        </View>
        <View style={{textAlign: 'flex-end'}}>
          <Text style={{fontSize: 14, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.date}</Text>
        </View>
      </View>

      <View style={{border: '1px solid black', marginTop: 10}}>

      <View style={{flexGrow: 1, margin: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.studentName}</Text>
        <Text style={{fontSize: 15, fontFamily: 'IBM Plex Sans-SemiBold'}}>SAT 2023 - Practice Test 3</Text>
      </View>

      <View style={{backgroundColor: '#005427', color: 'white', marginLeft: 10, marginRight: 10, padding: 5, }}>
        <Text style={{fontSize: 13, marginLeft: 10, textAlign: 'center', fontFamily: 'IBM Plex Sans-SemiBold'}}>Math Continued</Text>
      </View>

      <View style={{padding: 5, backgroundColor: 'lightgray', marginLeft: 10, marginRight: 10}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Problem Solving and Data Analysis</Text>
      </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Ratios, Rates and Proportions</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.ratiosp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Ratios, Rates and Proportions']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Linear vs. Exponential Growth</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.linearvsp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Linear vs. Exponential Growth']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Statistics - Shape, Center, Spread</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.statsp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Statistics - Shape, Center, Spread']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Scatterplots and Graphs</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.scatterp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Scatterplots and Graphs']}</Text>
            </View>
        </View>

        <View style={{padding: 5, backgroundColor: 'lightgray', marginLeft: 10, marginRight: 10, marginTop: 10}}>
          <Text style={{fontSize: 11, fontFamily: 'IBM Plex Sans-SemiBold'}}>Additional Topics</Text>
       </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>2D Shapes</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.shapesp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['2D Shapes']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Triangles, Lines and Angles</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.trianglesp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Triangles, Lines and Angles']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Volume</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.volumep}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Volume']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Trig. Ratios/Pythag. Theorem </Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.trigratiosp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Trig. Ratios and Pythagorean Thm.']}</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Circle Arcs, Angles and Chords</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsPercents.mathP.circlearcsp}%</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.skillsObject.skillsM.skills['Circle Arcs, Angles and Chords']}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Inferences From Reports</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>N/A</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>5</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Unit Conversion</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>N/A</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>5</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Categorical Data</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>N/A</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>5</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px', marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>Circle Equations/Graphing</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>N/A</Text>
          </View>
          <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, fontFamily: 'IBM Plex Sans-SemiBold'}}>5</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <View style={{flex: 1, borderTop: '1px solid black', borderLeft: '1px solid black', borderBottom: '1px solid black', padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}>Total</Text>
          </View>
          <View style={{flex: 1, borderTop: '1px solid black', borderBottom: '1px solid black', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}></Text>
          </View>
          <View style={{flex: 1, borderTop: '1px solid black', borderRight: '1px solid black', borderBottom: '1px solid black', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 13, fontFamily: 'IBM Plex Sans-SemiBold'}}>{info.mathRXadditional}</Text>
          </View>
        </View>

      </View>
    </Page>
    </Document>
  )
}

export default TestPrint