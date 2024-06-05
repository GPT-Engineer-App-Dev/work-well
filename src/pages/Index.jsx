import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardBody, CardHeader, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = ({ jobListings }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setApplicantName("");
    setApplicantEmail("");
    setCoverLetter("");
    setSelectedJob(null);
  };

  const handleApply = (e) => {
    e.preventDefault();
    // Implement the logic to handle the job application submission
    console.log("Applying for job:", selectedJob);
    console.log("Applicant Name:", applicantName);
    console.log("Applicant Email:", applicantEmail);
    console.log("Cover Letter:", coverLetter);
    closeModal();
  };

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
                <Button mt={4} colorScheme="teal" onClick={() => openModal(job)}>
                  Apply Now
                </Button>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply for {selectedJob?.title}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleApply}>
            <ModalBody>
              <FormControl id="applicantName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
              </FormControl>
              <FormControl id="applicantEmail" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
              </FormControl>
              <FormControl id="coverLetter" isRequired>
                <FormLabel>Cover Letter</FormLabel>
                <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} type="submit">
                Submit Application
              </Button>
              <Button variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;