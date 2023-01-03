import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Desc = styled.div`
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;


const FilterContainer = styled.div`

display:flex;
justify-content: space-between;
width: 50%;
margin:30px 0px ;

`
const Filter = styled.div`
display: flex;
align-items: center;

`


const FilterTitle = styled.span`
font-size:20px;
font-weight:200;

`


const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;


`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;


`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;

`
const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
border:1px solid teal;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    
    background-color: lightgray;
}

`



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0104/0642/products/Homeboy-X-Tra-Loose-Flex-Denim-Moon-Jeans-3_jpg.png?v=1646306934&width=1094" />
        </ImageContainer>
        <InfoContainer>
          <Title>Cool Swag</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            numquam dignissimos sit! Voluptatum deleniti optio voluptas neque
            accusantium non obcaecati impedit, facere temporibus unde earum a,
            nobis assumenda aliquid voluptate.
          </Desc>
          <Price> 200Rs</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="DarkBlue" />
              <FilterColor color="Gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>X Small</FilterSizeOption>
                <FilterSizeOption>X Medium</FilterSizeOption>
                <FilterSizeOption>X Large</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer >
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
