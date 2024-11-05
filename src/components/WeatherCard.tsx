import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const WeatherCard: React.FC = ({ date, minTemp, maxTemp, pressure, humidity }) => {
  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 600;

  return (
    <View style={[styles.card, isMobile && styles.mobileCard]}>
      <Text style={styles.date}>Date: {date}</Text>
      <View style={styles.row}>
        <Text style={[styles.label, styles.fullWidthLabel]}>Temperature</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Min</Text>
        <Text style={styles.label}>Max</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{minTemp}°C</Text>
        <Text style={styles.value}>{maxTemp}°C</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Pressure</Text>
        <Text style={styles.value}>{pressure} hPa</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>{humidity}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '18%',
    minWidth: 240,
    backgroundColor: '#ffcc80',
    margin: 5,
  },
  mobileCard: {
    width: '100%',
  },
  date: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#f57c00',
    textAlign: 'center',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#424242',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
  },
  fullWidthLabel: {
    width: '100%',
  },
  value: {
    fontSize: 14,
    color: '#424242',
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
  },
});

export default WeatherCard;
