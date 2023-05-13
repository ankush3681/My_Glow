import "./Sidebar.css";
import {
  Box,
  Heading,
  Img,
  Button,
  Text,
  Spinner,
  Center,
  Input,
  Checkbox,
  Tag,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchparam, setSearchparam] = useSearchParams();
  const initialCategory = searchparam.getAll("category");
  const initialBrand = searchparam.getAll("brand");
  const initialOrder = searchparam.get("order");

  const [category, setCategory] = useState(initialCategory || []);
  const [brand, setBrand] = useState(initialBrand || []);
  const [order, setOrder] = useState(initialOrder  || "");

  const handleCategory = (e) => {
    let newCategory = [...category];

    const value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => {
        return el !== value;
      });
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);

    // console.log(category);
  };

  const handleBrand = (e) => {
    let newBrand = [...brand];

    const value = e.target.value;

    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => {
        return el !== value;
      });
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);

    //  console.log(brand);
  };



  const handleSortingPrice = (e) => {
    // console.log(e.target.value);
    setOrder(e.target.value);
  };

 

  useEffect(() => {
    let params = {
      category,
      brand,
    };
    order && (params.order = order);

    setSearchparam(params);
  }, [category, brand,order]);

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      width={"20%"}
      h="100%"
      py="5rem"
      borderRadius={"5px"}
    >
      <Box>
        <Center fontSize={"2xl"}>Filters</Center>
        <Accordion allowMultiple>
          {/* defaultIndex={[0]} */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}> Categories</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text _hover={p1} className="category">
                <input
                  type="checkbox"
                  value="lipstick"
                  onChange={handleCategory}
                  checked={category.includes("lipstick")}
                />{" "}
                Lipstick
              </Text>
              <Text _hover={p1} className="category">
                <input
                  type="checkbox"
                  value="kajal"
                  onChange={handleCategory}
                  checked={category.includes("kajal")}
                />{" "}
                Kajal
              </Text>
              <Text _hover={p1} className="category">
                <input
                  type="checkbox"
                  value="serum"
                  onChange={handleCategory}
                  checked={category.includes("serum")}
                />{" "}
                Serum
              </Text>
              <Text _hover={p1} className="category">
                <input
                  type="checkbox"
                  value="foundation"
                  onChange={handleCategory}
                  checked={category.includes("foundation")}
                />{" "}
                Foundation
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Brand</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text _hover={p1} className="brand">
                <input
                  type="checkbox"
                  value="lakme"
                  onChange={handleBrand}
                  checked={brand.includes("lakme")}
                />{" "}
                Lakme
              </Text>
              <Text _hover={p1} className="brand">
                <input
                  type="checkbox"
                  value="sugar"
                  onChange={handleBrand}
                  checked={brand.includes("sugar")}
                />{" "}
                Sugar
              </Text>
              <Text _hover={p1} className="brand">
                <input
                  type="checkbox"
                  value="mamaearth"
                  onChange={handleBrand}
                  checked={brand.includes("mamaearth")}
                />{" "}
                Mamaearth
              </Text>
              <Text _hover={p1} className="brand">
                <input
                  type="checkbox"
                  value="goodvibes"
                  onChange={handleBrand}
                  checked={brand.includes("goodvibes")}
                />{" "}
                Goodvibes
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Discount</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text _hover={p1} className="discount">
                <input type="checkbox" value="below10"  /> below 10%
              </Text>
              <Text _hover={p1} className="discount">
                <input type="checkbox" value="20-30"  /> 20-30%
              </Text>
              <Text _hover={p1} className="discount">
                <input type="checkbox" value="30-40"  /> 30-40%
              </Text>
              <Text _hover={p1} className="discount">
                <input type="checkbox" value="above40"  /> 40% above
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Customer Rating</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text _hover={p1} className="rating">
                <input type="checkbox" /> 4
                <Tag bg="white">
                  <AiTwotoneStar color="red" />
                </Tag>
                & above
              </Text>
              <Text _hover={p1} className="rating">
                <input type="checkbox" /> 3
                <Tag bg="white">
                  <AiTwotoneStar color="red" />
                </Tag>
                & above
              </Text>
              <Text _hover={p1} className="rating">
                <input type="checkbox" /> 2
                <Tag bg="white">
                  <AiTwotoneStar color="red" />
                </Tag>
                & above
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box>
        <Center fontSize={"2xl"} mt={"3rem"} mb="1rem">
          Sort By
        </Center>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Price</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} onChange={handleSortingPrice}>
              <Text _hover={p1} className="priceSorting">
                <input type="radio" name="order" value="" defaultChecked={order===""}/> None
              </Text>
              <Text _hover={p1} className="priceSorting">
                <input type="radio" name="order" value="asc" defaultChecked={order==="asc"}/> Low To High
              </Text>
              <Text _hover={p1} className="priceSorting">
                <input type="radio" name="order" value="desc" defaultChecked={order==="desc"}/> High To Low
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
      </Box>
    </Box>
  );
};

export default Sidebar;

const p1 = { cursor: "pointer", color: "red" };
