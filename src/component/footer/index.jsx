import React from 'react'
import {
	FooterContainer,
	FooterSection,
	FooterTitle,
	SocialIcons,
	SocialIcon,
	ContactInfo,
	Copyright,
	FooterSections,
} from './styled'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'

export const MyFooter = () => {
	return (
		<FooterContainer>
			<FooterSections>

				<FooterSection>
					<FooterTitle>Follow Us</FooterTitle>
					<SocialIcons>
						<SocialIcon
							href='https://www.instagram.com/eyess_brand?utm_source=ig_web_button_share_sheet&igsh=dDBoMml5Z2ZqZGF0'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram  style={{fontSize:'35px'}}/>
						</SocialIcon>
						<SocialIcon
							href='mailto:info@shop.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							
						<p className="p" href="mailto:youremail.gmail con">
							<FaEnvelope  style={{fontSize:'35px'}}/>
						</p>
						</SocialIcon>
					</SocialIcons>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Contact</FooterTitle>
					<ContactInfo>
						<a className="p" href="mailto:youremail.gmail con">
							<p>Email: eyess.brand@gmail.com</p>
						</a>
						
						<a className="p" href="tel:+37412345678">
							<p>Product: +374 98 91 41 09</p>
						</a>
					</ContactInfo>
				</FooterSection>

			</FooterSections>

			<Copyright>
				© {new Date().getFullYear()} EYES BRAND. All rights reserved.
			</Copyright>
		</FooterContainer>
	)
}


