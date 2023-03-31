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
import { AiTwotoneStar } from "react-icons/ai";

const Sidebar = () => {
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
        <Text fontSize={"2xl"}>Filters</Text>
        <Accordion defaultIndex={[0]} allowMultiple>

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
                <input type="checkbox" /> All Products
              </Text>
              <Text _hover={p1} className="category">
                <input type="checkbox" /> Lipstick
              </Text>
              <Text _hover={p1} className="category">
                <input type="checkbox" /> Kajal
              </Text>
              <Text _hover={p1} className="category">
                <input type="checkbox" /> Serum
              </Text>
              <Text _hover={p1} className="category">
                <input type="checkbox" /> Foundation
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
                <input type="checkbox" /> Lakme
              </Text>
              <Text _hover={p1} className="brand">
                <input type="checkbox" /> Sugar
              </Text>
              <Text _hover={p1} className="brand">
                <input type="checkbox" /> Mamaearth
              </Text>
              <Text _hover={p1} className="brand">
                <input type="checkbox" /> Goodvibes
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Price</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text _hover={p1} className="price">
                <input type="checkbox" /> Below 500
              </Text>
              <Text _hover={p1} className="price">
                <input type="checkbox" /> 500-1000
              </Text>
              <Text _hover={p1} className="price">
                <input type="checkbox" /> 1000-2000
              </Text>
              <Text _hover={p1} className="price">
                <input type="checkbox" /> Above 2000
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
        <Text fontSize={"2xl"} mt={"3rem"} mb="1rem">Sort By</Text>
        <Accordion defaultIndex={[0]} allowMultiple>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Price</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup defaultValue="1">
                <Stack spacing={4} direction="column">
                  <Radio value="1">None</Radio>
                  <Radio value="2">Low To High</Radio>
                  <Radio value="3">High To Low</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[0]} allowMultiple>
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
              <RadioGroup defaultValue="1">
                <Stack spacing={4} direction="column">
                  <Radio value="1">None</Radio>
                  <Radio value="2">Low To High</Radio>
                  <Radio value="3">High To Low</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}>Rating</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup defaultValue="1">
                <Stack spacing={4} direction="column">
                  <Radio value="1">None</Radio>
                  <Radio value="2">Low To High</Radio>
                  <Radio value="3">High To Low</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Sidebar;

const p1 = { cursor: "pointer", color: "red" };


