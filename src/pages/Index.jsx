import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardBody, CardHeader, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = ({ jobListings }) => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <Button as={Link} to="/post-job" colorScheme="teal" size="lg">
          Post a Job
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {jobListings.map((job, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading as="h2" size="md">
                  {job.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {job.company} - {job.location}
                </Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
                <Button mt={4} colorScheme="teal">
                  Apply Now
                </Button>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;