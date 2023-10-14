import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import {ItemSeparatorView, ProfileItemCell} from '../../componants';
import {Color} from '../../constants/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const renderItem = ({item}: any) => {
    return <ProfileItemCell id={item.id} title={item.title} icon={item.icon} />;
  };
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: Color.solidWhite}}>
        <View
          style={{
            backgroundColor: '#17B76014',
            height: 100,
            marginTop: -100,
          }}></View>
      </SafeAreaView>
      <View style={[styles.container]}>
        <AvatarView />
        <FlatList
          data={items}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorView}
          ListFooterComponent={ItemSeparatorView}
          keyExtractor={item => item.id}
        />
      </View>
    </Fragment>
  );
};
const AvatarView = () => {
  return (
    <View
      style={{
        backgroundColor: '#17B76014',
        height: 102,
        borderBottomColor: `${Color.solidGreen}33`,
        borderBottomWidth: 1
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.image}
          />
          <View style={[styles.infoContainer]}>
            <Text style={styles.name}>Monu Rathor</Text>
            <Text style={styles.phone}>+91-910322140</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity style={{marginRight: 16}}>
            <Image
              source={require('../../../assets/images/highlighter.png')}
              style={styles.buttonImage}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const items = [
  {
    id: '1',
    icon: require('../../../assets/images/ic-wallet.png'),
    title: 'Wallet',
  },
  {
    id: '2',
    icon: require('../../../assets/images/ic-phonebook.png'),
    title: 'Address Book',
  },
  {
    id: '3',
    icon: require('../../../assets/images/ic-calendar.png'),
    title: 'Subscription',
  },
  {
    id: '4',
    icon: require('../../../assets/images/ic-bell.png'),
    title: 'Notifications',
  },
  {
    id: '5',
    icon: require('../../../assets/images/ic-invite.png'),
    title: 'Invite a Friend',
  },
  {
    id: '6',
    icon: require('../../../assets/images/ic-info.png'),
    title: 'About Us',
  },
  {
    id: '7',
    icon: require('../../../assets/images/ic-help.png'),
    title: 'Help Centre',
  },
  {
    id: '8',
    icon: require('../../../assets/images/ic-star.png'),
    title: 'Rate us on App Store',
  },
  {
    id: '9',
    icon: require('../../../assets/images/ic-privacy.png'),
    title: 'Account Privacy',
  },
];
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.solidWhite,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: Color.solidGreen,
    borderWidth: 0.5,
    marginTop: 20,
    marginHorizontal: 12,
  },
  infoContainer: {
    marginTop: 24,
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    color: Color.solidGreen,
  },
  phone: {
    fontSize: 14,
    fontWeight: '400',
    color: Color.solidGreen,
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
});
