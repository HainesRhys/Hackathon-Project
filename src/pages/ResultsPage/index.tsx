import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FeaturedResults,
  ListResults,
} from "../../__mocks__/mockResultsMock/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCodeFork,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Components/Header/Header.jsx";

type TFeatureItemProps = {
  backgroundImage: string;
};

type TIconItemProps = {
  width: number;
  justifyContent: string;
};

type TListItemProps = {
  backgroundImage: string;
};

type TListButtonProps = {
  backgroundColor: string;
};

const PageContainer = styled.div`
  width: 100vw;
  margin-top: 10vh;
`;

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeatureItemContainer = styled.div<TFeatureItemProps>`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8)
    ),
    ${(props) => `url(${props.backgroundImage}) no-repeat top center`};
  background-size: cover;
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: column-reverse;
  margin: 10px;
  padding: 10px 10px;
`;

const FeatureResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;
const ListResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  flex-drirection: row;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const IconItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const IconItemContainer = styled.div<TIconItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width}%;
`;
const ListItemContainer = styled.div`
  border-bottom: 1px solid lightGrey;
  width: 75vw;
  height: 10vh;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ListImageContainer = styled.div<TListItemProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const ListItemTitle = styled.h2``;

const ListItemTextCintainer = styled.div``;
const ListItemIconCintainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5vw;
  height: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;
const ListItemButton = styled.button<TListButtonProps>`
  width: 100px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const ModalCont = styled(Modal)`
  margin-top: 15vh;
  background-color: white;
  width: 75vw;
  margin-left: 20vh;
  border: 1px solid black ;
`;

const FeatureRecipeItem = ({ item }) => {
  console.log(item)
  return (
    <FeatureItemContainer backgroundImage={item.Img}>
      <IconContainer>
        <IconItemContainer justifyContent="space-around" width={20}>
          <FontAwesomeIcon icon={faClock} style={{ color: "black" }} />
          <IconItem>{item.CookTime}</IconItem>
        </IconItemContainer>
        <IconItemContainer justifyContent="space-around" width={20}>
          <FontAwesomeIcon icon={faCodeFork} style={{ color: "black" }} />
          <IconItem>{item.Servings}</IconItem>
        </IconItemContainer>
        <IconItemContainer justifyContent="space-around" width={15}>
          <FontAwesomeIcon icon={faSterlingSign} style={{ color: "black" }} />
          <IconItem>{item.PricePerServing}</IconItem>
        </IconItemContainer>
      </IconContainer>
      <TextContainer>
        <p style={{ fontSize: "16px" }}>{item.Name}</p>
      </TextContainer>
    </FeatureItemContainer>
  );
};
const ItemModal = ({ modalShow, setModalShow, items }) => {
  console.log(items);
  return (
    <ModalCont isOpen={modalShow}>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Add Items to Backet</h2>
        <div>
          {items.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "5vh",
                  margin: "20px 0px",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    width: "5vh",
                    height: "5vh",
                    border: "1px solid black",
                    borderRadius: "15px",
                    display: "flex",
                    flex: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  image
                </div>
                <p style={{ width: "20vw" }}>{item.name}</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    onClick={() => toast.success("Items added to basket!")}
                  >
                    {" "}
                    Add Item
                  </button>
                  {
                    item.freeWeigth && <p style={{ fontSize: "10px", color: "blue" }}>Use Free Weight</p>
                  }
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: '30vw', marginBottom: '10px' }}>
          <button onClick={() => setModalShow(false)}>Close</button>
          <button onClick={() => toast.success("All items added to basket!")}>
            Add all
          </button>
          <button
            onClick={() =>
              toast.success("All free weight items added to basket!")
            }
          >
            Add all free weight
          </button>
        </div>
      </div>
    </ModalCont>
  );
};

const ListItems = ({ item, testId, setModalShow, setItems }) => {
  const onClick = (item) => {
    setModalShow(true);
    setItems(item.items);
  };

  return (
    <ListItemContainer id={testId}>
      <ListImageContainer backgroundImage={item.Img} />
      <ListItemTextCintainer>
        <ListItemTitle>{item.Name}</ListItemTitle>
      </ListItemTextCintainer>
      <ListItemIconCintainer>
        <IconItemContainer justifyContent="left" width={100}>
          <FontAwesomeIcon icon={faClock} style={{ color: "black" }} />
          <IconItem>{item.CookTime}</IconItem>
        </IconItemContainer>
        <IconItemContainer justifyContent="left" width={100}>
          <FontAwesomeIcon icon={faCodeFork} style={{ color: "black" }} />
          <IconItem>{item.Servings}</IconItem>
        </IconItemContainer>
        <IconItemContainer justifyContent="left" width={100}>
          <FontAwesomeIcon icon={faSterlingSign} style={{ color: "black" }} />
          <IconItem>{item.PricePerServing}</IconItem>
        </IconItemContainer>
      </ListItemIconCintainer>
      <ButtonContainer>
        <ListItemButton backgroundColor="#57A14B" onClick={() => onClick(item)}>
          Add Items To Basket
        </ListItemButton>
        <ListItemButton backgroundColor="white">View Recipe</ListItemButton>
      </ButtonContainer>
    </ListItemContainer>
  );
};

const ResultsPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [items, setItems] = useState([]);
  const [FeaturedItems, setFeaturedItems] = useState([{}])
  const [ListResultItems, setListResultItems] = useState([{}])

  useEffect(() => {
    setFeaturedItems(FeaturedResults)
    setListResultItems(ListResults)
  },[FeaturedItems,ListResultItems])

  return (
    <PageContainer>
      <Header/>
      <ItemModal
        items={items}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
      <FeaturedContainer>
        <h2>Top 3 Recipes</h2>
        <FeatureResultsContainer>
          {FeaturedItems.map((item, index) => {
            return <FeatureRecipeItem key={index} item={item} />;
          })}
        </FeatureResultsContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <h2>Search Results</h2>
        <ListResultsContainer>
          {ListResultItems.map((item, index) => {
            return (
              <ListItems
                item={item}
                setModalShow={setModalShow}
                setItems={setItems}
                testId={index}
              />
            );
          })}
        </ListResultsContainer>
      </FeaturedContainer>
    </PageContainer>
  );
};
export default ResultsPage;
