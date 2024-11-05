import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import { WeatherApiResp } from '../interface/weather.interface';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherApiResp[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchWeather = async () => {
    setLoading(true);
    setError(false);
    setWeatherData([]);
    try {
      const apiKey = '1635890035cbba097fd5c26c8ea672a1';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const filteredData = response.data.list.filter((_, index) => index % 8 === 0);
      setWeatherData(filteredData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in your city</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Search" onPress={fetchWeather} color="#f57c00"/>
        {loading && <ActivityIndicator size="small" color="#f57c00" style={styles.loader} />}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.weatherContainer}>
          {error ? (
            <Text style={styles.errorText}>No weather info found</Text>
          ) : weatherData.length > 0 ? (
            weatherData.map((data: WeatherApiResp, index: number) => (
              <WeatherCard
                key={index}
                date={new Date(data.dt * 1000).toLocaleDateString()}
                minTemp={data.main.temp_min}
                maxTemp={data.main.temp_max}
                pressure={data.main.pressure}
                humidity={data.main.humidity}
              />
            ))
          ) : (
            !loading && <Text style={styles.placeholderText}>Enter a city to get the weather forecast</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#f57c00',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  loader: {
    marginLeft: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Weather;
