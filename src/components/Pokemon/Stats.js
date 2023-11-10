import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { StyleSheet, View, Text } from 'react-native'

export default function Stats(props) {
  const { stats } = props;

  const [animations] = useState(stats.map(() => new Animated.Value(0)));
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => '0'));

  useEffect(() => {
    const listeners = [];

    animations.forEach((animation, index) => {
      const listener = animation.addListener(({ value }) => setAnimatedNumbers(prev => {
        const copy = [...prev];
        copy[index] = Math.floor(value).toString();
        return copy;
      }));

      listeners.push(listener);

      Animated.timing(animation, {
        toValue: stats[index].base_stat,
        duration: 1000,
        useNativeDriver: false, // Change this line back to false
        easing: Easing.out(Easing.quad),
      }).start();
    });

    return () => {
      animations.forEach((animation, index) => {
        animation.removeListener(listeners[index]);
      });
    };
  }, []);

  const barStyles = (num, index) => {
    return {
      flex: animations[index].interpolate({
        inputRange: [0, stats[index].base_stat],
        outputRange: [0, num / 100],
      }),
      backgroundColor:  num > 100 ? '#0b87c9' :
                        num > 79  ? '#00AC17' :
                        num > 59  ? '#FFD300' :
                        num > 39  ? '#FF9D00' :
                        num > 19  ? '#FF3E3E' :
                                    '#9B51E0',
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Animated.Text style={styles.number}>{animatedNumbers[index]}</Animated.Text>
            <View style={[styles.bgBar, { flexDirection: 'row' }]}>
              <Animated.View style={[styles.bar, barStyles(item.base_stat, index)]} />
            </View>
          </View>
        </View>
      ))}
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
  number: {
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
