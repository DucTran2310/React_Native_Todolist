import { Text, View } from 'react-native'
import Container from '../components/Container'
import RowComponent from '../components/RowComponent'
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import TitleComponent from '../components/TitleComponent'
import { globalStyles } from '../styles/globalStyles'
import CardComponent from '../components/CardComponent'
import { Element4, Notification, SearchNormal } from 'iconsax-react-native'
import { colors } from '../constants/colors'
import SpaceComponent from '../components/SpaceComponent'
import TagComponent from '../components/TagComponent'
import CircularComponent from '../components/CircularComponent'

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify='space-between'>
          <Element4 size={24} color={colors.desc}/>
          <Notification size={24} color={colors.desc}/>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='Hi, AdStar' />
        <TitleComponent text='Be Productive today' />
      </SectionComponent> 
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => { console.log('VVV') }}
        >
          <TextComponent color='#696B6F' text='Search Task' />
          <SearchNormal size={20} color={colors.desc}/>
        </RowComponent>
      </SectionComponent> 
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}> 
              <TitleComponent text='Task progress'/>
              <TextComponent text='30/40 tasks done'/>
 
              <SpaceComponent height={12}/>
              <RowComponent justify='flex-start'>
                <TagComponent text='March 23' onPress={() => console.log('HELLO')}/>
              </RowComponent>
            </View>
            <View>
              <CircularComponent value={80}/>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  )
}

export default HomeScreen
