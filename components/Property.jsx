import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/defaultImage.jpg';

const Property = ({ property : { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }}) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' w='420px' paddingTop='0' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='sc' style = {{objectFit: "cover", borderRadius: "25px"}}/>
                <Box w='full'>
                    <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                            <Text fontSize='lg' fontWeight='bold'>₹ {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.500'>
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize='lg'>
                    {title.length > 30 ? `${title.substring(0,30)}...` : title }
                    </Text>
                    <Flex paddingBottom={6}></Flex>
                </Box>
            </Box>

        </Flex>
    </Link>
);

export default Property;



