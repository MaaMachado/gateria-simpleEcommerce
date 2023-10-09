import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const menu = require("./assets/menu.png");
const carrinho = require("./assets/comprar.png");
const localizacao = require("./assets/localizacao.png");
const imgGato = require("./assets/gatoanimact.png");

const WelcomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.header}>
      <View style={styles.barraS}>
        <TouchableOpacity onPress={() => alert('Acesso ao Menu (ainda não foi criado).')}>
        <Image source={menu} style={styles.menu} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Acesso ao Carrinho de Compras (ainda não foi criado).')}>
        <Image source={carrinho} style={styles.carro} />
        </TouchableOpacity>
      </View>

      <View style={styles.apresentacao}>
      <View style={styles.introApre}>
        <View style={styles.contApre}>
          <Image source={localizacao} style={styles.local} />
          <Text>Vila Mariana - SP</Text>
        </View>

        <Text style={styles.vindo}>Seja bem-vindo ao Cat Café</Text>
        <Text style={styles.nome}>GATERIA</Text>

        <TouchableOpacity onPress={() => alert('Link para https://gateriacatcafe.com.br/')}>
          <Text style={styles.linkMais}>Saiba mais ➯ </Text>
        </TouchableOpacity>
      </View>
      <Image source={imgGato} style={styles.animGato} />
      </View>
      
      <View style={styles.galCategorias}>
        <Text style={styles.ttCt}>Categoria</Text>
        <View style={styles.iconesCat}>
          
          {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => handleCategoryPress(category)}>
              <View style={styles.amploIcon}>
                
                <View style={styles.espIcon}>
                  <Image source={getImageSource(category)} style={styles.icones} />
                </View>
                <Text>{category}</Text>
              </View>
            </TouchableOpacity>
          ))}

        </View>
      </View>


      
      <View style={styles.produtos}>
        <Text style={styles.ttProd}>Mais populares</Text>
        
        {produtos.map((produto, index) => (
          <View key={index} style={styles.galProd}> 
            <View style={styles.prod}>
            <Image source={produto.imagem} style={styles.imgProd} />
            <View>
              <Text style={styles.nomeProd}>{produto.nome}</Text>
              <Text style={styles.descProd}>{produto.descricao}</Text>
            </View>
            <Text style={styles.precoProd}>{produto.preco}</Text>
          </View>
        </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },

  barraS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F3ECEA',
  },

  menu: {
    width: 30,
    height: 30,
  },

  carro: {
    width: 30,
    height: 30,
  },

  apresentacao: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },

  introApre: {
    display: 'flex',
    marginTop: 20,
    paddingHorizontal: 16,
  },

  contApre: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  local: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  vindo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 13,
  },

  linkMais: {
    color: '#442F32',
    marginBottom: 16,
  },

  animGato: {
    width: 130,
    height: '100%',
    borderRadius: 10,
    resizeMode: "cover",
    marginTop: 15,
    marginBottom: 10,
  },

  galCategorias: {
    padding: 16,
    backgroundColor: '#F3ECEA',
    marginTop: 15,
  },

  ttCt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  iconesCat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  amploIcon: {
    alignItems: 'center',
  },

  espIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icones: {
    width: 24,
    height: 24,
  },

  icon1: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  produtos: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  ttProd: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  galProd: {
    marginBottom: 16,
    backgroundColor: "#F3ECEA",
    padding: 10,
  },

  prod: {
    flexDirection: 'row',
  },

  imgProd: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 8,
    resizeMode: 'contain',
  },

  nomeProd: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 18,
  },

  descProd: {
    width: 220,
    fontSize: 12,
  },

  precoProd: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginTop: 15,
  }

});

const categories: Array<'Bolos' | 'Cafés' | 'Biscoitos' | 'Sanduíches' | 'Bebidas'> = ['Bolos', 'Cafés', 'Biscoitos', 'Sanduíches', 'Bebidas'];

const handleCategoryPress = (category: typeof categories[number]) => {
  alert(`Categoria ${category} selecionada!`);
};

const getImageSource = (category: typeof categories[number]) => {
  switch (category) {
    case 'Bolos':
      return require('./assets/bolo.png');
    case 'Cafés':
      return require('./assets/cafe.png');
    case 'Biscoitos':
      return require('./assets/biscoitos.png');
    case 'Sanduíches':
      return require('./assets/sanduiche.png');
    case 'Bebidas':
      return require('./assets/milkshake.png');
    default:
      return require('./assets/logoGateria.png');
  }
};

const produtos = [
  {
    nome: "Café Corações Rosa",
    descricao: "Café normal com espuma de leite vaporizado de rosa. Acompanhado de dois corações de marshmallow.",
    preco: "R$ 15,90",
    imagem: require("./assets/produto1.png"),
  },
  {
    nome: "Sanduíche Gato",
    descricao: "Sanduíche misto com formato de gato.",
    preco: "R$ 12,90",
    imagem: require("./assets/produto2.png"),
  },
  {
    nome: "Cappuccino Felino",
    descricao: "Cappuccino normal e acompanhado de um especial biscoito felino.",
    preco: "R$ 14,90",
    imagem: require("./assets/produto3.png"),
  },
  {
    nome: "Torta Fresca de Morango",
    descricao: "Torta holandesa com massa de biscoitos e cobertura de calda de morango.",
    preco: "R$ 17,90",
    imagem: require("./assets/produto4.png"),
  },
  {
    nome: "Batidos gelados - 5 Sabores",
    descricao: "Batida de milkshake com 5 opções de sabores para escolher: Baunilha, Chocolate, Morango, Café e Latte.",
    preco: "R$ 17,90",
    imagem: require("./assets/produto5.png"),
  },
  {
    nome: "Biscoito Felino",
    descricao: "Biscoitos especiais da casa.",
    preco: "R$ 09,90",
    imagem: require("./assets/produto6.png"),
  },
];


export default WelcomeScreen;