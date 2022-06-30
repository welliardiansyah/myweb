import React from 'react';
import { CardSingle } from '../Card/CardSingle';
import { MainCenter, MainTextHeaderSmall, MainSubTextSmall  } from './InfoSections.elements';
import { Container } from '../../globalStyles';
import { CardContainerLarge } from './InfoSections.elements';
import { 
  InfoSecs, 
  InfoRow, 
  InfoColumn, 
} from './InfoSection.element';

const WhitepaperSection = ({
    lightBg, 
    imgStart
  }) => {
  return (
    <>
    <InfoSecs lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    
                    
                </InfoColumn>
            </InfoRow>   
        </Container>
    </InfoSecs>
    </>
  )
}

export default WhitepaperSection
