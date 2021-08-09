import React from 'react';

import {
  View,
  Text,
  FlatList,
  ScrollView
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function RecipeDetails(){
  return (
    <View>
      <ScrollView>
        <Header
          titleHeader="Detalhes da receita"
        />
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>Ingredientes</Text>
            <FlatList
            nestedScrollEnabled={true}
              data={[
                {key: 'Feijão preto'},
                {key: 'Calabresa'},
                {key: 'Bacon'},
                {key: 'Carne de Sol'},
                {key: 'Laranja'},
                {key: 'Joelho de porco'},
                {key: 'Panceta'},
                {key: 'Couve'}
              ]}
              renderItem={({item})=> <Text style={styles.text}>{item.key}</Text>}
            />
          </View>  
          <View style={styles.section}>
          <Text style={styles.title}>Modo de preparo</Text>
          <FlatList
          nestedScrollEnabled={true}
              data={[
                {key: '1. Faça o feijão em fogo baixo'},
                {key: '2. Frite a calabresa e o bacon'},
                {key: '3. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '4. Coloque laranja para suavizar o sabor'},
                {key: '5. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '6. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '7. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '8. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '9. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '10. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '11. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '12. Dessalgue a carne seca e depois ha faça na panela'},
                {key: '13. Dessalgue a carne seca e depois ha faça na panela'},
                  
              ]}
              renderItem={({item})=> <Text style={styles.text}>{item.key}</Text>}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}