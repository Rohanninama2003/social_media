import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2}  >
          <FeedPosts />
        </Box>
        

     
          <Box
            flex={1}
            
            display={{ base: "none", lg: "block" }}
            

            mb={1}
            borderRadius={"xl"}
            borderColor={"whiteAlpha.300"}
            borderTop={"3px solid"}
            mr={20}
            maxW={"300px"}
          >
            
            <SuggestedUsers />
          </Box>
        </Flex>
  
    </Container>
  );
};

export default HomePage;
