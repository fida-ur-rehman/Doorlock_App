import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon } from '@ui-kitten/components';

const ViewPagerSimpleUsageShowcase = ({navigation}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const StarIcon = () => (
    <Icon name='person-add'  style={styles.icon}   fill='white'/>
  );

  return (
    <ViewPager
    style={{flex:1, justifyContent: 'center', alignItems: 'center' }}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Layout
        style={styles.tab}
        level='2'>
                   <Icon
    style={styles.icon2}
    fill='#f05454'
    name='lock'
   
  />
        <Text category='h1' style={{fontWeight:'bold',textAlign:'center',color:'black',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    }}>WELCOME TO DOOR LOCK</Text>
      <Text style={{color:'silver'}}>Swipe Left</Text>
  
  

      </Layout>
      
      <Layout
        style={styles.tab}
        level='2'>
        <Text  category='h3' style={{fontWeight:'bold',textAlign:'center',color:'black',
     textShadowColor: 'rgba(0, 0, 0, 0.3)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10}}>HOW IT WORKS <Text  category='h1' style={{fontWeight:'bold',textAlign:'center',color:'#f05454'}}>?</Text></Text>
        <Text style={{color:'grey',textAlign:'center'}}>
        This App will automatically scan a face, then it will evaluate the image if the person is from your known
        list then the App will permit him/her in else the App will reject the person
        </Text>
        <Text style={{color:'silver'}}>Swipe Left</Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
            <Text  category='h3' style={{fontWeight:'bold',textAlign:'center',color:'black',
         textShadowColor: 'rgba(0, 0, 0, 0.3)',
         textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10}}>CLICK THE BUTTON BELOW TO REGISTER</Text>
        <Button style={styles.button} status='danger' accessoryLeft={StarIcon} onPress={()=>navigation.navigate("Register")}>Register</Button>

      </Layout>
      
    </ViewPager>
  );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 12,
      },
    view:{
          height:10,
            width:10,
            backgroundColor:'red',
            borderRadius:30,
    },
    icon: {
        width: 22,
        height: 22,
      },
      icon2: {
        width: 62,
        height: 62,
      },
  tab: {
    backgroundColor:'white',
    height: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewPagerSimpleUsageShowcase;