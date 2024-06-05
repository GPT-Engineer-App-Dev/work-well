import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardBody, CardHeader, Button } from "@chakra-ui/react";

const jobListings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled software engineer to join our team.",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    description: "Seeking an experienced product manager to lead our product team.",
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "A creative UX designer needed for our remote team.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
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