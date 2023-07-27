import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetCheckoutId, makePurchase } from '../utils/hooks';

type Props = {}

const AnimalDetail = ({ isOpen, onClose, productData }) => {      
    const [isLoading, setIsLoading] = useState(false)
    const [checkoutId] = useGetCheckoutId()
    const {images, imageAlt, title, description, variants} = productData; 
    const {  id:variantId } = variants[0];
    const quantity = 1;
    const varientData = [{
        variantId: variantId,
         quantity: quantity
    }] 
    const { src } = images[0];
    const onClick = async () => {
        setIsLoading(true)
        await makePurchase(checkoutId,varientData)
        setIsLoading(false)
    }
    return (
          <>      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <Image objectFit="cover" src={src} alt={imageAlt} />

                <ModalBody>
                    {description}
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    {"Close"}
                  </Button>
                  <Button isLoading={isLoading} variant='ghost' onClick={onClick}>{"Purchase"}</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>  )
}

export default AnimalDetail