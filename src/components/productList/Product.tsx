/**
 * @file Product component
 * @author Kenny Yen
 */
import { useContext } from "react";
import Styled from "styled-components";
import actions from "../../context/actions";
import AppContext from "../../context/store";
import CONSTANTS from "../../util/Constants";
// constants
const { PUBLIC_URL, ARROW_ICON_URL, SUBMITTED_BY, STYLES } = CONSTANTS;
const { GREY, DARK_GREY, LIGHT_BLUE } = STYLES;
export type productType = {
  id: number; // Unique product ID
  title: string;
  description: string;
  url: string; // The URL is where the ‘title’ element points to.
  votes: number; // This function is provided for you in seed.js.
  submitterAvatarUrl: string; // Appears on the right of
  // ‘Submitted by:’
  productImageUrl: string; // Appears on the left side
};

const Product = ({
  id,
  title,
  description,
  url,
  votes,
  submitterAvatarUrl,
  productImageUrl,
}: productType) => {
  const { state, dispatch } = useContext<any>(AppContext);
  const { productList } = state;

  /**
   * handleVotesClick - Handle vote button click
   * @param id {number} the id of the product with vote increment
   */
  const handleVotesClick = (id: number): void => {
    dispatch(
      actions.setProductList(
        productList.map((product: productType) => {
          return product.id === id
            ? { ...product, votes: product.votes + 1 }
            : product;
        })
      )
    );
  };
  return (
    <ProductContainer>
      <ProductImage
        src={`${PUBLIC_URL}${productImageUrl}`}
        alt={`Product ${id} Image`}
      />
      <ProductEntryContainer>
        <ProductVotesContainer>
          <ProductVotesIcon
            onClick={() => handleVotesClick(id)}
            src={`${PUBLIC_URL}${ARROW_ICON_URL}`}
            alt="Votes Icon"
          />
          <ProductVotesCounts>{votes}</ProductVotesCounts>
        </ProductVotesContainer>
        <ProductTitle href={url}>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductSubmitContainer>
          <ProductSubmitDescription>{SUBMITTED_BY}</ProductSubmitDescription>
          <ProductSubmitAvatar
            src={`${PUBLIC_URL}${submitterAvatarUrl}`}
            alt={`Avatar ${id} Image`}
          />
        </ProductSubmitContainer>
      </ProductEntryContainer>
    </ProductContainer>
  );
};

// Styling
const ProductContainer = Styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  height: 200px;
  font-weight: 500;
`;
const ProductEntryContainer = Styled.div``;
const ProductVotesContainer = Styled.div`
  display: flex;
  align-items: flex-start;
`;
const ProductVotesIcon = Styled.img`
  height: 50px;
  filter: invert(47%) sepia(31%) saturate(912%) hue-rotate(168deg) brightness(96%) contrast(97%);
`;
const ProductVotesCounts = Styled.div`
  font-weight: 550;
  font-size: 1.6rem;
`;
const ProductDescription = Styled.div`
  color: ${DARK_GREY};
`;
const ProductTitle = Styled.a`
  text-decoration: none;
  color: ${LIGHT_BLUE};
`;
const ProductImage = Styled.img`
  cursor: pointer;
  height: 80%;
`;
const ProductSubmitContainer = Styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
const ProductSubmitDescription = Styled.div`
  height: 35px;
  border-radius: 50%;
  color: ${GREY};
  display: flex;
  align-items: center;
`;
const ProductSubmitAvatar = Styled.img`
  height: 35px;
  border-radius: 50%;
`;
export default Product;
