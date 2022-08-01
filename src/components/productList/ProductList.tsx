/**
 * @file Proudct List Component
 * @author Kenny Yen
 */
import { useContext } from "react";
import Styled from "styled-components";
import AppContext from "../../context/store";
import Product, { productType } from "./Product";
import CONSTANTS from "../../util/Constants";

// constants
const { PRODUCTLIST_HEADER, STYLES } = CONSTANTS;

/**
 * sortByVotes - reorder the produdct list with votes
 * @param a productType previous product
 * @param b productType current product
 * @returns new productType Array
 */
const sortByVotes = (a: productType, b: productType) => b.votes - a.votes;

const ProductList = () => {
  const { state } = useContext<any>(AppContext);
  const { productList } = state;

  return (
    <>
      <ProductListHeader>{PRODUCTLIST_HEADER}</ProductListHeader>
      <ProductListContainer>
        {[...productList].sort(sortByVotes).map((product: productType) => {
          return <Product key={product.id} {...product} />;
        })}
      </ProductListContainer>
    </>
  );
};
// Styling
const ProductListContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 1rem;
    row-gap: 1rem;
`;
const ProductListHeader = Styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${STYLES.LIGHT_GREY};
  margin: 1rem;
  padding-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;
export default ProductList;
