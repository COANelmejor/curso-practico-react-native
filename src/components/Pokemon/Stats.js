import { StyleSheet, View, Text } from 'react-native'

export default function Stats(props) {

  const { stats } = props;
  const barStyles = (num) => {
    return {
      backgroundColor:  num > 100 ? '#0b87c9' : 
                        num > 79  ? '#00AC17' : 
                        num > 59  ? '#FFD300' : 
                        num > 39  ? '#FF9D00' : 
                        num > 19  ? '#FF3E3E' : 
                                    '#9B51E0',
      width: `${num}%`,
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => {
        return (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{item.stat.name}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(item.base_stat) ]} />
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
    // justifyContent: 'space-between'
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: '#6B6B6B'
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number :{
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#DEDEDE',
    width: '88%',
    height: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    // backgroundColor: '#FF0000',
    // width: '50%',
    height: 10,
    borderRadius: 20,
  }
})
