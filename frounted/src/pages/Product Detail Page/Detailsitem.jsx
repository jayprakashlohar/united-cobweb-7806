import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ADD } from "../../Redux/Card Reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const B3 = styled.button`
  background-color: #ffce00;

  :hover {
    background-color: yellowgreen;
  }
`;
const B4 = styled.button`
  background-color: blue;

  :hover {
    background-color: red;
  }
`;

const Detailsitem = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(carts));
  }, [carts]);
  console.log(data);

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        `https://bestbuy-backend.onrender.com/products/${id}`
      );
      console.log(data);
      setData(data.data);
    }
    getData();
  }, []);

  //Aman
  // const dispatch = useDispatch();
  // const carts = useSelector((state)=>state.cartreducer.carts);

  // const send = (e)=> {
  //    console.log(e)
  //     dispatch(ADD(e));
  // }

  // const{id} = useParams()

  // const[data,setdata] = useState({})

  return (
    <>
      <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
        <div>
          <h1 style={{ fontWeight: "400", textAlign: "left" }}>{data.title}</h1>
          <div
            style={{
              display: "flex",
              textAlign: "left",
              marginTop: "0.3%",
              gap: "2%",
            }}
          >
            <div>No reviews yet. Be the first!</div>
            <div>Model Number: TC-390-EB12</div>
            <div>Web Code: 15938628</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2%",
            borderTop: "1px solid #e7ecf3",
          }}
        >
          <div style={{ width: "70%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3%",
                marginBottom: "3%",

                height: "500px",
              }}
            >
              <img src={data.imgUrl} alt="" />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "60%", textAlign: "left" }}>
                <h2 style={{ fontWeight: "600", lineHeight: "20px" }}>
                  Overview
                </h2>
                <div>
                  <p
                    style={{
                      fontWeight: "600",
                      lineHeight: "20px",
                      marginTop: "2%",
                    }}
                  >
                    This is a Geek Squad Certified Open Box Product. See below
                    for more information.
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "400",
                      textAlign: "justify",
                      lineHeight: "20px",
                      marginTop: "2%",
                    }}
                  >
                    Complete your computing tasks smoothly and quickly with this
                    Acer Aspire TC desktop PC. Equipped with an AMD R3-3200G
                    processor and 8GB of DDR4 RAM, this machine is powerful
                    enough to efficiently deal with your everyday multitasking
                    needs. Its 1TB hard drive capacity provides ample storage
                    space for your documents, music, photos, and more.
                  </p>
                </div>
              </div>

              <div style={{ width: "40%", padding: "20px" }}>
                <div
                  style={{
                    backgroundImage:
                      "url('https://www.bestbuy.ca/client/blue-shirt-chat-background.jpg')",
                    width: "100%",
                    height: "180px",
                    backgroundSize: "cover",
                    backgroundPositionX: "right",
                    borderRadius: "4%",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "20px",
                      width: "66%",
                      textAlign: "left",
                      padding: "2%",
                    }}
                  >
                    Have a product question?
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "20px",
                      width: "66%",
                      textAlign: "left",
                      padding: "2%",
                    }}
                  >
                    Live chat with a Blue Shirt for expert advice.
                  </div>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "20px",
                      width: "66%",
                      textAlign: "left",
                      padding: "2%",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        display: "inline-block",
                        textAlign: "center",
                        marginTop: "3%",
                      }}
                    ></div>
                    <div style={{ marginLeft: "5%" }}> Chat is unavailable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                textAlign: "left",
                marginLeft: "2%",
                margintTop: "2%",
                color: "#bb0628",
              }}
            >
              ${data.price}
            </div>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                marginTop: "2%",
                marginLeft: "2%",
              }}
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://i.pinimg.com/originals/ab/ed/26/abed265cd5f621820ce2457d1abc7391.png"
                alt=""
              />
              <div
                style={{
                  textAlign: "left",
                  marginTop: "1%",
                  fontWeight: "600",
                  marginLeft: "1%",
                  fontSize: "18px",
                }}
              >
                3 Special Offers Available
              </div>
            </div>
            <div
              style={{
                marginLeft: "15%",
                textAlign: "left",
                marginTop: "3%",
                lineHeight: "25px",
              }}
            >
              {" "}
              <ul>
                <li style={{ fontWeight: "600" }}>
                  Save 20% on select ASUS gaming accessories when you buy select
                  laptops and desktops.*
                </li>
              </ul>
            </div>
            <div
              style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "blue",
                textAlign: "left",
                marginTop: "2%",
                marginLeft: "3%",
                marginTop: "3%",
              }}
            >
              <a href=""> Show More Offers</a>
              <img
                style={{
                  width: "12px",
                  height: "12px",
                  marginLeft: "1%",
                  paddingTop: "1%",
                }}
                src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
                alt=""
              />
            </div>
            <div style={{ backgroundColor: "#f4f6f9", height: "510px" }}>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  marginTop: "2%",
                  backgroundColor: "#f4f6f9",
                }}
              >
                <B3
                  style={{
                    width: "60%",
                    height: "40px",
                    outline: "none",
                    border: "none",
                    marginLeft: "20%",
                    marginTop: "10%",
                  }}
                  onClick={() => {
                    send(data);
                  }}
                >
                  Add To Cart
                </B3>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
              >
                <B4
                  style={{
                    width: "60%",
                    height: "40px",
                    outline: "none",
                    border: "none",
                    marginLeft: "20%",
                  }}
                >
                  Pick Up at Store
                </B4>
              </div>
              <div
                style={{
                  display: "flex",
                  fontWeight: "600",
                  textAlign: "left",
                  marginTop: "5%",
                }}
              >
                <p style={{ marginTop: "3%" }}>Sold and shipped by Best Buy</p>
              </div>
              <div
                style={{
                  display: "flex",
                  fontWeight: "600",
                  textAlign: "left",
                  marginTop: "2%",
                }}
              >
                <img
                  style={{ width: "50px", height: "30px", marginLeft: "3%" }}
                  src="https://www.pngkey.com/png/full/40-406692_font-truck-comments-truck-icon-png-free.png"
                  alt=""
                />
                <p style={{ marginTop: "1%", marginLeft: "3%" }}>
                  Available for backorder
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #e7ecf3",
                  width: "100%",
                  textAlign: "left",
                  marginTop: "2%",
                  display: "flex",
                }}
              >
                <div style={{ width: "24%", marginTop: "3%" }}>
                  <img
                    style={{ width: "30px", height: "30px", marginLeft: "20%" }}
                    src="https://cdn0.iconfinder.com/data/icons/mono2/100/not-allowed-512.png"
                    alt=""
                  />
                </div>
                <div style={{ width: "100%", marginTop: "2%" }}>
                  <p style={{ fontWeight: "600" }}>Not available for pickup:</p>
                  <p
                    style={{
                      fontSize: "16px",
                      marginTop: "3%",
                      marginRight: "9%",
                      textAlign: "justify",
                    }}
                  >
                    This product is currently not available for pickup at nearby
                    stores.
                  </p>

                  <div style={{ display: "flex", marginTop: "2%" }}>
                    <div style={{ display: "flex", marginTop: "3%" }}>
                      <input
                        style={{ width: "150%", height: "36px" }}
                        type="text"
                      />
                      <button
                        style={{
                          width: "80%",
                          height: "40px",
                          backgroundColor: "#0046be",
                        }}
                      >
                        Search
                      </button>
                    </div>
                    <div
                      style={{
                        marginTop: "3%",
                        marginLeft: "5%",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#0046be",
                      }}
                    >
                      <BiCurrentLocation
                        style={{
                          width: "30px",
                          height: "30px",
                          marginTop: "15%",
                          marginLeft: "15%",
                        }}
                        color="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsitem;
