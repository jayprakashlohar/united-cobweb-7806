import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../../styles/Navbar.css";

function SmallNavbar() {
  return (
    <Box>
      <Box className="SmallNav_items">
        <Menu>
          <MenuButton
            bg="#0046BE"
            color="white"
            _hover={{ bg: "#0046BE", color: "white" }}
            _active={{ bg: "#0046BE", color: "white" }}
            fontSize={["10px", "11px", "12px", "13px", "14px", "14px"]}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Holiday Deals
          </MenuButton>
          <MenuList color="#0046BE" bg="#fff">
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Black Friday deals Right Now
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Gift Ideas
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Laptop Guide 2022
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Explore Holiday Inspirations
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Holiday FAQs
            </MenuItem>
          </MenuList>
        </Menu>
        <Link className="link" to="/topDeal">
          Top deals
        </Link>
        <Link className="link" to="/dealOfTheDay">
          Deal of the Day
        </Link>
        <Link className="link">Totaltech Membership</Link>
        <Link className="link" to="/giftCards">
          Gift Cards
        </Link>
        <Menu>
          <MenuButton
            bg="#0046BE"
            color="white"
            fontSize={["10px", "11px", "12px", "13px", "14px", "14px"]}
            _hover={{ bg: "#0046BE", color: "white" }}
            _active={{ bg: "#0046BE", color: "white" }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            More
          </MenuButton>
          <MenuList color="#0046BE" bg="#fff">
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Gift Cards
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Gift Ideas
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Laptops & Pc's
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              Donate to St. Jude
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              TechHub Outlet
            </MenuItem>
            <MenuItem
              p="14px 12px"
              borderBottom="1px solid rgb(160, 160, 160)"
              _hover={{ textDecoration: "underline black" }}
            >
              TechHub Business
            </MenuItem>
          </MenuList>
        </Menu>
        <Box className="hide">
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={["10px", "11px", "12px", "13px", "14px", "14px"]}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Recently Viewed
            </MenuButton>
            <MenuList color="#0046BE" bg="#fff">
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={["10px", "11px", "12px", "13px", "14px", "14px"]}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Order Status
            </MenuButton>
            <MenuList color="#0046BE" bg="#fff">
              <MenuItem
                p="14px 12px"
                color="white"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>

              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              bg="#0046BE"
              color="white"
              fontSize={["10px", "11px", "12px", "13px", "14px", "14px"]}
              _hover={{ bg: "#0046BE", color: "white" }}
              _active={{ bg: "#0046BE", color: "white" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Saved Items
            </MenuButton>
            <MenuList color="#0046BE" bg="#fff">
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Download
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Create a Copy
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Mark as Draft
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Delete
              </MenuItem>
              <MenuItem
                p="14px 12px"
                borderBottom="1px solid rgb(160, 160, 160)"
                _hover={{ textDecoration: "underline black" }}
              >
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default SmallNavbar;
