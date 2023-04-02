import "./ProductDetail.css";
import {
  Flex,
  Box,
  Image,
  Center,
  Tag,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  ListItem,
  Input,
  Button,
  useToast,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { addToCart } from "../Redux/cartReducer/action";

export const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [mainImage, setMainImage] = useState("");
  const product = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const toast = useToast();

  // console.log(product);
  // console.log(id);
  useEffect(() => {
    const val = product.find((el) => el.id === +id);
    setData(val);
  }, []);
  // console.log(data.image1);

  const handleSubImage = (val) => {
    // console.log(val)
    setMainImage(val);
  };
  const handleHover = (val) => {
    // console.log(val)
    setMainImage(val);
  };

  const handleCart = (data) => {
    dispatch(addToCart(data));

    toast({
      position: "top",
      title: "Item Added.",
      description: "You can check your item in cart section.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box mt="9%">
      <Flex
        w={"85%"}
        m="auto"
        my="2%"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        p=".5rem"
        borderRadius={"10px"}
      >
        <Box w="10%" mt="1rem">
          <Center>
            <Image
              _hover={pdih}
              className="smallSubImage"
              src={data.image1}
              onClick={() => handleSubImage(data.image1)}
              onMouseOver={() => handleHover(data.image1)}
            />
          </Center>
          <Center>
            <Image
              _hover={pdih}
              className="smallSubImage"
              src={data.image2}
              onClick={() => handleSubImage(data.image2)}
              onMouseOver={() => handleHover(data.image2)}
            />
          </Center>
          <Center>
            <Image
              _hover={pdih}
              className="smallSubImage"
              src={data.image3}
              onClick={() => handleSubImage(data.image3)}
              onMouseOver={() => handleHover(data.image3)}
            />
          </Center>
        </Box>

        <Box w="30%">
          <Center>
            <Image
              className="mainBigImage"
              src={mainImage ? mainImage : data.image1}
            />
          </Center>
        </Box>

        <Box
          w="60%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          p="1rem"
          mb="1rem"
        >
          <Flex justifyContent={"space-between"} borderRadius={"5px"}>
            <Text fontSize={"xl"} color="black.200" bg="white">
              {data.title}
            </Text>
            <Link
              mr="2rem"
              href="https://github.com/ankush3681/noisy-mailbox-2939"
              isExternal
            >
              <AiOutlineShareAlt fontSize="30px" />
              Share
            </Link>
          </Flex>

          <Tag p=".2rem" bg="white" border="0.5px solid #E11299">
            <AiFillStar margin="10px" color="red" />
            <Tag ml="5px" bg="white">
              {data.rating} (1792)
            </Tag>
          </Tag>

          <Flex mt="1rem" alignItems={"baseline"}>
            <Text bg="white">Rs.{data.price}</Text>
            <Tag
              fontSize={"10px"}
              borderRadius={"5px"}
              ml="1rem"
              bg="green.600"
              color={"white"}
            >
              FREE SHIPING
            </Tag>
            <Text fontSize={"xx-small"} ml=".2rem">
              (T&C applicable)
            </Text>
          </Flex>

          <Box>
            <Button
              _hover={{ bg: "#E11299" }}
              w="30%"
              bg="#E11299"
              color="white"
              mt="1rem"
              p="1.5rem 5rem"
              onClick={() => handleCart(data)}
            >
              Add to Cart
            </Button>
          </Box>

          <Box mt="1rem">
            <Input placeholder="Enter Pincode" w="20%" />
            <Button
              _hover={{ bg: "#E11299" }}
              bg="#E11299"
              color="white"
              p="2px 1.5rem"
              ml="1rem"
              mb="5px"
            >
              Check
            </Button>
          </Box>

          <Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      DESCRIPTION
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>Make dreamy, natural-looking skin a reality!</Text>

                  <Box mt="2rem">
                    If you are looking for a foundation that not just looks but
                    also feels like second skin, look no further than the SUGAR
                    Ace Of Face Foundation Stick. It will instantly become the
                    hero of your makeup stash and let you slay
                    #flawlessskingoals every time!
                  </Box>

                  <Box mt="2rem">
                    A multi-purpose makeup tool featuring a long-wear formula
                    and provides full-coverage in a single stroke, this
                    foundation stick can also be used to highlight and contour.
                    This fuss-free, easy to use creamy foundation effortlessly
                    melts into your skin to create a gorgeous base that hides
                    blemishes, dark spots and dark circles. It also conceals
                    discoloration, gives a natural base and stays put for up to
                    12 hours. Making on-the-go touch-ups even simpler is the
                    built-in brush that features soft bristles to ensure the
                    formula is evenly distributed and blended well.
                  </Box>

                  <Box mt="2rem">
                    Benefits: Easy to use foundation stick that can double up as
                    a concealer and contour stick Lightweight, creamy texture
                    that ensures effortless blending Offers full-coverage and
                    stays up to 12 hours Covers imperfections without caking and
                    creasing On-the-go stick applicator allows for optimal
                    precision to create perfectly sculpted look The handy
                    built-in brush allows blending with ease and ensures quick
                    touch-ups on-the-go Available in 22 shades to match every
                    skin tone Cruelty-free, 100% vegetarian; Free from mineral
                    oil, parabens and paraffin Dermatologically-tested and
                    approved; 100% safe for your skin Net Weight: 12gms
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      HOW TO APPLY
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>
                      After prepping the skin, lightly apply across the
                      forehead, cheeks, nose and chin
                    </ListItem>
                    <ListItem>
                      Blend with fingertips, sponge, or the foundation brush
                    </ListItem>
                    <ListItem>Build coverage as desired</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      INGREDIENTS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text fontWeight={"bold"} mt="1rem">
                    100% vegetarian and cruelty-free
                  </Text>

                  <Text mt="1rem">
                    Iron Oxide Yellow (CI 77492), Phenyl Trimethicone, Titanium
                    Dioxide (CI 77891), Caprylic/Capric Triglyceride, C12-15
                    Alkyl Ethylhexanoate, Ethylhexyl Methoxycinnamate, Iron
                    Oxide Red (CI 77491), Methyl Methacrylate Crosspolymer,
                    Polyethylene, Ceresin, Euphorbia Cerifera (Candelilla) Wax,
                    Pentylene Glycol, Polyglyceryl-2 Triisostearate,
                    VP/Hexadecene Copolymer, Iron Oxide Black (CI 77499),
                    Ozokerite, Talc, Mica(CI 77019), Silica, Lauryl
                    Peg/Ppg-18/18 Methicone, Microcrystalline Wax,
                    Phenoxyethanol, Triethoxycaprylylsilane, Aluminum Hydroxide,
                    Caprylyl Glycol, 1,2-Hexanediol, Macadamia Seed Oil
                    Polyglyceryl-6 Esters Behenate, Ethylhexylglycerin, Lauryl
                    Laurate, Propanediol, Dimethicone, Isostearyl Alcohol,
                    Illicium Verum (Anise) Fruit Extract, Methicone, BHT.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      COMMONLY ASKED QUESTIONS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box mt="1rem">
                    <Text fontWeight={"bold"}>
                      Q. How many shades does this {data.category} come in?
                    </Text>
                    <Text>
                      A. With over 22 shades to choose from, this long-wear{" "}
                      {data.category} is great for any skin tone!
                    </Text>
                  </Box>
                  <Box mt="1rem">
                    <Text fontWeight={"bold"}>
                      Q. What is the coverage like?
                    </Text>
                    <Text>
                      A. This multi-tasking stick {data.category} comes with a
                      blendable matte finish and gives good coverage. The
                      buildable, high coverage formula ensures a non-cakey
                      flawless base that stays for up to 12 hours.
                    </Text>
                  </Box>
                  <Box mt="1rem">
                    <Text fontWeight={"bold"}>
                      Q. Can I use this {data.category} as a contour stick?
                    </Text>
                    <Text>
                      A. The lightweight texture of this stick {data.category}{" "}
                      makes it perfect for applying contour atop {data.category}
                      . In fact the darker shades are perfect for bronzing and
                      the lighter shades (pick 1 or 2 shades lighter than your
                      skin tone) work great for highlighting.
                    </Text>
                  </Box>
                  <Box mt="1rem">
                    <Text fontWeight={"bold"}>
                      Q. How can I make my {data.category} last longer?
                    </Text>
                    <Text>
                      A. To perfect your makeup base, always start with
                      hydrating your skin using a good moisturizer and prepping
                      your skin well using a pore minimizing face primer. One
                      quick tip to make your {data.category} last longer is
                      either using a blending brush or a damp beauty blender to
                      blend in the product well for a natural finish. For more
                      tips and tricks to make your {data.category} last longer,
                      read our article here.
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Flex>

      <Flex w="100%" bg="white" h="12%" pos="fixed" bottom="0" zIndex={1000}>
        <Flex w="50%" textAlign={"center"}>
          <Flex
            w="50%"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
            pb=".rem"
            flexDirection={"row-reverse"}
            _hover={{ cursor: "pointer",color:"#e81aa0" }}
          >
            <Image
              w="20%"
              h="100%"
              p="2px .5rem 2px .5rem"
              borderRight={"5px"}
              // _hover={{ cursor: "pointer" }}
              borderRadius={"5px"}
              src={mainImage ? mainImage : data.image1}
            />
          </Flex>

          <Box w="60%">
            <Text noOfLines={1} fontWeight={"medium"}>
              {data.title}
            </Text>
            <Heading>Rs.{data.price}</Heading>
          </Box>
        </Flex>

        <Flex w="50%" alignItems={"center"} pl={"2rem"}>
          <Button _hover={{ background: "#E11299" }} p="1rem 5rem" bg="#E11299"  onClick={()=>handleCart(data)}>
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

const pdih = { cursor: "pointer", border: "1px solid #E11299" };
