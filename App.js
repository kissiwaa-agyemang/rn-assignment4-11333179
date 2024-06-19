import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log("Name entered: ", name);
    console.log("Email entered: ", email);

    if (name && email) {
      navigation.navigate('Home', { userName: name, userEmail: email });
    } else {
      Alert.alert('Invalid Credentials', 'Please enter both name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>

      <View style={styles.greetingContainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Welcome back</Text>
          <Image source={require('./assets/wave.png')} style={styles.wave} />
        </View>
        <Text style={styles.subGreeting}>Let's log in. Apply to jobs!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/apple.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/google.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/facebook.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text>Haven't an account? <Text style={styles.link}>Register</Text></Text>
      </View>

      <StatusBar style="auto" />
      
    </View>
  );
}

function HomeScreen({ route }) {
  const { userName, userEmail } = route.params;

  const [searchText, setSearchText] = useState('');

  // const featuredJobs = [
  //   { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('./assets/facebook.png'), backgroundColor: '#E0F7FA' },
  //   { title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'New York, USA', logo: require('./assets/google.png'), backgroundColor: '#E1BEE7' },
  //   { title: 'UI/UX Designer', company: 'Apple', salary: '$140,000', location: 'California, USA', logo: require('./assets/apple.png'), backgroundColor: '#FFEBEE' },
  //   { title: 'Data Scientist', company: 'Microsoft', salary: '$150,000', location: 'Seattle, USA', logo: require('./assets/microsoft.jpeg'), backgroundColor: '#E8F5E9' },
  //   { title: 'Frontend Developer', company: 'Amazon', salary: '$130,000', location: 'Austin, USA', logo: require('./assets/amazon.png'), backgroundColor: '#FFF3E0' },
  //   { title: 'Backend Developer', company: 'Netflix', salary: '$170,000', location: 'Los Angeles, USA', logo: require('./assets/netflix.png'), backgroundColor: '#F3E5F5' },
  //   { title: 'DevOps Engineer', company: 'Spotify', salary: '$145,000', location: 'Boston, USA', logo: require('./assets/spotify.png'), backgroundColor: '#E8EAF6' },
  //   { title: 'Marketing Manager', company: 'LinkedIn', salary: '$125,000', location: 'Chicago, USA', logo: require('./assets/linkedin.png'), backgroundColor: '#E0F2F1' },
  // ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('./assets/burgerKing.png') },
    { title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('./assets/beats.png') },
    { title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('./assets/facebook.png') },
    { title: 'Frontend Developer', company: 'Google', salary: '$100,000/y', location: 'Mountain View, US', logo: require('./assets/google.png') },
    { title: 'UX Designer', company: 'Apple', salary: '$95,000/y', location: 'Cupertino, US', logo: require('./assets/apple.png') },
    { title: 'Data Scientist', company: 'Microsoft', salary: '$110,000/y', location: 'Redmond, US', logo: require('./assets/microsoft.jpeg') },
    { title: 'Software Engineer', company: 'Amazon', salary: '$105,000/y', location: 'Seattle, US', logo: require('./assets/amazon.png') },
    { title: 'UI Developer', company: 'Spotify', salary: '$98,000/y', location: 'Stockholm, Sweden', logo: require('./assets/spotify.png') },
    { title: 'Backend Developer', company: 'Netflix', salary: '$102,000/y', location: 'Los Gatos, US', logo: require('./assets/netflix.png') },
    { title: 'HR Manager', company: 'LinkedIn', salary: '$88,000/y', location: 'Sunnyvale, US', logo: require('./assets/linkedin.png') },
   
  ];

  return (
    <View style={styles.homeContainer}>
      <View style={styles.mainCont}>
        <View style={styles.textContainer}>
          <Text style={styles.vpn}>{userName}</Text>
          <Text style={styles.email}>{userEmail}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('./assets/Ellipse.png')} style={styles.profile} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image source={require('./assets/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity style={styles.searchSettings}>
          <Image source={require('./assets/settings.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.seeAll}>
        <Text style={styles.featuredJobsText}>Featured Jobs</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
      <View style={styles.face} >
      
        <View style={styles.gool }>
        <Image source={require('./assets/facebook.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$180,000</Text>
          <Text>Accra, Ghana</Text>
        </View>
       </View>

       </View>
       <View style={styles.ace} >
       <Image source={require('./assets/bri.jpg')} style={styles.log}
      
      />
        <View style={styles.gool }>
        <Image source={require('./assets/google.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$160,000</Text>
          <Text>New York, USA</Text>
        </View>
       </View>

       </View>
       <View style={styles.case} >
        <View style={styles.gool }>
        <Image source={require('./assets/apple.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$140,000</Text>
          <Text>Califonia, USA</Text>
        </View>
       </View>

       </View>
       
       <View style={styles.face} >
        
        <View style={styles.gool }>
        <Image source={require('./assets/microsoft.jpeg')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$150,000</Text>
          <Text>Seattle, USA</Text>
        </View>
       </View>
       

       </View>
       <View style={styles.ace} >
        <View style={styles.gool }>
        <Image source={require('./assets/amazon.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$130,000</Text>
          <Text>Austin, USA</Text>
        </View>
       </View>

       </View>
       <View style={styles.case} >
        <View style={styles.gool }>
        <Image source={require('./assets/spotify.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$170,000</Text>
          <Text>Los Angeles, USA</Text>
        </View>
       </View>

       </View>
       <View style={styles.face} >
        <View style={styles.gool }>
        <Image source={require('./assets/netflix.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$145,000</Text>
          <Text>Boston, USA</Text>
        </View>
       </View>

       </View>
       <View style={styles.ace} >
        <View></View>
        <View style={styles.gool }>
        <Image source={require('./assets/linkedin.png')} style={styles.log} />
        </View>
       <View style={styles.new} >
        <Text>Software engineer</Text>
        <Text> Facebook</Text>
        <View style={styles.amount} >
          <Text style={styles.cent}>$125,000</Text>
          <Text>Chicago, USA</Text>
        </View>
       </View>

       </View>
      </ScrollView>
        
      <View style={styles.seeSome}>
        <Text style={styles.popularJobsText}>Popular Jobs</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.popularJobsScroll}>
        {popularJobs.map((job, index) => (
          <View key={index} style={styles.popularJobCard}>
            <View style={styles.popularity}>
            <Image source={job.logo} style={styles.popularJobLogo} />
          </View>
           
            <View style={styles.popularJobDetails}>
              <View style={styles.separate}>
              <Text style={styles.popularJobTitle}>{job.title}</Text>
              <Text style={styles.popularJobCompany}>{job.company}</Text>
              </View>
              
              <View style={styles.popularJobMeta}>
                <Text style={styles.popularJobSalary}>{job.salary}</Text>
                <Text style={styles.popularJobLocation}>{job.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#356899',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  greetingContainer: {
    alignItems: 'flex-start',
    marginBottom: 40,
    width: '100%',
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  wave: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  subGreeting: {
    fontSize: 18,
    color: '#888',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#356899',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,

  },
  logo: {
    width: 24,
    height: 24,
  },
  register: {
    marginTop: 10,
  },
  link: {
    color: '#356899',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  mainCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  textContainer: {
    flexDirection: 'column',
  },
  vpn: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  email: {
    color: '#888',
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  profile: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  searchSettings: {
    marginLeft: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  seeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  featuredJobsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#356899',
  },
  categoriesScroll: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  jobCard: {
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  jobLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  jobDetails: {
    flexDirection: 'column',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobLocation: {
    fontSize: 14,
    color: '#888',
  },
  popularJobsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularJobsScroll: {
    flex: 1,
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  popularJobLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginTop: 10,
  },
  popularJobDetails: {
    flexDirection: 'row',
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  popularJobCompany: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  popularJobSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  popularJobLocation: {
    fontSize: 14,
    color: '#888',
  },
  face:{
    flexDirection: 'row',
    backgroundColor: 'yellow',
    padding: 30,
    alignContent: 'center',
    
    height: 200,
    width: 330,
    borderRadius: 24,
    marginRight: 20,
    marginBottom: 0,
  
  },


  
  gool:{
    backgroundColor:'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 10,
  
   
    
  },
  amount:{
    marginTop:95,
    flexDirection:'row',
    justifyContent: 'center',
   marginRight:80,
   marginLeft: 10,
  },
  cent:{
    marginRight: 60,
    marginLeft: 1,
  
   
  },
  log:{
    marginLeft:10,
    width: 24,
    height: 24,
    borderRadius:10,
    
  },
  separate:{
    marginRight: 30,
  },
  popularity:{
    width: 70,
    height: 80,
    marginRight: 20,
  },
  seeSome:{
    marginTop: 0,
  },
  ace:{

    flexDirection: 'row',
    backgroundColor: '#F08080',
    padding: 30,
    alignContent: 'center',
    
    height: 200,
    width: 330,
    borderRadius: 24,
    marginRight: 20,
  },
  case:{
    flexDirection: 'row',
    backgroundColor: '#87CEEB',
    padding: 30,
    alignContent: 'center',
    
    height: 200,
    width: 330,
    borderRadius: 24,
    marginRight: 20,

  },
  
});
