// import axios from "axios";

// export default class ProductService {
//   getProducts() {
//     return axios.get("https://github.com/ArinSoftware/my-movies/blob/master/src/api/movies.json");
  
// }
// }

// import ProductList from '../pages/ProductList'


import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Icon, Menu, Table } from "semantic-ui-react";



export default function ProductService() {

    const[deneme, setDeneme] = useState([])
    
    useEffect(()=>{
        getProduct()
    }, [])

    const getProduct = async ()=>{
       const response= await axios.get("https://raw.githubusercontent.com/ArinSoftware/my-movies/master/src/api/movies.json")
    setDeneme(response.data)
    }

    // function getProducts(){
    //     axios.get("https://raw.githubusercontent.com/ArinSoftware/my-movies/master/src/api/movies.json")
    // }

  return (
    <>
    <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı </Table.HeaderCell>
        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Kategori</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        
      {deneme.map(deneme => (
        <Table.Row key={deneme.id}>
          <Table.Cell>deneme.name</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          

        </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </>
  )
}
