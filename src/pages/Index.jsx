import React, { useState } from "react";
import { Box, Button, Container, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, Stack, Text, Textarea, VStack, Link, Image, useToast } from "@chakra-ui/react";
import { FaPaypal, FaPencilAlt, FaEnvelope, FaPlus, FaDonate } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (message.trim() === "") {
      toast({
        title: "Message cannot be empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8} align="stretch">
        {/* Blog Header */}
        <Box>
          <Heading as="h1" size="2xl">
            Personal Blog
          </Heading>
          <Text mt={2}>Welcome to my personal blog where you can support me and stay updated!</Text>
        </Box>

        {/* Messaging Feature */}
        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading as="h3" size="lg" mb={3}>
            Leave a Message
          </Heading>
          <VStack>
            {messages.map((msg, index) => (
              <Box key={index} p={3} bg="white" w="full" borderRadius="md">
                <Text>{msg}</Text>
              </Box>
            ))}
          </VStack>
          <FormControl id="message" mt={4}>
            <FormLabel>Write your message here</FormLabel>
            <Flex>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." />
              <IconButton colorScheme="blue" aria-label="Send message" icon={<FaPlus />} ml={2} onClick={handleSendMessage} />
            </Flex>
          </FormControl>
        </Box>

        {/* Support Me Section */}
        <Box>
          <Heading as="h3" size="lg" mb={3}>
            Support Me
          </Heading>
          <Flex alignItems="center">
            <Button leftIcon={<FaDonate />} colorScheme="green" mr={3}>
              Donate with PayPal
            </Button>
            <Button leftIcon={<FaPencilAlt />} variant="outline">
              Become a Patron
            </Button>
          </Flex>
        </Box>

        {/* Opportunities for Non-Adults */}
        <Box>
          <Heading as="h3" size="lg" mb={3}>
            Opportunities for Non-Adults
          </Heading>
          <Text>Here you can find all the ways to earn money without ID verification, deposits, investments, and easy money strategies.</Text>
          <Image src="https://images.unsplash.com/photo-1502920514313-52581002a659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25leSUyMG1ha2luZyUyMG9wcG9ydHVuaXRpZXN8ZW58MHx8fHwxNzA4NjM2ODg0fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} borderRadius="md" />
        </Box>

        {/* Updates and Advertisements */}
        <Box>
          <Heading as="h3" size="lg" mb={3}>
            Updates & Advertisements
          </Heading>
          <Text>Stay tuned for updates and check out these amazing opportunities!</Text>
          {/* Placeholder for advertisements */}
          <Stack mt={4} spacing={3}>
            <Box p={4} bg="gray.200" borderRadius="md">
              <Text>Ad Space 1</Text>
            </Box>
            <Box p={4} bg="gray.200" borderRadius="md">
              <Text>Ad Space 2</Text>
            </Box>
          </Stack>
        </Box>

        {/* Contacts and Footer */}
        <Divider my={6} />
        <Flex justify="space-between" align="center">
          <Stack direction="row" spacing={4}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} />
            {/* Add more contact icons if needed */}
          </Stack>
          <Text>© {new Date().getFullYear()} Personal Blog. All rights reserved.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
