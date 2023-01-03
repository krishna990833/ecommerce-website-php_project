import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
`;
const Select = styled.select`
padding:10px;

margin-right:20px;


`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title> Dresses</Title>
      <FilterContainer>
        <Filter>
          {" "}
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White </Option>
            <Option>White </Option>

            <Option>Black </Option>
            <Option>Dark </Option>
            <Option>More White </Option>
            <Option>Dark White </Option>
          </Select>
          
          <Select>
            <Option disabled selected>Size</Option>
            <Option>Small </Option>
            <Option>Medium </Option>

            <Option>Large </Option>

          </Select>
        </Filter>
        <Filter>
          {" "}
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>Newest</Option>
            <Option>Price (asc) </Option>
            <Option>Price (desc) </Option>

            <Option>Large </Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
