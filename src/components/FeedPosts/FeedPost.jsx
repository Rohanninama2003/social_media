import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
			
			<Box border={"3px solid"} borderColor={"whiteAlpha.800"} background={"#bac7c4"} borderRadius={"2xl"} padding={"3"} mb={5} color={"white"}>
			<PostHeader post={post} creatorProfile={userProfile} />
			<Box my={2} borderRadius={10} overflow={"hidden"}>
				<Image src={post.imageURL} alt={"FEED POST IMG"} />
			</Box>
			<PostFooter post={post} creatorProfile={userProfile} />
		</Box>
	);
};

export default FeedPost;
