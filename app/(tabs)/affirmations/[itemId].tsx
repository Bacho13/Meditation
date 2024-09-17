import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

const AffirmationPractice = () => {
    const {itemId} = useLocalSearchParams();

    const [affirmation,setAffirmation] = useState<GalleryPreviewData>()
    
    useEffect(()=>{
        for(let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data

            const affirmationToStart = affirmationData.find((a) => a.id === Number(itemId));
  
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                return
            }

        }
        
    }, [])

  return (
    <View className='flex-1 bg-slate-700 justify-center'>
      <Text className='text-center justify-center text-red-200 text-4xl'>{itemId}</Text>
    </View>
  )
}

export default AffirmationPractice