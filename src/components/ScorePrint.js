import { Image, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

const ScorePrint = ({testinfo}) => {

  return(
    <Document>
      <Page size='A4' style={{padding: 40}}>
        <View style={{margin: 10}}>
          <Text >{testinfo.id}</Text>
          <Text >{testinfo.DisplayName}</Text>
          <Text >{testinfo.date}</Text>
          <Text >{testinfo.userEmail}</Text>


          <Text >HELLo</Text>
        </View>
      </Page>
    </Document>
  )
}

export default ScorePrint